import Link from "next/link";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "./_components/Theme-provider";
import { ModeToggle } from "./_components/Mode-toggle";

const inter = Montserrat({ subsets: ["latin"] });

const APP_NAME = "Ahsoka's Holocron";
const APP_DEFAULT_TITLE = "Ahsoka's Holocron";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "Ahsoka's Appreciation in Next.Js.";

export const metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className} break-words text-lg`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="mx-1 py-10 px-4">
            <header>
              <div className="flex items-center justify-between">
                <Link href="/">
                  <span className="icon-[fa6-solid--jedi] w-11 h-11"></span>
                </Link>
                <nav className=" font-medium space-x-6">
                  <Link
                    href="/holocron/films"
                    aria-label={`Read more about star wars films`}
                  >
                    films
                  </Link>
                  <Link
                    href="/holocron/people"
                    aria-label={`Read more about star wars characters`}
                  >
                    people
                  </Link>
                </nav>
                <ModeToggle />
              </div>
            </header>
            <main className="text-center">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
