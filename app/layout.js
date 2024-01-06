import '@/app/globals.css';

// server
import dynamic from 'next/dynamic';

// providers
import { ThemeProvider } from './_lib/context/ThemeProvider';
import { RecoilRootProvider } from './_lib/context/RecoilRoot';
import { ContactProvider } from './_lib/context/ContactProvider';
import { SessionProvider } from './_lib/context/SessionProvider';

// local components
import Footer from './_navigation/footer';
import Loading from './loading';

const Navbar = dynamic(() => import('./_navigation/navbar'), {
  ssr: false,
});

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
  return (
    <html lang='en'>
      <body>
        <RecoilRootProvider>
          <ThemeProvider>
            <SessionProvider>
              <ContactProvider>
                <Navbar />
                <Loading />
                {children}
                <Footer />
              </ContactProvider>
            </SessionProvider>
          </ThemeProvider>
        </RecoilRootProvider>
      </body>
    </html>
  );
}
