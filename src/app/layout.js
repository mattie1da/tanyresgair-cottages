import "./globals.css";
import Header from "./components/header";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="l-container">
        <Header />
        {children}
      </body>
    </html>
  );
}
