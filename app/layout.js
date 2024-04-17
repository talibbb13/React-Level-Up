import "./globals.css";
import Goback from "./Components/goback";

export const metadata = {
  title: "Master the Art",
  description: "Nothing to input",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Goback />
        {children}
      </body>
    </html>
  );
}
