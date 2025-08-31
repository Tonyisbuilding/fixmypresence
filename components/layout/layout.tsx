import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      <main className="max-w-6xl mx-auto px-6">{children}</main>

      {/* <footer className="border-t p-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FixMyPresence. All rights reserved.
      </footer> */}
    </div>
  );
}
