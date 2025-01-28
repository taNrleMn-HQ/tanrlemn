import '@/app/globals.css';

// next
import { cookies } from 'next/headers';

// providers
import { ThemeProvider } from './_lib/context/ThemeProvider';
import { RecoilRootProvider } from './_lib/context/RecoilRoot';

// local components
import Footer from './_navigation/footer';
import Navbar from './_navigation/navbar';

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
  category: 'art',
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: ['https://i.imgur.com/CljkHnsh.jpg'],
  },
};

export default async function RootLayout({ children }) {
  const cookieStore = cookies();
  return (
    <html lang='en'>
      <body>
        <RecoilRootProvider>
          <ThemeProvider cookies={cookieStore}>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </RecoilRootProvider>
      </body>
    </html>
  );
}
