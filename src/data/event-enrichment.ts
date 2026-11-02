export interface EnrichedEventInfo {
  id: string;
  date: string;
  datePrecision: string;
  title: string;
  chapter: number;
  session: number;
  period: string;
  kind: string;
  location: string;
  context: string;
  keyPoints: string[];
  significance: string;
  quickSummary: string;
  commonMistakes: string;
  relatedEvents: string[];
}

export const EVENT_ENRICHMENT_MAP: Record<string, EnrichedEventInfo> = {
  "event-001": {
    "id": "event-001",
    "date": "1911-06-05",
    "datePrecision": "day",
    "title": "Nguyễn Ái Quốc ra đi tìm đường cứu nước",
    "chapter": 1,
    "session": 3,
    "period": "Trước năm 1930",
    "kind": "event",
    "location": "Bến Nhà Rồng, Sài Gòn",
    "context": "Đất nước chìm dưới ách đô hộ của thực dân Pháp. Các phong trào yêu nước theo khuynh hướng phong kiến (Cần Vương) và dân chủ tư sản (Đông Du, Duy Tân) đều lần lượt thất bại.",
    "keyPoints": [
      "Người thanh niên Nguyễn Tất Thành lên tàu Amiral Latouche-Tréville ra đi tìm đường cứu nước.",
      "Khác với các bậc tiền bối sang phương Đông (Nhật Bản, Trung Quốc), Người quyết định sang phương Tây, tìm hiểu bản chất của các nước tư bản thực dân.",
      "Khảo nghiệm thực tiễn: 'Dù màu da có khác nhau, trên đời này chỉ có hai giống người: giống người bóc lột và giống người bị bóc lột'."
    ],
    "significance": "Mở đầu quá trình khảo nghiệm thực tiễn và tìm kiếm con đường cứu nước đúng đắn cho dân tộc Việt Nam theo con đường cách mạng vô sản.",
    "quickSummary": "5/6/1911: Nguyễn Tất Thành rời bến Nhà Rồng, sang phương Tây tìm đường cứu nước mới.",
    "commonMistakes": "Dễ nhầm: Năm 1911 Bác chưa tiếp cận Chủ nghĩa Mác - Lênin (mãi đến tháng 7/1920 mới đọc Sơ thảo Luận cương của Lênin).",
    "relatedEvents": [
      "event-002",
      "event-003"
    ]
  },
  "event-002": {
    "id": "event-002",
    "date": "1925-06",
    "datePrecision": "month",
    "title": "Thành lập Hội Việt Nam Cách mạng Thanh niên",
    "chapter": 1,
    "session": 3,
    "period": "Trước năm 1930",
    "kind": "event",
    "location": "Quảng Châu, Trung Quốc",
    "context": "Sau khi tiếp thu Chủ nghĩa Mác - Lênin và tham gia sáng lập Đảng Cộng sản Pháp (1920), Nguyễn Ái Quốc về Quảng Châu (11/1924) để chuẩn bị các điều kiện thành lập Đảng.",
    "keyPoints": [
      "Thành lập Cộng sản đoàn (2/1925), làm nòng cốt thành lập Hội Việt Nam Cách mạng Thanh niên (6/1925).",
      "Xuất bản tuần báo 'Thanh niên' (số đầu ra ngày 21/6/1925) - cơ quan ngôn luận của Hội.",
      "Mở các lớp huấn luyện chính trị tại Quảng Châu, đào tạo cán bộ gửi đi học Trường Quân sự Hoàng Phố và Đại học Phương Đông (Liên Xô).",
      "Tập hợp bài giảng thành tác phẩm 'Đường Kách mệnh' (1927)."
    ],
    "significance": "Tổ chức quá độ tiền thân trực tiếp chuẩn bị về chính trị, tư tưởng và tổ chức cho sự ra đời của Đảng Cộng sản Việt Nam.",
    "quickSummary": "6/1925: Hội VN Cách mạng Thanh niên thành lập tại Quảng Châu, hạt nhân truyền bá Chủ nghĩa Mác - Lênin về nước.",
    "commonMistakes": "Dễ nhầm: Hội VN Cách mạng Thanh niên là tổ chức tiền thân, chưa phải là chính đảng cộng sản.",
    "relatedEvents": [
      "event-001",
      "event-003",
      "event-004"
    ]
  },
  "event-003": {
    "id": "event-003",
    "date": "1930-02-03",
    "datePrecision": "day",
    "title": "Thành lập Đảng Cộng sản Việt Nam",
    "chapter": 1,
    "session": 4,
    "period": "1930–1945",
    "kind": "event",
    "location": "Cửu Long (Hương Cảng, Trung Quốc)",
    "context": "Năm 1929, 3 tổ chức cộng sản ở Việt Nam (Đông Dương CS Đảng, An Nam CS Đảng, Đông Dương CS Liên đoàn) ra đời nhưng hoạt động biệt lập, tranh giành ảnh hưởng. Nguy cơ chia rẽ đòi hỏi phải thống nhất.",
    "keyPoints": [
      "Nguyễn Ái Quốc với tư cách phái viên Quốc tế Cộng sản triệu tập và chủ trì Hội nghị hợp nhất từ 6/1 đến 7/2/1930 (lấy ngày 3/2 làm ngày kỷ niệm).",
      "Tham dự gồm 2 đại biểu Đông Dương CS Đảng (Trịnh Đình Cửu, Nguyễn Đức Cảnh) và 2 đại biểu An Nam CS Đảng (Châu Văn Liêm, Nguyễn Thiệu).",
      "Thống nhất hợp nhất thành một chính đảng duy nhất lấy tên là ĐẢNG CỘNG SẢN VIỆT NAM.",
      "Thông qua Chánh cương vắn tắt, Sách lược vắn tắt do Nguyễn Ái Quốc soạn thảo."
    ],
    "significance": "Bước ngoặt vô cùng quan trọng của cách mạng Việt Nam, chấm dứt thời kỳ khủng hoảng sâu sắc về đường lối cứu nước và giai cấp lãnh đạo.",
    "quickSummary": "3/2/1930: Hội nghị thành lập Đảng Cộng sản Việt Nam tại Hương Cảng do Nguyễn Ái Quốc chủ trì.",
    "commonMistakes": "Dễ nhầm: Hội nghị thành lập Đảng ban đầu chỉ có đại biểu của Đông Dương CS Đảng và An Nam CS Đảng; Đông Dương CS Liên đoàn gia nhập sau (24/2/1930).",
    "relatedEvents": [
      "event-002",
      "event-004",
      "event-005"
    ]
  },
  "event-004": {
    "id": "event-004",
    "date": "1930-02",
    "datePrecision": "month",
    "title": "Cương lĩnh chính trị đầu tiên",
    "chapter": 1,
    "session": 4,
    "period": "1930–1945",
    "kind": "event",
    "location": "Cửu Long (Hương Cảng, Trung Quốc)",
    "context": "Hội nghị thành lập Đảng thảo luận và thông qua các văn kiện nền tảng đầu tiên xác định đường lối chiến lược cách mạng.",
    "keyPoints": [
      "Gồm các văn kiện: Chánh cương vắn tắt, Sách lược vắn tắt, Chương trình tóm tắt, Điều lệ vắn tắt do Nguyễn Ái Quốc khởi thảo.",
      "Chiến lược cách mạng: Làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản.",
      "Nhiệm vụ hàng đầu: Đánh đổ đế quốc Pháp và phong kiến tay sai, làm cho nước Nam hoàn toàn độc lập.",
      "Lực lượng: Công - nông là gốc, đồng thời liên lạc, lôi kéo tiểu tư sản, trí thức, trung nông, phú nông, trung tiểu địa chủ và tư sản dân tộc."
    ],
    "significance": "Cương lĩnh chính trị đầu tiên đúng đắn, sáng tạo, kết hợp nhuần nhuyễn quan điểm Mác - Lênin với thực tiễn Việt Nam, đặt độc lập dân tộc lên hàng đầu.",
    "quickSummary": "2/1930: Cương lĩnh chính trị đầu tiên do Nguyễn Ái Quốc soạn thảo, đặt nhiệm vụ giải phóng dân tộc lên trên hết.",
    "commonMistakes": "Dễ nhầm với Luận cương tháng 10/1930 của Trần Phú (Luận cương 10/1930 nhấn mạnh đấu tranh giai cấp và cách mạng ruộng đất hơn).",
    "relatedEvents": [
      "event-003",
      "event-007"
    ]
  },
  "event-005": {
    "id": "event-005",
    "date": "1930-02-24",
    "datePrecision": "day",
    "title": "Đông Dương Cộng sản Liên đoàn gia nhập Đảng",
    "chapter": 1,
    "session": 4,
    "period": "1930–1945",
    "kind": "event",
    "location": "Trung Kỳ, Việt Nam",
    "context": "Đông Dương Cộng sản Liên đoàn thành lập tháng 1/1930 tại Trung Kỳ, không kịp cử đại biểu dự Hội nghị Hương Cảng đầu tháng 2.",
    "keyPoints": [
      "Ngày 24/2/1930, theo đề nghị của Đông Dương Cộng sản Liên đoàn, Ban Chấp hành Trung ương lâm thời chấp thuận kết nạp.",
      "Hoàn tất trọn vẹn việc thống nhất 3 tổ chức cộng sản ở 3 miền vào một chính đảng duy nhất."
    ],
    "significance": "Đánh dấu sự thống nhất trọn vẹn về mặt tổ chức của phong trào cộng sản trên cả nước.",
    "quickSummary": "24/2/1930: Đông Dương CS Liên đoàn chính thức gia nhập ĐCSVN, hoàn tất thống nhất 3 tổ chức cộng sản.",
    "commonMistakes": "Dễ nhầm ngày: Hội nghị hợp nhất kết thúc 7/2/1930, nhưng đến 24/2/1930 tổ chức thứ 3 mới chính thức gia nhập.",
    "relatedEvents": [
      "event-003",
      "event-004"
    ]
  },
  "event-006": {
    "id": "event-006",
    "date": "1930-09-12",
    "datePrecision": "day",
    "title": "Biểu tình Hưng Nguyên trong phong trào 1930–1931",
    "chapter": 1,
    "session": 5,
    "period": "1930–1945",
    "kind": "event",
    "location": "Huyện Hưng Nguyên, tỉnh Nghệ An",
    "context": "Phong trào cách mạng 1930–1931 bùng nổ mạnh mẽ trên cả nước dưới sự lãnh đạo của Đảng, đặc biệt tại Nghệ An và Hà Tĩnh.",
    "keyPoints": [
      "Ngày 12/9/1930, khoảng 8.000 nông dân Hưng Nguyên biểu tình kéo về thị xã Vinh đòi giảm sưu thuế.",
      "Thực dân Pháp cho máy bay ném bom xả súng đàn áp dã man làm 217 người chết, 125 người bị thương.",
      "Sự đàn áp không dập tắt được phong trào mà thổi bùng ngọn lửa căm thù, dẫn tới sự ra đời của chính quyền Xô viết Nghệ - Tĩnh."
    ],
    "significance": "Đỉnh cao của phong trào cách mạng 1930–1931; ngày 12/9 được chọn là Ngày Xô viết Nghệ - Tĩnh.",
    "quickSummary": "12/9/1930: Cuộc biểu tình nông dân Hưng Nguyên - biểu tượng bất khuất của cao trào Xô viết Nghệ - Tĩnh.",
    "commonMistakes": "Dễ nhầm: Hưng Nguyên là cuộc biểu tình lớn tại Nghệ An, không phải ở Hà Tĩnh.",
    "relatedEvents": [
      "event-007",
      "event-008"
    ]
  },
  "event-007": {
    "id": "event-007",
    "date": "1930-10",
    "datePrecision": "month",
    "title": "Hội nghị Trung ương và Luận cương chính trị",
    "chapter": 1,
    "session": 5,
    "period": "1930–1945",
    "kind": "event",
    "location": "Hương Cảng, Trung Quốc",
    "context": "Tháng 10/1930, Ban Chấp hành Trung ương họp Hội nghị lần thứ nhất theo chỉ đạo của Quốc tế Cộng sản.",
    "keyPoints": [
      "Đổi tên Đảng thành ĐẢNG CỘNG SẢN ĐÔNG DƯƠNG.",
      "Bầu Ban Chấp hành Trung ương chính thức, đồng chí Trần Phú được bầu làm Tổng Bí thư đầu tiên của Đảng.",
      "Thông qua LUẬN CƯƠNG CHÍNH TRỊ do Trần Phú khởi thảo.",
      "Luận cương xác định mâu thuẫn giai cấp gay gắt, đặt nhiệm vụ chống phong kiến và chống đế quốc khăng khít nhau, coi công nông là động lực chính."
    ],
    "significance": "Kiện toàn tổ chức Trung ương và thông qua Luận cương chính trị, tuy nhiên Luận cương bộc lộ hạn chế khi chưa đặt nhiệm vụ giải phóng dân tộc lên hàng đầu.",
    "quickSummary": "10/1930: Hội nghị TW tại Hương Cảng, bầu Trần Phú làm Tổng Bí thư, thông qua Luận cương tháng 10.",
    "commonMistakes": "Dễ nhầm: Trần Phú là Tổng Bí thư đầu tiên được bầu tại Hội nghị TW tháng 10/1930, không phải Nguyễn Ái Quốc.",
    "relatedEvents": [
      "event-004",
      "event-008"
    ]
  },
  "event-008": {
    "id": "event-008",
    "date": "1935-03",
    "datePrecision": "month",
    "title": "Đại hội I của Đảng",
    "chapter": 1,
    "session": 5,
    "period": "1930–1945",
    "kind": "event",
    "location": "Ma Cao, Trung Quốc",
    "context": "Sau cao trào 1930–1931 bị khủng bố trắng, Đảng từng bước phục hồi hệ thống tổ chức nhờ sự kiên cường của các chiến sĩ cộng sản và sự hỗ trợ của Ban Chỉ huy ở ngoài của Đảng.",
    "keyPoints": [
      "Họp từ 27 đến 31/3/1935 tại Ma Cao (Trung Quốc).",
      "Đánh giá quá trình khôi phục tổ chức Đảng và phong trào quần chúng.",
      "Bầu Ban Chấp hành Trung ương, đồng chí Lê Hồng Phong được bầu làm Tổng Bí thư.",
      "Đề ra 3 nhiệm vụ trước mắt: Củng cố và phát triển Đảng; tranh thủ quần chúng rộng rãi; chống chiến tranh đế quốc."
    ],
    "significance": "Đánh dấu sự phục hồi hoàn toàn hệ thống tổ chức của Đảng từ Trung ương đến địa phương sau giai đoạn khủng bố trắng.",
    "quickSummary": "3/1935: Đại hội lần thứ I của Đảng tại Ma Cao, bầu Lê Hồng Phong làm Tổng Bí thư, khôi phục tổ chức.",
    "commonMistakes": "Dễ nhầm địa điểm: Đại hội I họp tại Ma Cao (Trung Quốc), không phải ở trong nước hay ở Hương Cảng.",
    "relatedEvents": [
      "event-007",
      "event-009"
    ]
  },
  "event-009": {
    "id": "event-009",
    "date": "1936-07",
    "datePrecision": "month",
    "title": "Chuyển hướng đấu tranh đòi dân sinh, dân chủ",
    "chapter": 1,
    "session": 6,
    "period": "1930–1945",
    "kind": "event",
    "location": "Thượng Hải, Trung Quốc",
    "context": "Chủ nghĩa phát xít đe dọa hòa bình thế giới. Đại hội VII Quốc tế Cộng sản (7/1935) chủ trương lập Mặt trận Nhân dân chống phát xít. Chính phủ Mặt trận Nhân dân Pháp lên cầm quyền.",
    "keyPoints": [
      "Hội nghị Ban Chấp hành Trung ương Đảng (7/1936) do Lê Hồng Phong chủ trì họp tại Thượng Hải.",
      "Chuyển hướng mục tiêu trước mắt: Tạm gác khẩu hiệu 'Đánh đổ đế quốc Pháp' và 'Tịch thu ruộng đất', chuyển sang đòi tự do, dân chủ, cơm áo, hòa bình.",
      "Hình thức đấu tranh: Chuyển từ bí mật sang kết hợp công khai, hợp pháp, nửa công khai, nửa hợp pháp.",
      "Thành lập Mặt trận Thống nhất Nhân dân Phản đế Đông Dương (sau đổi thành Mặt trận Dân chủ Đông Dương)."
    ],
    "significance": "Mở ra thời kỳ đấu tranh sôi nổi của phong trào dân chủ 1936–1939, cuộc tổng diễn tập thứ hai chuẩn bị cho Cách mạng Tháng Tám.",
    "quickSummary": "7/1936: Hội nghị TW tại Thượng Hải mở đầu phong trào đòi dân sinh, dân chủ 1936–1939.",
    "commonMistakes": "Dễ nhầm mục tiêu: Giai đoạn 1936-1939 đòi tự do, cơm áo, hòa bình, không đặt mục tiêu giành độc lập ngay.",
    "relatedEvents": [
      "event-008",
      "event-010",
      "event-011"
    ]
  },
  "event-010": {
    "id": "event-010",
    "date": "1938-03",
    "datePrecision": "month",
    "title": "Hội nghị Trung ương, kiện toàn lãnh đạo và mặt trận",
    "chapter": 1,
    "session": 6,
    "period": "1930–1945",
    "kind": "event",
    "location": "Bà Điểm (Hóc Môn, Gia Định)",
    "context": "Phong trào dân chủ phát triển sâu rộng, cần kiện toàn cơ quan lãnh đạo đầu não trong nước và củng cố mặt trận.",
    "keyPoints": [
      "Họp tháng 3/1938 tại Bà Điểm (Hóc Môn, Gia Định).",
      "Bầu đồng chí Nguyễn Văn Cừ làm Tổng Bí thư của Đảng (khi mới 26 tuổi).",
      "Quyết định đổi tên Mặt trận Thống nhất Nhân dân Phản đế thành Mặt trận Dân chủ Đông Dương.",
      "Tập hợp rộng rãi các tầng lớp nhân dân chống nguy cơ phát xít và phản động thuộc địa."
    ],
    "significance": "Khẳng định sự trưởng thành vượt bậc của đội ngũ lãnh đạo Đảng, tăng cường đoàn kết mặt trận dân chủ rộng lớn.",
    "quickSummary": "3/1938: Hội nghị TW tại Bà Điểm, bầu Nguyễn Văn Cừ làm Tổng Bí thư, lập Mặt trận Dân chủ Đông Dương.",
    "commonMistakes": "Dễ nhầm: Nguyễn Văn Cừ được bầu làm TBT năm 1938 tại Hội nghị TW ở Bà Điểm, tác giả cuốn 'Tự chỉ trích' nổi tiếng.",
    "relatedEvents": [
      "event-009",
      "event-011"
    ]
  },
  "event-011": {
    "id": "event-011",
    "date": "1939-11",
    "datePrecision": "month",
    "title": "Hội nghị Trung ương 6, chuyển hướng giải phóng dân tộc",
    "chapter": 1,
    "session": 7,
    "period": "1930–1945",
    "kind": "event",
    "location": "Bà Điểm (Hóc Môn, Gia Định)",
    "context": "Chiến tranh thế giới thứ hai bùng nổ (9/1939). Pháp đàn áp tàn khốc, thủ tiêu các quyền tự do dân chủ, vơ vét sức người sức của phục vụ chiến tranh.",
    "keyPoints": [
      "Tổng Bí thư Nguyễn Văn Cừ chủ trì Hội nghị BCH Trung ương Đảng tháng 11/1939.",
      "Xác định nhiệm vụ: Đặt nhiệm vụ GIẢI PHÓNG DÂN TỘC lên hàng đầu.",
      "Tạm gác khẩu hiệu cách mạng ruộng đất, chỉ tịch thu ruộng đất của đế quốc và tay sai phản bội.",
      "Chuyển từ Mặt trận Dân chủ sang Mặt trận Thống nhất Dân tộc Phản đế Đông Dương.",
      "Chuyển hoàn toàn hoạt động vào bí mật, chuẩn bị điều kiện vũ trang khởi nghĩa."
    ],
    "significance": "Mở đầu sự chuyển hướng chỉ đạo chiến lược của Đảng, đưa nhiệm vụ giải phóng dân tộc lên trên hết, trước hết.",
    "quickSummary": "11/1939: Hội nghị TW 6 tại Bà Điểm mở đầu chuyển hướng chiến lược, đặt giải phóng dân tộc lên hàng đầu.",
    "commonMistakes": "Dễ nhầm: Hội nghị TW 6 (11/1939) MỞ ĐẦU chuyển hướng, còn Hội nghị TW 8 (5/1941) mới HOÀN CHỈNH chuyển hướng.",
    "relatedEvents": [
      "event-010",
      "event-014",
      "event-017"
    ]
  },
  "event-012": {
    "id": "event-012",
    "date": "1940-09",
    "datePrecision": "month",
    "title": "Khởi nghĩa Bắc Sơn",
    "chapter": 1,
    "session": 8,
    "period": "1930–1945",
    "kind": "event",
    "location": "Huyện Bắc Sơn, tỉnh Lạng Sơn",
    "context": "22/9/1940, phát xít Nhật đánh chiếm Lạng Sơn, quân Pháp thua chạy qua châu Bắc Sơn.",
    "keyPoints": [
      "Ngày 27/9/1940, Đảng bộ Bắc Sơn lãnh đạo nhân dân nổi dậy tước vũ khí tàn quân Pháp, giải tán chính quyền địch.",
      "Chiếm đồn Mỏ Nhài, thành lập chính quyền cách mạng.",
      "Pháp và Nhật thỏa hiệp quay lại đàn áp khốc liệt.",
      "Dưới sự chỉ đạo của Đảng, Đội du kích Bắc Sơn được thành lập, duy trì căn cứ địa."
    ],
    "significance": "Tiếng súng báo hiệu thời kỳ đấu tranh vũ trang mới, hạt nhân đầu tiên của lực lượng vũ trang cách mạng.",
    "quickSummary": "27/9/1940: Khởi nghĩa Bắc Sơn nổ ra, thành lập Đội du kích Bắc Sơn.",
    "commonMistakes": "Dễ nhầm: Khởi nghĩa Bắc Sơn nổ ra trước Khởi nghĩa Nam Kỳ (9/1940 vs 11/1940).",
    "relatedEvents": [
      "event-011",
      "event-013",
      "event-014"
    ]
  },
  "event-013": {
    "id": "event-013",
    "date": "1940-11",
    "datePrecision": "month",
    "title": "Khởi nghĩa Nam Kỳ",
    "chapter": 1,
    "session": 8,
    "period": "1930–1945",
    "kind": "event",
    "location": "Nam Bộ",
    "context": "Binh lính người Việt bị Pháp bắt sang Campuchia làm bia đỡ đạn chống quân Thái Lan; mâu thuẫn căm hờn dâng cao tột độ.",
    "keyPoints": [
      "Đêm 22 rạng sáng 23/11/1940, cuộc khởi nghĩa bùng nổ ở hầu khắp các tỉnh Nam Bộ (Gia Định, Chợ Lớn, Mỹ Tho, Vĩnh Long...).",
      "Lần đầu tiên cờ đỏ sao vàng xuất hiện trong các cuộc biểu tình và tại các cơ quan chính quyền cách mạng.",
      "Do kế hoạch bị lộ và lệnh hoãn của Trung ương không vào kịp, thực dân Pháp khủng bố dã man, bắt giết nhiều đồng chí lãnh đạo (Nguyễn Văn Cừ, Phan Đăng Lưu, Hà Huy Tập, Võ Văn Tần, Nguyễn Thị Minh Khai)."
    ],
    "significance": "Thể hiện tinh thần quật khởi phi thường của nhân dân Nam Bộ; để lại bài học xương máu về chớp thời cơ khởi nghĩa.",
    "quickSummary": "23/11/1940: Khởi nghĩa Nam Kỳ bùng nổ oanh liệt, lần đầu xuất hiện cờ đỏ sao vàng.",
    "commonMistakes": "Dễ nhầm cờ đỏ sao vàng: Lần đầu tiên cờ đỏ sao vàng xuất hiện chính thức trong Khởi nghĩa Nam Kỳ (11/1940).",
    "relatedEvents": [
      "event-012",
      "event-014",
      "event-017"
    ]
  },
  "event-014": {
    "id": "event-014",
    "date": "1940-11",
    "datePrecision": "month",
    "title": "Hội nghị Trung ương 7",
    "chapter": 1,
    "session": 7,
    "period": "1930–1945",
    "kind": "event",
    "location": "Đình Bảng (Từ Sơn, Bắc Ninh)",
    "context": "Tình hình Đông Dương biến chuyển mau lẹ sau khởi nghĩa Bắc Sơn và trước thềm khởi nghĩa Nam Kỳ.",
    "keyPoints": [
      "Họp tháng 11/1940 tại làng Đình Bảng (Từ Sơn, Bắc Ninh) do Ban Thường vụ TW triệu tập.",
      "Xác định phát xít Nhật - Pháp là hai kẻ thù nguy hại trước mắt của nhân dân Đông Dương.",
      "Quyết định duy trì Đội du kích Bắc Sơn, xây dựng căn cứ địa cách mạng.",
      "Quyết định cử đại biểu vào Nam hoãn khởi nghĩa Nam Kỳ (tuy nhiên đại biểu đến nơi thì khởi nghĩa đã nổ ra)."
    ],
    "significance": "Tiếp tục phát triển đường lối của Hội nghị TW 6, duy trì ngọn lửa vũ trang Bắc Sơn làm mầm mống căn cứ sau này.",
    "quickSummary": "11/1940: Hội nghị TW 7 tại Đình Bảng, duy trì du kích Bắc Sơn, cử người hoãn khởi nghĩa Nam Kỳ.",
    "commonMistakes": "Dễ nhầm vị trí: Hội nghị TW 7 họp tại Đình Bảng (Bắc Ninh), giữa TW 6 (Bà Điểm) và TW 8 (Pác Bó).",
    "relatedEvents": [
      "event-011",
      "event-013",
      "event-017"
    ]
  },
  "event-015": {
    "id": "event-015",
    "date": "1941-01",
    "datePrecision": "month",
    "title": "Binh biến Đô Lương",
    "chapter": 1,
    "session": 8,
    "period": "1930–1945",
    "kind": "event",
    "location": "Đô Lương, Vinh (Nghệ An)",
    "context": "Tinh thần yêu nước và căm thù đế quốc Pháp lan rộng trong binh lính người Việt phục vụ trong quân đội Pháp.",
    "keyPoints": [
      "Ngày 13/1/1941, Đội Cung (Nguyễn Văn Cung) lãnh đạo binh lính người Việt nổi dậy tại đồn Đô Lương.",
      "Chiếm đồn, sau đó kéo về thành phố Vinh đánh phá nhưng bị quân Pháp vây bắt.",
      "Cuộc nổi dậy nhanh chóng bị dập tắt."
    ],
    "significance": "Cùng với Bắc Sơn và Nam Kỳ, Binh biến Đô Lương là 'tiếng súng báo hiệu cho cuộc khởi nghĩa toàn quốc'.",
    "quickSummary": "13/1/1941: Binh biến Đô Lương do Đội Cung lãnh đạo bùng nổ tại Nghệ An.",
    "commonMistakes": "Dễ nhầm tính chất: Binh biến Đô Lương do binh sĩ người Việt tự phát nổi dậy, chưa có sự lãnh đạo chặt chẽ của Đảng bộ địa phương.",
    "relatedEvents": [
      "event-012",
      "event-013",
      "event-016"
    ]
  },
  "event-016": {
    "id": "event-016",
    "date": "1941-01-28",
    "datePrecision": "day",
    "title": "Nguyễn Ái Quốc về nước",
    "chapter": 1,
    "session": 7,
    "period": "1930–1945",
    "kind": "event",
    "location": "Cột mốc 108, Pác Bó (Hà Quảng, Cao Bằng)",
    "context": "Sau 30 năm bôn ba khắp năm châu bốn biển, lãnh tụ Nguyễn Ái Quốc nhận định thời cơ cách mạng đang đến gần.",
    "keyPoints": [
      "Ngày 28/1/1941 (mùng 2 Tết Tân Tỵ), Nguyễn Ái Quốc vượt qua mốc 108 biên giới Việt - Trung về đến Pác Bó, Cao Bằng.",
      "Người ở và làm việc tại hang Cốc Bó, trực tiếp chỉ đạo phong trào cách mạng cả nước.",
      "Lựa chọn Cao Bằng làm căn cứ địa đầu tiên vì có địa thế hiểm trở và phong trào quần chúng vững chắc."
    ],
    "significance": "Sự kiện có ý nghĩa đặc biệt trọng đại, chấm dứt 30 năm xa Tổ quốc, Người trực tiếp lãnh đạo cách mạng Việt Nam đi tới thắng lợi của Cách mạng Tháng Tám.",
    "quickSummary": "28/1/1941: Nguyễn Ái Quốc về nước tại mốc 108 Pác Bó (Cao Bằng) sau 30 năm bôn ba.",
    "commonMistakes": "Dễ nhầm ngày: Bác về nước ngày 28/1/1941, không phải năm 1940 hay 1942.",
    "relatedEvents": [
      "event-001",
      "event-017",
      "event-019"
    ]
  },
  "event-017": {
    "id": "event-017",
    "date": "1941-05",
    "datePrecision": "month",
    "title": "Hội nghị Trung ương 8, chủ trương thành lập Việt Minh",
    "chapter": 1,
    "session": 7,
    "period": "1930–1945",
    "kind": "event",
    "location": "Lán Khuổi Nặm, Pác Bó (Cao Bằng)",
    "context": "Chiến tranh thế giới thứ hai bước sang năm thứ 3. Nguyễn Ái Quốc về nước và triệu tập Hội nghị Ban Chấp hành Trung ương lần thứ 8.",
    "keyPoints": [
      "Họp từ 10 đến 19/5/1941 do Nguyễn Ái Quốc chủ trì.",
      "Hoàn chỉnh việc chuyển hướng chỉ đạo chiến lược: Đặt quyền lợi dân tộc lên trên hết, trước hết.",
      "Thành lập VIỆT NAM ĐỘC LẬP ĐỒNG MINH (gọi tắt là Mặt trận Việt Minh) ngày 19/5/1941.",
      "Xác định nhiệm vụ trung tâm của toàn Đảng, toàn dân là CHUẨN BỊ KHỞI NGHĨA VŨ TRANG.",
      "Bầu đồng chí Trường Chinh làm Tổng Bí thư.",
      "Chủ trương khởi nghĩa từng phần tiến lên Tổng khởi nghĩa."
    ],
    "significance": "Hội nghị có ý nghĩa quyết định, hoàn chỉnh đường lối giải phóng dân tộc, dẫn trực tiếp đến thắng lợi của Cách mạng Tháng Tám 1945.",
    "quickSummary": "5/1941: Hội nghị TW 8 tại Pác Bó hoàn chỉnh chuyển hướng chiến lược, thành lập Mặt trận Việt Minh.",
    "commonMistakes": "Dễ nhầm: Hội nghị TW 8 bầu Trường Chinh làm Tổng Bí thư (không phải Nguyễn Ái Quốc). Bác là lãnh tụ chủ trì Hội nghị.",
    "relatedEvents": [
      "event-011",
      "event-016",
      "event-021",
      "event-024"
    ]
  },
  "event-018": {
    "id": "event-018",
    "date": "1943",
    "datePrecision": "year",
    "title": "Đề cương về văn hóa Việt Nam",
    "chapter": 1,
    "session": 8,
    "period": "1930–1945",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Đảng cần một định hướng chiến lược trên mặt trận tư tưởng, văn hóa để tập hợp giới trí thức và văn nghệ sĩ tham gia giải phóng dân tộc.",
    "keyPoints": [
      "Do Tổng Bí thư Trường Chinh soạn thảo, được Ban Thường vụ Trung ương thông qua đầu năm 1943.",
      "Xác định văn hóa là một trong ba mặt trận (chính trị, kinh tế, văn hóa).",
      "Đề ra 3 nguyên tắc vận động của cuộc vận động văn hóa mới: DÂN TỘC HÓA, ĐẠI CHÚNG HÓA, KHOA HỌC HÓA."
    ],
    "significance": "Cương lĩnh văn hóa đầu tiên của Đảng, soi đường cho sự phát triển của nền văn hóa cứu quốc và văn hóa mới Việt Nam.",
    "quickSummary": "1943: Đề cương về văn hóa Việt Nam của Trường Chinh với 3 nguyên tắc: Dân tộc, Đại chúng, Khoa học.",
    "commonMistakes": "Dễ nhầm 3 nguyên tắc: Dân tộc hóa - Đại chúng hóa - Khoa học hóa (không phải hiện đại hóa hay quốc tế hóa).",
    "relatedEvents": [
      "event-017",
      "event-079"
    ]
  },
  "event-019": {
    "id": "event-019",
    "date": "1944-12-22",
    "datePrecision": "day",
    "title": "Thành lập Đội Việt Nam Tuyên truyền Giải phóng quân",
    "chapter": 1,
    "session": 8,
    "period": "1930–1945",
    "kind": "event",
    "location": "Khu rừng Trần Hưng Đạo (Nguyên Bình, Cao Bằng)",
    "context": "Phong trào chiến tranh du kích và các căn cứ địa mở rộng đòi hỏi phải thành lập đội quân chủ lực đầu tiên theo chỉ thị của Hồ Chí Minh.",
    "keyPoints": [
      "Thành lập ngày 22/12/1944 theo chỉ thị của Chủ tịch Hồ Chí Minh, do đồng chí Võ Nguyên Giáp trực tiếp chỉ huy.",
      "Biên chế ban đầu gồm 34 chiến sĩ với 34 khẩu súng các loại.",
      "Phương châm: 'Chính trị trọng hơn quân sự', 'Tuyên truyền trọng hơn tác chiến'.",
      "Ngay sau khi thành lập đã lập nên chiến công Phai Khắt và Nà Ngần (25 và 26/12/1944)."
    ],
    "significance": "Tiền thân trực tiếp của Quân đội nhân dân Việt Nam anh hùng; đánh dấu sự ra đời của lực lượng vũ trang cách mạng tập trung.",
    "quickSummary": "22/12/1944: Thành lập Đội VN Tuyên truyền Giải phóng quân gồm 34 chiến sĩ tại Cao Bằng do Võ Nguyên Giáp chỉ huy.",
    "commonMistakes": "Dễ nhầm số quân ban đầu: Có đúng 34 chiến sĩ (29 khẩu súng và vũ khí thô sơ ban đầu). Ngày này trở thành Ngày thành lập QĐNDVN.",
    "relatedEvents": [
      "event-017",
      "event-021",
      "event-023"
    ]
  },
  "event-020": {
    "id": "event-020",
    "date": "1945-03-09",
    "datePrecision": "day",
    "title": "Nhật đảo chính Pháp",
    "chapter": 1,
    "session": 9,
    "period": "1930–1945",
    "kind": "event",
    "location": "Toàn cõi Đông Dương",
    "context": "Thế chiến II bước vào giai đoạn kết thúc, quân Đồng minh đổ bộ đánh Nhật ở Thái Bình Dương; thực dân Pháp ở Đông Dương nhăm nhe cơ hội hành động.",
    "keyPoints": [
      "Tối 9/3/1945, Nhật nổ súng bất ngờ tấn công quân Pháp trên toàn cõi Đông Dương.",
      "Quân Pháp nhanh chóng đầu hàng sau vài giờ chống cự yếu ớt.",
      "Nhật độc chiếm Đông Dương, lập nên chính phủ bù nhìn Trần Trọng Kim."
    ],
    "significance": "Tạo ra cuộc khủng hoảng chính trị sâu sắc ở Đông Dương, loại bỏ một kẻ thù nguy hiểm (thực dân Pháp), mở đường cho thời cơ khởi nghĩa.",
    "quickSummary": "9/3/1945: Nhật đảo chính lật đổ Pháp, độc chiếm Đông Dương.",
    "commonMistakes": "Dễ nhầm kẻ thù: Sau ngày 9/3/1945, kẻ thù chính duy nhất của cách mạng ta chỉ còn là PHÁT XÍT NHẬT.",
    "relatedEvents": [
      "event-021",
      "event-023"
    ]
  },
  "event-021": {
    "id": "event-021",
    "date": "1945-03-12",
    "datePrecision": "day",
    "title": "Chỉ thị Nhật – Pháp bắn nhau và hành động của chúng ta",
    "chapter": 1,
    "session": 9,
    "period": "1930–1945",
    "kind": "event",
    "location": "Đình Bảng (Từ Sơn, Bắc Ninh)",
    "context": "Ngay trong đêm Nhật đảo chính Pháp (9/3/1945), Ban Thường vụ TW Đảng họp khẩn cấp dưới sự chủ trì của Tổng Bí thư Trường Chinh.",
    "keyPoints": [
      "Ban hành Chỉ thị lịch sử ngày 12/3/1945: 'Nhật - Pháp bắn nhau và hành động của chúng ta'.",
      "Xác định kẻ thù cụ thể trước mắt là PHÁT XÍT NHẬT.",
      "Thay khẩu hiệu 'Đánh đuổi phát xít Nhật - Pháp' bằng khẩu hiệu 'Đánh đuổi phát xít Nhật'.",
      "Phát động cao trào 'Kháng Nhật cứu nước' mạnh mẽ làm tiền đề cho Tổng khởi nghĩa.",
      "Đưa ra khẩu hiệu thiết thực nhất: 'Phá kho thóc Nhật để giải quyết nạn đói'."
    ],
    "significance": "Kim chỉ nam chỉ đạo kịp thời cho phong trào kháng Nhật, biến nạn đói khủng khiếp thành ngọn lửa cách mạng bùng cháy.",
    "quickSummary": "12/3/1945: Ban Thường vụ TW ra Chỉ thị 'Nhật - Pháp bắn nhau và hành động của chúng ta', phát động Kháng Nhật cứu nước.",
    "commonMistakes": "Dễ nhầm ngày: Nhật đảo chính đêm 9/3/1945; Chỉ thị chính thức ký ban hành ngày 12/3/1945.",
    "relatedEvents": [
      "event-020",
      "event-022",
      "event-023"
    ]
  },
  "event-022": {
    "id": "event-022",
    "date": "1945-06-04",
    "datePrecision": "day",
    "title": "Thành lập Khu giải phóng",
    "chapter": 1,
    "session": 9,
    "period": "1930–1945",
    "kind": "event",
    "location": "Tân Trào (Sơn Dương, Tuyên Quang)",
    "context": "Cao trào kháng Nhật cứu nước phát triển mạnh, nhiều chiến khu và căn cứ địa được mở rộng.",
    "keyPoints": [
      "Ngày 4/6/1945, thành lập KHU GIẢI PHÓNG gồm 6 tỉnh Việt Bắc: Cao Bằng, Bắc Kạn, Lạng Sơn, Hà Giang, Tuyên Quang, Thái Nguyên (gọi tắt là Cao - Bắc - Lạng - Hà - Tuyên - Thái).",
      "Tân Trào được chọn làm thủ đô của Khu giải phóng.",
      "Thực hiện 10 chính sách lớn của Việt Minh, trở thành hình ảnh thu nhỏ của nước Việt Nam mới."
    ],
    "significance": "Căn cứ địa chính của cách mạng cả nước, bàn đạp vững chắc cho cuộc Tổng khởi nghĩa Tháng Tám.",
    "quickSummary": "4/6/1945: Thành lập Khu giải phóng Việt Bắc gồm 6 tỉnh, thủ đô là Tân Trào.",
    "commonMistakes": "Dễ nhớ 6 tỉnh: Cao - Bắc - Lạng - Hà - Tuyên - Thái (không có Quảng Ninh hay Yên Bái).",
    "relatedEvents": [
      "event-021",
      "event-023",
      "event-024"
    ]
  },
  "event-023": {
    "id": "event-023",
    "date": "1945-08-13",
    "datePrecision": "day",
    "title": "Quân lệnh số 1, phát lệnh Tổng khởi nghĩa",
    "chapter": 1,
    "session": 9,
    "period": "1930–1945",
    "kind": "event",
    "location": "Tân Trào (Tuyên Quang)",
    "context": "15/8/1945, Nhật Hoàng tuyên bố đầu hàng Đồng minh không điều kiện. Quân Nhật ở Đông Dương tê liệt hoang mang.",
    "keyPoints": [
      "Đêm 13/8/1945, Ủy ban Khởi nghĩa toàn quốc được thành lập và ban bố QUÂN LỆNH SỐ 1.",
      "Chính thức phát động Tổng khởi nghĩa giành chính quyền trong cả nước.",
      "Hội nghị toàn quốc của Đảng họp tại Tân Trào (14 - 15/8/1945) quyết định lãnh đạo toàn dân khởi nghĩa trước khi quân Đồng minh vào tước khí giới phát xít Nhật."
    ],
    "significance": "Nắm bắt chính xác tuyệt đối thời cơ 'nghìn năm có một', ra lệnh tổng khởi nghĩa thần tốc giành thắng lợi.",
    "quickSummary": "13/8/1945: Ban bố Quân lệnh số 1 phát lệnh Tổng khởi nghĩa giành chính quyền trong toàn quốc.",
    "commonMistakes": "Dễ nhầm: Quân lệnh số 1 phát ra đêm 13/8/1945, trước khi Quốc dân Đại hội Tân Trào khai mạc (16/8).",
    "relatedEvents": [
      "event-020",
      "event-024",
      "event-025"
    ]
  },
  "event-024": {
    "id": "event-024",
    "date": "1945-08-16",
    "datePrecision": "day",
    "title": "Quốc dân Đại hội Tân Trào",
    "chapter": 1,
    "session": 9,
    "period": "1930–1945",
    "kind": "event",
    "location": "Đình Tân Trào (Sơn Dương, Tuyên Quang)",
    "context": "Không khí chuẩn bị khởi nghĩa sục sôi trong cả nước, cần sự đồng lòng của toàn thể đại biểu các giới dân tộc.",
    "keyPoints": [
      "Khai mạc ngày 16/8/1945 tại đình Tân Trào với hơn 60 đại biểu từ Bắc - Trung - Nam, kiều bào và các đảng phái.",
      "Tán thành chủ trương Tổng khởi nghĩa của Đảng.",
      "Thông qua 10 chính sách lớn của Việt Minh.",
      "Cử ra ỦY BAN DÂN TỘC GIẢI PHÓNG VIỆT NAM (tức Chính phủ Cách mạng lâm thời) do đồng chí Hồ Chí Minh làm Chủ tịch.",
      "Quy định Quốc kỳ (cờ đỏ sao vàng) và Quốc ca (bài Tiến quân ca)."
    ],
    "significance": "Được ví như Hội nghị Diên Hồng thứ hai của dân tộc; đặt cơ sở pháp lý và chính quyền đầu tiên cho nước Việt Nam mới.",
    "quickSummary": "16/8/1945: Quốc dân Đại hội Tân Trào thông qua lệnh Tổng khởi nghĩa, cử UB Dân tộc Giải phóng do Hồ Chí Minh làm Chủ tịch.",
    "commonMistakes": "LƯU Ý EDITORIAL NOTE 01: Slide ghi Ủy ban kháng chiến tại Quốc dân Đại hội; tên chính xác là ỦY BAN DÂN TỘC GIẢI PHÓNG VIỆT NAM.",
    "relatedEvents": [
      "event-023",
      "event-025"
    ]
  },
  "event-025": {
    "id": "event-025",
    "date": "1945-09-02",
    "datePrecision": "day",
    "title": "Tuyên ngôn Độc lập",
    "chapter": 1,
    "session": 9,
    "period": "1930–1945",
    "kind": "event",
    "location": "Quảng trường Ba Đình, Hà Nội",
    "context": "Sau thắng lợi thần tốc của Tổng khởi nghĩa ở Hà Nội (19/8), Huế (23/8), Sài Gòn (25/8) và vua Bảo Đại thoái vị (30/8).",
    "keyPoints": [
      "Chủ tịch Hồ Chí Minh thay mặt Chính phủ lâm thời đọc bản TUYÊN NGÔN ĐỘC LẬP.",
      "Tuyên bố với toàn thể quốc dân đồng bào và toàn thế giới: Nước Việt Nam Dân chủ Cộng hòa ra đời.",
      "Khẳng định quyền tự do, bình đẳng thiêng liêng của mọi dân tộc trích từ Tuyên ngôn Độc lập Mỹ (1776) và Tuyên ngôn Nhân quyền Pháp (1789).",
      "Ý chí sắt đá: 'Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy'."
    ],
    "significance": "Khai sinh nước Việt Nam Dân chủ Cộng hòa; chấm dứt hơn 80 năm ách đô hộ của thực dân Pháp và hàng nghìn năm chế độ phong kiến.",
    "quickSummary": "2/9/1945: Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Ba Đình, khai sinh nước VNDCCH.",
    "commonMistakes": "Thứ tự khởi nghĩa 4 tỉnh giành chính quyền sớm nhất (18/8/1945): Bắc Giang, Hải Dương, Hà Tĩnh, Quảng Nam.",
    "relatedEvents": [
      "event-024",
      "event-026",
      "event-027"
    ]
  },
  "event-026": {
    "id": "event-026",
    "date": "1945-09-23",
    "datePrecision": "day",
    "title": "Nam Bộ kháng chiến",
    "chapter": 2,
    "session": 11,
    "period": "1930–1945",
    "kind": "event",
    "location": "Sài Gòn và khắp các tỉnh Nam Bộ",
    "context": "Được sự giúp sức của quân đội Anh vào giải giáp quân Nhật, thực dân Pháp trắng trợn nổ súng đánh chiếm Sài Gòn hòng tái chiếm nước ta.",
    "keyPoints": [
      "Đêm 22 rạng sáng 23/9/1945, thực dân Pháp nổ súng tấn công trụ sở Ủy ban Hành chính Nam Bộ.",
      "Ủy ban Kháng chiến Nam Bộ lập tức phát động toàn dân đứng lên kháng chiến cứu nước.",
      "Tiếng súng mở màn cho cuộc kháng chiến trường kỳ gian khổ bảo vệ độc lập tự do.",
      "Trung ương Đảng và Chính phủ cử các đoàn quân Nam tiến chi viện sức người sức của cho miền Nam ruột thịt."
    ],
    "significance": "Thể hiện ý chí 'thà hy sinh tất cả chứ nhất định không chịu mất nước'; khẳng định danh hiệu vẻ vang: 'Nam Bộ là thành đồng Tổ quốc'.",
    "quickSummary": "23/9/1945: Thực dân Pháp nổ súng xâm lược Sài Gòn, mở đầu cuộc Kháng chiến chống Pháp ở Nam Bộ.",
    "commonMistakes": "Dễ nhầm thời gian: Nam Bộ kháng chiến từ ngày 23/9/1945 (chỉ 3 tuần sau Quốc khánh 2/9). Toàn quốc kháng chiến là 19/12/1946.",
    "relatedEvents": [
      "event-025",
      "event-027",
      "event-032"
    ]
  },
  "event-027": {
    "id": "event-027",
    "date": "1945-11-25",
    "datePrecision": "day",
    "title": "Chỉ thị Kháng chiến kiến quốc",
    "chapter": 2,
    "session": 11,
    "period": "1930–1945",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Chính quyền non trẻ đứng trước tình thế hiểm nghèo 'ngàn cân treo sợi tóc': giặc đói, giặc dốt, giặc ngoại xâm (quân Tưởng ở miền Bắc, quân Pháp ở miền Nam).",
    "keyPoints": [
      "Ban Thường vụ Trung ương Đảng ra Chỉ thị 'Kháng chiến kiến quốc' ngày 25/11/1945.",
      "Xác định tính chất cách mạng: Vẫn là cuộc cách mạng giải phóng dân tộc.",
      "Kẻ thù chính: Xác định rõ kẻ thù chính lúc này là THỰC DÂN PHÁP XÂM LƯỢC.",
      "Đề ra 4 nhiệm vụ cấp bách: Củng cố chính quyền; chống thực dân Pháp xâm lược; bài trừ nội phản; cải thiện đời sống nhân dân.",
      "Chủ trương đối ngoại khôn khéo: 'Hoa - Việt thân thiện' đối với quân Tưởng ở miền Bắc và 'Độc lập về chính trị, nhân nhượng về kinh tế' với Pháp ở miền Nam."
    ],
    "significance": "Văn kiện chiến lược chỉ đạo kịp thời giúp chính quyền cách mạng vượt qua những tháng ngày thử thách khắc nghiệt nhất.",
    "quickSummary": "25/11/1945: Chỉ thị Kháng chiến kiến quốc xác định kẻ thù chính là thực dân Pháp, đề ra 4 nhiệm vụ cấp bách.",
    "commonMistakes": "Dễ nhầm kẻ thù trong Chỉ thị: Dù quân Tưởng đông hơn ở miền Bắc nhưng kẻ thù chính được xác định là THỰC DÂN PHÁP.",
    "relatedEvents": [
      "event-026",
      "event-028",
      "event-029"
    ]
  },
  "event-028": {
    "id": "event-028",
    "date": "1946-01-06",
    "datePrecision": "day",
    "title": "Tổng tuyển cử bầu Quốc hội",
    "chapter": 2,
    "session": 11,
    "period": "1945–1954",
    "kind": "event",
    "location": "Toàn quốc Việt Nam",
    "context": "Cần nhanh chóng hợp hiến hóa chính quyền cách mạng, khẳng định vị thế pháp lý của Nhà nước Việt Nam Dân chủ Cộng hòa trước quốc tế.",
    "keyPoints": [
      "Ngày 6/1/1946, cuộc Tổng tuyển cử bầu Quốc hội khóa I diễn ra trên phạm vi toàn quốc.",
      "Bất chấp bom đạn của Pháp ở miền Nam và sự khiêu khích của quân Tưởng ở miền Bắc, 89% cử tri cả nước đã tham gia bỏ phiếu.",
      "Bầu ra 333 đại biểu Quốc hội, Chủ tịch Hồ Chí Minh trúng cử với số phiếu cao nhất (98,4%) tại Hà Nội."
    ],
    "significance": "Thắng lợi khẳng định quyền làm chủ thực sự của nhân dân; tạo lập cơ sở pháp lý vững chắc cho chính quyền non trẻ.",
    "quickSummary": "6/1/1946: Tổng tuyển cử đầu tiên bầu Quốc hội khóa I của nước Việt Nam Dân chủ Cộng hòa.",
    "commonMistakes": "Dễ nhầm số đại biểu: 333 đại biểu được bầu chính thức (sau mở rộng thêm 70 ghế không qua bầu cử cho Việt Quốc, Việt Cách để đại đoàn kết).",
    "relatedEvents": [
      "event-027",
      "event-029",
      "event-031"
    ]
  },
  "event-029": {
    "id": "event-029",
    "date": "1946-03-06",
    "datePrecision": "day",
    "title": "Hiệp định Sơ bộ",
    "chapter": 2,
    "session": 11,
    "period": "1945–1954",
    "kind": "event",
    "location": "Hà Nội",
    "context": "28/2/1946, Pháp và Tưởng ký Hiệp ước Hoa - Pháp thỏa thuận để Pháp ra Bắc thay Tưởng. Ta đứng trước tình thế chọn đánh Pháp ngay hay tạm hòa hoãn.",
    "keyPoints": [
      "Ban Thường vụ TW chọn sách lược: 'Hòa để tiến', ký Hiệp định Sơ bộ ngày 6/3/1946 giữa Hồ Chí Minh và đại diện Pháp Sainteny.",
      "Pháp công nhận Việt Nam Dân chủ Cộng hòa là một quốc gia tự do có chính phủ, nghị viện, quân đội và tài chính riêng.",
      "Ta đồng ý cho 15.000 quân Pháp ra miền Bắc thay thế quân Tưởng và phải rút dần trong vòng 5 năm."
    ],
    "significance": "Sách lược ngoại giao vô cùng tài tình: Đẩy nhanh 20 vạn quân Tưởng về nước, tránh đụng độ một lúc với hai kẻ thù, tranh thủ thời gian hòa hoãn quý báu để củng cố lực lượng.",
    "quickSummary": "6/3/1946: Ký Hiệp định Sơ bộ Việt - Pháp, thực hiện sách lược 'Hòa để tiến', đuổi 20 vạn quân Tưởng.",
    "commonMistakes": "Dễ nhầm thuật ngữ: Hiệp định Sơ bộ Pháp chỉ công nhận ta là 'quốc gia tự do' (không phải 'quốc gia độc lập hoàn toàn').",
    "relatedEvents": [
      "event-028",
      "event-030",
      "event-032"
    ]
  },
  "event-030": {
    "id": "event-030",
    "date": "1946-09-14",
    "datePrecision": "day",
    "title": "Tạm ước Việt – Pháp",
    "chapter": 2,
    "session": 11,
    "period": "1945–1954",
    "kind": "event",
    "location": "Fontainebleau / Paris, Pháp",
    "context": "Hội nghị Fontainebleau thất bại do lập trường thực dân ngoan cố của Pháp; nguy cơ chiến tranh cận kề.",
    "keyPoints": [
      "Chủ tịch Hồ Chí Minh nán lại Pháp và ngày 14/9/1946 ký bản Tạm ước với Bộ trưởng Hải ngoại Pháp Marius Moutet.",
      "Ta tiếp tục nhân nhượng cho Pháp một số quyền lợi về kinh tế và văn hóa ở Việt Nam.",
      "Pháp cam kết ngừng bắn ở Nam Bộ và thả tù chính trị."
    ],
    "significance": "Kéo dài thời gian hòa bình thêm vài tháng quý báu (đến tháng 12/1946) để quân và dân ta khẩn trương chuẩn bị kháng chiến toàn quốc.",
    "quickSummary": "14/9/1946: Chủ tịch Hồ Chí Minh ký Tạm ước Việt - Pháp, kéo dài thời gian chuẩn bị lực lượng.",
    "commonMistakes": "Dễ nhầm người ký: Bác Hồ trực tiếp ký Tạm ước 14/9 với Marius Moutet tại Paris.",
    "relatedEvents": [
      "event-029",
      "event-031",
      "event-032"
    ]
  },
  "event-031": {
    "id": "event-031",
    "date": "1946-11-09",
    "datePrecision": "day",
    "title": "Thông qua Hiến pháp",
    "chapter": 2,
    "session": 11,
    "period": "1945–1954",
    "kind": "event",
    "location": "Nhà hát Lớn Hà Nội",
    "context": "Kỳ họp thứ hai Quốc hội khóa I cần thông qua đạo luật cơ bản đầu tiên của nhà nước độc lập.",
    "keyPoints": [
      "Ngày 9/11/1946, Quốc hội thông qua bản HIẾN PHÁP NĂM 1946 - Hiến pháp đầu tiên của nước Việt Nam.",
      "Khẳng định nguyên tắc: Nước Việt Nam là một nước dân chủ cộng hòa, tất cả quyền bính thuộc về toàn thể nhân dân không phân biệt nòi giống, gái trai, giai cấp, tôn giáo."
    ],
    "significance": "Văn bản lập hiến lịch sử, đặt nền móng pháp chế dân chủ cộng hòa vững chắc.",
    "quickSummary": "9/11/1946: Quốc hội khóa I thông qua Hiến pháp đầu tiên của nước Việt Nam Dân chủ Cộng hòa.",
    "commonMistakes": "Ngày 9/11 trở thành Ngày Pháp luật Việt Nam hàng năm.",
    "relatedEvents": [
      "event-028",
      "event-032"
    ]
  },
  "event-032": {
    "id": "event-032",
    "date": "1946-12-19",
    "datePrecision": "day",
    "title": "Toàn quốc kháng chiến",
    "chapter": 2,
    "session": 12,
    "period": "1945–1954",
    "kind": "event",
    "location": "Làng Vạn Phúc (Hà Đông) & Toàn quốc",
    "context": "Pháp gửi tối hậu thư đòi tước vũ khí của tự vệ Hà Nội. Khả năng nhân nhượng đã cạn kiệt.",
    "keyPoints": [
      "Ngày 18 và 19/12/1946, Ban Thường vụ TW họp tại Vạn Phúc (Hà Đông) quyết định phát động Toàn quốc kháng chiến.",
      "Tối 19/12/1946, Đài Tiếng nói Việt Nam phát đi Lời kêu gọi Toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh: 'Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ...'.",
      "Đường lối kháng chiến: TOÀN DÂN, TOÀN DIỆN, TRƯỜNG KỲ, TỰ LỰC CÁNH SINH VÀ TRANH THỦ SỰ ỦNG HỘ QUỐC TẾ."
    ],
    "significance": "Mở đầu cuộc kháng chiến chống thực dân Pháp hào hùng suốt 9 năm kết thúc bằng chiến thắng Điện Biên Phủ.",
    "quickSummary": "19/12/1946: Phát động Toàn quốc kháng chiến với đường lối: Toàn dân, toàn diện, trường kỳ, tự lực cánh sinh.",
    "commonMistakes": "Dễ nhầm các văn kiện đường lối kháng chiến: Chỉ thị Toàn dân kháng chiến (12/12/1946), Lời kêu gọi (19/12/1946), tác phẩm Kháng chiến nhất định thắng lợi của Trường Chinh (1947).",
    "relatedEvents": [
      "event-030",
      "event-033",
      "event-034"
    ]
  },
  "event-033": {
    "id": "event-033",
    "date": "1947",
    "datePrecision": "year",
    "title": "Chiến dịch Việt Bắc Thu – Đông",
    "chapter": 2,
    "session": 12,
    "period": "1945–1954",
    "kind": "event",
    "location": "Căn cứ địa Việt Bắc",
    "context": "Thu Đông 1947, tướng Valluy huy động 15.000 quân tinh nhuệ Pháp mở cuộc tấn công bất ngờ vào căn cứ địa Việt Bắc hòng chụp bắt cơ quan đầu não kháng chiến.",
    "keyPoints": [
      "Ngày 15/10/1947, Ban Thường vụ TW ra Chỉ thị 'Phải phá tan cuộc tấn công mùa Đông của giặc Pháp'.",
      "Trận đánh kéo dài 75 ngày đêm kiên cường (kết thúc 21/12/1947).",
      "Chiến thắng vang dội trên Sông Lô, Đoan Hùng, đường số 4 (Đèo Bông Lau).",
      "Tiêu diệt hàng ngàn tên địch, bảo vệ tuyệt đối an toàn cơ quan đầu não."
    ],
    "significance": "Chiến dịch phản công lớn đầu tiên; đánh bại hoàn toàn chiến lược 'đánh nhanh, thắng nhanh', buộc Pháp phải chuyển sang đánh lâu dài.",
    "quickSummary": "Thu Đông 1947: Chiến dịch Việt Bắc (75 ngày đêm), đập tan âm mưu đánh nhanh thắng nhanh của Pháp, bảo vệ an toàn đầu não.",
    "commonMistakes": "Việt Bắc 1947 là chiến dịch PHẢN CÔNG, không phải chiến dịch TIẾN CÔNG CHỦ ĐỘNG.",
    "relatedEvents": [
      "event-032",
      "event-034"
    ]
  },
  "event-034": {
    "id": "event-034",
    "date": "1950",
    "datePrecision": "year",
    "title": "Chiến dịch Biên giới Thu – Đông",
    "chapter": 2,
    "session": 12,
    "period": "1945–1954",
    "kind": "event",
    "location": "Tuyến đường số 4, biên giới Cao Bằng - Lạng Sơn",
    "context": "Năm 1949 cách mạng Trung Quốc thắng lợi. Pháp thi hành Kế hoạch Rơ-ve (Revers) nhằm khóa chặt biên giới Việt - Trung.",
    "keyPoints": [
      "Tháng 6/1950, Ban Thường vụ TW quyết định mở Chiến dịch Biên giới Thu Đông 1950.",
      "Chủ tịch Hồ Chí Minh trực tiếp ra mặt trận quan sát chỉ đạo.",
      "Đánh trận mở màn then chốt tiêu diệt cứ điểm Đông Khê (16-18/9/1950).",
      "Tiêu diệt và bắt sống gần 1 vạn quân Pháp, giải phóng dải biên giới dài 750km."
    ],
    "significance": "Chiến dịch tiến công quy mô lớn đầu tiên do ta chủ động mở; khai thông biên giới Việt - Trung; giành quyền CHỦ ĐỘNG CHIẾN LƯỢC trên chiến trường chính Bắc Bộ.",
    "quickSummary": "Thu Đông 1950: Chiến dịch Biên giới, khai thông biên giới Việt - Trung, giành quyền chủ động chiến lược.",
    "commonMistakes": "Biên giới 1950 là chiến dịch TIẾN CÔNG ĐẦU TIÊN của ta, khác với Việt Bắc 1947 là phản công.",
    "relatedEvents": [
      "event-033",
      "event-035",
      "event-037"
    ]
  },
  "event-035": {
    "id": "event-035",
    "date": "1951-02",
    "datePrecision": "month",
    "title": "Đại hội II, Đảng Lao động Việt Nam hoạt động công khai",
    "chapter": 2,
    "session": 13,
    "period": "1945–1954",
    "kind": "event",
    "location": "Vinh Quang (Chiêm Hóa, Tuyên Quang)",
    "context": "Cuộc kháng chiến chuyển sang giai đoạn mới, cần củng cố vai trò lãnh đạo trực tiếp và công khai của Đảng.",
    "keyPoints": [
      "Họp từ 11 đến 19/2/1951 tại Chiêm Hóa (Tuyên Quang) - Đại hội đầu tiên họp trong nước.",
      "Quyết định đưa Đảng ra hoạt động công khai với tên gọi ĐẢNG LAO ĐỘNG VIỆT NAM.",
      "Thông qua Báo cáo Chính trị của Chủ tịch Hồ Chí Minh và Báo cáo Bàn về cách mạng Việt Nam của Tổng Bí thư Trường Chinh.",
      "Thông qua Chính cương Đảng Lao động Việt Nam.",
      "Bầu BCH Trung ương, Hồ Chí Minh làm Chủ tịch Đảng, Trường Chinh làm Tổng Bí thư."
    ],
    "significance": "Đại hội Kháng chiến thắng lợi; hoàn chỉnh đường lối cách mạng dân tộc dân chủ nhân dân tiến lên CNXH.",
    "quickSummary": "2/1951: Đại hội II tại Chiêm Hóa, Đảng ra hoạt động công khai lấy tên là Đảng Lao động Việt Nam.",
    "commonMistakes": "Dễ nhầm tên Đảng: Đại hội II đổi tên thành ĐẢNG LAO ĐỘNG VIỆT NAM (không phải ĐCSVN; ĐCSVN đổi lại từ Đại hội IV năm 1976).",
    "relatedEvents": [
      "event-034",
      "event-036",
      "event-037"
    ]
  },
  "event-036": {
    "id": "event-036",
    "date": "1953-12-04",
    "datePrecision": "day",
    "title": "Thông qua Luật cải cách ruộng đất",
    "chapter": 2,
    "session": 13,
    "period": "1945–1954",
    "kind": "event",
    "location": "Việt Bắc",
    "context": "Thực hiện khẩu hiệu 'người cày có ruộng' để động viên sức mạnh to lớn của nông dân cho cuộc kháng chiến đi tới toàn thắng.",
    "keyPoints": [
      "Ngày 4/12/1953, Quốc hội khóa I thông qua Luật Cải cách ruộng đất.",
      "Chủ trương triệt để giảm tô, thực hiện giảm tức và tiến hành cải cách ruộng đất, chia ruộng đất của địa chủ cho nông dân nghèo.",
      "Khơi dậy khí thế chiến đấu sôi sục của hàng triệu nông dân phục vụ tiền tuyến Điện Biên Phủ."
    ],
    "significance": "Bồi dưỡng sức dân, động viên tối đa nhân tài vật lực cho cuộc kháng chiến, tuy nhiên quá trình thực hiện sau hòa bình bộc lộ nhiều sai lầm nóng vội.",
    "quickSummary": "4/12/1953: Quốc hội thông qua Luật Cải cách ruộng đất, động viên sức mạnh nông dân chi viện chiến trường.",
    "commonMistakes": "Dễ nhầm thời điểm: Luật được thông qua cuối năm 1953, ngay trước khi Chiến dịch Điện Biên Phủ diễn ra.",
    "relatedEvents": [
      "event-035",
      "event-037"
    ]
  },
  "event-037": {
    "id": "event-037",
    "date": "1954",
    "datePrecision": "year",
    "title": "Chiến thắng Điện Biên Phủ",
    "chapter": 2,
    "session": 13,
    "period": "1945–1954",
    "kind": "event",
    "location": "Điện Biên Phủ, tỉnh Lai Châu (nay thuộc Điện Biên)",
    "context": "Kế hoạch Nava của Pháp nhằm giành thắng lợi quyết định trong vòng 18 tháng; Pháp xây dựng Điện Biên Phủ thành tập đoàn cứ điểm quân sự mạnh nhất Đông Dương.",
    "keyPoints": [
      "Chiến dịch diễn ra trong 56 ngày đêm (từ 13/3 đến 7/5/1954), chia làm 3 đợt.",
      "Đại tướng Võ Nguyên Giáp làm Tổng Tư lệnh, đưa ra quyết định lịch sử: Chuyển từ 'Đánh nhanh thắng nhanh' sang 'ĐÁNH CHẮC TIẾN CHẮC'.",
      "Chiều 7/5/1954, tiêu diệt toàn bộ tập đoàn cứ điểm, bắt sống tướng De Castries.",
      "Tiêu diệt và bắt sống 16.200 tên địch, bắn rơi 62 máy bay."
    ],
    "significance": "Đỉnh cao chói lọi của cuộc kháng chiến chống Pháp, 'lừng lẫy năm châu, chấn động địa cầu', đập tan Kế hoạch Nava, quyết định thắng lợi trên bàn đàm phán Genève.",
    "quickSummary": "7/5/1954: Toàn thắng Chiến dịch Điện Biên Phủ sau 56 ngày đêm, đập tan hoàn toàn tập đoàn cứ điểm Pháp.",
    "commonMistakes": "Quyết định then chốt: Chuyển phương châm từ 'đánh nhanh thắng nhanh' sang 'đánh chắc tiến chắc' là quyết định khó khăn nhất của Đại tướng Võ Nguyên Giáp.",
    "relatedEvents": [
      "event-035",
      "event-038",
      "event-039"
    ]
  },
  "event-038": {
    "id": "event-038",
    "date": "1954-07-21",
    "datePrecision": "day",
    "title": "Tuyên bố cuối cùng Hội nghị Genève",
    "chapter": 2,
    "session": 13,
    "period": "1945–1954",
    "kind": "event",
    "location": "Genève, Thụy Sĩ",
    "context": "Sau thảm bại ở Điện Biên Phủ, chính phủ Pháp buộc phải ngồi vào bàn đàm phán với đại diện Việt Nam Dân chủ Cộng hòa.",
    "keyPoints": [
      "Ngày 21/7/1954, Tuyên bố cuối cùng của Hội nghị Genève về lập lại hòa bình ở Đông Dương được ký kết.",
      "Các nước lớn tôn trọng độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của 3 nước Việt Nam, Lào, Campuchia.",
      "Pháp rút quân khỏi miền Bắc; lấy vĩ tuyến 17 (sông Bến Hải) làm giới tuyến quân sự tạm thời; tổng tuyển cử thống nhất đất nước dự kiến sau 2 năm (7/1956)."
    ],
    "significance": "Thắng lợi ngoại giao lịch sử, chấm dứt hoàn toàn sự thống trị của thực dân Pháp trên bán đảo Đông Dương.",
    "quickSummary": "21/7/1954: Ký Hiệp định Genève, Pháp cam kết tôn trọng độc lập chủ quyền, tạm chia hai miền ở vĩ tuyến 17.",
    "commonMistakes": "Vĩ tuyến 17 theo Hiệp định chỉ là giới tuyến quân sự TẠM THỜI, không phải biên giới quốc gia.",
    "relatedEvents": [
      "event-037",
      "event-039",
      "event-040"
    ]
  },
  "event-039": {
    "id": "event-039",
    "date": "1954-10-10",
    "datePrecision": "day",
    "title": "Giải phóng Thủ đô",
    "chapter": 2,
    "session": 15,
    "period": "1945–1954",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Thực hiện Hiệp định Genève, quân đội Pháp rút khỏi Hà Nội, các đoàn quân chiến thắng từ chiến khu trở về tiếp quản Thủ đô.",
    "keyPoints": [
      "Sáng 10/10/1954, các đơn vị Quân đội nhân dân Việt Nam tiến vào tiếp quản Thủ đô Hà Nội trong cờ hoa rực rỡ.",
      "Thành phố được giải phóng hoàn toàn trong trật tự và an toàn tuyệt đối.",
      "Chính phủ và Trung ương Đảng trở về Thủ đô tiếp tục lãnh đạo cách mạng."
    ],
    "significance": "Mở ra thời kỳ mới giải phóng hoàn toàn miền Bắc, đưa miền Bắc bước vào giai đoạn quá độ lên chủ nghĩa xã hội.",
    "quickSummary": "10/10/1954: Giải phóng Thủ đô Hà Nội, miền Bắc hoàn toàn sạch bóng quân xâm lược.",
    "commonMistakes": "Dễ nhầm mốc: 10/10/1954 là ngày Giải phóng Thủ đô, kết thúc 9 năm kháng chiến ở miền Bắc.",
    "relatedEvents": [
      "event-038",
      "event-040",
      "event-042"
    ]
  },
  "event-040": {
    "id": "event-040",
    "date": "1959-01",
    "datePrecision": "month",
    "title": "Nghị quyết Trung ương 15",
    "chapter": 2,
    "session": 15,
    "period": "1954–1975",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Mỹ dựng lên chính quyền tay sai Ngô Đình Diệm ở miền Nam, trắng trợn phá hoại Hiệp định Genève, thi hành đạo luật 10/59 dìm phong trào cách mạng trong biển máu.",
    "keyPoints": [
      "Tháng 1/1959, Hội nghị Trung ương 15 (mở rộng) họp tại Hà Nội.",
      "Khẳng định con đường phát triển cơ bản của cách mạng miền Nam: KHỞI NGHĨA GIÀNH CHÍNH QUYỀN VỀ TAY NHÂN DÂN.",
      "Kết hợp đấu tranh chính trị với đấu tranh vũ trang, dùng bạo lực cách mạng để đánh đổ ách thống trị của Mỹ - Diệm."
    ],
    "significance": "Nghị quyết có ý nghĩa lịch sử to lớn, như luồng gió mới thổi bùng lên ngọn lửa đấu tranh ở miền Nam, mở đường trực tiếp cho cao trào Đồng khởi.",
    "quickSummary": "1/1959: Nghị quyết TW 15 xác định con đường bạo lực cách mạng và khởi nghĩa vũ trang ở miền Nam.",
    "commonMistakes": "Nghị quyết TW 15 là bước ngoặt quyết định cho phép sử dụng bạo lực vũ trang kết hợp đấu tranh chính trị ở miền Nam.",
    "relatedEvents": [
      "event-038",
      "event-041",
      "event-043"
    ]
  },
  "event-041": {
    "id": "event-041",
    "date": "1960",
    "datePrecision": "year",
    "title": "Phong trào Đồng khởi",
    "chapter": 2,
    "session": 15,
    "period": "1954–1975",
    "kind": "event",
    "location": "Bến Tre và khắp các tỉnh Nam Bộ, Tây Nguyên",
    "context": "Dưới ánh sáng Nghị quyết TW 15, mâu thuẫn giữa nhân dân miền Nam với chính quyền độc tài phát xít Mỹ - Diệm bùng nổ đỉnh điểm.",
    "keyPoints": [
      "Ngày 17/1/1960, cuộc Đồng khởi nổ ra tại xã Định Thủy (huyện Mỏ Cày, tỉnh Bến Tre) dưới sự chỉ đạo của đồng chí Nguyễn Thị Định.",
      "Phong trào nhanh chóng lan rộng khắp Nam Bộ, Trung Bộ và Tây Nguyên.",
      "Nhân dân vùng lên phá thế kìm kẹp, đập tan chính quyền cơ sở của địch, lập ra chính quyền tự quản nhân dân; ra đời 'Đội quân tóc dài'."
    ],
    "significance": "Bước ngoặt căn bản của cách mạng miền Nam: Chuyển từ thế GIỮ GÌN LỰC LƯỢNG sang thế TIẾN CÔNG liên tục; làm phá sản chính sách thực dân mới của Mỹ.",
    "quickSummary": "1960: Phong trào Đồng khởi bùng nổ từ Bến Tre, chuyển cách mạng miền Nam từ giữ gìn lực lượng sang thế tiến công.",
    "commonMistakes": "Đồng khởi bắt đầu từ Mỏ Cày (Bến Tre) ngày 17/1/1960, đánh dấu bước ngoặt chuyển thế chiến lược cách mạng miền Nam.",
    "relatedEvents": [
      "event-040",
      "event-042",
      "event-043"
    ]
  },
  "event-042": {
    "id": "event-042",
    "date": "1960-09",
    "datePrecision": "month",
    "title": "Đại hội III",
    "chapter": 2,
    "session": 15,
    "period": "1954–1975",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Miền Bắc đã hoàn thành cải tạo xã hội chủ nghĩa; cách mạng miền Nam chuyển sang thế tiến công sau Đồng khởi.",
    "keyPoints": [
      "Họp từ 5 đến 10/9/1960 tại Hà Nội.",
      "Xác định đường lối chiến lược cách mạng Việt Nam thực hiện đồng thời HAI NHIỆM VỤ CHIẾN LƯỢC:",
      "1. Cách mạng XHCN ở miền Bắc: Đóng vai trò QUYẾT ĐỊNH NHẤT đối với sự phát triển của toàn bộ cách mạng cả nước.",
      "2. Cách mạng dân tộc dân chủ nhân dân ở miền Nam: Đóng vai trò QUYẾT ĐỊNH TRỰC TIẾP đối với sự nghiệp giải phóng miền Nam thống nhất Tổ quốc.",
      "Bầu Chủ tịch Hồ Chí Minh làm Chủ tịch Đảng, đồng chí Lê Duẩn làm Bí thư thứ nhất Ban Chấp hành Trung ương."
    ],
    "significance": "Đại hội xây dựng CNXH ở miền Bắc và đấu tranh giải phóng miền Nam thống nhất nước nhà.",
    "quickSummary": "9/1960: Đại hội III xác định 2 nhiệm vụ chiến lược: Miền Bắc quyết định nhất, Miền Nam quyết định trực tiếp.",
    "commonMistakes": "Dễ nhầm vai trò 2 miền: Miền Bắc là quyết định NHẤT (hậu phương lớn); Miền Nam là quyết định TRỰC TIẾP (tiền tuyến lớn).",
    "relatedEvents": [
      "event-040",
      "event-041",
      "event-043"
    ]
  },
  "event-043": {
    "id": "event-043",
    "date": "1960-12-20",
    "datePrecision": "day",
    "title": "Thành lập Mặt trận Dân tộc Giải phóng miền Nam",
    "chapter": 2,
    "session": 15,
    "period": "1954–1975",
    "kind": "event",
    "location": "Xã Tân Lập (huyện Châu Thành, tỉnh Tây Ninh)",
    "context": "Thắng lợi của phong trào Đồng khởi tạo tiền đề để tập hợp rộng rãi các tầng lớp nhân dân miền Nam chống Mỹ.",
    "keyPoints": [
      "Thành lập ngày 20/12/1960 tại vùng giải phóng Tây Ninh.",
      "Luật sư Nguyễn Hữu Thọ được bầu làm Chủ tịch Ủy ban Trung ương Mặt trận.",
      "Công bố Tuyên ngôn và Chương trình hành động 10 điểm: Đánh đổ chế độ thuộc địa trá hình của Mỹ và tay sai, xây dựng miền Nam hòa bình, độc lập, dân chủ, tiến tới hòa bình thống nhất Tổ quốc."
    ],
    "significance": "Ngọn cờ đoàn kết tập hợp mọi lực lượng yêu nước ở miền Nam, đại diện chân chính duy nhất của nhân dân miền Nam Việt Nam.",
    "quickSummary": "20/12/1960: Thành lập Mặt trận Dân tộc Giải phóng miền Nam Việt Nam do luật sư Nguyễn Hữu Thọ làm Chủ tịch.",
    "commonMistakes": "Dễ nhầm người đứng đầu: Chủ tịch Mặt trận DTGP miền Nam là Luật sư Nguyễn Hữu Thọ.",
    "relatedEvents": [
      "event-041",
      "event-042",
      "event-044"
    ]
  },
  "event-044": {
    "id": "event-044",
    "date": "1963-01-02",
    "datePrecision": "day",
    "title": "Chiến thắng Ấp Bắc",
    "chapter": 2,
    "session": 15,
    "period": "1954–1975",
    "kind": "event",
    "location": "Ấp Bắc (xã Tân Phú, Cai Lậy, Mỹ Tho - nay thuộc Tiền Giang)",
    "context": "Mỹ triển khai chiến lược 'Chiến tranh đặc biệt', áp dụng chiến thuật mới 'trực thăng vận' và 'thiết xa vận'.",
    "keyPoints": [
      "Ngày 2/1/1963, lực lượng vũ trang cách mạng với quân số ít hơn gấp nhiều lần đã bẻ gãy cuộc càn quét của hơn 2.000 quân Sài Gòn có cố vấn Mỹ chỉ huy.",
      "Bắn rơi 5 máy bay trực thăng, phá hủy 3 xe bọc thép M.113, tiêu diệt hàng trăm tên địch.",
      "Dấy lên phong trào 'Thi đua Ấp Bắc, giết giặc lập công'."
    ],
    "significance": "Khẳng định quân và dân ta hoàn toàn có khả năng đánh bại chiến thuật tác chiến tân kỳ của Mỹ, mở đầu cho sự phá sản của chiến lược 'Chiến tranh đặc biệt'.",
    "quickSummary": "2/1/1963: Chiến thắng Ấp Bắc bẻ gãy chiến thuật trực thăng vận, mở đầu phá sản Chiến tranh đặc biệt.",
    "commonMistakes": "Ấp Bắc chứng minh: Quân dân miền Nam hoàn toàn có thể đánh bại chiến thuật trực thăng vận và thiết xa vận của Mỹ.",
    "relatedEvents": [
      "event-043",
      "event-045"
    ]
  },
  "event-045": {
    "id": "event-045",
    "date": "1965-03-08",
    "datePrecision": "day",
    "title": "Quân Mỹ đổ bộ Đà Nẵng",
    "chapter": 2,
    "session": 16,
    "period": "1954–1975",
    "kind": "event",
    "location": "Bãi biển Xuân Thiều, Đà Nẵng",
    "context": "Chiến lược 'Chiến tranh đặc biệt' đứng trước nguy cơ sụp đổ hoàn toàn; Mỹ chuyển sang chiến lược mới khốc liệt hơn.",
    "keyPoints": [
      "Ngày 8/3/1965, 3.500 lính thủy đánh bộ Mỹ đổ bộ lên bờ biển Đà Nẵng.",
      "Mở đầu việc đưa quân chiến đấu viễn chinh Mỹ trực tiếp tham chiến tại chiến trường miền Nam.",
      "Chuyển từ 'Chiến tranh đặc biệt' sang 'CHIẾN TRANH CỤC BỘ'."
    ],
    "significance": "Đánh dấu sự can thiệp quân sự trực tiếp với quy mô lớn nhất của quân viễn chinh Mỹ vào Việt Nam.",
    "quickSummary": "8/3/1965: Lính thủy đánh bộ Mỹ đổ bộ Đà Nẵng, chính thức bắt đầu Chiến tranh cục bộ.",
    "commonMistakes": "Chiến tranh cục bộ khác Đặc biệt ở chỗ: Quân viễn chinh Mỹ trực tiếp tham chiến làm lực lượng nòng cốt.",
    "relatedEvents": [
      "event-044",
      "event-046",
      "event-047"
    ]
  },
  "event-046": {
    "id": "event-046",
    "date": "1965-03",
    "datePrecision": "month",
    "title": "Hội nghị Trung ương 11",
    "chapter": 2,
    "session": 16,
    "period": "1954–1975",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Mỹ đưa quân viễn chinh vào miền Nam và leo thang ném bom phá hoại miền Bắc.",
    "keyPoints": [
      "Tháng 3/1965, Hội nghị TW 11 họp nhận định sâu sắc tình hình.",
      "Khẳng định: Quyết tâm đánh thắng giặc Mỹ xâm lược dù chúng đưa vào bao nhiêu quân.",
      "Chuyển hướng kinh tế miền Bắc từ thời bình sang thời chiến; vừa sản xuất vừa chiến đấu, chi viện tối đa cho tiền tuyến."
    ],
    "significance": "Thể hiện quyết tâm chiến lược sắt đá của toàn Đảng chống lại cuộc chiến tranh leo thang tàn bạo của đế quốc Mỹ.",
    "quickSummary": "3/1965: Hội nghị TW 11 quyết định chuyển hướng kinh tế miền Bắc sang thời chiến để chống Mỹ.",
    "commonMistakes": "Hội nghị TW 11 và 12 (1965) là hai hội nghị trung ương quan trọng xác định quyết tâm đánh thắng giặc Mỹ.",
    "relatedEvents": [
      "event-045",
      "event-047"
    ]
  },
  "event-047": {
    "id": "event-047",
    "date": "1965-12",
    "datePrecision": "month",
    "title": "Hội nghị Trung ương 12",
    "chapter": 2,
    "session": 16,
    "period": "1954–1975",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Mỹ ồ ạt đổ hàng trăm ngàn lính vào miền Nam và mở rộng ném bom miền Bắc.",
    "keyPoints": [
      "Tháng 12/1965, Hội nghị TW 12 họp xác định phương châm chiến lược đánh Mỹ.",
      "Nhận định: Mỹ dù đưa quân vào nhưng thế chiến lược vẫn ở thế bị động, ta vẫn nắm quyền chủ động trên chiến trường.",
      "Đề ra phương châm: Đánh lâu dài, dựa vào sức mình là chính, kiên quyết tiến công và liên tục tiến công.",
      "Khẩu hiệu hành động: 'Tất cả vì tiền tuyến, tất cả để đánh thắng giặc Mỹ xâm lược'."
    ],
    "significance": "Hoàn chỉnh đường lối kháng chiến chống Mỹ cứu nước trong giai đoạn mới.",
    "quickSummary": "12/1965: Hội nghị TW 12 hạ quyết tâm chiến lược đánh thắng giặc Mỹ trong bất kỳ tình huống nào.",
    "commonMistakes": "Hội nghị khẳng định: Sự can thiệp của quân Mỹ chỉ làm mâu thuẫn thêm sâu sắc, không cứu vãn được thế thua.",
    "relatedEvents": [
      "event-046",
      "event-048"
    ]
  },
  "event-048": {
    "id": "event-048",
    "date": "1968",
    "datePrecision": "year",
    "title": "Tổng tiến công và nổi dậy Xuân Mậu Thân",
    "chapter": 2,
    "session": 16,
    "period": "1954–1975",
    "kind": "event",
    "location": "Toàn miền Nam (Sài Gòn, Huế, Đà Nẵng...)",
    "context": "Sau 2 mùa khô phản công thất bại, quân Mỹ sa lầy nghiêm trọng; phong trào phản chiến lan rộng tại Mỹ.",
    "keyPoints": [
      "Đêm 30 rạng sáng 31/1/1968 (giao thừa Tết Mậu Thân), quân và dân ta đồng loạt nổ súng tấn công vào hầu khắp các thành phố, thị xã trên toàn miền Nam.",
      "Đánh trúng các cơ quan đầu não sào huyệt địch tại Sài Gòn: Tòa Đại sứ Mỹ, Dinh Độc Lập, Bộ Tổng tham mưu quân đội Sài Gòn, Đài Phát thanh.",
      "Làm rung chuyển toàn bộ nước Mỹ và dư luận quốc tế."
    ],
    "significance": "Đòn sấm sét làm phá sản hoàn toàn chiến lược 'Chiến tranh cục bộ'; buộc Tổng thống Johnson tuyên bố ngừng ném bom miền Bắc và chấp nhận ngồi vào bàn đàm phán Paris.",
    "quickSummary": "Xuân 1968: Tổng tiến công và nổi dậy Mậu Thân, làm phá sản Chiến tranh cục bộ, buộc Mỹ đàm phán.",
    "commonMistakes": "Ý nghĩa mấu chốt: Xuân Mậu Thân 1968 đã bẻ gãy ý chí xâm lược của chính quyền Washington.",
    "relatedEvents": [
      "event-047",
      "event-049",
      "event-050"
    ]
  },
  "event-049": {
    "id": "event-049",
    "date": "1968-05-13",
    "datePrecision": "day",
    "title": "Mở đàm phán Paris",
    "chapter": 2,
    "session": 16,
    "period": "1954–1975",
    "kind": "event",
    "location": "Trung tâm Hội nghị quốc tế Kléber (Paris, Pháp)",
    "context": "Thất bại tại Tết Mậu Thân 1968 buộc chính quyền Mỹ phải chấp thuận đàm phán.",
    "keyPoints": [
      "Ngày 13/5/1968, phiên đàm phán chính thức đầu tiên giữa phái đoàn Việt Nam Dân chủ Cộng hòa (Bộ trưởng Xuân Thủy) và đại diện Mỹ (Harriman) khai mạc.",
      "Mở ra mặt trận ngoại giao cam go, phối hợp chặt chẽ 'vừa đánh vừa đàm'."
    ],
    "significance": "Mở đầu cuộc đấu trí ngoại giao kéo dài nhất lịch sử hiện đại (gần 5 năm) dẫn tới Hiệp định Paris 1973.",
    "quickSummary": "13/5/1968: Khai mạc đàm phán Paris giữa Việt Nam Dân chủ Cộng hòa và Hoa Kỳ.",
    "commonMistakes": "Đàm phán Paris lúc đầu là 2 bên (VNDCCH và Mỹ), sau mở rộng thành 4 bên (thêm Mặt trận DTGP/Chính phủ CM lâm thời và chính quyền Sài Gòn).",
    "relatedEvents": [
      "event-048",
      "event-050",
      "event-054"
    ]
  },
  "event-050": {
    "id": "event-050",
    "date": "1968-11-01",
    "datePrecision": "day",
    "title": "Mỹ chấm dứt ném bom miền Bắc theo nội dung slide",
    "chapter": 2,
    "session": 16,
    "period": "1954–1975",
    "kind": "event",
    "location": "Miền Bắc Việt Nam & Washington D.C.",
    "context": "Bế tắc trên chiến trường và áp lực bầu cử Tổng thống Mỹ năm 1968.",
    "keyPoints": [
      "Ngày 31/10/1968 (có hiệu lực từ 1/11/1968), Tổng thống Johnson tuyên bố chấm dứt hoàn toàn không điều kiện mọi hành động ném bom bắn phá miền Bắc.",
      "Đánh dấu thất bại hoàn toàn của cuộc chiến tranh phá hoại lần thứ nhất của đế quốc Mỹ ở miền Bắc."
    ],
    "significance": "Tạo điều kiện để miền Bắc khôi phục sản xuất, chi viện mạnh mẽ hơn nữa cho chiến trường miền Nam.",
    "quickSummary": "1/11/1968: Mỹ buộc phải chấm dứt ném bom không điều kiện toàn miền Bắc lần thứ nhất.",
    "commonMistakes": "Lưu ý: Đây là lần thứ nhất; năm 1972 Mỹ tiến hành cuộc chiến tranh phá hoại lần thứ hai khốc liệt hơn với pháo đài bay B-52.",
    "relatedEvents": [
      "event-048",
      "event-049",
      "event-053"
    ]
  },
  "event-051": {
    "id": "event-051",
    "date": "1969-09-02",
    "datePrecision": "day",
    "title": "Chủ tịch Hồ Chí Minh qua đời",
    "chapter": 2,
    "session": 17,
    "period": "1954–1975",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Cuộc kháng chiến chống Mỹ cứu nước đang ở giai đoạn quyết liệt.",
    "keyPoints": [
      "Hồi 9 giờ 47 phút ngày 2/9/1969, Chủ tịch Hồ Chí Minh - lãnh tụ vĩ đại của Đảng và dân tộc từ trần, hưởng thọ 79 tuổi.",
      "Để lại cho toàn Đảng, toàn quân và toàn dân bản DI CHÚC lịch sử thiêng liêng.",
      "Căn dặn về giữ gìn đoàn kết trong Đảng như giữ gìn con ngươi của mắt mình; tin tưởng chắc chắn kháng chiến chống Mỹ nhất định thắng lợi."
    ],
    "significance": "Tổn thất vô cùng to lớn; toàn Đảng toàn dân biến đau thương thành hành động cách mạng, thực hiện trọn vẹn Di chúc của Người.",
    "quickSummary": "2/9/1969: Bác Hồ qua đời, để lại bản Di chúc lịch sử thiêng liêng căn dặn toàn Đảng, toàn dân.",
    "commonMistakes": "Thời điểm công bố trước đây là ngày 3/9 để tránh trùng Quốc khánh; sau này Bộ Chính trị công bố chính thức Bác mất ngày 2/9/1969.",
    "relatedEvents": [
      "event-025",
      "event-052",
      "event-055"
    ]
  },
  "event-052": {
    "id": "event-052",
    "date": "1969-09-23",
    "datePrecision": "day",
    "title": "Quốc hội bầu Tôn Đức Thắng làm Chủ tịch nước",
    "chapter": 2,
    "session": 17,
    "period": "1954–1975",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Kỳ họp thứ năm Quốc hội khóa III họp để bầu Chủ tịch nước kế tục Chủ tịch Hồ Chí Minh.",
    "keyPoints": [
      "Ngày 23/9/1969, Quốc hội nhất trí bầu đồng chí Tôn Đức Thắng làm Chủ tịch nước Việt Nam Dân chủ Cộng hòa.",
      "Bầu đồng chí Nguyễn Lương Bằng làm Phó Chủ tịch nước."
    ],
    "significance": "Bảo đảm sự kế tục lãnh đạo vững vàng của Nhà nước trong thời kỳ kháng chiến cao điểm.",
    "quickSummary": "23/9/1969: Quốc hội bầu đồng chí Tôn Đức Thắng làm Chủ tịch nước kế nhiệm Bác Hồ.",
    "commonMistakes": "Đồng chí Tôn Đức Thắng (Bác Tôn) là Chủ tịch nước tiếp theo sau Chủ tịch Hồ Chí Minh.",
    "relatedEvents": [
      "event-051",
      "event-054"
    ]
  },
  "event-053": {
    "id": "event-053",
    "date": "1972",
    "datePrecision": "year",
    "title": "Cuộc tiến công chiến lược năm 1972",
    "chapter": 2,
    "session": 17,
    "period": "1954–1975",
    "kind": "event",
    "location": "Quảng Trị, Tây Nguyên, Đông Nam Bộ & Bầu trời Hà Nội",
    "context": "Mỹ thực hiện chiến lược 'Việt Nam hóa chiến tranh', ra sức củng cố quân đội Sài Gòn.",
    "keyPoints": [
      "Xuân - Hè 1972, quân ta mở Cuộc tiến công chiến lược trên 3 hướng: Quảng Trị, Tây Nguyên, Đông Nam Bộ, chọc thủng 3 phòng tuyến kiên cố của địch.",
      "Mỹ điên cuồng tái ném bom miền Bắc và mở chiến dịch tập kích đường không chiến lược Linebacker II dùng B-52 đánh phá Hà Nội, Hải Phòng (18–29/12/1972).",
      "Quân dân miền Bắc kiên cường đánh bại cuộc tập kích, lập nên kỳ tích 'ĐIỆN BIÊN PHỦ TRÊN KHÔNG', bắn rơi 81 máy bay (có 34 chiếc B-52)."
    ],
    "significance": "Thắng lợi bước ngoặt đập tan âm mưu đàm phán trên thế mạnh của Mỹ, buộc Mỹ phải ký Hiệp định Paris.",
    "quickSummary": "1972: Tiến công chiến lược và chiến thắng 'Điện Biên Phủ trên không' đập tan pháo đài bay B-52.",
    "commonMistakes": "LƯU Ý EDITORIAL NOTE 02: Chiến dịch Linebacker II diễn ra từ 18 đến 29/12/1972 (không phải tháng 4/1972 như slide xếp cạnh).",
    "relatedEvents": [
      "event-050",
      "event-054"
    ]
  },
  "event-054": {
    "id": "event-054",
    "date": "1973-01-27",
    "datePrecision": "day",
    "title": "Ký Hiệp định Paris",
    "chapter": 2,
    "session": 17,
    "period": "1954–1975",
    "kind": "event",
    "location": "Paris, Pháp",
    "context": "Thất bại thảm hại trong cuộc tập kích B-52 cuối năm 1972 buộc chính quyền Nixon phải ký kết thỏa thuận.",
    "keyPoints": [
      "Ngày 27/1/1973, Hiệp định Paris về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam được ký kết chính thức giữa 4 bên.",
      "Hoa Kỳ và các nước cam kết tôn trọng độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam.",
      "Hoa Kỳ cam kết rút hết quân viễn chinh và quân đồng minh trong vòng 60 ngày, phá hủy các căn cứ quân sự, cam kết không can thiệp nội bộ miền Nam.",
      "Thực hiện trọn vẹn mục tiêu chiến lược: 'ĐÁNH CHO MỸ CÚT'."
    ],
    "significance": "Thắng lợi lịch sử to lớn tạo thời cơ chiến lược mang tính quyết định để tiến lên 'ĐÁNH CHO NGỤY NHÀO', giải phóng hoàn toàn miền Nam.",
    "quickSummary": "27/1/1973: Ký Hiệp định Paris, Mỹ cam kết rút hết quân khỏi Việt Nam, hoàn thành 'Đánh cho Mỹ cút'.",
    "commonMistakes": "Hiệp định Paris buộc quân Mỹ phải rút hết nhưng quân chủ lực giải phóng của ta vẫn được giữ nguyên vị trí ở miền Nam.",
    "relatedEvents": [
      "event-049",
      "event-053",
      "event-055"
    ]
  },
  "event-055": {
    "id": "event-055",
    "date": "1975-04-30",
    "datePrecision": "day",
    "title": "Chiến dịch Hồ Chí Minh toàn thắng",
    "chapter": 2,
    "session": 17,
    "period": "1954–1975",
    "kind": "event",
    "location": "Sài Gòn - Gia Định và toàn miền Nam",
    "context": "Sau Hiệp định Paris, so sánh lực lượng thay đổi căn bản có lợi cho ta. Sau các thắng lợi Tây Nguyên và Huế - Đà Nẵng, Bộ Chính trị quyết định giải phóng miền Nam trước mùa mưa 1975.",
    "keyPoints": [
      "Chiến dịch mang tên Chủ tịch Hồ Chí Minh bắt đầu từ 26/4/1975.",
      "Năm cánh quân thần tốc dũng mãnh tiến thẳng vào sào huyệt cuối cùng của chính quyền Sài Gòn.",
      "11 giờ 30 phút ngày 30/4/1975, lá cờ Mặt trận Giải phóng tung bay trên nóc Dinh Độc Lập; Tổng thống Dương Văn Minh tuyên bố đầu hàng không điều kiện.",
      "Giải phóng hoàn toàn Sài Gòn và toàn bộ các tỉnh đồng bằng sông Cửu Long, các đảo biển phía Nam."
    ],
    "significance": "Thắng lợi vĩ đại kết thúc vẻ vang 21 năm kháng chiến chống Mỹ và 30 năm chiến tranh giải phóng, thu non sông về một mối, mở ra kỷ nguyên độc lập, thống nhất và đi lên CNXH.",
    "quickSummary": "30/4/1975: Toàn thắng Chiến dịch Hồ Chí Minh lịch sử, giải phóng hoàn toàn miền Nam, thống nhất đất nước.",
    "commonMistakes": "Chiến dịch Hồ Chí Minh là chiến dịch cuối cùng trong cuộc Tổng tiến công mùa Xuân 1975 (sau Tây Nguyên và Huế - Đà Nẵng).",
    "relatedEvents": [
      "event-054",
      "event-056",
      "event-058"
    ]
  },
  "event-056": {
    "id": "event-056",
    "date": "1975-08",
    "datePrecision": "month",
    "title": "Hội nghị Trung ương 24 khóa III",
    "chapter": 3,
    "session": 19,
    "period": "1954–1975",
    "kind": "event",
    "location": "Đà Lạt",
    "context": "Sau đại thắng mùa Xuân 1975, đất nước đã được hoàn toàn độc lập về mặt lãnh thổ nhưng vẫn còn hai nhà nước riêng biệt ở hai miền.",
    "keyPoints": [
      "Tháng 8/1975, Hội nghị TW 24 khóa III họp tại Đà Lạt.",
      "Đề ra nhiệm vụ: Hoàn thành THỐNG NHẤT NƯỚC NHÀ VỀ MẶT NHÀ NƯỚC.",
      "Khẳng định: Thống nhất non sông là nguyện vọng thiết tha của toàn dân, là điều kiện tiên quyết để đưa cả nước đi lên CNXH."
    ],
    "significance": "Đặt cơ sở chính trị định hướng cho tiến trình hiệp thương thống nhất Nhà nước.",
    "quickSummary": "8/1975: Hội nghị TW 24 khóa III quyết định chủ trương hoàn thành thống nhất đất nước về mặt Nhà nước.",
    "commonMistakes": "Độc lập đã đạt được ngày 30/4/1975 nhưng THỐNG NHẤT VỀ MẶT NHÀ NƯỚC cần thông qua tổng tuyển cử và Quốc hội chung.",
    "relatedEvents": [
      "event-055",
      "event-057",
      "event-058"
    ]
  },
  "event-057": {
    "id": "event-057",
    "date": "1975-11",
    "datePrecision": "month",
    "title": "Hiệp thương chính trị hai miền",
    "chapter": 3,
    "session": 19,
    "period": "1954–1975",
    "kind": "event",
    "location": "Sài Gòn",
    "context": "Cần sự phối hợp hiệp thương giữa đại diện hai miền Nam - Bắc.",
    "keyPoints": [
      "Họp từ 15 đến 21/11/1975 tại Sài Gòn.",
      "Đoàn đại biểu miền Bắc do đồng chí Trường Chinh dẫn đầu; đoàn đại biểu miền Nam do đồng chí Phạm Hùng dẫn đầu.",
      "Nhất trí hoàn toàn về sự cần thiết và các bước tiến hành cuộc Tổng tuyển cử chung."
    ],
    "significance": "Tạo sự nhất trí cao độ giữa hai miền để tiến hành cuộc bầu cử lịch sử.",
    "quickSummary": "11/1975: Hội nghị Hiệp thương chính trị hai miền tại Sài Gòn nhất trí tổ chức Tổng tuyển cử chung.",
    "commonMistakes": "Hội nghị có sự tham gia của 2 đoàn đại biểu do Trường Chinh (Bắc) và Phạm Hùng (Nam) dẫn đầu.",
    "relatedEvents": [
      "event-056",
      "event-058"
    ]
  },
  "event-058": {
    "id": "event-058",
    "date": "1976-04-25",
    "datePrecision": "day",
    "title": "Tổng tuyển cử bầu Quốc hội chung",
    "chapter": 3,
    "session": 19,
    "period": "1975–1986",
    "kind": "event",
    "location": "Cả nước Việt Nam",
    "context": "Lần đầu tiên sau 30 năm, cử tri hai miền cùng chung một ngày hội non sông.",
    "keyPoints": [
      "Ngày 25/4/1976, hơn 23 triệu cử tri (98,77%) cả nước nô nức đi bỏ phiếu.",
      "Bầu ra 492 đại biểu của Quốc hội thống nhất (249 đại biểu miền Bắc, 243 đại biểu miền Nam)."
    ],
    "significance": "Thắng lợi có ý nghĩa lịch sử quyết định trong quá trình thống nhất đất nước về mặt nhà nước.",
    "quickSummary": "25/4/1976: Tổng tuyển cử bầu Quốc hội chung của nước Việt Nam thống nhất.",
    "commonMistakes": "Phân biệt: Tổng tuyển cử đầu tiên là 6/1/1946; Tổng tuyển cử thống nhất đất nước là 25/4/1976.",
    "relatedEvents": [
      "event-057",
      "event-059",
      "event-060"
    ]
  },
  "event-059": {
    "id": "event-059",
    "date": "1976-06",
    "datePrecision": "month",
    "title": "Kỳ họp thứ nhất Quốc hội thống nhất",
    "chapter": 3,
    "session": 19,
    "period": "1975–1986",
    "kind": "event",
    "location": "Nhà hát Lớn Hà Nội",
    "context": "Quốc hội thống nhất họp kỳ đầu tiên quyết định vận mệnh và thể chế quốc gia.",
    "keyPoints": [
      "Họp từ 24/6 đến 3/7/1976 tại Hà Nội.",
      "Quyết định đặt tên nước là NƯỚC CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM (từ ngày 2/7/1976).",
      "Quy định Quốc kỳ (cờ đỏ sao vàng), Quốc ca (Tiến quân ca), Quốc huy, Thủ đô là Hà Nội.",
      "Đổi tên thành phố Sài Gòn - Gia Định thành THÀNH PHỐ HỒ CHÍ MINH.",
      "Bầu đồng chí Tôn Đức Thắng làm Chủ tịch nước, Phạm Văn Đồng làm Thủ tướng, Trường Chinh làm Chủ tịch UB Thường vụ Quốc hội."
    ],
    "significance": "Hoàn tất trọn vẹn quá trình thống nhất đất nước về mặt Nhà nước.",
    "quickSummary": "6 - 7/1976: Kỳ họp thứ nhất Quốc hội thống nhất đặt tên nước là CHXHCN Việt Nam, đổi tên TP. Hồ Chí Minh.",
    "commonMistakes": "Tên nước CHXHCN Việt Nam chính thức có hiệu lực từ ngày 2/7/1976.",
    "relatedEvents": [
      "event-058",
      "event-060"
    ]
  },
  "event-060": {
    "id": "event-060",
    "date": "1976-12",
    "datePrecision": "month",
    "title": "Đại hội IV",
    "chapter": 3,
    "session": 20,
    "period": "1975–1986",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Đất nước hoàn toàn độc lập, thống nhất, cả nước bước vào kỷ nguyên xây dựng CNXH.",
    "keyPoints": [
      "Họp từ 14 đến 20/12/1976 tại Hà Nội.",
      "Quyết định đổi tên Đảng Lao động Việt Nam thành ĐẢNG CỘNG SẢN VIỆT NAM.",
      "Đổi tên chức vụ Bí thư thứ nhất thành TỔNG BÍ THƯ, bầu đồng chí Lê Duẩn làm Tổng Bí thư.",
      "Đề ra đường lối chung xây dựng CNXH trên phạm vi cả nước; ưu tiên phát triển công nghiệp nặng một cách hợp lý trên cơ sở phát triển nông nghiệp và công nghiệp nhẹ.",
      "Thông qua Kế hoạch 5 năm lần thứ hai (1976–1980)."
    ],
    "significance": "Đại hội thống nhất Tổ quốc; mở đầu chặng đường xây dựng CNXH trên quy mô cả nước, tuy nhiên còn chủ quan, nóng vội trong chỉ tiêu kinh tế.",
    "quickSummary": "12/1976: Đại hội IV đổi tên thành Đảng Cộng sản Việt Nam, bầu Lê Duẩn làm Tổng Bí thư.",
    "commonMistakes": "Đổi tên thành Đảng Cộng sản Việt Nam tại Đại hội IV (1976), không phải Đại hội III.",
    "relatedEvents": [
      "event-059",
      "event-063",
      "event-066"
    ]
  },
  "event-061": {
    "id": "event-061",
    "date": "1979-01-07",
    "datePrecision": "day",
    "title": "Giải phóng Phnom Penh theo nội dung tài liệu",
    "chapter": 3,
    "session": 20,
    "period": "1975–1986",
    "kind": "event",
    "location": "Phnom Penh, Campuchia",
    "context": "Tập đoàn phản động Pol Pot - Ieng Sary tàn sát man rợ nhân dân Campuchia và mở cuộc chiến tranh xâm lược biên giới Tây Nam nước ta.",
    "keyPoints": [
      "Đáp lời kêu gọi khẩn thiết của Mặt trận Đoàn kết Dân tộc Cứu nước Campuchia, Quân tình nguyện Việt Nam cùng lực lượng cách mạng Campuchia tiến công giải phóng Phnom Penh ngày 7/1/1979.",
      "Lật đổ hoàn toàn chế độ diệt chủng tàn bạo Pol Pot.",
      "Giúp nhân dân Campuchia hồi sinh từ cõi chết."
    ],
    "significance": "Bảo vệ vững chắc chủ quyền biên giới Tây Nam; thể hiện nghĩa vụ quốc tế cao cả, trong sáng của Đảng và nhân dân Việt Nam.",
    "quickSummary": "7/1/1979: Quân tình nguyện Việt Nam giúp giải phóng Phnom Penh, lật đổ chế độ diệt chủng Pol Pot.",
    "commonMistakes": "Ngày 7/1/1979 là ngày giải phóng Phnom Penh cứu nhân dân Campuchia khỏi nạn diệt chủng.",
    "relatedEvents": [
      "event-060",
      "event-062"
    ]
  },
  "event-062": {
    "id": "event-062",
    "date": "1979-02-17",
    "datePrecision": "day",
    "title": "Chiến đấu bảo vệ biên giới phía Bắc",
    "chapter": 3,
    "session": 20,
    "period": "1975–1986",
    "kind": "event",
    "location": "6 tỉnh biên giới phía Bắc (Lạng Sơn, Cao Bằng, Hà Tuyên, Hoàng Liên Sơn, Lai Châu, Quảng Ninh)",
    "context": "Tình hình quan hệ quốc tế diễn biến phức tạp ở khu vực biên giới phía Bắc.",
    "keyPoints": [
      "Rạng sáng 17/2/1979, hơn 60 vạn quân Trung Quốc đồng loạt nổ súng tấn công trên toàn tuyến biên giới phía Bắc nước ta.",
      "Quân dân 6 tỉnh biên giới kiên cường đứng lên chiến đấu bảo vệ từng tấc đất thiêng liêng của Tổ quốc.",
      "Đến 5/3/1979, Trung Quốc tuyên bố rút quân; cùng ngày, Chủ tịch nước Tôn Đức Thắng ra lệnh Tổng động viên."
    ],
    "significance": "Bảo vệ vững chắc chủ quyền lãnh thổ quốc gia; khẳng định ý chí quật cường của nhân dân Việt Nam.",
    "quickSummary": "17/2/1979: Cuộc chiến đấu bảo vệ toàn vẹn biên giới phía Bắc bùng nổ.",
    "commonMistakes": "Chiến đấu bảo vệ biên giới phía Bắc diễn ra từ 17/2/1979.",
    "relatedEvents": [
      "event-061",
      "event-063"
    ]
  },
  "event-063": {
    "id": "event-063",
    "date": "1979-08",
    "datePrecision": "month",
    "title": "Hội nghị Trung ương 6 khóa IV, bước đột phá đầu tiên",
    "chapter": 3,
    "session": 20,
    "period": "1975–1986",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Kinh tế lâm vào khủng hoảng gay gắt do cơ chế tập trung quan liêu bao cấp và bao vây cấm vận.",
    "keyPoints": [
      "Tháng 8/1979, Hội nghị TW 6 khóa IV họp tại Hà Nội.",
      "Được lịch sử ghi nhận là BƯỚC ĐỘT PHÁ ĐẦU TIÊN đổi mới tư duy kinh tế của Đảng.",
      "Chủ trương: 'LÀM CHO SẢN XUẤT BUNG RA', xóa bỏ các trạm kiểm soát ngăn sông cấm chợ, cho phép tự do lưu thông hàng hóa.",
      "Khuyến khích khai hoang, tận dụng đất đai, người làm ra sản phẩm được tự do sử dụng hoặc đem bán."
    ],
    "significance": "Cởi trói bước đầu cho lực lượng sản xuất, mở đường cho sự ra đời của Chỉ thị 100 và Quyết định 25/CP.",
    "quickSummary": "8/1979: Hội nghị TW 6 khóa IV - bước đột phá đầu tiên mở đường cho 'sản xuất bung ra'.",
    "commonMistakes": "Hội nghị TW 6 khóa IV (8/1979) là BƯỚC ĐỘT PHÁ ĐẦU TIÊN (Hội nghị TW 8 khóa V năm 1985 là bước đột phá thứ hai).",
    "relatedEvents": [
      "event-060",
      "event-064",
      "event-065",
      "event-067"
    ]
  },
  "event-064": {
    "id": "event-064",
    "date": "1981-01-13",
    "datePrecision": "day",
    "title": "Chỉ thị 100 về khoán sản phẩm",
    "chapter": 3,
    "session": 20,
    "period": "1975–1986",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Từ các thực tiễn 'khoán chui' ở Hải Phòng, Vĩnh Phú đem lại năng suất lúa vượt trội so với làm chung hưởng điểm.",
    "keyPoints": [
      "Ngày 13/1/1981, Ban Bí thư ban hành Chỉ thị số 100-CT/TW.",
      "Chủ trương: Khoán sản phẩm cuối cùng đến NHÓM VÀ NGƯỜI LAO ĐỘNG trong hợp tác xã nông nghiệp.",
      "Nông dân nhận ruộng, tự làm các khâu gieo cấy, chăm sóc, thu hoạch; nộp nghĩa vụ cho HTX, phần dôi dư được hưởng trọn vẹn.",
      "Sản lượng lương thực bình quân tăng từ 13,4 triệu tấn (1976-1980) lên 17 triệu tấn/năm (1981-1985)."
    ],
    "significance": "Cú hích lịch sử giải phóng sức lao động của người nông dân, tạo bước chuyển biến căn bản trong nông nghiệp trước Đổi mới.",
    "quickSummary": "13/1/1981: Chỉ thị 100 của Ban Bí thư về khoán sản phẩm đến nhóm và người lao động.",
    "commonMistakes": "Chỉ thị 100 do BAN BÍ THƯ ban hành ngày 13/1/1981 (Khoán 10 do BỘ CHÍNH TRỊ ban hành năm 1988).",
    "relatedEvents": [
      "event-063",
      "event-065",
      "event-071"
    ]
  },
  "event-065": {
    "id": "event-065",
    "date": "1981-01",
    "datePrecision": "month",
    "title": "Quyết định 25/CP và 26/CP",
    "chapter": 3,
    "session": 20,
    "period": "1975–1986",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Khu vực công nghiệp quốc doanh bị kìm hãm nặng nề bởi cơ chế giao nộp hiện vật và bao cấp lỗ lãi.",
    "keyPoints": [
      "Tháng 1/1981, Chính phủ ban hành Quyết định 25/CP (về quyền tự chủ sản xuất kinh doanh của xí nghiệp quốc doanh) và Quyết định 26/CP (về mở rộng trả lương khoán, lương sản phẩm).",
      "Áp dụng kế hoạch 3 phần: Kế hoạch pháp lệnh của Nhà nước; Kế hoạch xí nghiệp tự làm với khách hàng; Kế hoạch sản xuất phụ.",
      "Cho phép xí nghiệp tự tiêu thụ sản phẩm ngoài kế hoạch pháp lệnh."
    ],
    "significance": "Bước đột phá trong lĩnh vực công nghiệp, trao quyền chủ động bước đầu cho các xí nghiệp quốc doanh.",
    "quickSummary": "1/1981: Quyết định 25/CP và 26/CP về quyền chủ động sản xuất kinh doanh và trả lương theo sản phẩm.",
    "commonMistakes": "Quyết định 25/CP áp dụng trong CÔNG NGHIỆP và xí nghiệp, song song với Chỉ thị 100 trong NÔNG NGHIỆP.",
    "relatedEvents": [
      "event-063",
      "event-064",
      "event-066"
    ]
  },
  "event-066": {
    "id": "event-066",
    "date": "1982-03",
    "datePrecision": "month",
    "title": "Đại hội V",
    "chapter": 3,
    "session": 21,
    "period": "1975–1986",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Tình hình kinh tế - xã hội còn vô cùng khó khăn, lạm phát tăng, quan hệ quốc tế diễn biến phức tạp.",
    "keyPoints": [
      "Họp từ 27 đến 31/3/1982 tại Hà Nội.",
      "Đồng chí Lê Duẩn tiếp tục được bầu làm Tổng Bí thư.",
      "Xác định cách mạng Việt Nam có 2 NHIỆM VỤ CHIẾN LƯỢC: Xây dựng CNXH và bảo vệ vững chắc Tổ quốc VN XHCN.",
      "Điểm điều chỉnh quan trọng: Coi NÔNG NGHIỆP LÀ MẶT TRẬN HÀNG ĐẦU, đưa nông nghiệp một bước lên sản xuất lớn XHCN.",
      "Sắp xếp lại công nghiệp nặng, kết hợp nông - công nghiệp."
    ],
    "significance": "Bước lùi có tính toán nhằm điều chỉnh cơ cấu kinh tế sát với thực tiễn hơn so với Đại hội IV.",
    "quickSummary": "3/1982: Đại hội V coi nông nghiệp là mặt trận hàng đầu, xác định 2 nhiệm vụ chiến lược.",
    "commonMistakes": "Đại hội V chưa khởi xướng Đổi mới toàn diện mà chỉ mới điều chỉnh ưu tiên coi nông nghiệp là mặt trận hàng đầu.",
    "relatedEvents": [
      "event-060",
      "event-067",
      "event-070"
    ]
  },
  "event-067": {
    "id": "event-067",
    "date": "1985-06",
    "datePrecision": "month",
    "title": "Hội nghị Trung ương 8 khóa V, giá – lương – tiền",
    "chapter": 3,
    "session": 21,
    "period": "1975–1986",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Cơ chế giá chỉ huy và bù lỗ bao cấp trở thành gánh nặng khổng lồ làm kiệt quệ ngân sách.",
    "keyPoints": [
      "Tháng 6/1985, Hội nghị TW 8 khóa V họp tại Hà Nội.",
      "Được đánh giá là BƯỚC ĐỘT PHÁ THỨ HAI trong tư duy kinh tế.",
      "Quyết định dứt khoát: XÓA BỎ CƠ CHẾ TẬP TRUNG QUAN LIÊU BAO CẤP, thực hiện cơ chế một giá.",
      "Chủ trương chuyển sang hạch toán kinh tế kinh doanh XHCN trong lĩnh vực GIÁ - LƯƠNG - TIỀN."
    ],
    "significance": "Bước ngoặt tư duy dứt bỏ bao cấp, dù việc triển khai vội vã sau đó dẫn đến khủng hoảng lạm phát nghiêm trọng.",
    "quickSummary": "6/1985: Hội nghị TW 8 khóa V - bước đột phá thứ hai dứt khoát xóa bỏ bao cấp về giá - lương - tiền.",
    "commonMistakes": "Hội nghị TW 8 khóa V là BƯỚC ĐỘT PHÁ THỨ HAI (về Giá - Lương - Tiền), tiếp sau TW 6 khóa IV năm 1979.",
    "relatedEvents": [
      "event-063",
      "event-068",
      "event-069"
    ]
  },
  "event-068": {
    "id": "event-068",
    "date": "1985-09-14",
    "datePrecision": "day",
    "title": "Đổi tiền",
    "chapter": 3,
    "session": 21,
    "period": "1975–1986",
    "kind": "event",
    "location": "Toàn quốc Việt Nam",
    "context": "Thực hiện chủ trương của Hội nghị TW 8 khóa V về cải cách giá - lương - tiền.",
    "keyPoints": [
      "Ngày 14/9/1985, tiến hành đổi tiền trên toàn quốc với tỷ lệ 10 đồng tiền cũ ăn 1 đồng tiền mới.",
      "Do khâu chuẩn bị hàng hóa chưa tương xứng và thực hiện máy móc, cuộc đổi tiền kết hợp tăng lương tạo nên cơn sốc giá cả khủng khiếp.",
      "Lạm phát phi mã bùng nổ, năm 1986 lên tới đỉnh điểm 774,7%."
    ],
    "significance": "Bài học đắt giá về quy luật thị trường, tiền tệ, thúc đẩy toàn Đảng phải đổi mới tư duy một cách căn bản và toàn diện.",
    "quickSummary": "14/9/1985: Đổi tiền thất bại dẫn đến khủng hoảng lạm phát phi mã (774% năm 1986).",
    "commonMistakes": "Đổi tiền năm 1985 diễn ra trước Đại hội VI (1986), là nguyên nhân trực tiếp thôi thúc Đổi mới.",
    "relatedEvents": [
      "event-067",
      "event-069",
      "event-070"
    ]
  },
  "event-069": {
    "id": "event-069",
    "date": "1986-08",
    "datePrecision": "month",
    "title": "Hội nghị Bộ Chính trị, điều chỉnh tư duy kinh tế",
    "chapter": 3,
    "session": 21,
    "period": "Từ 1986",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Sau khủng hoảng giá - lương - tiền, đồng chí Trường Chinh được cử làm Tổng Bí thư (tháng 7/1986 sau khi đ/c Lê Duẩn từ trần). Đồng chí Trường Chinh chỉ đạo làm lại Báo cáo Chính trị.",
    "keyPoints": [
      "Hội nghị Bộ Chính trị tháng 8/1986 đưa ra 'KẾT LUẬN ĐỐI VỚI MỘT SỐ VẤN ĐỀ THUỘC VỀ QUAN ĐIỂM KINH TẾ'.",
      "Được ghi nhận là BƯỚC ĐỘT PHÁ THỨ BA mang tính quyết định.",
      "Khẳng định phát triển kinh tế nhiều thành phần; cơ cấu lại đầu tư; lấy nông nghiệp, hàng tiêu dùng và xuất khẩu làm trọng tâm.",
      "Khắc phục bệnh chủ quan duy ý chí, nóng vội, đốt cháy giai đoạn."
    ],
    "significance": "Đặt nền tảng tư tưởng và định hình trực tiếp đường lối Đổi mới cho Đại hội VI tháng 12/1986.",
    "quickSummary": "8/1986: Hội nghị Bộ Chính trị điều chỉnh căn bản tư duy kinh tế - bước đột phá thứ ba trước Đại hội VI.",
    "commonMistakes": "3 bước đột phá trước Đổi mới: (1) TW 6 khóa IV (8/1979); (2) TW 8 khóa V (6/1985); (3) Bộ Chính trị khóa V (8/1986).",
    "relatedEvents": [
      "event-063",
      "event-067",
      "event-070"
    ]
  },
  "event-070": {
    "id": "event-070",
    "date": "1986-12",
    "datePrecision": "month",
    "title": "Đại hội VI, đường lối Đổi mới",
    "chapter": 3,
    "session": 22,
    "period": "Từ 1986",
    "kind": "event",
    "location": "Hội trường Ba Đình, Hà Nội",
    "context": "Đất nước chìm sâu trong khủng hoảng kinh tế - xã hội nghiêm trọng, lạm phát 774%, đời sống nhân dân vô cùng khó khăn.",
    "keyPoints": [
      "Họp từ 15 đến 18/12/1986 tại Hà Nội.",
      "Bầu đồng chí NGUYỄN VĂN LINH làm Tổng Bí thư.",
      "Phương châm hành động: 'NHÌN THẲNG VÀO SỰ THẬT, ĐÁNH GIÁ ĐÚNG SỰ THẬT, NÓI RÕ SỰ THẬT'.",
      "Khởi xướng ĐƯỜNG LỐI ĐỔI MỚI TOÀN DIỆN đất nước, trọng tâm trước hết là ĐỔI MỚI KINH TẾ.",
      "Đề ra BA CHƯƠNG TRÌNH KINH TẾ LỚN: Lương thực - thực phẩm; Hàng tiêu dùng; Hàng xuất khẩu.",
      "Thừa nhận sự tồn tại khách quan của nền kinh tế nhiều thành phần."
    ],
    "significance": "Đại hội bước ngoặt lịch sử mở ra kỷ nguyên Đổi mới, cứu đất nước thoát khỏi hiểm họa sụp đổ kinh tế.",
    "quickSummary": "12/1986: Đại hội VI khởi xướng đường lối Đổi mới toàn diện, bầu Nguyễn Văn Linh làm Tổng Bí thư.",
    "commonMistakes": "Tổng Bí thư Đại hội VI là đồng chí Nguyễn Văn Linh. Ba chương trình kinh tế lớn: Lương thực - thực phẩm, Hàng tiêu dùng, Hàng xuất khẩu.",
    "relatedEvents": [
      "event-069",
      "event-071",
      "event-072"
    ]
  },
  "event-071": {
    "id": "event-071",
    "date": "1988-04-05",
    "datePrecision": "day",
    "title": "Khoán 10",
    "chapter": 3,
    "session": 22,
    "period": "Từ 1986",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Đầu năm 1988 nạn đói giáp hạt xảy ra ở 21 tỉnh phía Bắc; sản xuất nông nghiệp cần một cú huých cơ chế triệt để hơn Chỉ thị 100.",
    "keyPoints": [
      "Ngày 5/4/1988, Bộ Chính trị khóa VI ban hành Nghị quyết số 10-NQ/TW (thường gọi là KHOÁN 10).",
      "Đột phá căn bản: Thừa nhận HỘ GIA ĐÌNH NÔNG DÂN LÀ ĐƠN VỊ KINH TẾ TỰ CHỦ.",
      "Giao ruộng đất ổn định lâu dài cho hộ nông dân (khoảng 15 năm).",
      "Bảo đảm nông dân được hưởng từ 40% sản lượng khoán trở lên; xóa bỏ nghĩa vụ giao nộp lương thực theo giá chỉ huy bao cấp."
    ],
    "significance": "Cởi trói thực sự cho nông dân, giải quyết triệt để nạn đói; ngay năm 1989 Việt Nam xuất khẩu được 1,4 triệu tấn gạo, bước vào nhóm xuất khẩu gạo hàng đầu thế giới.",
    "quickSummary": "5/4/1988: Nghị quyết 10 của Bộ Chính trị (Khoán 10) coi hộ nông dân là đơn vị kinh tế tự chủ.",
    "commonMistakes": "Khoán 10 (1988) giao đất cho HỘ GIA ĐÌNH ổn định 15 năm (khác Khoán 100 năm 1981 chỉ khoán đến nhóm/người lao động).",
    "relatedEvents": [
      "event-064",
      "event-070",
      "event-072"
    ]
  },
  "event-072": {
    "id": "event-072",
    "date": "1991-06",
    "datePrecision": "month",
    "title": "Đại hội VII, Cương lĩnh năm 1991",
    "chapter": 3,
    "session": 22,
    "period": "Từ 1986",
    "kind": "event",
    "location": "Hội trường Ba Đình, Hà Nội",
    "context": "Chủ nghĩa xã hội ở Đông Âu sụp đổ, Liên Xô khủng hoảng trầm trọng; các thế lực thù địch đẩy mạnh chống phá.",
    "keyPoints": [
      "Họp từ 24 đến 27/6/1991 tại Hà Nội.",
      "Bầu đồng chí ĐỖ MƯỜI làm Tổng Bí thư.",
      "Thông qua CƯƠNG LĨNH XÂY DỰNG ĐẤT NƯỚC TRONG THỜI KỲ QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI (Cương lĩnh năm 1991).",
      "Cương lĩnh 1991 nêu ra 6 đặc trưng của chủ nghĩa xã hội ở Việt Nam và 7 phương hướng xây dựng.",
      "Khẳng định: 'Đảng lấy chủ nghĩa Mác - Lênin và TƯ TƯỞNG HỒ CHÍ MINH làm nền tảng tư tưởng, kim chỉ nam cho hành động'.",
      "Đề ra đường lối đối ngoại độc lập, tự chủ, đa phương hóa, đa dạng hóa: 'Việt Nam muốn là bạn với tất cả các nước'."
    ],
    "significance": "Cương lĩnh định hướng chiến lược giữ vững ngọn cờ XHCN trong bối cảnh phong trào cộng sản thế giới thoái trào.",
    "quickSummary": "6/1991: Đại hội VII thông qua Cương lĩnh 1991, khẳng định Tư tưởng Hồ Chí Minh là nền tảng tư tưởng.",
    "commonMistakes": "Lần đầu tiên Tư tưởng Hồ Chí Minh được đưa vào Cương lĩnh làm nền tảng tư tưởng cùng CN Mác - Lênin là tại ĐẠI HỘI VII (1991).",
    "relatedEvents": [
      "event-070",
      "event-073",
      "event-077",
      "event-083"
    ]
  },
  "event-073": {
    "id": "event-073",
    "date": "1991-11",
    "datePrecision": "month",
    "title": "Bình thường hóa quan hệ với Trung Quốc",
    "chapter": 3,
    "session": 22,
    "period": "Từ 1986",
    "kind": "event",
    "location": "Bắc Kinh, Trung Quốc",
    "context": "Sau Đại hội VII và các tiếp xúc cấp cao tại Thành Đô (1990), hai nước xúc tiến bình thường hóa quan hệ.",
    "keyPoints": [
      "Tháng 11/1991, Tổng Bí thư Đỗ Mười và Thủ tướng Võ Văn Kiệt thăm chính thức Trung Quốc.",
      "Hai bên ra Tuyên bố chung chính thức bình thường hóa quan hệ Việt Nam - Trung Quốc theo phương châm láng giềng hữu nghị."
    ],
    "significance": "Khép lại hơn 10 năm căng thẳng đối đầu, mở ra thời kỳ hợp tác hòa bình và tạo điều kiện thuận lợi cho công cuộc Đổi mới.",
    "quickSummary": "11/1991: Chính thức bình thường hóa quan hệ Việt Nam - Trung Quốc.",
    "commonMistakes": "Bình thường hóa quan hệ với Trung Quốc năm 1991 (trước Hoa Kỳ năm 1995).",
    "relatedEvents": [
      "event-072",
      "event-075",
      "event-076"
    ]
  },
  "event-074": {
    "id": "event-074",
    "date": "1994-01",
    "datePrecision": "month",
    "title": "Hội nghị giữa nhiệm kỳ, bốn nguy cơ",
    "chapter": 3,
    "session": 22,
    "period": "Từ 1986",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Sau nửa nhiệm kỳ thực hiện Nghị quyết Đại hội VII, Đảng họp rà soát thời cơ và nguy cơ.",
    "keyPoints": [
      "Tháng 1/1994, Hội nghị đại biểu toàn quốc giữa nhiệm kỳ khóa VII họp tại Hà Nội.",
      "Cảnh báo BỐN NGUY CƠ lớn đe dọa sự nghiệp cách mạng:",
      "1. Nguy cơ tụt hậu xa hơn về kinh tế so với nhiều nước trong khu vực và trên thế giới.",
      "2. Nguy cơ chệch hướng xã hội chủ nghĩa.",
      "3. Nguy cơ về nạn tham nhũng và các tệ nạn xã hội.",
      "4. Nguy cơ 'Diễn biến hòa bình' của các thế lực thù địch."
    ],
    "significance": "Bài học cảnh giác chiến lược có giá trị thời sự sâu sắc cho đến tận ngày nay.",
    "quickSummary": "1/1994: Hội nghị giữa nhiệm kỳ khóa VII chỉ ra Bốn nguy cơ lớn của đất nước.",
    "commonMistakes": "Bốn nguy cơ: Tụt hậu kinh tế, Chệch hướng XHCN, Tham nhũng, Diễn biến hòa bình (Hội nghị giữa nhiệm kỳ VII).",
    "relatedEvents": [
      "event-072",
      "event-077"
    ]
  },
  "event-075": {
    "id": "event-075",
    "date": "1995-07-11",
    "datePrecision": "day",
    "title": "Bình thường hóa quan hệ với Hoa Kỳ theo mốc slide",
    "chapter": 3,
    "session": 22,
    "period": "Từ 1986",
    "kind": "event",
    "location": "Washington D.C. & Hà Nội",
    "context": "Sau quá trình giải quyết vấn đề tù binh, người Mỹ mất tích (MIA) và các nỗ lực ngoại giao kiên trì.",
    "keyPoints": [
      "Ngày 11/7/1995 (giờ Washington, tức 12/7/1995 giờ Hà Nội), Tổng thống Bill Clinton và Thủ tướng Võ Văn Kiệt tuyên bố bình thường hóa quan hệ ngoại giao.",
      "Chấm dứt hoàn toàn lệnh cấm vận kinh tế và tình trạng thù địch kéo dài 20 năm sau chiến tranh."
    ],
    "significance": "Bước ngoặt lịch sử phá vỡ thế bao vây cô lập quốc tế, mở rộng cánh cửa hội nhập kinh tế toàn cầu.",
    "quickSummary": "11/7/1995: Việt Nam và Hoa Kỳ chính thức bình thường hóa quan hệ ngoại giao.",
    "commonMistakes": "Slide ghi mốc ngày 11/7/1995 (theo giờ công bố của Tổng thống Mỹ Bill Clinton).",
    "relatedEvents": [
      "event-073",
      "event-076",
      "event-077"
    ]
  },
  "event-076": {
    "id": "event-076",
    "date": "1995-07-28",
    "datePrecision": "day",
    "title": "Gia nhập ASEAN",
    "chapter": 3,
    "session": 22,
    "period": "Từ 1986",
    "kind": "event",
    "location": "Bandar Seri Begawan, Brunei",
    "context": "Thực hiện đường lối đối ngoại đa phương hóa, đa dạng hóa, chủ động hội nhập khu vực.",
    "keyPoints": [
      "Ngày 28/7/1995, tại Hội nghị Bộ trưởng Ngoại giao ASEAN lần thứ 28 ở Brunei, Việt Nam chính thức được kết nạp làm thành viên thứ 7 của Hiệp hội các quốc gia Đông Nam Á (ASEAN)."
    ],
    "significance": "Đánh dấu bước hội nhập khu vực sâu rộng đầu tiên, tạo môi trường hòa bình, hữu nghị cho sự phát triển của đất nước.",
    "quickSummary": "28/7/1995: Việt Nam chính thức gia nhập ASEAN, trở thành thành viên thứ 7.",
    "commonMistakes": "Việt Nam gia nhập ASEAN ngày 28/7/1995 (chỉ 2 tuần sau khi bình thường hóa quan hệ với Hoa Kỳ).",
    "relatedEvents": [
      "event-075",
      "event-077"
    ]
  },
  "event-077": {
    "id": "event-077",
    "date": "1996-06",
    "datePrecision": "month",
    "title": "Đại hội VIII",
    "chapter": 3,
    "session": 23,
    "period": "Từ 1986",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Sau 10 năm Đổi mới (1986–1996), đất nước đạt những thành tựu to lớn, thoát khỏi khủng hoảng kinh tế - xã hội.",
    "keyPoints": [
      "Họp từ 28/6 đến 1/7/1996 tại Hà Nội.",
      "Đồng chí ĐỖ MƯỜI được bầu tiếp tục làm Tổng Bí thư.",
      "Nhận định lịch sử: Nước ta đã RA KHỎI KHỦNG HOẢNG KINH TẾ - XÃ HỘI, bước vào thời kỳ mới:",
      "ĐẨY MẠNH CÔNG NGHIỆP HÓA, HIỆN ĐẠI HÓA ĐẤT NƯỚC.",
      "Bổ sung đặc trưng bản chất của CNXH: 'Dân giàu, nước mạnh, xã hội công bằng, văn minh'."
    ],
    "significance": "Đại hội đánh dấu bước chuyển mình quyết định của sự nghiệp Đổi mới từ khắc phục khủng hoảng sang đẩy mạnh CNH - HĐH.",
    "quickSummary": "6/1996: Đại hội VIII tuyên bố nước ta thoát khỏi khủng hoảng kinh tế, bước vào thời kỳ đẩy mạnh CNH - HĐH.",
    "commonMistakes": "Mốc thoát khỏi khủng hoảng kinh tế - xã hội được khẳng định tại ĐẠI HỘI VIII (1996), không phải Đại hội VII.",
    "relatedEvents": [
      "event-070",
      "event-072",
      "event-078",
      "event-080"
    ]
  },
  "event-078": {
    "id": "event-078",
    "date": "1997-12",
    "datePrecision": "month",
    "title": "Lê Khả Phiêu được bầu làm Tổng Bí thư",
    "chapter": 3,
    "session": 23,
    "period": "Từ 1986",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Hội nghị Trung ương 4 khóa VIII họp kiện toàn nhân sự lãnh đạo cao nhất.",
    "keyPoints": [
      "Tháng 12/1997, Hội nghị TW 4 khóa VIII bầu đồng chí LÊ KHẢ PHIÊU làm Tổng Bí thư Ban Chấp hành Trung ương Đảng thay đồng chí Đỗ Mười xin nghỉ chuyển sang làm Cố vấn."
    ],
    "significance": "Bảo đảm sự chuyển giao thế hệ lãnh đạo vững vàng trong Đảng.",
    "quickSummary": "12/1997: Đồng chí Lê Khả Phiêu được bầu làm Tổng Bí thư tại Hội nghị TW 4 khóa VIII.",
    "commonMistakes": "Đồng chí Lê Khả Phiêu được bầu giữa nhiệm kỳ khóa VIII (tháng 12/1997).",
    "relatedEvents": [
      "event-077",
      "event-079",
      "event-080"
    ]
  },
  "event-079": {
    "id": "event-079",
    "date": "1998-07",
    "datePrecision": "month",
    "title": "Nghị quyết xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc",
    "chapter": 3,
    "session": 23,
    "period": "Từ 1986",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Công cuộc CNH - HĐH và mở cửa kinh tế đòi hỏi phải xây dựng nền tảng tinh thần vững chắc cho xã hội.",
    "keyPoints": [
      "Tháng 7/1998, Hội nghị Trung ương 5 khóa VIII ban hành Nghị quyết số 03-NQ/TW.",
      "Mục tiêu: 'XÂY DỰNG VÀ PHÁT TRIỂN NỀN VĂN HÓA VIỆT NAM TIÊN TIẾN, ĐẬM ĐÀ BẢN SẮC DÂN TỘC'.",
      "Xác định văn hóa là nền tảng tinh thần của xã hội, vừa là mục tiêu, vừa là động lực thúc đẩy phát triển kinh tế - xã hội.",
      "Đề ra 5 quan điểm chỉ đạo và 10 nhiệm vụ cụ thể."
    ],
    "significance": "Nghị quyết lịch sử toàn diện về văn hóa trong thời kỳ Đổi mới, tiếp nối tinh thần Đề cương văn hóa 1943.",
    "quickSummary": "7/1998: Nghị quyết TW 5 khóa VIII về xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc.",
    "commonMistakes": "Nghị quyết văn hóa nổi tiếng này thuộc Hội nghị TW 5 khóa VIII (1998).",
    "relatedEvents": [
      "event-018",
      "event-077",
      "event-086"
    ]
  },
  "event-080": {
    "id": "event-080",
    "date": "2001-04",
    "datePrecision": "month",
    "title": "Đại hội IX, xác định mô hình kinh tế tổng quát",
    "chapter": 3,
    "session": 24,
    "period": "Từ 1986",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Đại hội đầu tiên của thế kỷ XXI, tổng kết 15 năm Đổi mới.",
    "keyPoints": [
      "Họp từ 19 đến 22/4/2001 tại Hà Nội.",
      "Bầu đồng chí NÔNG ĐỨC MẠNH làm Tổng Bí thư.",
      "Xác định rõ mô hình kinh tế tổng quát trong thời kỳ quá độ: KINH TẾ THỊ TRƯỜNG ĐỊNH HƯỚNG XÃ HỘI CHỦ NGHĨA.",
      "Khẳng định kinh tế thị trường không đối lập với CNXH mà là phương tiện xây dựng cơ sở vật chất kỹ thuật cho CNXH.",
      "Đề ra Chiến lược phát triển kinh tế - xã hội 2001–2010."
    ],
    "significance": "Đột phá lý luận căn bản xác lập chính thức khái niệm 'Kinh tế thị trường định hướng XHCN'.",
    "quickSummary": "4/2001: Đại hội IX chính thức xác định Kinh tế thị trường định hướng XHCN là mô hình kinh tế tổng quát.",
    "commonMistakes": "LƯU Ý EDITORIAL NOTE 03: Slide xếp sự kiện 11/9/2001 vào bối cảnh Đại hội IX, thực tế sự kiện 11/9 xảy ra sau Đại hội (tháng 9/2001).",
    "relatedEvents": [
      "event-077",
      "event-080",
      "event-081"
    ]
  },
  "event-081": {
    "id": "event-081",
    "date": "2006-04",
    "datePrecision": "month",
    "title": "Đại hội X",
    "chapter": 3,
    "session": 25,
    "period": "Từ 1986",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Tổng kết 20 năm Đổi mới (1986–2006), chuẩn bị gia nhập Tổ chức Thương mại Thế giới (WTO).",
    "keyPoints": [
      "Họp từ 18 đến 25/4/2006 tại Hà Nội.",
      "Đồng chí NÔNG ĐỨC MẠNH được bầu tiếp tục làm Tổng Bí thư.",
      "Điểm đột phá về bản chất của Đảng: 'Đảng Cộng sản Việt Nam là đội tiên phong của giai cấp công nhân, đồng thời là đội tiên phong của nhân dân lao động và của cả dân tộc Việt Nam'.",
      "CHÍNH THỨC CHO PHÉP ĐẢNG VIÊN LÀM KINH TẾ TƯ NHÂN.",
      "Đẩy mạnh toàn diện công cuộc Đổi mới, sớm đưa nước ta ra khỏi tình trạng kém phát triển."
    ],
    "significance": "Cởi bỏ định kiến ý thức hệ, giải phóng mạnh mẽ sức sáng tạo và nguồn lực của toàn dân, đưa Việt Nam gia nhập WTO (đầu năm 2007).",
    "quickSummary": "4/2006: Đại hội X cho phép đảng viên làm kinh tế tư nhân, làm rõ bản chất tiên phong của Đảng.",
    "commonMistakes": "Chủ trương 'Đảng viên làm kinh tế tư nhân' được quyết định tại ĐẠI HỘI X (2006).",
    "relatedEvents": [
      "event-080",
      "event-082",
      "event-089"
    ]
  },
  "event-082": {
    "id": "event-082",
    "date": "2011-01",
    "datePrecision": "month",
    "title": "Đại hội XI",
    "chapter": 3,
    "session": 26,
    "period": "Từ 1986",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Đất nước đã ra khỏi nhóm nước có thu nhập thấp, bước vào nhóm nước đang phát triển có thu nhập trung bình.",
    "keyPoints": [
      "Họp từ 12 đến 19/1/2011 tại Hà Nội.",
      "Bầu đồng chí NGUYỄN PHÚ TRỌNG làm Tổng Bí thư.",
      "Thông qua CƯƠNG LĨNH BỔ SUNG, PHÁT TRIỂN NĂM 2011.",
      "Thông qua Chiến lược phát triển kinh tế - xã hội 2011–2020.",
      "Đề ra BA ĐỘT PHÁ CHIẾN LƯỢC: Hoàn thiện thể chế; Phát triển nguồn nhân lực chất lượng cao; Xây dựng kết cấu hạ tầng đồng bộ."
    ],
    "significance": "Đại hội xác lập khuôn khổ lý luận hoàn chỉnh cho giai đoạn công nghiệp hóa, hiện đại hóa và hội nhập quốc tế toàn diện.",
    "quickSummary": "1/2011: Đại hội XI bầu Nguyễn Phú Trọng làm Tổng Bí thư, thông qua Cương lĩnh bổ sung 2011 và 3 đột phá chiến lược.",
    "commonMistakes": "Cương lĩnh 2011 bổ sung phát triển từ Cương lĩnh 1991, có 8 đặc trưng (nhiều hơn Cương lĩnh 1991 có 6 đặc trưng).",
    "relatedEvents": [
      "event-072",
      "event-081",
      "event-083",
      "event-084",
      "event-087"
    ]
  },
  "event-083": {
    "id": "event-083",
    "date": "2011",
    "datePrecision": "year",
    "title": "Cương lĩnh bổ sung, phát triển năm 2011",
    "chapter": 3,
    "session": 26,
    "period": "Từ 1986",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Sau 20 năm thực hiện Cương lĩnh 1991, thực tiễn đất nước và thế giới có nhiều chuyển biến sâu sắc.",
    "keyPoints": [
      "Được Đại hội XI thông qua tháng 1/2011.",
      "Xác định 8 ĐẶC TRƯNG BẢN CHẤT của xã hội XHCN mà nhân dân ta xây dựng:",
      "1. Dân giàu, nước mạnh, dân chủ, công bằng, văn minh (bổ sung từ 'dân chủ').",
      "2. Do nhân dân làm chủ.",
      "3. Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và quan hệ sản xuất tiến bộ phù hợp.",
      "4. Có nền văn hóa tiên tiến, đậm đà bản sắc dân tộc.",
      "5. Con người có cuộc sống ấm no, tự do, hạnh phúc, có điều kiện phát triển toàn diện (bổ sung mới).",
      "6. Các dân tộc trong cộng đồng Việt Nam bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển.",
      "7. Có Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân do Đảng Cộng sản lãnh đạo (bổ sung mới).",
      "8. Có quan hệ hữu nghị và hợp tác với các nước trên thế giới."
    ],
    "significance": "Văn kiện lý luận có giá trị cao nhất định hướng con đường đi lên chủ nghĩa xã hội của Việt Nam trong thời kỳ mới.",
    "quickSummary": "2011: Cương lĩnh bổ sung phát triển năm 2011 xác định 8 đặc trưng của xã hội XHCN ở Việt Nam.",
    "commonMistakes": "Nhớ 2 đặc trưng mới được bổ sung so với 1991: Đặc trưng về Con người (ấm no, hạnh phúc) và Nhà nước pháp quyền XHCN.",
    "relatedEvents": [
      "event-072",
      "event-082",
      "event-084"
    ]
  },
  "event-084": {
    "id": "event-084",
    "date": "2011",
    "datePrecision": "year",
    "title": "Ba đột phá chiến lược 2011–2020",
    "chapter": 3,
    "session": 26,
    "period": "Từ 1986",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Cần gỡ bỏ các nút thắt then chốt để duy trì tăng trưởng kinh tế nhanh và bền vững.",
    "keyPoints": [
      "Được Đại hội XI (2011) xác định trong Chiến lược 2011–2020 gồm 3 khâu đột phá:",
      "1. Hoàn thiện thể chế kinh tế thị trường định hướng XHCN, trọng tâm là tạo lập môi trường cạnh tranh bình đẳng và cải cách hành chính.",
      "2. Phát triển nhanh nguồn nhân lực, nhất là nguồn nhân lực chất lượng cao gắn với đổi mới giáo dục.",
      "3. Xây dựng hệ thống kết cấu hạ tầng đồng bộ với một số công trình hiện đại (giao thông, đô thị, năng lượng)."
    ],
    "significance": "Ba đòn bẩy trọng tâm xuyên suốt chỉ đạo phát triển kinh tế - xã hội của Việt Nam qua các kỳ Đại hội XI, XII, XIII.",
    "quickSummary": "2011: Ba đột phá chiến lược 2011–2020: Thể chế kinh tế thị trường, Nguồn nhân lực chất lượng cao, Hạ tầng đồng bộ.",
    "commonMistakes": "3 đột phá: Thể chế - Nhân lực - Hạ tầng (không phải vốn hay đất đai).",
    "relatedEvents": [
      "event-082",
      "event-083",
      "event-087"
    ]
  },
  "event-085": {
    "id": "event-085",
    "date": "2013-11-04",
    "datePrecision": "day",
    "title": "Nghị quyết 29 về đổi mới giáo dục và đào tạo",
    "chapter": 3,
    "session": 26,
    "period": "Từ 1986",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Yêu cầu của cuộc cách mạng công nghiệp mới và nâng cao năng lực cạnh tranh quốc gia.",
    "keyPoints": [
      "Ngày 4/11/2013, Hội nghị Trung ương 8 khóa XI ban hành Nghị quyết số 29-NQ/TW.",
      "Mục tiêu: 'ĐỔI MỚI CĂN BẢN, TOÀN DIỆN GIÁO DỤC VÀ ĐÀO TẠO, ĐÁP ỨNG YÊU CẦU CÔNG NGHIỆP HÓA, HIỆN ĐẠI HÓA'.",
      "Chuyển nền giáo dục từ truyền thụ kiến thức nặng tính hàn lâm sang PHÁT TRIỂN TOÀN DIỆN NĂNG LỰC VÀ PHẨM CHẤT người học.",
      "Chuẩn hóa, hiện đại hóa, xã hội hóa, dân chủ hóa và hội nhập quốc tế."
    ],
    "significance": "Nghị quyết rường cột định hình chiến lược phát triển con người và giáo dục quốc gia trong thời kỳ kinh tế tri thức.",
    "quickSummary": "4/11/2013: Nghị quyết 29-NQ/TW về đổi mới căn bản, toàn diện giáo dục và đào tạo.",
    "commonMistakes": "Nghị quyết 29 chuyển trọng tâm giáo dục từ 'truyền thụ kiến thức' sang 'phát triển năng lực và phẩm chất'.",
    "relatedEvents": [
      "event-082",
      "event-084",
      "event-086"
    ]
  },
  "event-086": {
    "id": "event-086",
    "date": "2014-06-09",
    "datePrecision": "day",
    "title": "Nghị quyết 33 về văn hóa và con người",
    "chapter": 3,
    "session": 26,
    "period": "Từ 1986",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Văn hóa và con người là hai yếu tố gắn bó hữu cơ quyết định sự hưng thịnh của dân tộc.",
    "keyPoints": [
      "Ngày 9/6/2014, Hội nghị Trung ương 9 khóa XI ban hành Nghị quyết số 33-NQ/TW.",
      "Chủ trương: 'XÂY DỰNG VÀ PHÁT TRIỂN VĂN HÓA, CON NGƯỜI VIỆT NAM ĐÁP ỨNG YÊU CẦU PHÁT TRIỂN BỀN VỮNG ĐẤT NƯỚC'.",
      "Đặt con người vào vị trí trung tâm của sự phát triển; văn hóa thực sự là nền tảng tinh thần, sức mạnh nội sinh và động lực phát triển.",
      "Xây dựng hệ giá trị quốc gia, hệ giá trị văn hóa và chuẩn mực con người Việt Nam."
    ],
    "significance": "Hoàn thiện nhận thức của Đảng coi trọng yếu tố con người và bản sắc văn hóa làm trụ cột phát triển bền vững.",
    "quickSummary": "9/6/2014: Nghị quyết 33-NQ/TW về xây dựng và phát triển văn hóa, con người Việt Nam bền vững.",
    "commonMistakes": "Nghị quyết 33 nhấn mạnh phát triển văn hóa gắn liền với xây dựng chuẩn mực CON NGƯỜI Việt Nam thời kỳ mới.",
    "relatedEvents": [
      "event-079",
      "event-085"
    ]
  },
  "event-087": {
    "id": "event-087",
    "date": "2016-01",
    "datePrecision": "month",
    "title": "Đại hội XII",
    "chapter": 3,
    "session": 27,
    "period": "Từ 1986",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Tình hình thế giới biến động phức tạp, nguy cơ suy thoái tư tưởng chính trị, đạo đức và tham nhũng đòi hỏi chỉnh đốn Đảng quyết liệt.",
    "keyPoints": [
      "Họp từ 20 đến 28/1/2016 tại Hà Nội.",
      "Đồng chí NGUYỄN PHÚ TRỌNG tiếp tục được bầu làm Tổng Bí thư.",
      "Chủ đề: Tăng cường xây dựng Đảng trong sạch, vững mạnh; phát huy sức mạnh toàn dân tộc và dân chủ XHCN; đẩy mạnh toàn diện, đồng bộ công cuộc đổi mới; bảo vệ vững chắc Tổ quốc.",
      "Nhấn mạnh công tác đấu tranh phòng, chống tham nhũng, lãng phí, tiêu cực 'không có vùng cấm, không có ngoại lệ'."
    ],
    "significance": "Đại hội tạo bước chuyển căn bản trong công tác xây dựng, chỉnh đốn Đảng và củng cố niềm tin của nhân dân.",
    "quickSummary": "1/2016: Đại hội XII bầu Nguyễn Phú Trọng làm Tổng Bí thư, đẩy mạnh công tác xây dựng chỉnh đốn Đảng.",
    "commonMistakes": "LƯU Ý EDITORIAL NOTE 06: Slide ghi NQ 05-NQ/TW năm 2016 thuộc Hội nghị TW 6, thực chất là Hội nghị TW 4 KHÓA XII.",
    "relatedEvents": [
      "event-082",
      "event-088",
      "event-089",
      "event-092"
    ]
  },
  "event-088": {
    "id": "event-088",
    "date": "2016-10-30",
    "datePrecision": "day",
    "title": "Nghị quyết 04 về xây dựng, chỉnh đốn Đảng",
    "chapter": 3,
    "session": 27,
    "period": "Từ 1986",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Tình trạng suy thoái về tư tưởng chính trị, đạo đức, lối sống, 'tự diễn biến', 'tự chuyển hóa' đe dọa sự tồn vong của Đảng và chế độ.",
    "keyPoints": [
      "Ngày 30/10/2016, Hội nghị Trung ương 4 khóa XII ban hành Nghị quyết số 04-NQ/TW.",
      "Nhận diện rõ 27 BIỂU HIỆN suy thoái về tư tưởng chính trị, đạo đức lối sống, tự diễn biến, tự chuyển hóa.",
      "Đề ra 4 nhóm giải pháp đồng bộ: Giáo dục chính trị tư tưởng; Cơ chế, chính sách; Kiểm tra, giám sát, kỷ luật đảng; Phát huy vai trò của nhân dân.",
      "Gắn việc chỉnh đốn Đảng với Chỉ thị 05 về học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh."
    ],
    "significance": "Vũ khí sắc bén, then chốt mở màn cho chiến dịch phòng chống tham nhũng, chỉnh đốn Đảng quyết liệt, làm trong sạch bộ máy.",
    "quickSummary": "30/10/2016: Nghị quyết TW 4 khóa XII chỉ rõ 27 biểu hiện suy thoái và quyết tâm chỉnh đốn Đảng.",
    "commonMistakes": "Nghị quyết Trung ương 4 khóa XII nhận diện cụ thể 27 biểu hiện suy thoái (9 biểu hiện tư tưởng, 9 đạo đức, 9 tự diễn biến).",
    "relatedEvents": [
      "event-087",
      "event-089",
      "event-092"
    ]
  },
  "event-089": {
    "id": "event-089",
    "date": "2017-06-03",
    "datePrecision": "day",
    "title": "Nghị quyết 10 về phát triển kinh tế tư nhân",
    "chapter": 3,
    "session": 27,
    "period": "Từ 1986",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Kinh tế tư nhân ngày càng đóng góp to lớn vào GDP, tạo việc làm và nguồn lực cho đất nước.",
    "keyPoints": [
      "Ngày 3/6/2017, Hội nghị Trung ương 5 khóa XII ban hành Nghị quyết số 10-NQ/TW.",
      "Khẳng định bước tiến lý luận quan trọng: 'KINH TẾ TƯ NHÂN LÀ MỘT ĐỘNG LỰC QUAN TRỌNG CỦA NỀN KINH TẾ THỊ TRƯỜNG ĐỊNH HƯỚNG XHCN'.",
      "Xóa bỏ mọi rào cản, định kiến; tạo môi trường kinh doanh thuận lợi, bảo hộ quyền sở hữu và tự do kinh doanh hợp pháp.",
      "Khuyến khích kinh tế tư nhân tham gia đầu tư vào các dự án lớn, phát triển các tập đoàn kinh tế tư nhân tầm cỡ khu vực."
    ],
    "significance": "Đột phá tư duy giải phóng tối đa nguồn lực khu vực tư nhân, tạo động lực tăng trưởng mạnh mẽ cho đất nước.",
    "quickSummary": "3/6/2017: Nghị quyết 10-NQ/TW khẳng định Kinh tế tư nhân là một động lực quan trọng của nền kinh tế.",
    "commonMistakes": "Nghị quyết 10 khóa XII nâng tầm kinh tế tư nhân thành 'một động lực quan trọng' (trước đó Đại hội X chỉ mới cho phép đảng viên làm KTTN).",
    "relatedEvents": [
      "event-081",
      "event-087",
      "event-092"
    ]
  },
  "event-090": {
    "id": "event-090",
    "date": "2018-05-21",
    "datePrecision": "day",
    "title": "Nghị quyết 27 về cải cách tiền lương",
    "chapter": 3,
    "session": 27,
    "period": "Từ 1986",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Chính sách tiền lương hiện hành còn nhiều bất cập, cào bằng, chưa thực sự là động lực kích thích người lao động nâng cao năng suất.",
    "keyPoints": [
      "Ngày 21/5/2018, Hội nghị Trung ương 7 khóa XII ban hành Nghị quyết số 27-NQ/TW.",
      "Chủ trương: 'CẢI CÁCH CHÍNH SÁCH TIỀN LƯƠNG ĐỐI VỚI CÁN BỘ, CÔNG CHỨC, VIÊN CHỨC, LỰC LƯỢNG VŨ TRANG VÀ NGƯỜI LAO ĐỘNG'.",
      "Xây dựng hệ thống bảng lương mới theo vị trí việc làm, chức danh và chức vụ lãnh đạo; bãi bỏ mức lương cơ sở và hệ số lương cũ.",
      "Tiền lương phải thực sự là nguồn thu nhập chính bảo đảm đời sống người lao động."
    ],
    "significance": "Cuộc cải cách tiền lương căn bản, tạo động lực nâng cao hiệu lực, hiệu quả của bộ máy nhà nước và chống tiêu cực.",
    "quickSummary": "21/5/2018: Nghị quyết 27-NQ/TW về cải cách chính sách tiền lương theo vị trí việc làm.",
    "commonMistakes": "Nghị quyết 27 khóa XII xác định thiết kế bảng lương theo VỊ TRÍ VIỆC LÀM thay cho hệ số cào bằng.",
    "relatedEvents": [
      "event-087",
      "event-091"
    ]
  },
  "event-091": {
    "id": "event-091",
    "date": "2018-05-23",
    "datePrecision": "day",
    "title": "Nghị quyết 28 về cải cách bảo hiểm xã hội",
    "chapter": 3,
    "session": 27,
    "period": "Từ 1986",
    "kind": "event",
    "location": "Hà Nội",
    "context": "Bảo hiểm xã hội là trụ cột an sinh xã hội quan trọng của quốc gia trong bối cảnh già hóa dân số.",
    "keyPoints": [
      "Ngày 23/5/2018, Hội nghị Trung ương 7 khóa XII ban hành Nghị quyết số 28-NQ/TW.",
      "Mục tiêu: 'CẢI CÁCH CHÍNH SÁCH BẢO HIỂM XÃ HỘI', hướng tới mục tiêu BẢO HIỂM XÃ HỘI TOÀN DÂN.",
      "Phát triển hệ thống BHXH đa tầng, linh hoạt, hiện đại; mở rộng diện bao phủ BHXH tự nguyện.",
      "Rút ngắn thời gian đóng BHXH tối thiểu để hưởng lương hưu, tạo điều kiện cho mọi lao động tiếp cận an sinh."
    ],
    "significance": "Hoàn thiện lưới an sinh xã hội vững chắc, bảo đảm quyền lợi lâu dài của mọi người dân lao động.",
    "quickSummary": "23/5/2018: Nghị quyết 28-NQ/TW về cải cách chính sách bảo hiểm xã hội tiến tới BHXH toàn dân.",
    "commonMistakes": "Nghị quyết 28 khóa XII hướng tới xây dựng hệ thống BHXH đa tầng và toàn dân.",
    "relatedEvents": [
      "event-087",
      "event-090"
    ]
  },
  "event-092": {
    "id": "event-092",
    "date": "2021-01",
    "datePrecision": "month",
    "title": "Đại hội XIII",
    "chapter": 3,
    "session": 27,
    "period": "Từ 1986",
    "kind": "event",
    "location": "Trung tâm Hội nghị Quốc gia Mỹ Đình, Hà Nội",
    "context": "Việt Nam kiểm soát thành công các đợt dịch, kinh tế tăng trưởng dương trong bối cảnh kinh tế toàn cầu suy thoái; đất nước chưa bao giờ có được cơ đồ, tiềm lực, vị thế như ngày nay.",
    "keyPoints": [
      "Họp từ 25/1 đến 1/2/2021 tại Hà Nội.",
      "Đồng chí NGUYỄN PHÚ TRỌNG tiếp tục được tín nhiệm bầu làm Tổng Bí thư Ban Chấp hành Trung ương Đảng khóa XIII.",
      "Đề ra mục tiêu phát triển đất nước với KHÁT VỌNG PHÁT TRIỂN ĐẤT NƯỚC PHỒN VINH, HẠNH PHÚC.",
      "Xác định rõ các mốc mục tiêu định hướng cụ thể đến năm 2025, 2030 (100 năm thành lập Đảng) và 2045 (100 năm thành lập nước).",
      "Đột phá: Chuyển đổi số quốc gia, đổi mới sáng tạo, phát triển kinh tế số và kinh tế xanh."
    ],
    "significance": "Đại hội xác lập tầm nhìn chiến lược giữa thế kỷ XXI, khơi dậy mạnh mẽ tinh thần tự hào dân tộc và khát vọng vươn mình của Việt Nam.",
    "quickSummary": "1/2021: Đại hội XIII xác lập khát vọng phát triển đất nước phồn vinh, hạnh phúc với các mốc 2025, 2030, 2045.",
    "commonMistakes": "Đại hội XIII bầu đồng chí Nguyễn Phú Trọng làm Tổng Bí thư nhiệm kỳ thứ 3 liên tiếp.",
    "relatedEvents": [
      "event-087",
      "event-093",
      "event-094",
      "event-095"
    ]
  },
  "event-093": {
    "id": "event-093",
    "date": "2025",
    "datePrecision": "year",
    "title": "Mục tiêu năm 2025 được đề ra tại Đại hội XIII",
    "chapter": 3,
    "session": 27,
    "period": "Từ 1986",
    "kind": "goal",
    "location": "Phạm vi toàn quốc",
    "context": "Mục tiêu trung hạn 5 năm được Đại hội XIII của Đảng vạch ra.",
    "keyPoints": [
      "Mốc kỷ niệm 50 NĂM NGÀY GIẢI PHÓNG HOÀN TOÀN MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC (30/4/1975 - 30/4/2025).",
      "Mục tiêu kinh tế: Là NƯỚC ĐANG PHÁT TRIỂN, CÓ CÔNG NGHIỆP THEO HƯỚNG HIỆN ĐẠI, VƯỢT QUA MỨC THU NHẬP TRUNG BÌNH THẤP."
    ],
    "significance": "Bước đệm 5 năm then chốt hoàn thiện nền tảng thể chế và công nghiệp hóa trước mốc kỷ niệm 100 năm thành lập Đảng.",
    "quickSummary": "Mục tiêu 2025 (kỷ niệm 50 năm giải phóng miền Nam): Nước đang phát triển, công nghiệp theo hướng hiện đại, vượt thu nhập trung bình thấp.",
    "commonMistakes": "CHÚ Ý TÍNH CHẤT: Đây là MỤC TIÊU ĐỊNH HƯỚNG được Đại hội XIII đề ra, không phải đánh giá kết quả đã nghiệm thu.",
    "relatedEvents": [
      "event-092",
      "event-094",
      "event-095"
    ]
  },
  "event-094": {
    "id": "event-094",
    "date": "2030",
    "datePrecision": "year",
    "title": "Mục tiêu năm 2030 được đề ra tại Đại hội XIII",
    "chapter": 3,
    "session": 27,
    "period": "Từ 1986",
    "kind": "goal",
    "location": "Phạm vi toàn quốc",
    "context": "Tầm nhìn 10 năm được vạch ra tại Đại hội XIII gắn với sự kiện trọng đại của Đảng.",
    "keyPoints": [
      "Mốc KỶ NIỆM 100 NĂM NGÀY THÀNH LẬP ĐẢNG CỘNG SẢN VIỆT NAM (3/2/1930 - 3/2/2030).",
      "Mục tiêu kinh tế: Là NƯỚC ĐANG PHÁT TRIỂN, CÓ CÔNG NGHIỆP HIỆN ĐẠI, THU NHẬP TRUNG BÌNH CAO."
    ],
    "significance": "Đánh dấu tròn một thế kỷ lãnh đạo vẻ vang của Đảng, đưa Việt Nam vào nhóm các quốc gia có nền công nghiệp hiện đại.",
    "quickSummary": "Mục tiêu 2030 (100 năm thành lập Đảng): Nước đang phát triển, có công nghiệp hiện đại, thu nhập trung bình cao.",
    "commonMistakes": "Dễ nhầm chỉ tiêu thu nhập: 2025 là 'vượt qua trung bình thấp', 2030 là 'thu nhập trung bình CAO'.",
    "relatedEvents": [
      "event-003",
      "event-092",
      "event-093",
      "event-095"
    ]
  },
  "event-095": {
    "id": "event-095",
    "date": "2045",
    "datePrecision": "year",
    "title": "Mục tiêu năm 2045 được đề ra tại Đại hội XIII",
    "chapter": 3,
    "session": 27,
    "period": "Từ 1986",
    "kind": "goal",
    "location": "Phạm vi toàn quốc",
    "context": "Tầm nhìn chiến lược dài hạn 25 năm của Đại hội XIII hướng tới mốc thế kỷ của quốc gia.",
    "keyPoints": [
      "Mốc KỶ NIỆM 100 NĂM NGÀY THÀNH LẬP NƯỚC VIỆT NAM DÂN CHỦ CỘNG HÒA, NAY LÀ NƯỚC CHXHCN VIỆT NAM (2/9/1945 - 2/9/2045).",
      "Mục tiêu vĩ đại: TRỞ THÀNH NƯỚC PHÁT TRIỂN, THU NHẬP CAO.",
      "Xây dựng một nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ, giàu mạnh, sánh vai với các cường quốc năm châu như tâm nguyện của Bác Hồ."
    ],
    "significance": "Khát vọng cháy bỏng của toàn thể dân tộc Việt Nam sau một thế kỷ độc lập tự do dưới ngọn cờ của Đảng.",
    "quickSummary": "Mục tiêu 2045 (100 năm thành lập nước): Trở thành nước phát triển, thu nhập cao.",
    "commonMistakes": "Mốc 2045 là NƯỚC PHÁT TRIỂN, THU NHẬP CAO (100 năm Quốc khánh 1945 - 2045).",
    "relatedEvents": [
      "event-025",
      "event-092",
      "event-093",
      "event-094"
    ]
  }
};
