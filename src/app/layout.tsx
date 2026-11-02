import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dòng thời gian Lịch sử Đảng — Tra cứu chuẩn xác từ 29 Session',
  description: 'Website tra cứu nhanh và học chi tiết mốc thời gian, sự kiện, hội nghị, đại hội và cương lĩnh môn Lịch sử Đảng Cộng sản Việt Nam, đối chiếu trực tiếp 29 Session tài liệu.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Merriweather:ital,wght@0,400;0,700;1,300&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="min-h-screen bg-[#FAF7F2] text-[#1F2937] antialiased selection:bg-crimson-100 selection:text-crimson-900 font-sans">
        {children}
      </body>
    </html>
  );
}
