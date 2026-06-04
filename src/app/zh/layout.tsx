import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "PixelPDF - 免费在线PDF工具",
    template: "%s | PixelPDF",
  },
  description: "免费在线PDF工具：转换、合并、拆分、压缩、加密。所有处理均在浏览器本地完成，无需上传。",
};

export default function ZhRootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
