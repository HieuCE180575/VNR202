# Dòng Thời Gian Lịch Sử Đảng — Website Tra Cứu & Học Tập Chuẩn Xác

Website tra cứu và học tập lịch sử Đảng Cộng sản Việt Nam xây dựng bằng **Next.js 14 (App Router)**, **TypeScript** và **Tailwind CSS**, dựa trên nguồn dữ liệu từ **29 file bài giảng/tài liệu gốc (16 PDF và 13 PPTX)**.

---

## 🌟 Điểm nổi bật & Chức năng chính

1. **Tra cứu đa dạng & thông minh**:
   - Tìm kiếm nhanh theo năm (`1986`, `1930`, `1975`...), theo ngày (`3/2/1930`, `19/12/1946`...), theo từ khóa (`khoán`, `đổi mới`, `cương lĩnh`, `nguyễn văn linh`, `điện biên phủ`...).
   - Gợi ý từ khóa bấm tìm ngay.

2. **Dòng thời gian phân kỳ khoa học theo cấu trúc tài liệu**:
   - **Nhập môn**: Đối tượng, chức năng, nhiệm vụ, phương pháp nghiên cứu (trang riêng biệt).
   - **Trước năm 1930**: Bối cảnh, phong trào yêu nước, chuẩn bị thành lập Đảng.
   - **1930–1945**: Thành lập Đảng, phong trào 1930-1931, 1936-1939, Cách mạng Tháng Tám.
   - **1945–1954**: Bảo vệ chính quyền cách mạng, toàn quốc kháng chiến, Chiến dịch Điện Biên Phủ.
   - **1954–1975**: Hai nhiệm vụ chiến lược, kháng chiến chống Mỹ, thống nhất non sông.
   - **1975–1986**: Khắc phục hậu quả chiến tranh, bảo vệ Tổ quốc, 3 bước đột phá chuẩn bị Đổi mới.
   - **Từ 1986**: Đại hội VI, các kỳ Đại hội đến Đại hội XIII, các mục tiêu 2025, 2030, 2045.

3. **Hai chế độ đọc tùy chỉnh**:
   - **⚡ Tra cứu nhanh**: Hiện ngày, tên sự kiện, câu tóm tắt cốt lõi và số Session/Slide. Phù hợp dò đáp án trắc nghiệm hoặc tra nhanh ngày tháng.
   - **📚 Học chi tiết**: Mở rộng xem bối cảnh lịch sử, nội dung chính, ý nghĩa lịch sử, tóm tắt ghi nhớ thi nhanh và các điểm dễ nhầm.

4. **Trang giải thích chi tiết cho từng sự kiện**:
   - **Thời gian & Địa điểm** chuẩn xác theo tài liệu (không tự bịa ngày nếu tài liệu chỉ ghi tháng/năm).
   - **Bối cảnh**: Vì sao sự kiện diễn ra?
   - **Nội dung chính**: Các chủ trương, quyết định quan trọng.
   - **Ý nghĩa**: Chuyển biến lịch sử mang lại.
   - **Cần nhớ**: Tóm tắt 1-2 câu ăn điểm thi.
   - **Dễ nhầm**: Cảnh báo bẫy trắc nghiệm và phân biệt với sự kiện khác.
   - **Trích nguyên văn slide gốc**: Hiển thị lớp chữ trích xuất 100% nguyên bản.
   - **Ghi chú đối chiếu nguồn**: Nêu rõ slide ghi gì, văn bản chính thống quy định gì, kèm đường dẫn kiểm chứng.
   - **Sự kiện liên quan**: Chuyển nhanh giữa chuỗi các sự kiện liên đới.

5. **Mục “So sánh để nhớ” chuyên sâu (7 chủ đề dễ lẫn nhất)**:
   - Cương lĩnh chính trị đầu tiên (2/1930) vs Luận cương chính trị (10/1930).
   - Phong trào 1930–1931 vs Phong trào Dân chủ 1936–1939.
   - Hội nghị Trung ương 6 (1939), Hội nghị 7 (1940) và Hội nghị 8 (1941).
   - Chiến dịch Việt Bắc thu đông 1947 vs Chiến dịch Biên giới thu đông 1950.
   - “Chiến tranh đặc biệt” vs “Chiến tranh cục bộ” vs “Việt Nam hóa chiến tranh”.
   - Khoán 100 (1/1981) vs Khoán 10 (4/1988).
   - So sánh điểm nổi bật Đại hội IV đến XIII (Tổng Bí thư, quyết sách cốt lõi, từ khóa thi).

6. **Kho 29 Tài liệu gốc (435 trang/slide)**:
   - Duyệt toàn bộ 29 Session, xem trực tiếp văn bản nguyên gốc của từng slide.
   - Đánh dấu mốc thời gian và lưu ý kiểm chứng trên từng slide.

7. **Mục “Mốc của tôi” (Sổ tay ôn thi)**:
   - Lưu trữ các mốc cần học lại vào `localStorage`.
   - Hỗ trợ chế độ in / xuất tài liệu tóm tắt phục vụ ôn thi cấp tốc.

---

## 🚀 Hướng dẫn cài đặt & Khởi chạy

Dự án đã được cài đặt sẵn dependencies và biên dịch thành công.

```bash
# Khởi chạy môi trường phát triển (Development)
npm run dev
# Truy cập: http://localhost:3000

# Hoặc chạy bản Build Production tối ưu
npm run start
# Truy cập: http://localhost:3000
```

---

## 🎨 Phong cách thiết kế

- **Tone màu chủ đạo**: Nền trắng ngà (`#FAF7F2`), chữ đen than (`#1C1917`), điểm nhấn đỏ đô trang trọng (`#8B1515`).
- **Typography**: Kết hợp giữa font Serif tiêu đề trang trọng và font Sans hiện đại, thoáng đãng, sắc nét trên cả máy tính và điện thoại.

