import Link from "next/link";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "./_components/Theme-provider";
import { ModeToggle } from "./_components/Mode-toggle";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className} break-words`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="mx-1 py-10 px-4">
            <header>
              <div className="flex items-center justify-between">
                <Link href="/">
                  <span className="icon-[fa6-solid--jedi] w-11 h-11"></span>
                </Link>
                <nav className=" font-medium space-x-6">
                  <Link href="/holocron/films">films</Link>
                  <Link href="/holocron/people">people</Link>
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
