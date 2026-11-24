window.AI_DATABASE = {
  "prompts": [
    {
      "id": "hr-01",
      "category": "hr",
      "categoryName": "Hành chính - Nhân sự (HR)",
      "title": "Soạn thảo Bản mô tả công việc (JD) thu hút nhân tài",
      "description": "Tạo JD chuẩn chỉnh gồm trách nhiệm, yêu cầu năng lực, quyền lợi hấp dẫn và văn hóa doanh nghiệp mà không bị khô cứng.",
      "level": "Cơ bản",
      "tags": [
        "HR",
        "Tuyển dụng",
        "JD",
        "Nhân sự"
      ],
      "prompt": "Bạn là Trưởng phòng Tuyển dụng (Talent Acquisition Lead) với 10 năm kinh nghiệm trong ngành [Ngành nghề của công ty].\nHãy giúp tôi viết một bản Mô tả công việc (Job Description - JD) cho vị trí: [Tên vị trí, ví dụ: Chuyên viên Content Marketing / Nhân viên Kinh doanh B2B].\n\nThông tin cơ bản:\n- Cấp bậc: [Nhân viên / Trưởng nhóm / Thực tập sinh]\n- Địa điểm làm việc: [Văn phòng / Hybrid / Remote]\n- Mức lương dự kiến: [Khoảng lương, ví dụ: 12 - 18 triệu + Thưởng KPI]\n- Yêu cầu chính: [Ví dụ: Tối thiểu 1 năm kinh nghiệm, biết quay dựng CapCut cơ bản]\n\nYêu cầu cấu trúc JD chuyên nghiệp:\n1. Giới thiệu ngắn về sứ mệnh và cơ hội phát triển ở vị trí này (Hook thu hút ứng viên trong 5 giây đầu).\n2. Trách nhiệm công việc chính (Liệt kê 5-7 gạch đầu dòng rõ ràng, tập trung vào kết quả đầu ra).\n3. Yêu cầu năng lực & kinh nghiệm (Tách rõ: Bắt buộc phải có vs Ưu tiên điểm cộng).\n4. Quyền lợi & Phúc lợi hấp dẫn (Lương thưởng, lộ trình thăng tiến, văn hóa cởi mở, chế độ bảo hiểm).\n5. Quy trình ứng tuyển và thời hạn nộp hồ sơ."
    },
    {
      "id": "hr-02",
      "category": "hr",
      "categoryName": "Hành chính - Nhân sự (HR)",
      "title": "Phân tích, so khớp và chấm điểm CV ứng viên so với JD",
      "description": "Đưa CV của ứng viên và JD vị trí vào, AI sẽ đóng vai giám khảo sàng lọc, chỉ rõ điểm mạnh, điểm yếu và câu hỏi phỏng vấn cần đào sâu.",
      "level": "Trung cấp",
      "tags": [
        "Lọc CV",
        "Phỏng vấn",
        "HR",
        "Tuyển dụng"
      ],
      "prompt": "Bạn là Chuyên viên Tuyển dụng cấp cao.\nDưới đây là JD vị trí và CV của ứng viên:\n\n=== BẢN MÔ TẢ CÔNG VIỆC (JD) ===\n[Dán yêu cầu JD vào đây]\n\n=== NỘI DUNG CV CỦA ỨNG VIÊN ===\n[Dán toàn bộ nội dung văn bản CV vào đây]\n\nHãy phân tích khách quan và trả lời theo cấu trúc sau:\n1. Điểm số tương thích: Chấm điểm từ 1-100% kèm giải thích lý do ngắn gọn.\n2. Bảng đối chiếu năng lực: | Tiêu chí trong JD | Thực tế trong CV | Đánh giá (Đạt / Chưa đạt / Vượt kỳ vọng) |\n3. Điểm sáng lớn nhất của ứng viên này đối với công ty.\n4. Những điểm nghi vấn hoặc lỗ hổng kinh nghiệm cần làm rõ.\n5. Đề xuất 3 câu hỏi phỏng vấn chuyên sâu có tính phản biện dành riêng cho ứng viên này."
    },
    {
      "id": "hr-03",
      "category": "hr",
      "categoryName": "Hành chính - Nhân sự (HR)",
      "title": "Soạn thảo Thông báo nội bộ & Chính sách công ty",
      "description": "Viết thông báo nghỉ lễ, thay đổi giờ làm việc, phát động thi đua hoặc thông báo quy chế nội bộ với văn phong trang trọng, chuẩn mực.",
      "level": "Cơ bản",
      "tags": [
        "Thông báo",
        "Văn hóa nội bộ",
        "HR"
      ],
      "prompt": "Bạn là Trưởng phòng Truyền thông nội bộ (Internal Communications).\nHãy giúp tôi soạn một Thông báo nội bộ gửi toàn thể Cán bộ Nhân viên công ty.\n\nThông tin cần truyền tải:\n- Chủ đề thông báo: [Ví dụ: Lịch nghỉ lễ Quốc khánh 2/9 / Quy định chấm công mới / Phát động phong trào thể thao quý 3]\n- Thời gian áp dụng: [Từ ngày ... đến ngày ...]\n- Lưu ý quan trọng: [Ví dụ: Bàn giao công việc trước kỳ nghỉ, cài đặt email phản hồi tự động...]\n\nYêu cầu định dạng:\n1. Tiêu đề thông báo chuẩn chỉnh theo thể thức văn bản doanh nghiệp.\n2. Lời mở đầu trang trọng, ấm áp.\n3. Các mốc thời gian và nhiệm vụ được trình bày bằng gạch đầu dòng rõ ràng, dễ nhớ.\n4. Lời chúc mừng và chữ ký đại diện Ban Giám đốc/Phòng Nhân sự."
    },
    {
      "id": "mkt-01",
      "category": "marketing",
      "categoryName": "Marketing & Truyền thông",
      "title": "Lập Lịch nội dung Social Media 7 ngày đa kênh",
      "description": "Lên kế hoạch 7 bài đăng Facebook/TikTok theo các trụ cột Awareness, Education, Trust và Conversion có tỷ lệ tương tác cao.",
      "level": "Cơ bản",
      "tags": [
        "Content Calendar",
        "Social Media",
        "Marketing"
      ],
      "prompt": "Bạn là Giám đốc Sáng tạo Nội dung (Content Lead) với kinh nghiệm xây dựng các kênh truyền thông triệu view.\nTôi đang lên kế hoạch nội dung cho: [Tên sản phẩm/dịch vụ của công ty].\nKhách hàng mục tiêu: [Độ tuổi, nghề nghiệp, vấn đề họ đang gặp phải].\n\nHãy lập bảng Lịch nội dung 7 ngày (Thứ 2 đến Chủ nhật) chi tiết gồm các cột:\n| Thứ | Mục tiêu truyền thông | Tiêu đề giật tít (Hook 3s) | Ý tưởng nội dung cốt lõi | Định dạng (Reels ngắn / Ảnh đơn / Carousel / Minigame) | Kêu gọi hành động (CTA) |\n\nYêu cầu: Xen kẽ hài hòa giữa các trụ cột: 40% Chia sẻ giá trị hữu ích, 30% Kể chuyện tạo niềm tin, 20% Bắt trend giải trí, 10% Bán hàng trực tiếp."
    },
    {
      "id": "mkt-02",
      "category": "marketing",
      "categoryName": "Marketing & Truyền thông",
      "title": "Viết kịch bản Video ngắn TikTok/Reels công thức Hook-Body-CTA",
      "description": "Kịch bản video dọc 45-60 giây giữ chân người xem từ 3 giây đầu tiên đến lời kêu gọi hành động cuối video.",
      "level": "Trung cấp",
      "tags": [
        "TikTok",
        "Reels",
        "Video ngắn",
        "Kịch bản"
      ],
      "prompt": "Bạn là Đạo diễn kịch bản video ngắn viral trên TikTok và Facebook Reels.\nHãy viết kịch bản chi tiết 45-60 giây cho video giới thiệu về: [Chủ đề hoặc tính năng sản phẩm].\n\nCấu trúc kịch bản dạng bảng 4 cột: | Thời lượng | Lời thoại (Voice-over) | Hành động khung hình (Visual) | Chữ hiện trên màn hình (Text Overlay) |\n- Cảnh 1 (0-3s): 3 phương án câu mở đầu gây tò mò hoặc đánh trúng nỗi đau người xem.\n- Cảnh 2 (4-40s): Giải thích giải pháp, nhịp điệu nhanh, hình ảnh đổi cảnh liên tục mỗi 3-4 giây.\n- Cảnh 3 (40-50s): Lời kêu gọi hành động (CTA) kích thích để lại bình luận hoặc nhấp vào link bio."
    },
    {
      "id": "mkt-03",
      "category": "marketing",
      "categoryName": "Marketing & Truyền thông",
      "title": "Sáng tạo 10 Tiêu đề (Headlines) giật tít tăng tỷ lệ nhấp chuột (CTR)",
      "description": "Tạo 10 tiêu đề bài viết blog, video hoặc email theo các công thức tâm lý kinh điển: FOMO, con số cụ thể, bật mí bí mật.",
      "level": "Cơ bản",
      "tags": [
        "Copywriting",
        "Tiêu đề",
        "CTR",
        "Marketing"
      ],
      "prompt": "Bạn là chuyên gia Copywriting hàng đầu chuyên viết tiêu đề quảng cáo chuyển đổi cao.\nNội dung chính của bài viết/video của tôi là: [Tóm tắt nội dung của bạn].\nĐối tượng độc giả: [Độc giả mục tiêu].\n\nHãy sáng tạo cho tôi 10 tiêu đề hấp dẫn phân loại theo 5 công thức tâm lý:\n1. Công thức Nỗi đau / Nỗi sợ bị bỏ lỡ (FOMO) (2 tiêu đề)\n2. Công thức Bật mí bí quyết / Sự thật ít ai biết (Curiosity Gap) (2 tiêu đề)\n3. Công thức Con số cụ thể & Giới hạn thời gian (Listicle) (2 tiêu đề)\n4. Công thức Đi ngược số đông / Phản trực giác (Counter-intuitive) (2 tiêu đề)\n5. Công thức Làm thế nào để... mà không cần... (How-to without pain) (2 tiêu đề)"
    },
    {
      "id": "sales-01",
      "category": "sales",
      "categoryName": "Kinh doanh & CSKH",
      "title": "Kịch bản Telesale & Gọi điện tư vấn khách hàng mới",
      "description": "Kịch bản gọi điện mở đầu tự nhiên, không bị dập máy trong 15 giây đầu, khơi gợi nhu cầu và chốt lịch hẹn gặp.",
      "level": "Cơ bản",
      "tags": [
        "Telesale",
        "Sales",
        "Kịch bản gọi điện"
      ],
      "prompt": "Bạn là Giám đốc Kinh doanh hàng đầu với kỹ năng Telesale đỉnh cao.\nHãy soạn kịch bản gọi điện thoại tư vấn (Cold Call / Warm Call) cho sản phẩm: [Tên sản phẩm/dịch vụ của công ty].\nĐối tượng nhận cuộc gọi: [Khách hàng cá nhân / Chủ doanh nghiệp / Trưởng phòng mua hàng].\n\nCấu trúc kịch bản gồm:\n1. Mở đầu (0-15s): Chào hỏi ngắn gọn, nêu lý do cuộc gọi chạm ngay vào lợi ích khách hàng quan tâm (tránh nói 'Em xin 5 phút làm phiền anh/chị').\n2. Khơi gợi vấn đề: 2 câu hỏi mở để khách hàng tự chia sẻ khó khăn hiện tại.\n3. Giới thiệu giải pháp cô đọng (30s): Nêu đúng 2 giá trị vượt trội nhất giải quyết khó khăn đó.\n4. Chốt mục tiêu cuộc gọi: Đề xuất thời gian cụ thể cho một buổi hẹn tư vấn trực tiếp hoặc gửi bản demo trải nghiệm."
    },
    {
      "id": "sales-02",
      "category": "sales",
      "categoryName": "Kinh doanh & CSKH",
      "title": "Bộ kịch bản Xử lý Lời từ chối kinh điển của khách hàng",
      "description": "Chiến thuật xử lý chuyên nghiệp các câu từ chối: 'Giá bên em đắt quá', 'Để anh suy nghĩ thêm', 'Bên anh đang dùng dịch vụ khác rồi'.",
      "level": "Trung cấp",
      "tags": [
        "Xử lý từ chối",
        "Chốt sale",
        "Kinh doanh"
      ],
      "prompt": "Bạn là Chuyên gia Đào tạo Kỹ năng Bán hàng (Sales Coach).\nHãy giúp đội ngũ kinh doanh công ty xử lý lời từ chối của khách hàng đối với sản phẩm: [Mô tả sản phẩm và mức giá].\n\nHãy cung cấp câu phản hồi mẫu cho 3 tình huống từ chối phổ biến nhất:\n1. Khách chê: 'Giá bên em cao hơn các bên khác trên thị trường.'\n2. Khách trì hoãn: 'Anh/chị thấy cũng hay đấy nhưng để anh suy nghĩ thêm đã nhé.'\n3. Khách từ chối: 'Bên anh đang hợp tác với đối tác quen rồi, không có nhu cầu đổi.'\n\nVới mỗi tình huống, hãy áp dụng nguyên tắc Đồng cảm -> Đặt câu hỏi cô lập vấn đề -> Đưa ra dẫn chứng thuyết phục và Kêu gọi bước tiếp theo."
    },
    {
      "id": "sales-03",
      "category": "sales",
      "categoryName": "Kinh doanh & CSKH",
      "title": "Soạn Email phản hồi khiếu nại khách hàng khéo léo (CSKH 5 Sao)",
      "description": "Hạ nhiệt cơn giận của khách hàng khi gặp sự cố sản phẩm/dịch vụ, nhận trách nhiệm văn minh và đề xuất phương án bù đắp thỏa đáng.",
      "level": "Cơ bản",
      "tags": [
        "CSKH",
        "Xử lý khiếu nại",
        "Email"
      ],
      "prompt": "Bạn là Trưởng bộ phận Chăm sóc khách hàng (Customer Support Lead).\nKhách hàng [Tên khách hàng] vừa gửi phản ánh gay gắt về sự cố: [Mô tả sự cố: Giao hàng chậm 3 ngày / Sản phẩm bị lỗi đóng gói / Nhân viên tư vấn chưa nhiệt tình].\n\nHãy viết thư phản hồi gửi khách hàng đảm bảo các tiêu chí:\n1. Lời xin lỗi chân thành, nhận diện rõ cảm xúc thất vọng của khách hàng (tuyệt đối không đổ lỗi cho bên thứ ba).\n2. Giải thích ngắn gọn nguyên nhân sự cố một cách minh bạch.\n3. Phương án xử lý ngay lập tức (Đổi mới / Hoàn tiền / Đẩy nhanh giao dịch).\n4. Chính sách bù đắp thiện chí (Tặng voucher giảm giá cho đơn tiếp theo hoặc quà tri ân).\n5. Lời cam kết cải tiến quy trình để không tái diễn sự cố."
    },
    {
      "id": "fin-01",
      "category": "finance",
      "categoryName": "Kế toán & Dữ liệu",
      "title": "Tạo công thức Excel/Google Sheets phức tạp (XLOOKUP, SUMIFS, INDEX-MATCH)",
      "description": "Mô tả bài toán đối soát, lọc dữ liệu trùng hoặc tính tổng có nhiều điều kiện, AI sẽ sinh công thức chính xác và giải thích cặn kẽ.",
      "level": "Trung cấp",
      "tags": [
        "Excel",
        "Google Sheets",
        "Hàm tính",
        "Kế toán"
      ],
      "prompt": "Bạn là Chuyên gia Phân tích Dữ liệu và Bậc thầy Excel/Google Sheets.\nTôi đang có một bảng dữ liệu bảng tính như sau:\n- Cột A: [Mã đơn hàng / Mã nhân viên]\n- Cột B: [Ngày phát sinh giao dịch]\n- Cột C: [Tên khách hàng / Phòng ban]\n- Cột D: [Số tiền / Doanh thu]\n- Cột E: [Trạng thái thanh toán (Đã thanh toán / Chưa thanh toán / Hủy)]\n\nBài toán tôi cần giải quyết:\n[Mô tả chính xác điều bạn cần tính, ví dụ: Tính tổng doanh thu của khách hàng X trong quý 3 có trạng thái Đã thanh toán].\n\nVui lòng cung cấp:\n1. Công thức chuẩn (cho cả Excel đời mới và Google Sheets).\n2. Giải thích ý nghĩa của từng tham số trong công thức.\n3. Những lưu ý để không bị lỗi #N/A hoặc lỗi định dạng ngày tháng."
    },
    {
      "id": "fin-02",
      "category": "finance",
      "categoryName": "Kế toán & Dữ liệu",
      "title": "Tóm tắt và Trích xuất Insight từ Báo cáo Tài chính / Doanh thu",
      "description": "Dán các số liệu doanh thu thô, chi phí và lợi nhuận, AI sẽ phân tích xu hướng tăng trưởng, biên lợi nhuận và điểm cảnh báo rủi ro.",
      "level": "Nâng cao",
      "tags": [
        "Báo cáo tài chính",
        "Doanh số",
        "Phân tích số liệu"
      ],
      "prompt": "Bạn là Chuyên viên Phân tích Tài chính Doanh nghiệp (Financial Analyst).\nDưới đây là bảng số liệu doanh thu và chi phí của công ty:\n\"\"\"\n[Dán số liệu bảng tính hoặc báo cáo thô vào đây]\n\"\"\"\n\nHãy phân tích và lập báo cáo tài chính điều hành cho Ban Giám đốc gồm:\n1. Bảng tóm tắt chỉ số chính: Doanh thu thuần, Chi phí vận hành, Lợi nhuận gộp, Biên lợi nhuận ròng (%)\n2. Phân tích xu hướng: Chỉ ra 3 nguồn doanh thu tăng trưởng mạnh nhất và 3 khoản chi phí tăng bất thường.\n3. Cảnh báo rủi ro về dòng tiền hoặc quản trị chi phí.\n4. 3 Khuyến nghị hành động cụ thể để tối ưu hóa lợi nhuận cho tháng tới."
    },
    {
      "id": "ops-01",
      "category": "office",
      "categoryName": "Văn phòng & Vận hành",
      "title": "Tóm tắt Biên bản cuộc họp thành Danh sách Action Items có Deadline",
      "description": "Chuyển đổi ghi chú cuộc họp lộn xộn thành biên bản súc tích, phân công rõ người phụ trách (Owner) và thời hạn hoàn thành.",
      "level": "Cơ bản",
      "tags": [
        "Cuộc họp",
        "Action Items",
        "Vận hành",
        "Quản lý công việc"
      ],
      "prompt": "Bạn là Thư ký điều hành chuyên nghiệp của Ban Giám đốc.\nDưới đây là ghi chú thô của cuộc họp hôm nay:\n\"\"\"\n[Dán ghi chép cuộc họp vào đây]\n\"\"\"\n\nHãy trích xuất thành biên bản cuộc họp cô đọng theo cấu trúc:\n1. 3 Quyết định quan trọng nhất đã được thống nhất tại cuộc họp.\n2. Bảng Action Items phân công nhiệm vụ: | STT | Nhiệm vụ cụ thể | Người phụ trách (Owner) | Thời hạn (Deadline) | Mức độ ưu tiên (Cao/Trung bình/Thấp) |\n3. Các vấn đề chưa thống nhất cần xin ý kiến thêm ở cuộc họp tiếp theo."
    },
    {
      "id": "ops-02",
      "category": "office",
      "categoryName": "Văn phòng & Vận hành",
      "title": "Lập Báo cáo tiến độ tuần (Weekly Report) gửi Lãnh đạo mô hình PPP",
      "description": "Báo cáo tiến độ chuẩn chỉnh theo mô hình Progress (Việc đã làm) - Plans (Kế hoạch tuần tới) - Problems (Vướng mắc & Đề xuất giải pháp).",
      "level": "Cơ bản",
      "tags": [
        "Báo cáo tuần",
        "Weekly Report",
        "PPP",
        "Báo cáo sếp"
      ],
      "prompt": "Bạn là Trợ lý Quản lý Dự án cấp cao.\nHãy giúp tôi viết một bản Báo cáo tuần (Weekly Report) gửi cho Ban Giám đốc theo mô hình PPP (Progress - Plans - Problems).\n\nThông tin đầu vào của tôi:\n- Vị trí của tôi: [Vị trí công việc]\n- Những việc đã hoàn thành trong tuần: [Liệt kê các việc đã làm xong kèm số liệu nếu có]\n- Kế hoạch tuần tới: [Các mục tiêu trọng tâm]\n- Khó khăn đang gặp phải: [Vướng mắc về tiến độ đối tác, ngân sách, nhân sự...]\n\nYêu cầu: Viết súc tích, đi thẳng vào số liệu, mỗi khó khăn phải có đề xuất hướng giải quyết đi kèm."
    }
  ],
  "tools": [
    {
      "id": "chatgpt",
      "name": "ChatGPT (OpenAI)",
      "category": "chatbot",
      "categoryLabel": "Trò chuyện & Trợ lý Đa năng",
      "badge": "Phổ biến nhất",
      "badgeColor": "var(--green)",
      "tagline": "Trợ lý AI toàn năng, dễ tiếp cận nhất cho mọi người dùng trên toàn thế giới.",
      "pricing": "Freemium",
      "freeTier": "Bản miễn phí dùng GPT-4o mini không giới hạn và GPT-4o giới hạn lượt",
      "strengths": [
        "Hệ sinh thái phong phú: Hỗ trợ tạo ảnh DALL-E, duyệt web, phân tích file dữ liệu",
        "Khả năng đàm thoại bằng giọng nói (Advanced Voice Mode) cực kỳ tự nhiên",
        "Hỗ trợ kho GPTs tùy biến khổng lồ từ cộng đồng"
      ],
      "weaknesses": [
        "Giới hạn lượt dùng GPT-4o ở tài khoản miễn phí vào giờ cao điểm",
        "Văn phong tiếng Việt đôi khi có chất dịch hơi cứng nhắc nếu không tinh chỉnh prompt"
      ],
      "bestFor": "Người mới bắt đầu, viết lách đa dụng, giải bài tập, làm việc văn phòng hàng ngày",
      "url": "https://chatgpt.com",
      "rating": "4.9 / 5.0"
    },
    {
      "id": "claude",
      "name": "Claude (Anthropic)",
      "category": "chatbot",
      "categoryLabel": "Trợ lý Tư duy & Viết lách",
      "badge": "Văn phong đỉnh cao",
      "badgeColor": "var(--orange)",
      "tagline": "AI có khả năng viết lách tiếng Việt mượt mà nhất và tư duy logic, lập trình siêu việt.",
      "pricing": "Freemium",
      "freeTier": "Miễn phí dùng Claude 3.5 Sonnet với số lượng tin nhắn giới hạn mỗi ngày",
      "strengths": [
        "Văn phong tiếng Việt tự nhiên, ấm áp, sâu sắc như người thật viết",
        "Khả năng đọc và hiểu tài liệu dài lên đến 200.000 tokens (cả cuốn sách dày)",
        "Tính năng Artifacts hiển thị tài liệu, bảng biểu và chạy code HTML/JS trực tiếp"
      ],
      "weaknesses": [
        "Số lượng tin nhắn miễn phí trong ngày tương đối ít",
        "Chưa tích hợp sẵn công cụ sinh ảnh"
      ],
      "bestFor": "Người làm nội dung, biên kịch, dịch thuật, lập trình viên và phân tích văn bản phức tạp",
      "url": "https://claude.ai",
      "rating": "4.9 / 5.0"
    },
    {
      "id": "gemini",
      "name": "Google Gemini",
      "category": "chatbot",
      "categoryLabel": "Hệ sinh thái Google & Dữ liệu thực",
      "badge": "Cập nhật realtime",
      "badgeColor": "var(--blue-dark)",
      "tagline": "AI tích hợp sâu với Google Search, YouTube, Google Docs, Drive và Gmail.",
      "pricing": "Freemium",
      "freeTier": "Miễn phí mô hình Gemini 1.5 Flash & Pro với giới hạn hào phóng",
      "strengths": [
        "Cửa sổ ngữ cảnh khổng lồ 1-2 triệu tokens: Đọc được cả video YouTube dài 1 tiếng",
        "Tích hợp tìm kiếm thông tin thời gian thực với độ chính xác cao",
        "Kết nối trực tiếp vào Google Workspace (Docs, Sheets, Gmail)"
      ],
      "weaknesses": [
        "Đôi khi kiểm duyệt câu trả lời hơi khắt khe",
        "Khả năng sáng tạo văn học đôi khi còn theo khuôn mẫu"
      ],
      "bestFor": "Học sinh, sinh viên, người nghiên cứu cần tra cứu tài liệu mới nhất và tích hợp Google Docs",
      "url": "https://gemini.google.com",
      "rating": "4.8 / 5.0"
    },
    {
      "id": "deepseek",
      "name": "DeepSeek",
      "category": "chatbot",
      "categoryLabel": "Mã nguồn mở & Suy luận sâu",
      "badge": "Tư duy toán & code",
      "badgeColor": "var(--purple-dark)",
      "tagline": "Cơn sốt AI mã nguồn mở với mô hình DeepSeek-R1 có tư duy suy luận logic ngang ngửa mô hình hàng đầu.",
      "pricing": "Miễn phí",
      "freeTier": "Hoàn toàn miễn phí sử dụng trên web và app",
      "strengths": [
        "Chế độ 'DeepThink' suy nghĩ từng bước minh bạch trước khi đưa ra kết luận",
        "Rất mạnh về giải toán khó, logic phức tạp và sửa lỗi lập trình",
        "Hoàn toàn miễn phí và không bị bóp băng thông"
      ],
      "weaknesses": [
        "Đôi khi server bị quá tải do lượng người dùng tăng đột biến",
        "Tính năng đính kèm file và đa phương tiện còn đơn giản"
      ],
      "bestFor": "Sinh viên ngành tự nhiên, lập trình viên, người thích suy luận logic sâu và chi phí 0đ",
      "url": "https://chat.deepseek.com",
      "rating": "4.8 / 5.0"
    },
    {
      "id": "perplexity",
      "name": "Perplexity AI",
      "category": "research",
      "categoryLabel": "Công cụ Tìm kiếm Thế hệ mới",
      "badge": "Thay thế Google",
      "badgeColor": "var(--green-dark)",
      "tagline": "Thay vì trả về 10 đường link xanh, Perplexity đọc hiểu và tổng hợp câu trả lời kèm nguồn trích dẫn.",
      "pricing": "Freemium",
      "freeTier": "Tìm kiếm cơ bản không giới hạn + 5 lượt Pro Search mỗi 4 tiếng",
      "strengths": [
        "Mọi thông tin đều có kèm số trích dẫn nguồn uy tín (Academic, News, Reddit)",
        "Tính năng Pro Search tự phân rã câu hỏi lớn thành nhiều câu hỏi nhỏ để tìm sâu",
        "Tạo được bộ sưu tập bài viết (Collections/Pages) rất gọn gàng"
      ],
      "weaknesses": [
        "Không tối ưu cho việc sáng tạo truyện hư cấu",
        "Bản trả phí Pro giá tương đối cao ($20/tháng)"
      ],
      "bestFor": "Người làm nghiên cứu, nhà báo, sinh viên làm luận văn cần tìm tài liệu chuẩn xác kèm nguồn",
      "url": "https://www.perplexity.ai",
      "rating": "4.9 / 5.0"
    },
    {
      "id": "notebooklm",
      "name": "Google NotebookLM",
      "category": "research",
      "categoryLabel": "Trợ lý Nghiên cứu Cá nhân",
      "badge": "Đột phá tóm tắt",
      "badgeColor": "var(--orange-dark)",
      "tagline": "Biến mọi tài liệu PDF, ghi chú thành trợ lý ảo riêng và tạo Podcast trò chuyện 2 người siêu chân thực.",
      "pricing": "Miễn phí 100%",
      "freeTier": "Hoàn toàn miễn phí với tài khoản Google cá nhân",
      "strengths": [
        "Không bị ảo giác: AI chỉ trả lời dựa trên đúng tài liệu mà bạn tải lên",
        "Tính năng 'Audio Overview': Biến hàng trăm trang tài liệu thành buổi trò chuyện Podcast 2 người cực hấp dẫn",
        "Trích dẫn số trang chính xác của đoạn trích"
      ],
      "weaknesses": [
        "Tính năng Podcast hiện tại nói bằng tiếng Anh (nhưng có thể đọc tài liệu tiếng Việt)",
        "Không dùng để trò chuyện phiếm bên ngoài tài liệu được"
      ],
      "bestFor": "Đọc giáo trình, ôn thi đại học, nghiên cứu luật, phân tích báo cáo tài chính doanh nghiệp",
      "url": "https://notebooklm.google.com",
      "rating": "4.9 / 5.0"
    },
    {
      "id": "cursor",
      "name": "Cursor Editor",
      "category": "coding",
      "categoryLabel": "Trình soạn thảo Code AI",
      "badge": "Số 1 cho Lập trình",
      "badgeColor": "var(--blue-dark)",
      "tagline": "IDE được fork từ VS Code với trí tuệ nhân tạo tích hợp sâu, tự động viết và sửa lỗi toàn bộ dự án.",
      "pricing": "Freemium",
      "freeTier": "14 ngày dùng thử Pro và 2000 lượt gợi ý code miễn phí mỗi tháng",
      "strengths": [
        "Composer cho phép tạo toàn bộ trang web chỉ bằng 1 câu lệnh",
        "Đọc hiểu toàn bộ codebase của dự án (Codebase Indexing)",
        "Giao diện quen thuộc y hệt Visual Studio Code, cài extension dễ dàng"
      ],
      "weaknesses": [
        "Yêu cầu người dùng có hiểu biết căn bản về cấu trúc dự án",
        "Bản Pro có phí $20/tháng"
      ],
      "bestFor": "Lập trình viên từ mới học đến chuyên nghiệp muốn tăng tốc độ viết code gấp 5 lần",
      "url": "https://cursor.com",
      "rating": "5.0 / 5.0"
    },
    {
      "id": "v0",
      "name": "v0 by Vercel",
      "category": "coding",
      "categoryLabel": "Tạo Giao diện Web bằng AI",
      "badge": "Frontend thần tốc",
      "badgeColor": "var(--ink)",
      "tagline": "Chỉ cần mô tả bằng lời, v0 sẽ vẽ giao diện người dùng (UI) tuyệt đẹp với React và Tailwind CSS.",
      "pricing": "Freemium",
      "freeTier": "Cấp tín dụng miễn phí hàng tháng để tạo giao diện",
      "strengths": [
        "Tạo ra các component chuẩn chỉnh chuẩn Figma và React",
        "Có thể xem trước ngay trên trình duyệt và copy mã nguồn ngay lập tức",
        "Hỗ trợ chỉnh sửa từng chi tiết nhỏ bằng cách chỉ vào phần tử"
      ],
      "weaknesses": [
        "Tập trung chuyên sâu cho Frontend (React/Next.js/Tailwind), chưa hỗ trợ backend",
        "Hết lượt miễn phí phải chờ sang tháng sau"
      ],
      "bestFor": "Designer, Product Manager, Web Developer muốn dựng bản mẫu (Prototype) trong vài phút",
      "url": "https://v0.dev",
      "rating": "4.7 / 5.0"
    },
    {
      "id": "midjourney",
      "name": "Midjourney",
      "category": "media",
      "categoryLabel": "Sáng tạo Hình ảnh Nghệ thuật",
      "badge": "Chất lượng đỉnh cao",
      "badgeColor": "var(--purple-dark)",
      "tagline": "Công cụ sinh ảnh AI có chất lượng nghệ thuật, thẩm mỹ thị giác và độ chi tiết cao nhất hiện nay.",
      "pricing": "Trả phí",
      "freeTier": "Không có bản miễn phí (Gói cơ bản từ $10/tháng)",
      "strengths": [
        "Gu thẩm mỹ tuyệt đỉnh: Ánh sáng, kết cấu da, màu sắc như ảnh chụp máy ảnh chuyên nghiệp",
        "Có giao diện web trực quan, không bắt buộc dùng Discord như trước",
        "Hỗ trợ giữ nguyên nhân vật (Character Consistency) qua nhiều bức ảnh"
      ],
      "weaknesses": [
        "Không có gói miễn phí vĩnh viễn",
        "Đòi hỏi kỹ năng mô tả prompt bằng tiếng Anh chi tiết để ra đúng ý"
      ],
      "bestFor": "Designer, họa sĩ ý tưởng, chuyên viên quảng cáo, người làm thương hiệu và thời trang",
      "url": "https://midjourney.com",
      "rating": "4.9 / 5.0"
    },
    {
      "id": "recraft",
      "name": "Recraft AI",
      "category": "media",
      "categoryLabel": "Thiết kế Đồ họa & Vector SVG",
      "badge": "Miễn phí cho Designer",
      "badgeColor": "var(--orange)",
      "tagline": "Tạo hình minh họa vector, icon, mockup 3D và đồ họa quảng cáo xuất file SVG vô hạn sắc nét.",
      "pricing": "Freemium",
      "freeTier": "Tặng tín dụng miễn phí mỗi ngày đủ cho nhu cầu cơ bản",
      "strengths": [
        "Tạo được file Vector (.SVG) phóng to không bao giờ vỡ hạt",
        "Kiểm soát bảng màu thương hiệu cực kỳ chuẩn xác",
        "Có công cụ xóa nền, mở rộng khung hình (Outpainting) ngay trên canvas"
      ],
      "weaknesses": [
        "Chất lượng ảnh chụp người thật không chân thực bằng Midjourney",
        "Tài khoản miễn phí ảnh sẽ hiển thị công khai trong thư viện"
      ],
      "bestFor": "UI/UX Designer, Marketing làm banner, người cần tạo icon, hình minh họa slide thuyết trình",
      "url": "https://www.recraft.ai",
      "rating": "4.8 / 5.0"
    },
    {
      "id": "kling",
      "name": "Kling AI",
      "category": "media",
      "categoryLabel": "Sản xuất Video AI Đột phá",
      "badge": "Video chân thực",
      "badgeColor": "var(--green-dark)",
      "tagline": "Biến hình ảnh hoặc câu chữ thành đoạn video chuyển động mượt mà với hiệu ứng vật lý chân thực.",
      "pricing": "Freemium",
      "freeTier": "Tặng 66 credits miễn phí mỗi ngày để tạo video ngắn",
      "strengths": [
        "Mô phỏng chuyển động vật lý, biểu cảm khuôn mặt và cử chỉ rất mượt mà",
        "Hỗ trợ tính năng Start Frame & End Frame để kiểm soát diễn biến video",
        "Thời lượng video có thể kéo dài đến 10 giây mỗi đoạn"
      ],
      "weaknesses": [
        "Thời gian chờ xuất video ở gói miễn phí có thể lâu vào giờ cao điểm",
        "Đôi khi các chuyển động quá nhanh có hiện tượng méo chi tiết"
      ],
      "bestFor": "Nhà sáng tạo nội dung TikTok/YouTube Shorts, nhà làm phim độc lập và quảng cáo sản phẩm",
      "url": "https://klingai.com",
      "rating": "4.7 / 5.0"
    },
    {
      "id": "elevenlabs",
      "name": "ElevenLabs",
      "category": "media",
      "categoryLabel": "Giọng đọc AI & Nhân bản Giọng",
      "badge": "Giọng nói số 1",
      "badgeColor": "var(--blue-dark)",
      "tagline": "Công nghệ chuyển văn bản thành giọng nói (Text-to-Speech) truyền cảm, tự nhiên như con người.",
      "pricing": "Freemium",
      "freeTier": "10.000 ký tự miễn phí mỗi tháng",
      "strengths": [
        "Giọng đọc tiếng Việt tự nhiên đến kinh ngạc, có nhấn nhá, thở, ngắt nghỉ đúng chỗ",
        "Khả năng nhân bản giọng nói (Voice Cloning) chỉ từ một đoạn ghi âm ngắn",
        "Hỗ trợ lồng tiếng tự động cho video sang nhiều thứ tiếng khác nhau"
      ],
      "weaknesses": [
        "10.000 ký tự miễn phí khá nhanh hết đối với video dài",
        "Cần chú ý vấn đề bản quyền khi nhân bản giọng nói của người khác"
      ],
      "bestFor": "Làm video review, podcast, sách nói, lồng tiếng video quảng cáo và thuyết minh",
      "url": "https://elevenlabs.io",
      "rating": "4.9 / 5.0"
    }
  ]
};