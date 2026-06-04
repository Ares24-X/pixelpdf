import { Metadata } from "next";
export const metadata: Metadata = { title: "PDF转JPG - 在线PDF转图片" };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
