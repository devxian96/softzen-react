import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { useEffect } from "react";
import VerticalWebzine from "./verticalWebzine";
import "./index.css";

const items = [
  {
    img: "/img/project/특수교육용.webp",
    title: "국립특수교육원",
    subtitle: "특수교육용 전자책 솔루션 개발 및 서버 고도화 사업 2014",
    contents: [
      "E-Book 저작도구 ( Windows 플랫폼)",
      "전자책 뷰어 ( Windows / IOS /Android )",
      "교수학습 사이트 서버 고도화 ( tlc.knise.kr)",
    ],
    link: "",
    badge: { windows: true, android: true, ios: true },
    mainIcon: "book",
  },
  {
    img: "/img/project/질병본부.webp",
    title: "질병관리본부",
    subtitle: "질병관리본부 예방접종 도우미 모바일 서버 고도화 사업 2014",
    contents: [
      "예방접종 도우미 서버 시스템 및 모바일 연동 시스템 ( UNIX / ZEUS 기반)",
      "예방접종 도우미 앱 개발 (Android / IOS)",
    ],
    link:
      "https://play.google.com/store/apps/details?id=kr.go.cdc.nip.android&hl=ko",
    badge: { windows: false, android: true, ios: true },
    mainIcon: "hospital",
  },
  {
    img: "/img/project/특수교육.webp",
    title: "국립특수교육원",
    subtitle: "장애학생용 특수교육 기능성 프로그램 개발 사업 2014",
    contents: ["특수교육용 기능성 프로그램 개발 (10종)"],
    link: "",
    badge: { windows: false, android: false, ios: false },
    mainIcon: "edu",
  },
  {
    img: "/img/project/질병본부2.webp",
    title: "질병관리본부",
    subtitle: "질병관리본부 예방접종 도우미 영문 홈페이지 구축 사업 2014",
    contents: ["예방접종 도우미 영문 홈페이지 구축 (UNIX / ZEUS 기반)"],
    link: "",
    badge: { windows: false, android: false, ios: false },
    mainIcon: "hospital",
  },
  {
    img: "",
    title: "전남대학교 산학협력단",
    subtitle: "장애대학생 교육복지 지원실태 평가 사이트 개발 사업 2014",
    contents: ["평가 지원 및 통계 처리 홈페이지 구축 ( LINUX / PHP 기반)"],
    link: "",
    badge: { windows: false, android: false, ios: false },
    mainIcon: "web",
  },
  {
    img: "",
    title: "푸토엔터테인먼트",
    subtitle: "스윙런 모바일 게임 서버 시스템 및 콘텐츠 관리 시스템 2014",
    contents: ["모바일 게임 서버 시스템 및 콘텐츠 관리 시스템 개발"],
    link: "",
    badge: { windows: false, android: false, ios: false },
    mainIcon: "web",
  },
  {
    img: "",
    title: "샤크로",
    subtitle: "장애학생을 위한 AAC 개발 사업 2013",
    contents: ["장애학생을 위한 AAC 프로그램 개발 ( 태블릿 PC 탑재용)"],
    link: "",
    badge: { windows: true, android: false, ios: false },
    mainIcon: "web",
  },
  {
    img: "",
    title: "한국콘텐츠 진흥원",
    subtitle: "소리나라 대모험 기능성 게임 개발 2012-2013",
    contents: ["장액학생용 기능성 게임 개발"],
    link: "",
    badge: { windows: false, android: false, ios: false },
    mainIcon: "web",
  },
];

export default function Index() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "SoftZen - 프로젝트";
  }, []);

  return (
    <Container
      maxWidth="lg"
      style={{ marginTop: "15px", marginBottom: "15px" }}
    >
      <Paper>
        {/* 프로젝트 시작 */}
        <Typography variant="h5" component="h5" className="p-1">
          프로젝트
        </Typography>
        <hr className="line" />
        <Typography variant="subtitle1" component="h6" className="p-1">
          소프트젠은 우수한 개발력을 바탕으로 맞춤형 서버개발, E-Book
          솔루션개발, 기능성게임개발, 모바일 앱개발, 공공기관 홈페이지 개발 등
          여러 분야에서 신뢰와 성공 스토리를 만들어가고 있습니다.
        </Typography>
        {/* 프로젝트 종료 */}

        {/* 프로젝트 리스트 종료 */}
        {items.map((item, i) => (
          <VerticalWebzine
            key={i}
            img={item.img}
            title={item.title}
            subtitle={item.subtitle}
            contents={item.contents}
            link={item.link}
            badge={item.badge}
            mainIcon={item.mainIcon}
          />
        ))}
        {/* 프로젝트 리스트 종료 */}
      </Paper>
    </Container>
  );
}
