import "./globals.css";

import Header from "./components/AppShell/Header";

export default async function LayoutSite({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>

      <Header />

      {children}

    </div>
  );
}
