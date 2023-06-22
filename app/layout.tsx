import AppThemeProvider from "../shared/AppThemeProvider";
import EmotionCacheProvider from "../shared/EmotionCacheProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <EmotionCacheProvider options={{ key: "css", prepend: true }}>
          <AppThemeProvider>{children}</AppThemeProvider>
        </EmotionCacheProvider>
      </body>
    </html>
  );
}
