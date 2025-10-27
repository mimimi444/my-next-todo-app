import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next Todo App",
  description: "Udemy学習用。Next.jsで作成したTodoアプリです。https://www.udemy.com/course/modern_javascipt_react_beginner/learn/lecture/40839382#content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
