import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// images
const images = ['https://i.imgur.com/4KQQFag.jpg'];

// providers
import { RecoilRootProvider } from './_lib/context/RecoilRoot';
import { ThemeProvider } from './_lib/context/ThemeProvider';
import { Suspense } from 'react';

// local components
import Navbar from './_navigation/navbar';
import LoadingDiv from './_components/interactive/loadingDiv';

const APP_NAME = 'taNrleMn';
const APP_DEFAULT_TITLE = 'taNrleMn – Artist & Lover of Donuts';
const APP_TITLE_TEMPLATE = '%s – taNrleMn';
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
    images: images,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <RecoilRootProvider>
          <ThemeProvider>
            <Suspense fallback={<LoadingDiv />}>
              <Navbar />
              {children}
            </Suspense>
          </ThemeProvider>
        </RecoilRootProvider>
      </body>
    </html>
  );
}
