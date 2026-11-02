export interface IntroTopic {
  id: string;
  title: string;
  sessionRef: string;
  sourceDocId: string;
  summary: string;
  details: {
    heading: string;
    points: string[];
  }[];
  reviewQuestions: string[];
}

export const INTRO_SECTIONS: IntroTopic[] = [
  {
    id: "doi-tuong-nghien-cuu",
    title: "1. Đối tượng nghiên cứu của môn học Lịch sử Đảng",
    sessionRef: "Session 1 · Slide/Trang 2 – 5",
    sourceDocId: "s01-page-004",
    summary: "Là một chuyên ngành của khoa học lịch sử, đối tượng của môn Lịch sử Đảng Cộng sản Việt Nam là sự ra đời, phát triển và hoạt động lãnh đạo của Đảng qua các thời kỳ lịch sử.",
    details: [
      {
        heading: "Các nội dung cốt lõi của đối tượng",
        points: [
          "Sự ra đời của Đảng Cộng sản Việt Nam: Các tiền đề kinh tế - xã hội, tư tưởng, phong trào công nhân và phong trào yêu nước dẫn đến sự thành lập Đảng (2/1930).",
          "Cương lĩnh, đường lối, chủ trương, chính sách của Đảng qua các thời kỳ lịch sử từ 1930 đến nay.",
          "Quá trình chỉ đạo, tổ chức thực tiễn sinh động của Đảng trong đấu tranh giành chính quyền, hai cuộc kháng chiến chống ngoại xâm và công cuộc xây dựng, bảo vệ Tổ quốc, Đổi mới.",
          "Tổng kết những bài học kinh nghiệm lịch sử, quy luật phát triển của cách mạng Việt Nam dưới sự lãnh đạo của Đảng."
        ]
      },
      {
        heading: "Đặc điểm khoa học",
        points: [
          "Bộ môn Lịch sử Đảng Cộng sản Việt Nam là một chuyên ngành, là một bộ phận của khoa học lịch sử (bắt đầu nghiên cứu từ năm 1933).",
          "Vừa mang tính khách quan của khoa học lịch sử, vừa mang tính Đảng sâu sắc và tính thực tiễn cách mạng cao."
        ]
      }
    ],
    reviewQuestions: [
      "Tại sao nói môn Lịch sử Đảng vừa mang tính khoa học, vừa mang tính Đảng sâu sắc?",
      "Đối tượng nghiên cứu của môn học bao gồm những nội dung trọng tâm nào?"
    ]
  },
  {
    id: "chuc-nang-mon-hoc",
    title: "2. Chức năng của khoa học Lịch sử Đảng",
    sessionRef: "Session 1 · Slide/Trang 6 – 9",
    sourceDocId: "s01-page-006",
    summary: "Môn Lịch sử Đảng Cộng sản Việt Nam có 3 chức năng cơ bản: Chức năng nhận thức, Chức năng giáo dục, và Chức năng dự báo và phê phán.",
    details: [
      {
        heading: "Chức năng nhận thức (Cognitive function)",
        points: [
          "Cung cấp hệ thống tri thức khoa học, có hệ thống và chân thực về sự ra đời, phát triển và hoạt động lãnh đạo của Đảng.",
          "Nhận thức đúng các quy luật vận động của cách mạng Việt Nam và các bước ngoặt lịch sử quan trọng.",
          "Trang bị cơ sở lý luận và thực tiễn để hiểu rõ bản chất con đường đi lên chủ nghĩa xã hội ở Việt Nam."
        ]
      },
      {
        heading: "Chức năng giáo dục (Educational function)",
        points: [
          "Giáo dục tinh thần yêu nước nồng nàn, lòng tự hào dân tộc và niềm tin vững chắc vào sự lãnh đạo của Đảng.",
          "Bồi dưỡng lý tưởng cách mạng, đạo đức cách mạng, bản lĩnh chính trị và trách nhiệm công dân.",
          "Kế thừa và phát huy truyền thống cách mạng kiên cường, bất khuất của các thế hệ tiền bối."
        ]
      },
      {
        heading: "Chức năng dự báo và phê phán (Predictive & Critical function)",
        points: [
          "Nhận diện xu thế phát triển khách quan từ bài học quá khứ, dự báo các biến chuyển tương lai của cách mạng và đất nước.",
          "Phê phán những quan điểm sai trái, thù địch, xuyên tạc lịch sử Đảng và dân tộc.",
          "Tổng kết, chỉ ra những hạn chế, sai lầm, khuyết điểm trong quá khứ để Đảng tự chỉnh đốn, đổi mới và hoàn thiện."
        ]
      }
    ],
    reviewQuestions: [
      "Trình bày 3 chức năng cơ bản của môn Lịch sử Đảng Cộng sản Việt Nam.",
      "Chức năng dự báo và phê phán có ý nghĩa như thế nào trong tình hình bảo vệ nền tảng tư tưởng của Đảng hiện nay?"
    ]
  },
  {
    id: "nhiem-vu-mon-hoc",
    title: "3. Nhiệm vụ của khoa học Lịch sử Đảng",
    sessionRef: "Session 1 · Slide/Trang 10",
    sourceDocId: "s01-page-010",
    summary: "Khoa học Lịch sử Đảng thực hiện nhiệm vụ tái hiện chân thực tiến trình lịch sử, tổng kết kinh nghiệm và truyền bá hệ tư tưởng cách mạng.",
    details: [
      {
        heading: "Các nhiệm vụ trọng tâm",
        points: [
          "Nhiệm vụ 1: Trình bày có hệ thống, khách quan và toàn diện về Cương lĩnh, đường lối, chủ trương, chính sách của Đảng qua các giai đoạn cách mạng.",
          "Nhiệm vụ 2: Tái hiện sinh động, chân thực tiến trình lịch sử đấu tranh kiên cường của nhân dân ta dưới sự lãnh đạo của Đảng.",
          "Nhiệm vụ 3: Tổng kết những bài học kinh nghiệm lịch sử quý báu, làm sáng tỏ các quy luật phát triển của cách mạng Việt Nam.",
          "Nhiệm vụ 4: Giáo dục lý luận Mác - Lênin, tư tưởng Hồ Chí Minh, giáo dục truyền thống anh hùng của dân tộc và của Đảng."
        ]
      }
    ],
    reviewQuestions: [
      "Môn Lịch sử Đảng thực hiện những nhiệm vụ chủ yếu nào đối với sinh viên đại học?"
    ]
  },
  {
    id: "phuong-phap-nghien-cuu",
    title: "4. Phương pháp nghiên cứu và học tập",
    sessionRef: "Session 2 · Slide/Trang 3 – 7",
    sourceDocId: "s02-page-003",
    summary: "Phương pháp luận chung là chủ nghĩa duy vật biện chứng và duy vật lịch sử Mác - Lênin, kết hợp phương pháp lịch sử và logic cùng các phương pháp cụ thể.",
    details: [
      {
        heading: "Phương pháp luận nền tảng",
        points: [
          "Quán triệt phương pháp luận Mác - Lênin: Chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử.",
          "Tư tưởng Hồ Chí Minh về khoa học lịch sử: Nhìn nhận sự kiện trong hoàn cảnh lịch sử cụ thể, khách quan, toàn diện và phát triển."
        ]
      },
      {
        heading: "Các phương pháp cụ thể",
        points: [
          "Phương pháp lịch sử: Tái hiện các sự kiện lịch sử theo đúng trình tự thời gian, không gian và bối cảnh cụ thể diễn ra sự kiện.",
          "Phương pháp logic: Đi sâu tìm hiểu bản chất bên trong, quy luật vận động và các bài học rút ra từ các sự kiện lịch sử.",
          "Phương pháp so sánh, tổng kết thực tiễn: Đối chiếu các giai đoạn, các văn kiện, các chiến dịch để rút ra nét tương đồng và khác biệt.",
          "Phương pháp liên ngành: Kết hợp khoa học chính trị, kinh tế học, văn hóa học, quân sự học để đánh giá toàn diện."
        ]
      },
      {
        heading: "Yêu cầu phương pháp luận: Tính Đảng và Tính khoa học",
        points: [
          "Tính Đảng: Đứng trên lập trường của giai cấp công nhân, bảo vệ đường lối, mục tiêu độc lập dân tộc và chủ nghĩa xã hội.",
          "Tính khoa học: Tôn trọng sự thật khách quan, chính xác về tư liệu, đánh giá công bằng, không tô hồng hay bôi đen lịch sử.",
          "Mối quan hệ: Tính Đảng chân chính thống nhất biện chứng với tính khoa học khách quan."
        ]
      }
    ],
    reviewQuestions: [
      "Phân biệt phương pháp lịch sử và phương pháp logic trong học tập Lịch sử Đảng.",
      "Mối quan hệ biện chứng giữa Tính Đảng và Tính khoa học được thể hiện như thế nào?"
    ]
  }
];

