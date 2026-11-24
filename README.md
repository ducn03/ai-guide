# AI Training Wiki & Enterprise SOPs ✦

> **Cổng Đào tạo & Cẩm nang Quy chuẩn ứng dụng Trí tuệ Nhân tạo (AI) Nội bộ cho Nhân sự Doanh nghiệp.**
> 100% Thuần Web tĩnh (HTML5, CSS3, Vanilla JS) — **Không cần cài đặt Server hay Node.js**, Deploy tức thì lên GitHub Pages hoặc mở xem trực tiếp offline.

---

## 🌟 Tổng quan Dự án

Trang web được thiết kế theo phong cách UI/UX của **Premier Nuts** (nền kem `#FFFBF4`, điểm nhấn xanh rừng lá `#1F4E38` và cam ấm `#F0821E`), đem lại trải nghiệm sang trọng, tinh tế, dễ tiếp cận cho toàn thể cán bộ nhân viên công ty từ nhân sự mới đến quản lý cấp cao.

### 🎯 Các Module Đào Tạo Chính:
1. **[Trang chủ Wiki (index.html)](index.html)**:
   - Tổng quan lộ trình đào tạo nhân sự.
   - **Trình tạo Prompt thông minh (Interactive Prompt Builder)** tự động lắp ghép câu lệnh công việc.
   - Bảng đối đầu 4 ông lớn AI (ChatGPT, Claude, Gemini, DeepSeek).
   - Truy cập nhanh kho SOPs các phòng ban.
2. **[Onboarding & Chính sách Bảo mật (pages/basics.html)](pages/basics.html)**:
   - Tư duy cốt lõi: *AI là trợ lý, Nhân sự chịu trách nhiệm cuối cùng*.
   - Hướng dẫn kích hoạt tài khoản 0đ (ChatGPT, Claude, Gemini, DeepSeek).
   - **4 Quy tắc vàng** khi giao việc cho AI.
   - Kỹ thuật nhận diện và khắc phục **Ảo giác (Hallucination)**.
   - **Checklist Bảo mật**: Những gì ĐƯỢC và TUYỆT ĐỐI KHÔNG ĐƯỢC chia sẻ lên AI công cộng.
3. **[Kỹ năng Viết Prompt Chuẩn (pages/prompting.html)](pages/prompting.html)**:
   - **Framework C-R-E-A-T-E** độc quyền (Context - Role - Explicit Instructions - Audience - Tone - Examples).
   - So sánh thực tế: *Prompt Nghiệp dư vs Prompt Chuẩn doanh nghiệp*.
   - 5 Kỹ thuật nâng cao: *Chain-of-Thought*, *Few-Shot*, *Reverse Prompting*, *Devil's Advocate*, *Strict Output Formatting*.
4. **[Thư viện SOP & Prompt Mẫu Phòng Ban (pages/prompt-library.html)](pages/prompt-library.html)**:
   - Phân loại rõ ràng:
     - 📢 **Marketing & Content**: Lịch bài viết 7 ngày, kịch bản video TikTok/Reels, 10 công thức giật tít.
     - 🤝 **Kinh doanh & CSKH (Sales)**: Kịch bản Telesale, xử lý lời từ chối kinh điển, email phản hồi khiếu nại 5 sao.
     - 👥 **Hành chính - Nhân sự (HR)**: Soạn JD tuyển dụng, lọc & chấm điểm CV, soạn thông báo nội bộ.
     - 📊 **Kế toán & Dữ liệu**: Hàm Excel phức tạp (XLOOKUP, SUMIFS), phân tích báo cáo doanh số & tài chính.
     - 💼 **Văn phòng & Vận hành**: Biên bản cuộc họp Action Items có deadline, báo cáo tuần PPP.
   - Tìm kiếm tức thì, lọc theo danh mục, lưu yêu thích (Favorites LocalStorage) và nút **Sao chép 1 chạm**.
5. **[Bản đồ Công cụ Cấp phép (pages/tools.html)](pages/tools.html)**:
   - Danh mục 12+ công cụ AI hàng đầu đã được công ty thẩm định.
   - Đánh giá ưu/nhược điểm, mức giá, khuyến nghị *Nên dùng công cụ nào cho việc gì*.
6. **[Quy trình Tự động hóa & Agents (pages/advanced.html)](pages/advanced.html)**:
   - Cài đặt **Custom Instructions** (Trí nhớ vĩnh viễn) cho tài khoản nhân viên.
   - Khai thác AI Đa phương thức: Phân tích bảng Excel, tài liệu PDF dài.
   - Quy trình làm việc tự động No-code với Make.com / Zapier.

---

## 🚀 Hướng Dẫn Deploy Lên GitHub Pages (1 Bước Duy Nhất)

Dự án này là **100% Static HTML/CSS/JS thuần** (Zero dependency, không backend, không build tool):

1. Đẩy mã nguồn lên GitHub repository:
   ```bash
   git add -A
   git commit -m "feat: complete AI Training Wiki for enterprise staff"
   git push origin main
   ```
2. Mở trình duyệt vào **GitHub Repository của bạn**:
   - Chọn tab **Settings** ⚙️
   - Chọn mục **Pages** ở thanh menu bên trái
   - Tại mục **Build and deployment > Branch**: Chọn nhánh `main` và thư mục `/ (root)`
   - Nhấn **Save**!
3. Sau khoảng 30 giây, website của bạn sẽ hoạt động trực tiếp tại địa chỉ:
   `https://<username>.github.io/<repo-name>/`

---

## 💻 Mở Xem Trực Tiếp Trên Máy Tính (Offline)

Bạn không cần bất kỳ máy chủ nào. Chỉ cần mở thư mục và **click đúp vào file `index.html`** để chạy ngay trên Google Chrome, Microsoft Edge hoặc Safari. Dữ liệu prompts và công cụ được nạp độc lập từ `shared/ai-data.js` nên hoạt động hoàn hảo 100% ngay cả với giao thức `file:///`.

---

## 📁 Cấu Trúc Thư Mục

```text
ai-guide/
├── index.html                  # Trang chủ Wiki Đào tạo & Interactive Prompt Builder
├── README.md                   # Tài liệu hướng dẫn sử dụng & deploy
├── pages/
│   ├── basics.html             # Onboarding & Chính sách sử dụng AI nội bộ
│   ├── prompting.html          # Kỹ thuật giao việc & Framework C-R-E-A-T-E
│   ├── prompt-library.html     # Thư viện SOP & Prompt mẫu theo từng phòng ban
│   ├── tools.html              # Bản đồ công cụ AI doanh nghiệp 2026
│   └── advanced.html           # Làm chủ Custom Instructions & Tự động hoá
├── shared/
│   ├── styles.css              # Design system phong cách Premier Nuts & Splash loader
│   ├── site-shell.js           # Header, Footer, Bottom Nav, Search & Toast
│   └── ai-data.js              # Cơ sở dữ liệu offline 100% client-side
└── data/
    ├── prompts.json            # Dữ liệu JSON gốc các SOPs phòng ban
    └── tools.json              # Dữ liệu JSON gốc danh mục công cụ
```

© 2026 AI Training Wiki. Chuẩn hóa quy trình AI cho doanh nghiệp.
