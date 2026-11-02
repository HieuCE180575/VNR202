export interface ComparisonRow {
  criterion: string;
  items: Record<string, string>;
}

export interface ComparisonTopic {
  id: string;
  title: string;
  subtitle: string;
  columns: { key: string; label: string; periodBadge: string; sessionRef: string }[];
  rows: ComparisonRow[];
  mistakeAlert: string;
  examTip: string;
  sources: { session: number; unitType: string; unitNumber: number; docId: string }[];
}

export const COMPARISON_TOPICS: ComparisonTopic[] = [
  {
    id: "cuong-linh-vs-luan-cuong",
    title: "Cương lĩnh chính trị đầu tiên (2/1930) vs Luận cương chính trị (10/1930)",
    subtitle: "So sánh văn kiện nền tảng đầu tiên của Nguyễn Ái Quốc và Luận cương của Trần Phú",
    columns: [
      { key: "cuonglinh", label: "Cương lĩnh chính trị đầu tiên (2/1930)", periodBadge: "Tháng 2/1930", sessionRef: "Session 4" },
      { key: "luancuong", label: "Luận cương chính trị (10/1930)", periodBadge: "Tháng 10/1930", sessionRef: "Session 5" }
    ],
    rows: [
      {
        criterion: "Người soạn thảo & Hội nghị",
        items: {
          cuonglinh: "Nguyễn Ái Quốc soạn thảo, được Hội nghị thành lập Đảng (Cửu Long, Hương Cảng, 6/1 - 7/2/1930) thông qua.",
          luancuong: "Trần Phú soạn thảo, được Hội nghị Ban Chấp hành Trung ương họp tại Hương Cảng (10/1930) thông qua."
        }
      },
      {
        criterion: "Tên Đảng được xác định",
        items: {
          cuonglinh: "Đảng Cộng sản Việt Nam.",
          luancuong: "Đổi tên Đảng thành Đảng Cộng sản Đông Dương (theo chỉ đạo của Quốc tế Cộng sản)."
        }
      },
      {
        criterion: "Mâu thuẫn chủ yếu & Nhiệm vụ hàng đầu",
        items: {
          cuonglinh: "Mâu thuẫn giữa dân tộc Việt Nam với thực dân Pháp xâm lược. Đặt nhiệm vụ GIẢI PHÓNG DÂN TỘC lên hàng đầu: đánh đổ đế quốc Pháp và phong kiến tay sai, làm cho nước Nam hoàn toàn độc lập.",
          luancuong: "Mâu thuẫn giai cấp giữa vô sản, nông dân với tư sản, địa chủ phong kiến. Đặt hai nhiệm vụ phản đế và điền địa có quan hệ khăng khít, coi trọng nhiệm vụ GIAI CẤP VÀ CÁCH MẠNG RUỘNG ĐẤT."
        }
      },
      {
        criterion: "Lực lượng cách mạng",
        items: {
          cuonglinh: "Đại đoàn kết toàn dân tộc: Công - nông là gốc; đồng thời phải hết sức liên lạc với tiểu tư sản, trí thức, trung nông; lôi kéo hoặc trung lập phú nông, trung tiểu địa chủ và tư sản dân tộc.",
          luancuong: "Chỉ coi công nhân và nông dân là hai động lực chính. Chưa thấy được khả năng cách mạng của tiểu tư sản, tư sản dân tộc và trung tiểu địa chủ (coi là lực lượng cải lương, thoả hiệp)."
        }
      },
      {
        criterion: "Quan hệ quốc tế",
        items: {
          cuonglinh: "Cách mạng Việt Nam là một bộ phận của cách mạng thế giới, tranh thủ sự ủng hộ của các dân tộc bị áp bức và giai cấp vô sản thế giới.",
          luancuong: "Cách mạng Đông Dương là một bộ phận của cách mạng vô sản thế giới, liên hệ mật thiết với phong trào cách mạng ở Pháp và thuộc địa Pháp."
        }
      },
      {
        criterion: "Ý nghĩa & Giới hạn",
        items: {
          cuonglinh: "Cương lĩnh đúng đắn, sáng tạo, nhuần nhuyễn quan điểm Mác - Lênin với thực tiễn thuộc địa; giải quyết đúng đắn mối quan hệ giữa dân tộc và giai cấp.",
          luancuong: "Khẳng định nhiều vấn đề chiến lược nhưng bộc lộ hai hạn chế lớn: (1) Không đặt nhiệm vụ giải phóng dân tộc lên hàng đầu; (2) Đánh giá không đúng khả năng cách mạng của các giai tầng khác ngoài công - nông."
        }
      }
    ],
    mistakeAlert: "Dễ nhầm: Luận cương tháng 10/1930 KHÔNG PHẢI do Nguyễn Ái Quốc soạn thảo mà do Trần Phú. Luận cương đổi tên Đảng thành Đảng Cộng sản Đông Dương và có hạn chế về giải phóng dân tộc và tập hợp lực lượng.",
    examTip: "Từ khóa ăn điểm: Cương lĩnh 2/1930: 'Dân tộc lên trên hết', 'Liên minh công - nông - trí thức và lôi kéo các tầng lớp'. Luận cương 10/1930: 'Trần Phú', 'Nhấn mạnh đấu tranh giai cấp', 'Hạn chế tập hợp lực lượng'.",
    sources: [
      { session: 4, unitType: "page", unitNumber: 9, docId: "s04-page-009" },
      { session: 4, unitType: "page", unitNumber: 13, docId: "s04-page-013" },
      { session: 5, unitType: "page", unitNumber: 8, docId: "s05-page-008" },
      { session: 5, unitType: "page", unitNumber: 10, docId: "s05-page-010" }
    ]
  },
  {
    id: "phong-trao-30-31-vs-36-39",
    title: "Phong trào cách mạng 1930–1931 vs Phong trào Dân chủ 1936–1939",
    subtitle: "So sánh hai cao trào cách mạng tiền đề trước Cách mạng Tháng Tám 1945",
    columns: [
      { key: "pt3031", label: "Phong trào cách mạng 1930–1931", periodBadge: "1930 – 1931", sessionRef: "Session 5" },
      { key: "pt3639", label: "Phong trào Dân chủ 1936–1939", periodBadge: "1936 – 1939", sessionRef: "Session 6" }
    ],
    rows: [
      {
        criterion: "Bối cảnh lịch sử",
        items: {
          pt3031: "Khủng hoảng kinh tế thế giới 1929–1933; thực dân Pháp khủng bố trắng sau khởi nghĩa Yên Bái; Đảng Cộng sản Việt Nam vừa ra đời lãnh đạo trực tiếp.",
          pt3639: "Chủ nghĩa phát xít xuất hiện đe dọa hòa bình thế giới; Quốc tế Cộng sản họp Đại hội VII (7/1935); Mặt trận Nhân dân Pháp lên nắm quyền ban hành chính sách dân chủ cho thuộc địa."
        }
      },
      {
        criterion: "Kẻ thù trước mắt",
        items: {
          pt3031: "Đế quốc Pháp xâm lược và phong kiến tay sai phản động.",
          pt3639: "Bọn phản động thuộc địa Pháp và bè lũ tay sai không chịu thi hành chính sách của Mặt trận Nhân dân Pháp."
        }
      },
      {
        criterion: "Nhiệm vụ & Khẩu hiệu",
        items: {
          pt3031: "Chiến lược: Chống đế quốc giành độc lập, chống phong kiến giành ruộng đất cho dân cày. Khẩu hiệu triệt để.",
          pt3639: "Trước mắt: Đòi tự do, dân chủ, cơm áo, hòa bình; chống phát xít, chống chiến tranh đế quốc."
        }
      },
      {
        criterion: "Hình thức & Phương pháp đấu tranh",
        items: {
          pt3031: "Bí mật, bất hợp pháp; bãi công, biểu tình vũ trang tự vệ; đỉnh cao là Xô viết Nghệ - Tĩnh thành lập chính quyền sơ khai.",
          pt3639: "Hợp pháp và nửa hợp pháp, công khai và nửa công khai; mít tinh, đón phái viên Gô-đa, Đông Dương Đại hội, báo chí công khai, đấu tranh nghị trường."
        }
      },
      {
        criterion: "Mặt trận & Lực lượng",
        items: {
          pt3031: "Chủ yếu là liên minh công nhân và nông dân; bước đầu xây dựng Hội Phản đế đồng minh.",
          pt3639: "Mặt trận Thống nhất Nhân dân Phản đế Đông Dương (sau đổi thành Mặt trận Dân chủ Đông Dương); tập hợp đông đảo mọi giai tầng, kể cả người Pháp tiến bộ."
        }
      },
      {
        criterion: "Ý nghĩa lịch sử",
        items: {
          pt3031: "Cuộc tổng diễn tập đầu tiên của Đảng và nhân dân; khẳng định quyền lãnh đạo của Đảng và sức mạnh to lớn của liên minh công - nông.",
          pt3639: "Cuộc tổng diễn tập thứ hai chuẩn bị cho CMT8; Đảng tích lũy kinh nghiệm đấu tranh công khai, xây dựng đội quân chính trị quần chúng rộng lớn."
        }
      }
    ],
    mistakeAlert: "Dễ nhầm: Phong trào 1936–1939 KHÔNG đặt mục tiêu trực tiếp đánh đổ đế quốc Pháp để giành độc lập ngay, mà tập trung đòi dân sinh, dân chủ, cơm áo, hòa bình bằng hình thức công khai, hợp pháp.",
    examTip: "1930–1931: Bí mật, bạo lực, Xô viết Nghệ - Tĩnh, diễn tập lần 1. 1936–1939: Công khai, hợp pháp, dân sinh dân chủ, Mặt trận Dân chủ Đông Dương, diễn tập lần 2.",
    sources: [
      { session: 5, unitType: "page", unitNumber: 4, docId: "s05-page-004" },
      { session: 5, unitType: "page", unitNumber: 6, docId: "s05-page-006" },
      { session: 6, unitType: "page", unitNumber: 3, docId: "s06-page-003" },
      { session: 6, unitType: "page", unitNumber: 7, docId: "s06-page-007" }
    ]
  },
  {
    id: "trung-uong-6-7-8",
    title: "Hội nghị Trung ương 6 (1939), 7 (1940) và 8 (1941)",
    subtitle: "Quá trình hoàn chỉnh chuyển hướng chỉ đạo chiến lược đặt giải phóng dân tộc lên hàng đầu",
    columns: [
      { key: "hn6", label: "Hội nghị TW 6 (11/1939)", periodBadge: "Bà Điểm (Gia Định)", sessionRef: "Session 7" },
      { key: "hn7", label: "Hội nghị TW 7 (11/1940)", periodBadge: "Đình Bảng (Bắc Ninh)", sessionRef: "Session 7" },
      { key: "hn8", label: "Hội nghị TW 8 (5/1941)", periodBadge: "Pác Bó (Cao Bằng)", sessionRef: "Session 7" }
    ],
    rows: [
      {
        criterion: "Người chủ trì & Địa điểm",
        items: {
          hn6: "Tổng Bí thư Nguyễn Văn Cừ chủ trì tại Bà Điểm, Hóc Môn, Gia Định (11/1939).",
          hn7: "Đồng chí Trường Chinh và các ủy viên Trung ương chủ trì tại Đình Bảng, Từ Sơn, Bắc Ninh (11/1940).",
          hn8: "Lãnh tụ Nguyễn Ái Quốc chủ trì (sau 30 năm bôn ba trở về Tổ quốc) tại lán Khuổi Nặm, Pác Bó, Hà Quảng, Cao Bằng (5/1941)."
        }
      },
      {
        criterion: "Bối cảnh mới",
        items: {
          hn6: "Chiến tranh thế giới thứ hai bùng nổ (9/1939). Pháp thủ tiêu quyền tự do dân chủ, đàn áp gắt gao phong trào cách mạng.",
          hn7: "Quân phiệt Nhật vào Đông Dương (9/1940), nhân dân chịu cảnh 'một cổ hai tròng'. Khởi nghĩa Bắc Sơn, Nam Kỳ nổ ra.",
          hn8: "Chiến tranh lan rộng toàn cầu. Nhật - Pháp cấu kết bóc lột cùng cực. Mâu thuẫn giữa toàn thể dân tộc Việt Nam với phát xít Nhật - Pháp sâu sắc hơn bao giờ hết."
        }
      },
      {
        criterion: "Chuyển hướng chiến lược",
        items: {
          hn6: "Mở đầu sự chuyển hướng: Đặt nhiệm vụ giải phóng dân tộc lên hàng đầu, tạm gác khẩu hiệu cách mạng ruộng đất, tịch thu ruộng đất của đế quốc và Việt gian.",
          hn7: "Tiếp tục đường lối TW 6: Xác định kẻ thù chính là phát xít Nhật - Pháp; duy trì Đội du kích Bắc Sơn chuẩn bị vũ trang.",
          hn8: "Hoàn chỉnh trọn vẹn chuyển hướng chỉ đạo chiến lược: Đặt quyền lợi dân tộc lên trên hết, trước hết; thành lập Mặt trận Việt Minh riêng cho Việt Nam."
        }
      },
      {
        criterion: "Mặt trận dân tộc",
        items: {
          hn6: "Thành lập Mặt trận Thống nhất Dân tộc Phản đế Đông Dương.",
          hn7: "Chủ trương củng cố Mặt trận Phản đế Đông Dương và xây dựng lực lượng vũ trang.",
          hn8: "Thành lập Việt Nam Độc lập Đồng minh (Mặt trận Việt Minh) và các hội Cứu quốc (Công nhân cứu quốc, Nông dân cứu quốc...)."
        }
      },
      {
        criterion: "Phương thức khởi nghĩa & Chính quyền sau cách mạng",
        items: {
          hn6: "Chuẩn bị khởi nghĩa vũ trang khi thời cơ đến. Chính quyền sau đó là Chính phủ Dân chủ Cộng hòa.",
          hn7: "Hoãn khởi nghĩa Nam Kỳ (dù không kịp), duy trì lực lượng vũ trang du kích Bắc Sơn.",
          hn8: "Xác định chuẩn bị khởi nghĩa vũ trang là nhiệm vụ trung tâm; đi từ khởi nghĩa từng phần tiến lên Tổng khởi nghĩa; chính quyền là Nước Việt Nam Dân chủ Cộng hòa."
        }
      }
    ],
    mistakeAlert: "Dễ nhầm: Quá trình chuyển hướng chiến lược BẮT ĐẦU từ Hội nghị TW 6 (11/1939) nhưng HOÀN CHỈNH TRỌN VẸN tại Hội nghị TW 8 (5/1941) do Nguyễn Ái Quốc chủ trì.",
    examTip: "TW 6: Mở đầu chuyển hướng (Bà Điểm, Nguyễn Văn Cừ). TW 7: Duy trì du kích Bắc Sơn (Đình Bảng). TW 8: Hoàn chỉnh chuyển hướng, Việt Minh, cờ đỏ sao vàng, nhiệm vụ trung tâm là khởi nghĩa vũ trang (Pác Bó, Hồ Chí Minh).",
    sources: [
      { session: 7, unitType: "page", unitNumber: 4, docId: "s07-page-004" },
      { session: 7, unitType: "page", unitNumber: 7, docId: "s07-page-007" },
      { session: 7, unitType: "page", unitNumber: 10, docId: "s07-page-010" },
      { session: 7, unitType: "page", unitNumber: 15, docId: "s07-page-015" }
    ]
  },
  {
    id: "viet-bac-vs-bien-gioi",
    title: "Chiến dịch Việt Bắc thu đông 1947 vs Chiến dịch Biên giới thu đông 1950",
    subtitle: "Hai chiến dịch bước ngoặt trong cuộc kháng chiến chống thực dân Pháp (1945–1954)",
    columns: [
      { key: "vietbac", label: "Chiến dịch Việt Bắc thu đông 1947", periodBadge: "Thu – Đông 1947 (75 ngày đêm)", sessionRef: "Session 12" },
      { key: "biengioi", label: "Chiến dịch Biên giới thu đông 1950", periodBadge: "Thu – Đông 1950 (6/1950 quyết định)", sessionRef: "Session 12" }
    ],
    rows: [
      {
        criterion: "Tính chất & Thế trận chiến lược",
        items: {
          vietbac: "Chiến dịch PHẢN CÔNG trực diện đầu tiên của quân đội ta; ta bị động ứng phó trước cuộc tấn công bất ngờ của Pháp vào căn cứ địa.",
          biengioi: "Chiến dịch TIẾN CÔNG lớn đầu tiên do ta chủ động mở, đánh vào tuyến phòng thủ kiên cố của địch dọc đường số 4."
        }
      },
      {
        criterion: "Âm mưu của thực dân Pháp",
        items: {
          vietbac: "Tấn công Việt Bắc với gọng kìm kẹp hòng tiêu diệt cơ quan đầu não kháng chiến và bộ đội chủ lực, thực hiện chiến lược 'đánh nhanh, thắng nhanh'.",
          biengioi: "Kế hoạch Rơ-ve (Revers): Khóa chặt biên giới Việt - Trung, cô lập căn cứ địa kháng chiến với quốc tế, thiết lập hành lang Đông - Tây."
        }
      },
      {
        criterion: "Mục tiêu chiến dịch của ta",
        items: {
          vietbac: "Bảo vệ vững chắc cơ quan đầu não kháng chiến, bảo toàn căn cứ địa Việt Bắc, tiêu diệt một bộ phận sinh lực địch.",
          biengioi: "Tiêu diệt một bộ phận quan trọng sinh lực địch; giải phóng vùng biên giới; khai thông đường liên lạc quốc tế với Trung Quốc, Liên Xô và các nước XHCN."
        }
      },
      {
        criterion: "Địa bàn tác chiến tiêu biểu",
        items: {
          vietbac: "Sông Lô, Đoan Hùng, Khe Lau, đường số 4 (Đèo Bông Lau, Bản Sao...), Chợ Đồn, Chợ Mới.",
          biengioi: "Đông Khê (trận mở màn then chốt), Thất Khê, Cao Bằng, Na Sầm, Lạng Sơn dọc Đường số 4."
        }
      },
      {
        criterion: "Kết quả & Ý nghĩa bước ngoặt",
        items: {
          vietbac: "Đánh bại hoàn toàn chiến lược 'đánh nhanh thắng nhanh' của Pháp; buộc Pháp phải chuyển sang đánh lâu dài; bảo vệ an toàn đầu não kháng chiến.",
          biengioi: "Khai thông biên giới Việt - Trung; giải phóng dải biên giới dài 750km; giành quyền CHỦ ĐỘNG CHIẾN LƯỢC trên chiến trường chính Bắc Bộ; Pháp bị động đối phó."
        }
      }
    ],
    mistakeAlert: "Dễ nhầm: Việt Bắc 1947 là chiến dịch PHẢN CÔNG (đánh bại đánh nhanh thắng nhanh). Biên giới 1950 là chiến dịch TIẾN CÔNG CHỦ ĐỘNG đầu tiên (giành quyền chủ động chiến lược trên chiến trường chính Bắc Bộ).",
    examTip: "Từ khóa: Việt Bắc = '75 ngày đêm', 'bảo vệ đầu não', 'buộc địch đánh lâu dài'. Biên giới = 'chủ động tiến công', 'khai thông biên giới Việt - Trung', 'giành quyền chủ động chiến lược'.",
    sources: [
      { session: 12, unitType: "page", unitNumber: 10, docId: "s12-page-010" },
      { session: 12, unitType: "page", unitNumber: 14, docId: "s12-page-014" }
    ]
  },
  {
    id: "ba-chien-luoc-chien-tranh-my",
    title: "“Chiến tranh đặc biệt” vs “Chiến tranh cục bộ” vs “Việt Nam hóa chiến tranh”",
    subtitle: "So sánh 3 chiến lược chiến tranh tiêu biểu của đế quốc Mỹ tại miền Nam Việt Nam",
    columns: [
      { key: "dacbiet", label: "Chiến tranh đặc biệt (1961–1965)", periodBadge: "Kennedy – Johnson", sessionRef: "Session 15" },
      { key: "cucbo", label: "Chiến tranh cục bộ (1965–1968)", periodBadge: "Johnson", sessionRef: "Session 16" },
      { key: "vnh", label: "Việt Nam hóa chiến tranh (1969–1973)", periodBadge: "Nixon", sessionRef: "Session 17" }
    ],
    rows: [
      {
        criterion: "Lực lượng nòng cốt tham chiến",
        items: {
          dacbiet: "Quân đội Sài Gòn (ngụy quân) làm nòng cốt, dưới sự chỉ huy của cố vấn quân sự Mỹ, trang bị vũ khí phương tiện chiến tranh của Mỹ.",
          cucbo: "Quân viễn chinh Mỹ và quân đồng minh chư hầu đóng vai trò trực tiếp quyết định, kết hợp cùng quân đội Sài Gòn.",
          vnh: "Quân đội Sài Gòn tái đảm nhiệm vai trò nòng cốt (thay thế quân Mỹ rút dần), có sự yểm trợ tối đa của không quân và hỏa lực Mỹ."
        }
      },
      {
        criterion: "Âm mưu & Biện pháp chủ yếu",
        items: {
          dacbiet: "Dùng người Việt đánh người Việt; lập 'Ấp chiến lược' coi là xương sống; chiến thuật 'trực thăng vận' và 'thiết xa vận'.",
          cucbo: "Chiến lược hai gọng kìm 'Tìm diệt' và 'Bình định'; mở rộng chiến tranh phá hoại miền Bắc bằng không quân và hải quân.",
          vnh: "Dùng người Việt đánh người Việt, dùng người Đông Dương đánh người Đông Dương; mở rộng chiến tranh sang Campuchia và Lào."
        }
      },
      {
        criterion: "Quy mô chiến trường",
        items: {
          dacbiet: "Chủ yếu diễn ra ở chiến trường miền Nam Việt Nam.",
          cucbo: "Quy mô khốc liệt ở miền Nam, đồng thời leo thang đánh phá ác liệt miền Bắc bằng không quân và hải quân.",
          vnh: "Toàn bộ bán đảo Đông Dương (Việt Nam, Lào, Campuchia) và tập kích bom B-52 vào Hà Nội, Hải Phòng (12/1972)."
        }
      },
      {
        criterion: "Đòn đánh quyết định làm phá sản",
        items: {
          dacbiet: "Chiến thắng Ấp Bắc (2/1/1963), Đông Xoài, Ba Gia, Bình Giã (1964-1965).",
          cucbo: "Trận Vạn Tường (8/1965), đập tan hai cuộc phản công mùa khô (1965–1967), đỉnh cao là Tổng tiến công và nổi dậy Xuân Mậu Thân 1968.",
          vnh: "Cuộc tiến công chiến lược năm 1972 và trận 'Điện Biên Phủ trên không' cuối tháng 12/1972, buộc Mỹ ký Hiệp định Paris 1973 rút quân."
        }
      }
    ],
    mistakeAlert: "Dễ nhầm lực lượng: Chiến tranh đặc biệt & Việt Nam hóa chiến tranh đều dùng quân ngụy Sài Gòn làm nòng cốt; chỉ có Chiến tranh CỤC BỘ là quân đội viễn chinh MỸ trực tiếp làm lực lượng chủ yếu trên chiến trường.",
    examTip: "Nhớ nhanh công thức: Đặc biệt = Quân Sài Gòn + Cố vấn Mỹ + Ấp chiến lược. Cục bộ = Quân viễn chinh Mỹ + Đồng minh + Tìm diệt. Việt Nam hóa = Quân Sài Gòn + Hỏa lực Mỹ + Mở rộng ra toàn Đông Dương.",
    sources: [
      { session: 15, unitType: "page", unitNumber: 13, docId: "s15-page-013" },
      { session: 16, unitType: "page", unitNumber: 4, docId: "s16-page-004" },
      { session: 17, unitType: "slide", unitNumber: 3, docId: "s17-slide-003" }
    ]
  },
  {
    id: "khoan-100-vs-khoan-10",
    title: "Khoán 100 (13/1/1981) vs Khoán 10 (5/4/1988)",
    subtitle: "Hai bước đột phá lịch sử cởi trói sản xuất nông nghiệp trước và trong thời kỳ Đổi mới",
    columns: [
      { key: "k100", label: "Chỉ thị 100/CT-TW (Khoán 100)", periodBadge: "13/01/1981 (Ban Bí thư)", sessionRef: "Session 20" },
      { key: "k10", label: "Nghị quyết 10-NQ/TW (Khoán 10)", periodBadge: "05/04/1988 (Bộ Chính trị)", sessionRef: "Session 22" }
    ],
    rows: [
      {
        criterion: "Cấp ban hành & Thời gian",
        items: {
          k100: "Ban Bí thư Trung ương Đảng ban hành Chỉ thị 100-CT/TW ngày 13/1/1981.",
          k10: "Bộ Chính trị khóa VI ban hành Nghị quyết số 10-NQ/TW ngày 5/4/1988."
        }
      },
      {
        criterion: "Bối cảnh kinh tế",
        items: {
          k100: "Kinh tế khủng hoảng gay gắt sau thống nhất; hiện tượng 'khoán chui' diễn ra tự phát ở Hải Phòng, Vĩnh Phú; Hội nghị TW 6 khóa IV (8/1979) mở bước đột phá đầu tiên.",
          k10: "Sau Đại hội VI (1986), lạm phát 3 con số (774% năm 1986); khủng hoảng lương thực nghiêm trọng đầu năm 1988 đòi hỏi giải pháp triệt để."
        }
      },
      {
        criterion: "Đối tượng & Phương thức nhận khoán",
        items: {
          k100: "Khoán sản phẩm đến NHÓM VÀ NGƯỜI LAO ĐỘNG. Nông dân nhận đất, tự gieo cấy, chăm sóc, thu hoạch. HTX vẫn quản lý các khâu máy móc (làm đất, thủy lợi, giống, bảo vệ thực vật).",
          k10: "Khoán trực tiếp đến HỘ GIA ĐÌNH NÔNG DÂN. Thừa nhận hộ gia đình là đơn vị kinh tế tự chủ. Thời hạn giao đất ổn định lâu dài (khoảng 15 năm)."
        }
      },
      {
        criterion: "Phân phối sản phẩm & Thu nhập",
        items: {
          k100: "Xã viên nộp sản phẩm khoán cho HTX theo định mức; phần dôi dư được hưởng trọn và tự do tiêu dùng hoặc đem bán trên thị trường.",
          k10: "Bảo đảm nông dân có thu nhập từ 40% sản lượng khoán trở lên. Xóa bỏ nghĩa vụ giao nộp lương thực theo giá bao cấp, chuyển hẳn sang quan hệ hợp đồng kinh tế mua bán."
        }
      },
      {
        criterion: "Kết quả thực tiễn",
        items: {
          k100: "Sản lượng lương thực bình quân từ 13,4 triệu tấn/năm (1976-1980) tăng lên 17 triệu tấn/năm (1981-1985); giải tỏa tâm lý ức chế của nông dân.",
          k10: "Nông nghiệp thoát khủng hoảng ngoạn mục: Năm 1989 Việt Nam từ nước thiếu đói triền miên vươn lên tự túc lương thực và xuất khẩu 1,4 triệu tấn gạo."
        }
      }
    ],
    mistakeAlert: "Dễ nhầm đối tượng: Khoán 100 (1981) là khoán đến 'nhóm và người lao động' (HTX vẫn chi phối). Đến Khoán 10 (1988) mới thực sự thừa nhận 'HỘ GIA ĐÌNH LÀ ĐƠN VỊ KINH TẾ TỰ CHỦ' và giao đất ổn định 15 năm.",
    examTip: "Chỉ thị 100 (1981): Ban Bí thư, khoán sản phẩm đến nhóm/người lao động, bước đột phá nông nghiệp thời kỳ trước Đổi mới. Nghị quyết 10 (1988): Bộ Chính trị, hộ gia đình tự chủ, 15 năm, biến Việt Nam thành nước xuất khẩu gạo.",
    sources: [
      { session: 20, unitType: "slide", unitNumber: 7, docId: "s20-slide-007" },
      { session: 22, unitType: "slide", unitNumber: 13, docId: "s22-slide-013" }
    ]
  },
  {
    id: "cac-ky-dai-hoi-iv-den-xiii",
    title: "Những điểm nổi bật của các kỳ Đại hội (Đại hội IV đến XIII)",
    subtitle: "Bảng tổng hợp từ khóa, Tổng Bí thư và quyết sách cốt lõi của 10 kỳ Đại hội Đảng thời kỳ xây dựng & Đổi mới",
    columns: [
      { key: "dh4", label: "Đại hội IV (12/1976)", periodBadge: "1976 – 1981", sessionRef: "Session 20" },
      { key: "dh5", label: "Đại hội V (3/1982)", periodBadge: "1982 – 1986", sessionRef: "Session 21" },
      { key: "dh6", label: "Đại hội VI (12/1986)", periodBadge: "1986 – 1991", sessionRef: "Session 22" },
      { key: "dh7", label: "Đại hội VII (6/1991)", periodBadge: "1991 – 1996", sessionRef: "Session 22" },
      { key: "dh8", label: "Đại hội VIII (6/1996)", periodBadge: "1996 – 2001", sessionRef: "Session 23" },
      { key: "dh9", label: "Đại hội IX (4/2001)", periodBadge: "2001 – 2006", sessionRef: "Session 24" },
      { key: "dh10", label: "Đại hội X (4/2006)", periodBadge: "2006 – 2011", sessionRef: "Session 25" },
      { key: "dh11", label: "Đại hội XI (1/2011)", periodBadge: "2011 – 2016", sessionRef: "Session 26" },
      { key: "dh12", label: "Đại hội XII (1/2016)", periodBadge: "2016 – 2021", sessionRef: "Session 27" },
      { key: "dh13", label: "Đại hội XIII (1/2021)", periodBadge: "2021 – 2026", sessionRef: "Session 27" }
    ],
    rows: [
      {
        criterion: "Tổng Bí thư được bầu",
        items: {
          dh4: "Lê Duẩn (Đổi tên chức vụ từ Bí thư thứ nhất thành Tổng Bí thư).",
          dh5: "Lê Duẩn.",
          dh6: "Nguyễn Văn Linh.",
          dh7: "Đỗ Mười.",
          dh8: "Đỗ Mười (đến 12/1997 là Lê Khả Phiêu).",
          dh9: "Nông Đức Mạnh.",
          dh10: "Nông Đức Mạnh.",
          dh11: "Nguyễn Phú Trọng.",
          dh12: "Nguyễn Phú Trọng.",
          dh13: "Nguyễn Phú Trọng."
        }
      },
      {
        criterion: "Quyết sách & Luận điểm đột phá nhất",
        items: {
          dh4: "Đổi tên Đảng Lao động Việt Nam thành Đảng Cộng sản Việt Nam; xác định đường lối chung xây dựng CNXH trên cả nước; ưu tiên phát triển công nghiệp nặng.",
          dh5: "Xác định 2 nhiệm vụ chiến lược: Xây dựng CNXH và bảo vệ Tổ quốc; coi nông nghiệp là mặt trận hàng đầu.",
          dh6: "KHỞI XƯỚNG ĐƯỜNG LỐI ĐỔI MỚI TOÀN DIỆN; nhìn thẳng vào sự thật; tập trung 3 chương trình kinh tế lớn (lương thực-thực phẩm, hàng tiêu dùng, hàng xuất khẩu).",
          dh7: "Thông qua CƯƠNG LĨNH NĂM 1991 (Cương lĩnh xây dựng đất nước trong thời kỳ quá độ); khẳng định kinh tế hàng hóa nhiều thành phần; 'Việt Nam muốn là bạn với tất cả các nước'.",
          dh8: "Khẳng định nước ta đã ra khỏi khủng hoảng kinh tế - xã hội; tuyên bố chuyển sang thời kỳ ĐẨY MẠNH CÔNG NGHIỆP HÓA, HIỆN ĐẠI HÓA ĐẤT NƯỚC.",
          dh9: "Xác định mô hình tổng quát: KINH TẾ THỊ TRƯỜNG ĐỊNH HƯỚNG XÃ HỘI CHỦ NGHĨA là mô hình kinh tế tổng quát trong thời kỳ quá độ.",
          dh10: "Cho phép đảng viên làm kinh tế tư nhân; làm rõ hơn bản chất của Đảng: 'Đảng là đội tiên phong của giai cấp công nhân, đồng thời là đội tiên phong của nhân dân lao động và của cả dân tộc Việt Nam'.",
          dh11: "Thông qua CƯƠNG LĨNH BỔ SUNG, PHÁT TRIỂN NĂM 2011; xác định 8 đặc trưng của CNXH ở Việt Nam và BA ĐỘT PHÁ CHIẾN LƯỢC 2011–2020.",
          dh12: "Nhấn mạnh xây dựng, chỉnh đốn Đảng trong sạch, vững mạnh (Nghị quyết TW 4 khóa XII); phát triển kinh tế tư nhân thực sự trở thành động lực quan trọng (NQTW 5).",
          dh13: "Xác định khát vọng phát triển đất nước phồn vinh, hạnh phúc; đề ra các mục tiêu phát triển cụ thể đến năm 2025, 2030 (100 năm lập Đảng) và 2045 (100 năm lập nước)."
        }
      },
      {
        criterion: "Dễ nhầm lẫn trong bài thi",
        items: {
          dh4: "Đại hội đổi tên thành ĐCSVN, không phải Đại hội III.",
          dh5: "Đại hội V chưa khởi xướng Đổi mới mà chỉ điều chỉnh coi nông nghiệp là mặt trận hàng đầu.",
          dh6: "Đại hội VI chọn Nguyễn Văn Linh làm TBT, khẩu hiệu 'Nhìn thẳng vào sự thật'.",
          dh7: "Cương lĩnh 1991 gồm 6 đặc trưng, khác Cương lĩnh 2011 có 8 đặc trưng.",
          dh8: "Bổ sung đặc trưng 'Dân giàu, nước mạnh, xã hội công bằng, văn minh'.",
          dh9: "Xác định rõ thuật ngữ 'Kinh tế thị trường định hướng XHCN'.",
          dh10: "Chính thức cho phép Đảng viên làm kinh tế tư nhân.",
          dh11: "Cương lĩnh bổ sung 2011 xác định 8 đặc trưng (thêm yếu tố con người, Nhà nước pháp quyền).",
          dh12: "Lưu ý Editorial Note: NQ 05-NQ/TW 2016 thuộc Hội nghị TW 4 khóa XII, không phải TW 6.",
          dh13: "Mục tiêu 2025/2030/2045 là chỉ tiêu định hướng, không phải thành tựu đã nghiệm thu."
        }
      }
    ],
    mistakeAlert: "Nắm vững chuỗi Đại hội: IV (Đổi tên ĐCSVN, ưu tiên CN nặng) -> V (Nông nghiệp là mặt trận hàng đầu) -> VI (Khởi xướng Đổi mới) -> VII (Cương lĩnh 1991, 6 đặc trưng) -> VIII (Đẩy mạnh CNH-HĐH) -> IX (KTTT định hướng XHCN) -> X (Đảng viên làm kinh tế tư nhân) -> XI (Cương lĩnh 2011, 8 đặc trưng) -> XII (Chỉnh đốn Đảng, NQ TW 4) -> XIII (Mục tiêu 2025-2030-2045).",
    examTip: "Mẹo nhớ Tổng Bí thư: Lê Duẩn (IV, V) -> Nguyễn Văn Linh (VI) -> Đỗ Mười (VII, VIII) -> Lê Khả Phiêu (VIII giữa kỳ) -> Nông Đức Mạnh (IX, X) -> Nguyễn Phú Trọng (XI, XII, XIII).",
    sources: [
      { session: 20, unitType: "slide", unitNumber: 3, docId: "s20-slide-003" },
      { session: 21, unitType: "slide", unitNumber: 3, docId: "s21-slide-003" },
      { session: 22, unitType: "slide", unitNumber: 4, docId: "s22-slide-004" },
      { session: 22, unitType: "slide", unitNumber: 15, docId: "s22-slide-015" },
      { session: 23, unitType: "slide", unitNumber: 5, docId: "s23-slide-005" },
      { session: 24, unitType: "slide", unitNumber: 3, docId: "s24-slide-003" },
      { session: 25, unitType: "slide", unitNumber: 4, docId: "s25-slide-004" },
      { session: 26, unitType: "slide", unitNumber: 3, docId: "s26-slide-003" },
      { session: 27, unitType: "slide", unitNumber: 4, docId: "s27-slide-004" },
      { session: 27, unitType: "slide", unitNumber: 14, docId: "s27-slide-014" }
    ]
  }
];

