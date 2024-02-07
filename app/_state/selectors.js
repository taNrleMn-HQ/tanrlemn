// Define a selector to derive a simplified user profile
import { selector, selectorFamily } from 'recoil';
import { profileState, cartState, productsState } from './atoms';

// auth selectors
export const userProfileSelector = selector({
  key: 'userProfileSelector',
  get: ({ get }) => {
    const profile = get(profileState);
    return profile ? { name: profile.full_name, email: profile.email } : null;
  },
});

// ecommerce selectors

export const cartItemsSelector = selector({
  key: 'cartItemsState',
  get: ({ get }) => {
    const cart = get(cartState);

    try {
      const numCartItems = cart.reduce(
        (total, item) => total + item.options.qty,
        0
      );

      const cartTotal = {
        subtotal: cart.reduce(
          (total, item) =>
            item.on_sale
              ? total + item.options.qty * item.sale_price
              : total + item.options.qty * item.price,
          0
        ),
        shipping: 0,
        tax: 0,
        total: cart.reduce(
          (total, item) =>
            item.on_sale
              ? total + item.options.qty * item.sale_price
              : total + item.options.qty * item.price,
          0
        ),
      };

      return { cart, numCartItems, cartTotal };
    } catch (error) {
      console.error(error);

      localStorage.removeItem('cart');

      return {
        cart: [],
        numCartItems: 0,
        cartTotal: { subtotal: 0, shipping: 0, tax: 0, total: 0 },
      };
    }
  },
});

export const enrichedProductsSelector = selector({
  key: 'enrichedProductsSelector',
  get: ({ get }) => {
    const products = get(productsState);

    if (!products) {
      return null;
    }

    const enrichedProducts = Promise.all(
      products.map(async (product) => {
        const res = await fetch(`/api/stripe/prices/${product.default_price}`);

        const { unit_amount } = await res.json();
        const price = unit_amount / 100;

        return {
          product,
          id: product.id,
          name: product.name,
          description: product.description,
          price_id: product.default_price,
          price: price,
          additional_images: product.metadata.additional_images
            ? product.metadata.additional_images
                .split(',')
                .map((img) => img.trim())
            : null,
          main_image: product.metadata.main_image || null,
          product_type: product.metadata.product_type || null,
          slug: product.metadata.slug || null,
          limited_edition: product.metadata.limited_edition === 'true',
          num_editions: product.metadata.num_editions || null,
          num_available: product.metadata.num_available || null,
          collection: product.metadata.collection || null,
        };
      })
    );

    return enrichedProducts;
  },
});

export const shopProductsSelector = selector({
  key: 'shopProductsSelector',
  get: ({ get }) => {
    const products = get(productsState);

    if (!products) {
      return null;
    }

    const shopProducts = Promise.all(
      products
        .filter((product) => product.metadata.shop === 'true')
        .sort(
          (a, b) =>
            (a.metadata.limited_edition === 'true' ? 0 : 1) -
            (b.metadata.limited_edition === 'true' ? 0 : 1)
        )
        .map(async (product) => {
          const res = await fetch(
            `/api/stripe/prices/${product.default_price}`
          );

          const { unit_amount } = await res.json();
          const price = unit_amount / 100;

          return {
            id: product.id,
            name: product.name,
            description: product.description,
            price_id: product.default_price,
            price: price,
            additional_images: product.metadata.additional_images
              ? product.metadata.additional_images
                  .split(',')
                  .map((img) => img.trim())
              : null,
            main_image: product.metadata.main_image || null,
            product_type: product.metadata.product_type || null,
            slug: product.metadata.slug || null,
            limited_edition: product.metadata.limited_edition === 'true',
            num_editions: product.metadata.num_editions || null,
            num_available: product.metadata.num_available || null,
            collection: product.metadata.collection || null,
          };
        })
    );

    return shopProducts;
  },
});

export const singleProductSelector = selectorFamily({
  key: 'singleProductSelector',
  get:
    (slug) =>
    ({ get }) => {
      const products = get(enrichedProductsSelector);

      if (!products) {
        return null;
      }

      const product = products.find((product) => product.slug === slug);

      if (!product) {
        return null;
      }

      return product;
    },
});
