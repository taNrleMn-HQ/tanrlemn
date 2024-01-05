// local components
import Product from './product';

// metadata
export async function generateMetadata({ params }) {
  const slug = params.slug;

  const res = await fetch(
    `https://tanrlemn.xyz/api/supabase/getProducts/${slug}`
  );
  const data = await res.json();
  const product = data.product;

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      id: product.slug,
      url: `https://tanrlemn.xyz/shop/${product.slug}`,
      title: product.title,
      description: product.description,
      type: 'website',
      images: [product.image_url, ...product.additional_images],
    },
  };
}

export default async function ProductPage({ params }) {
  const slug = params.slug;
  const res = await fetch(
    `https://tanrlemn.xyz/api/supabase/getProducts/${slug}`
  );
  const data = await res.json();
  const product = data.product;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.image_url,
    productID: product.slug,
    url: `https://tanrlemn.xyz/shop/${product.slug}`,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: product.on_sale ? product.sale_price : product.price,
      availability: product.available_for_sale ? 'InStock' : 'OutOfStock',
      condition: 'New',
    },
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Product slug={slug} />
    </>
  );
}
