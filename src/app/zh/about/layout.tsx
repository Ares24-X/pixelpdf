import { Metadata } from "next";
export const metadata: Metadata = { title: "关于 PixelPDF - 免费在线PDF工具" };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
