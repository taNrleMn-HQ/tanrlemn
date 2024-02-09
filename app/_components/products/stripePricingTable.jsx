import Script from 'next/script';

export default function StripePricingTable({ id }) {
  const MODE = process.env.NEXT_PUBLIC_MODE;

  const isDev = MODE === 'development' || MODE === 'staging';

  const pricingTableId = isDev
    ? 'prctbl_1OQFzaJPdRao2mztnfQYQasN'
    : 'prctbl_1OQHHBJPdRao2mztRSAGP9we';

  const publishableKey = isDev
    ? 'pk_test_51NEmNhJPdRao2mztIkn8Er1d2GOL0jUH2CwsYJFf8IxnwodIue6d8EQDsXx36bGrRoeQMAVM7YEdK4kjDVunoBk800LfoxmzW5'
    : 'pk_live_51NEmNhJPdRao2mztSZ0XMgxZLG2Iy1umcnTTjbv5RaiuG8NAjuufF5SbBtvvccTQ1Q8U7S5CMlWSeSnC9dpEQBrV00bGDhm45R';

  return (
    <>
      <Script
        strategy='beforeInteractive'
        src='https://js.stripe.com/v3/pricing-table.js'
      />
      <stripe-pricing-table
        pricing-table-id={pricingTableId}
        publishable-key={publishableKey}></stripe-pricing-table>
    </>
  );
}
