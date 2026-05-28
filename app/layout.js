import "./globals.css";

export const metadata = {
  title: "Dhiraj Portfolio",
  description: "Modern Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}