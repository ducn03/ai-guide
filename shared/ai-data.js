window.AI_DATABASE = {
  "prompts": [
    {
      "id": "hr-01",
      "category": "hr",
      "categoryName": "Hành chính - Nhân sự",
      "tool": "Claude / ChatGPT",
      "title": "Viết tin tuyển dụng (JD) gần gũi, hút người làm được việc",
      "description": "Thay vì liệt kê khô khan như bản nội quy, mẫu này nhấn vào công việc thật hàng ngày và cơ hội phát triển.",
      "level": "Cơ bản",
      "tags": [
        "HR",
        "Tuyển dụng",
        "JD"
      ],
      "prompt": "Bạn là Trưởng phòng Tuyển dụng có 10 năm kinh nghiệm, giọng văn hiện đại, chân thành và không sáo rỗng.\nHãy viết giúp tôi 1 bài đăng tuyển dụng cho vị trí: [Tên vị trí, VD: Chuyên viên Content Marketing].\n\nThông tin thật của công ty:\n- Địa điểm & giờ làm: [Địa chỉ văn phòng, giờ làm việc]\n- Thu nhập: [Lương cứng + thưởng hiệu quả]\n- Yêu cầu bắt buộc: [3 kỹ năng quan trọng nhất cần làm được ngay]\n- Điểm dễ thương của môi trường: [VD: Đồng nghiệp trẻ, hỗ trợ ăn trưa, không hay họp vặt]\n\nViết gọn thành 4 phần:\n1. Mở đầu 2-3 câu chạm đúng mong muốn của người tìm việc.\n2. Hàng ngày bạn sẽ làm những việc gì (5 gạch đầu dòng sát thực tế).\n3. Yêu cầu (tách rõ phần Bắt buộc và phần Điểm cộng ưu tiên).\n4. Quyền lợi và cách gửi hồ sơ."
    },
    {
      "id": "hr-02",
      "category": "hr",
      "categoryName": "Hành chính - Nhân sự",
      "tool": "Claude / ChatGPT",
      "title": "Lọc nhanh CV ứng viên và gợi ý câu hỏi phỏng vấn",
      "description": "Đỡ tốn công đọc thủ công hàng chục hồ sơ. Nhớ xóa tên thật, số điện thoại và email của ứng viên trước khi dán vào AI.",
      "level": "Cơ bản",
      "tags": [
        "Lọc CV",
        "Phỏng vấn",
        "HR"
      ],
      "prompt": "Bạn là Chuyên viên Tuyển dụng kỹ tính và công tâm. Hãy đọc yêu cầu công việc (JD) và hồ sơ ứng viên dưới đây rồi đánh giá mức độ phù hợp giúp tôi:\n\n=== YÊU CẦU CÔNG VIỆC ===\n[Dán nội dung JD]\n\n=== HỒ SƠ ỨNG VIÊN (ĐÃ XÓA THÔNG TIN CÁ NHÂN) ===\n[Dán nội dung CV]\n\nTrả lời ngắn gọn gồm 4 mục:\n1. Điểm phù hợp (thang 100%) kèm 3 lý do chính.\n2. Bảng đối chiếu: | Yêu cầu vị trí | Kinh nghiệm thật trong CV | Đánh giá (Đạt / Thiếu / Tốt hơn mong đợi) |\n3. 3 điểm còn mập mờ trong CV cần hỏi lại cho rõ.\n4. Gợi ý 3 câu hỏi tình huống thực tế dành riêng cho ứng viên này."
    },
    {
      "id": "hr-03",
      "category": "hr",
      "categoryName": "Hành chính - Nhân sự",
      "tool": "Claude",
      "title": "Viết thư cảm ơn & từ chối ứng viên khéo léo",
      "description": "Từ chối lịch sự để ứng viên vẫn giữ thiện cảm với thương hiệu tuyển dụng của công ty.",
      "level": "Cơ bản",
      "tags": [
        "Email",
        "HR",
        "Tuyển dụng"
      ],
      "prompt": "Bạn là Chuyên viên Nhân sự tinh tế. Hãy viết giúp tôi 1 email cảm ơn và từ chối ứng viên cho vị trí [Tên vị trí] sau vòng phỏng vấn.\n- Điểm ứng viên làm tốt: [VD: Thái độ cầu thị, am hiểu thị trường]\n- Lý do chưa phù hợp lần này: [VD: Công ty cần người có thêm kinh nghiệm chạy ngân sách lớn]\n\nYêu cầu: Giọng chân thành, tôn trọng thời gian của ứng viên, tuyệt đối không dùng lời lẽ rập khuôn lạnh lùng, giữ cửa mở cho các cơ hội sau. Độ dài dưới 130 chữ."
    },
    {
      "id": "mkt-01",
      "category": "marketing",
      "categoryName": "Marketing & Nội dung",
      "tool": "Claude / ChatGPT",
      "title": "Lên lịch đăng bài Facebook / TikTok cho cả tuần",
      "description": "Đỡ bí ý tưởng mỗi tuần, cân bằng giữa bài chia sẻ mẹo hay, kể chuyện hậu trường và bài bán hàng.",
      "level": "Cơ bản",
      "tags": [
        "Content",
        "Social Media",
        "Marketing"
      ],
      "prompt": "Bạn là Trưởng nhóm Nội dung nhiều kinh nghiệm trên mạng xã hội Việt Nam.\nHãy lập giúp tôi bảng kế hoạch đăng bài 7 ngày (Thứ 2 đến Chủ nhật) cho sản phẩm/dịch vụ: [Tên sản phẩm].\nKhách hàng mục tiêu: [Độ tuổi, công việc, vấn đề họ hay than phiền].\n\nLưu ý: Đừng ngày nào cũng đăng bài bán hàng. Xen kẽ tự nhiên giữa: chia sẻ mẹo hữu ích, kể chuyện hậu trường tạo niềm tin, giải đáp thắc mắc khách hay hỏi và bài chốt bán.\nTrình bày dạng bảng gồm các cột:\n| Thứ | Mục tiêu | Câu mở đầu 3 giây gây tò mò | Tóm tắt nội dung | Định dạng (Video ngắn / Bộ ảnh / Bài ngắn) | Lời kêu gọi cuối bài |"
    },
    {
      "id": "mkt-02",
      "category": "marketing",
      "categoryName": "Marketing & Nội dung",
      "tool": "Claude / ChatGPT",
      "title": "Viết kịch bản Video ngắn 45–60 giây (TikTok / Reels)",
      "description": "Chia sẵn góc quay, lời nói miệng và dòng chữ hiện trên màn hình cho team media bấm máy ngay.",
      "level": "Trung cấp",
      "tags": [
        "TikTok",
        "Reels",
        "Kịch bản"
      ],
      "prompt": "Bạn là đạo diễn chuyên làm video ngắn hút tương tác trên TikTok và Reels.\nHãy viết kịch bản 1 video dọc dài 45-60 giây về chủ đề: [Chủ đề hoặc tính năng nổi bật của sản phẩm].\n\nChia thành bảng 4 cột: | Thời gian | Lời nói miệng | Cảnh quay gì | Chữ chạy trên màn hình |\nYêu cầu:\n- 3 giây đầu: Đưa ra 3 gợi ý câu mở đầu thật đời, đánh đúng nỗi bực hoặc tò mò của người xem để họ dừng lại.\n- Đoạn giữa (4-45s): Giải thích nhanh gọn, cứ 3-5 giây đổi cảnh quay một lần cho đỡ chán.\n- Đoạn cuối (45-60s): Kêu gọi bình luận hoặc bấm giỏ hàng thật tự nhiên.\nGiọng nói: Đời thường như hai người bạn nói chuyện, cấm viết kiểu văn quảng cáo truyền hình."
    },
    {
      "id": "mkt-03",
      "category": "marketing",
      "categoryName": "Marketing & Nội dung",
      "tool": "Claude",
      "title": "Đọc bình luận của khách để tìm ý tưởng viết bài bán hàng",
      "description": "Dán mấy chục bình luận hoặc đánh giá thật của khách hàng vào, AI sẽ rút ra đúng câu chữ khiến khách chốt đơn.",
      "level": "Trung cấp",
      "tags": [
        "Insight",
        "Marketing",
        "Khách hàng"
      ],
      "prompt": "Bạn là chuyên gia nghiên cứu tâm lý người mua hàng.\nDưới đây là loạt đánh giá và bình luận thật của khách hàng (kể cả khen lẫn chê) về sản phẩm [Tên sản phẩm]:\n\"\"\"\n[Dán 15-30 bình luận khách hàng vào đây]\n\"\"\"\n\nHãy đọc kỹ và trích ra giúp tôi:\n1. 3 lý do thật sự khiến khách hài lòng và muốn mua lại (trích nguyên những từ ngữ bình dân khách hay dùng).\n2. 3 nỗi lo hoặc điểm khách hay chê nhất.\n3. Từ những lời nói thật đó, gợi ý 5 tiêu đề bài viết quảng cáo chạm đúng tâm lý khách hàng."
    },
    {
      "id": "sales-01",
      "category": "sales",
      "categoryName": "Kinh doanh & CSKH",
      "tool": "Claude / ChatGPT",
      "title": "Xử lý 3 câu từ chối quen thuộc nhất của khách hàng",
      "description": "Có sẵn cách đáp khéo khi khách chê giá cao, hẹn suy nghĩ thêm hoặc đang lấy hàng mối quen.",
      "level": "Cơ bản",
      "tags": [
        "Sales",
        "Xử lý từ chối",
        "Zalo"
      ],
      "prompt": "Bạn là chuyên gia đào tạo bán hàng khéo léo và hiểu tâm lý khách hàng Việt Nam.\nSản phẩm công ty tôi là: [Mô tả sản phẩm, giá bán và điểm hơn so với thị trường].\n\nHãy viết câu trả lời tự nhiên (dùng nhắn Zalo hoặc gọi điện) cho 3 câu khách hay nói nhất:\n1. \"Giá bên em cao hơn chỗ khác nhiều quá.\"\n2. \"Để anh/chị suy nghĩ thêm rồi có gì báo sau nhé.\"\n3. \"Bên anh đang lấy của mối quen rồi, không muốn đổi.\"\n\nMỗi tình huống đi theo 3 bước: Đồng cảm nhẹ nhàng -> Hỏi khéo 1 câu để hiểu băn khoăn thật -> Nêu giá trị xứng đáng và gợi ý bước tiếp theo nhẹ nhàng. Tuyệt đối không tranh cãi với khách."
    },
    {
      "id": "sales-02",
      "category": "sales",
      "categoryName": "Kinh doanh & CSKH",
      "tool": "Claude",
      "title": "Soạn tin nhắn xin lỗi và giữ chân khách khi có sự cố",
      "description": "Xử lý gọn gàng lúc giao hàng trễ, móp hộp hay nhầm món để khách nguôi giận và quay lại ủng hộ.",
      "level": "Cơ bản",
      "tags": [
        "CSKH",
        "Khiếu nại",
        "Zalo"
      ],
      "prompt": "Bạn là Trưởng bộ phận Chăm sóc Khách hàng tinh tế và có trách nhiệm.\nMột khách hàng đang rất bực vì sự cố: [Mô tả sự cố: giao trễ 2 ngày / giao nhầm món / hộp bị móp].\n\nHãy viết 1 tin nhắn Zalo/Email phản hồi khách đảm bảo:\n1. Xin lỗi thẳng thắn, nhận trách nhiệm về phía công ty (tuyệt đối không đổ lỗi cho shipper hay thời tiết).\n2. Báo rõ cách giải quyết dứt điểm trong [Thời gian cụ thể, VD: 2 giờ tới / chiều nay].\n3. Gửi kèm quà nhỏ hoặc mã giảm giá bù đắp thiện chí: [Mô tả ưu đãi].\n4. Ngắn dưới 130 chữ, giọng ấm áp, đọc vào thấy được tôn trọng ngay."
    },
    {
      "id": "sales-03",
      "category": "sales",
      "categoryName": "Kinh doanh & CSKH",
      "tool": "Claude / ChatGPT",
      "title": "Viết tin nhắn hỏi thăm khách cũ không bị cảm giác spam",
      "description": "Hâm nóng lại quan hệ với khách từng hỏi giá hoặc từng mua hàng mà không khiến họ thấy phiền.",
      "level": "Cơ bản",
      "tags": [
        "CSKH",
        "Follow-up",
        "Sales"
      ],
      "prompt": "Bạn là nhân viên kinh doanh khéo léo. Tôi cần nhắn Zalo hỏi thăm lại khách hàng [đã từng mua sản phẩm cách đây 1 tháng / đã từng hỏi giá tuần trước nhưng chưa chốt] về sản phẩm [Tên sản phẩm].\n\nViết giúp tôi 3 mẫu tin nhắn thật ngắn (dưới 50 chữ mỗi mẫu), tự nhiên như hỏi thăm bình thường, mang lại một chút giá trị hoặc sự quan tâm thật chứ không sỗ sàng thúc giục mua hàng."
    },
    {
      "id": "fin-01",
      "category": "finance",
      "categoryName": "Kế toán & Excel",
      "tool": "ChatGPT",
      "title": "Nhờ AI viết hộ công thức Excel / Google Sheets phức tạp",
      "description": "Không cần nhớ cấu trúc hàm khó, cứ kể tên từng cột và thứ bạn muốn tính bằng lời thường.",
      "level": "Cơ bản",
      "tags": [
        "Excel",
        "Google Sheets",
        "Công thức"
      ],
      "prompt": "Bạn là chuyên gia xử lý bảng tính Excel và Google Sheets.\nFile của tôi gồm các cột sau:\n- Cột A: [Mã đơn hàng]\n- Cột B: [Ngày bán (dd/mm/yyyy)]\n- Cột C: [Tên phòng ban hoặc nhân viên]\n- Cột D: [Số tiền]\n- Cột E: [Trạng thái (Đã thu tiền / Chưa thu / Đã hủy)]\n\nViệc tôi cần tính: [Mô tả bằng lời bình thường, VD: Tính tổng tiền ở Cột D của riêng phòng Kinh doanh trong tháng 10 mà trạng thái là Đã thu tiền].\n\nGửi giúp tôi:\n1. Công thức chuẩn để dán thẳng vào ô Excel (ghi rõ cả bản dùng dấu phẩy và dấu chấm phẩy nếu cần).\n2. Giải thích ngắn từng khúc trong công thức để tôi kiểm tra lại.\n3. Cách bọc hàm để nếu ô trống thì hiện số 0 chứ không báo lỗi #N/A."
    },
    {
      "id": "fin-02",
      "category": "finance",
      "categoryName": "Kế toán & Excel",
      "tool": "ChatGPT",
      "title": "Dọn sạch dữ liệu bẩn trong bảng Excel",
      "description": "Tách họ và tên, chuẩn hóa số điện thoại thiếu số 0, lọc bỏ khoảng trắng thừa hay tìm dòng bị trùng lặp.",
      "level": "Trung cấp",
      "tags": [
        "Excel",
        "Dữ liệu",
        "Kế toán"
      ],
      "prompt": "Tôi đang có một cột dữ liệu Excel bị lộn xộn ở Cột A (ví dụ: [dán 3-4 dòng mẫu dữ liệu giả lập, như '  nguyen van a - 912345678  ']).\nTôi muốn chuẩn hóa lại thành các cột sạch đẹp: [VD: Cột B viết hoa chữ cái đầu tên người, Cột C lấy riêng số điện thoại và thêm số 0 ở đầu nếu bị thiếu].\n\nHãy cho tôi công thức Excel tương ứng cho từng cột và hướng dẫn từng bước kéo công thức xuống hết bảng."
    },
    {
      "id": "fin-03",
      "category": "finance",
      "categoryName": "Kế toán & Excel",
      "tool": "ChatGPT / Claude",
      "title": "Đọc bảng số liệu doanh thu tìm điểm bất thường",
      "description": "Nhớ che tên khách hàng và nhân viên thật trước khi đưa số liệu lên để AI phân tích xu hướng tăng giảm.",
      "level": "Trung cấp",
      "tags": [
        "Báo cáo",
        "Doanh số",
        "Phân tích"
      ],
      "prompt": "Bạn là chuyên viên phân tích số liệu kinh doanh. Dưới đây là bảng doanh thu và chi phí (đã ẩn danh) của 3 tháng gần nhất:\n\"\"\"\n[Dán bảng số liệu vào đây]\n\"\"\"\n\nHãy đọc kỹ và tóm gọn lại cho buổi họp tuần gồm:\n1. 3 nhóm hàng/kênh bán tăng trưởng tốt nhất.\n2. 3 khoản chi hoặc nhóm hàng giảm sút bất thường cần chú ý.\n3. Gợi ý 3 câu hỏi quan trọng nhất ban quản lý nên đặt ra cho các bộ phận trong cuộc họp tới."
    },
    {
      "id": "office-01",
      "category": "office",
      "categoryName": "Họp hành & Văn phòng",
      "tool": "Claude / ChatGPT",
      "title": "Gom ghi chú cuộc họp thành bảng phân công việc rõ ràng",
      "description": "Ném đống ghi chép rời rạc sau buổi họp vào đây, 10 giây sau có ngay biên bản gửi cả nhóm.",
      "level": "Cơ bản",
      "tags": [
        "Họp giao ban",
        "Biên bản",
        "Văn phòng"
      ],
      "prompt": "Bạn là thư ký cuộc họp cẩn trọng và gọn gàng.\nDưới đây là toàn bộ ghi chép thô trong buổi họp hôm nay:\n\"\"\"\n[Dán ghi chép cuộc họp vào đây]\n\"\"\"\n\nHãy tóm gọn lại để gửi vào nhóm chat chung gồm 3 phần:\n1. 3 quyết định quan trọng nhất đã chốt được.\n2. Bảng phân công việc 4 cột: | STT | Việc cần làm | Người phụ trách chính | Hạn chót (Deadline) |\n3. Những vấn đề còn vướng chưa chốt được để nhắc lại vào buổi họp sau."
    },
    {
      "id": "office-02",
      "category": "office",
      "categoryName": "Họp hành & Văn phòng",
      "tool": "Claude / ChatGPT",
      "title": "Viết báo cáo tuần ngắn gọn gửi cấp trên",
      "description": "Tổng hợp việc đã xong, việc tuần tới và chỗ đang vướng cần hỗ trợ để sếp đọc 30 giây là nắm hết.",
      "level": "Cơ bản",
      "tags": [
        "Báo cáo tuần",
        "Văn phòng",
        "Email"
      ],
      "prompt": "Hãy giúp tôi sắp xếp các ý rời rạc dưới đây thành một bản báo cáo tuần gọn gàng gửi cấp trên:\n- Việc đã làm xong tuần này: [Liệt kê ý thô + con số nếu có]\n- Việc trọng tâm tuần tới: [Liệt kê]\n- Chỗ đang vướng cần hỗ trợ: [Liệt kê]\n\nTrình bày gọn thành 3 mục rõ ràng, dùng gạch đầu dòng ngắn, đi thẳng vào kết quả và đề xuất hướng xử lý cho từng chỗ vướng. Không viết dài dòng."
    },
    {
      "id": "office-03",
      "category": "office",
      "categoryName": "Họp hành & Văn phòng",
      "tool": "Claude / ChatGPT",
      "title": "Lên khung Slide thuyết trình PowerPoint từng trang",
      "description": "Đưa ý tưởng hoặc báo cáo dài vào, AI chia sẵn bố cục từng trang slide kèm gợi ý hình ảnh minh họa.",
      "level": "Trung cấp",
      "tags": [
        "Slide",
        "Thuyết trình",
        "PowerPoint"
      ],
      "prompt": "Tôi cần chuẩn bị một bài thuyết trình khoảng [số lượng, VD: 8-10] trang slide cho buổi [VD: báo cáo kế hoạch quý tới / giới thiệu sản phẩm cho đối tác].\nNội dung chính muốn truyền tải: [Mô tả ngắn hoặc dán dàn ý thô].\n\nHãy chia bố cục chi tiết từng trang slide giúp tôi gồm:\n- Tiêu đề trang slide (ngắn gọn, rõ ý chính)\n- 3-4 gạch đầu dòng nội dung hiển thị trên slide (ít chữ để người nghe dễ nhìn)\n- Gợi ý hình ảnh hoặc biểu đồ nên đặt bên cạnh cho đẹp mắt\n- 2 câu gợi ý lời nói dẫn dắt cho người thuyết trình."
    },
    {
      "id": "office-04",
      "category": "office",
      "categoryName": "Họp hành & Văn phòng",
      "tool": "Claude / ChatGPT",
      "title": "Đóng vai sếp hoặc khách hàng khó tính để tập phản biện",
      "description": "Tập dượt trước những cuộc họp căng thẳng, đàm phán tăng lương hay thuyết trình dự án quan trọng.",
      "level": "Trung cấp",
      "tags": [
        "Phản biện",
        "Luyện tập",
        "Kỹ năng"
      ],
      "prompt": "Hãy đóng vai một [vị khách hàng rất khó tính / giám đốc tài chính cực kỳ kỹ lưỡng].\nTôi chuẩn bị trình bày đề xuất sau: [Tóm tắt ngắn đề xuất của bạn].\n\nQuy tắc tập luyện:\n1. Đặt cho tôi từng câu hỏi vặn vẹo hóc búa một (tổng cộng 5 câu).\n2. Dừng lại đợi tôi trả lời xong rồi mới góp ý ngắn xem câu trả lời của tôi đã thuyết phục chưa, thiếu ý nào, sau đó mới hỏi tiếp câu sau.\nBắt đầu ngay câu hỏi số 1!"
    },
    {
      "id": "office-05",
      "category": "office",
      "categoryName": "Họp hành & Văn phòng",
      "tool": "Claude / ChatGPT",
      "title": "Tạo sẵn Bộ Hồ sơ Ngữ cảnh (Context Pack) dùng lại nhiều lần",
      "description": "Gom thông tin công ty, sản phẩm và giọng văn vào 1 tờ hồ sơ chuẩn; từ sau cứ tải file này lên đầu cuộc trò chuyện khỏi gõ lại.",
      "level": "Cơ bản",
      "tags": [
        "Context",
        "Thiết lập",
        "Tiết kiệm thời gian"
      ],
      "prompt": "Hãy giúp tôi phỏng vấn nhanh để đóng gói thành 1 file \"Hồ sơ Ngữ cảnh công việc\" (dài khoảng 1 trang A4, định dạng Markdown gọn gàng) để tôi lưu lại gửi cho AI đọc mỗi khi bắt đầu việc mới.\n\nHãy hỏi tôi lần lượt từng nhóm thông tin (mỗi lần chỉ hỏi 3 câu ngắn):\n1. Công ty tôi bán gì, điểm mạnh khác biệt và tệp khách hàng chính.\n2. Vị trí công việc của tôi và 3 đầu việc tôi làm lặp lại nhiều nhất.\n3. Giọng văn mong muốn và những từ ngữ / lỗi trình bày cần tuyệt đối tránh.\n\nSau khi tôi trả lời xong, hãy tổng hợp lại thành 1 bản Hồ sơ Ngữ cảnh hoàn chỉnh để tôi lưu về máy."
    },
    {
      "id": "office-06",
      "category": "office",
      "categoryName": "Họp hành & Văn phòng",
      "tool": "Claude (Artifacts) / ChatGPT",
      "title": "Biến bảng số liệu thành Báo cáo HTML đẹp mắt gửi sếp / xuất PDF",
      "description": "Tạo trang báo cáo có thẻ số liệu nổi bật, biểu đồ thanh và hộp nhận xét gọn gàng, mở thẳng bằng Chrome hoặc bấm Ctrl+P in ra PDF.",
      "level": "Trung cấp",
      "tags": [
        "HTML Report",
        "Báo cáo",
        "Trực quan"
      ],
      "prompt": "Bạn là chuyên gia trình bày báo cáo quản trị. Hãy biến toàn bộ số liệu (đã ẩn danh) dưới đây thành 1 file báo cáo HTML hoàn chỉnh, tự chạy độc lập (gộp sẵn CSS bên trong, không cần mạng vẫn xem đẹp, dùng font tiếng Việt dễ đọc, tông màu trang nhã).\n\nYêu cầu bố cục trên trang báo cáo:\n1. Tiêu đề báo cáo + kỳ báo cáo + 1 nhãn trạng thái nổi bật (VD: Vượt mục tiêu / Cần chú ý).\n2. Hàng 3 thẻ số liệu to rõ (KPI chính + tỷ lệ tăng/giảm so với kỳ trước).\n3. Biểu đồ thanh ngang so sánh tỷ trọng các nhóm/kênh bằng màu sắc hài hòa.\n4. Hai khung tóm tắt song song: Điểm sáng nổi bật & 2 việc cần xử lý ngay kỳ tới.\n5. Hỗ trợ in ra giấy A4 / lưu PDF (Ctrl + P) gọn gàng không bị cắt chữ.\n\n=== DỮ LIỆU BÁO CÁO ===\n[Dán bảng số liệu hoặc các gạch đầu dòng của bạn vào đây]"
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
