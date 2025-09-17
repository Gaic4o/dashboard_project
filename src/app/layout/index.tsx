import "@/src/app/styles/globals.css";
import { Viewport } from "next";
import clsx from "clsx";
import { Providers } from "@/src/app/provider";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased"
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <>{children}</>
        </Providers>
      </body>
    </html>
  );
};
