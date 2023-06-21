import { NextAppDirEmotionCacheProvider } from "tss-react/next";
import AppThemeProvider from "../shared/AppThemeProvider";

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html>
      <head></head>
      <body>
        <NextAppDirEmotionCacheProvider options={{ key: "css", prepend: true }}>
          <AppThemeProvider>{children}</AppThemeProvider>
        </NextAppDirEmotionCacheProvider>
      </body>
    </html>
  );
}
