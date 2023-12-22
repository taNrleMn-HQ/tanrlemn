import '@/app/globals.css';

// server
import dynamic from 'next/dynamic';

// providers
import { ThemeProvider } from './lib/context/ThemeProvider';
import { LoadingProvider } from './lib/context/LoadingProvider';
import { ContactProvider } from './lib/context/ContactProvider';

// local components
import Footer from './_navigation/footer';
import { CartProvider } from './lib/context/CartProvider';
import { SessionProvider } from './lib/context/SessionProvider';

const Navbar = dynamic(() => import('./_navigation/navbar'), {
  ssr: false,
});

const APP_NAME = 'taNrleMn';
const APP_DEFAULT_TITLE = 'taNrleMn – Oil Painter';
const APP_TITLE_TEMPLATE = '%s - taNrleMn';
const APP_DESCRIPTION =
  "taNrleMn's art explores the unity of shared pain and the transformative power of connection.";

// metadata
export const metadata = {
  metadataBase: new URL('https://tanrlemn.xyz/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: '/og-image.png',
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <LoadingProvider>
          <ThemeProvider>
            <CartProvider>
              <SessionProvider>
                <ContactProvider>
                  <Navbar />
                  {children}
                  <Footer />
                </ContactProvider>
              </SessionProvider>
            </CartProvider>
          </ThemeProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
