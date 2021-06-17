import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Webzine from "./webzine";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "SoftZen - 게임 서비스";
  }, []);

  // Carousel Items
  const items = [
    {
      year: "2015년 12월",
      title: "피그앤칙스",
      summary: "글로벌 서비스",
      img: "/img/game/피그앤칙스.webp",
      link: "https://play.google.com/store/apps/details?id=com.softzen.ompfree",
    },
    {
      year: "2017년 9월",
      title: "배틀캐논",
      summary: "글로벌 서비스 중",
      img: "/img/game/배틀캐논.webp",
      link: "https://play.google.com/store/apps/details?id=com.softzen.bc",
    },
    {
      year: "2016년 1월",
      title: "요정을 부탁해",
      summary: "",
      img: "/img/game/요정을 부탁해.webp",
      link: "#",
    },
    {
      year: "2015년",
      title: "마이시크릿러브 1",
      summary: "누적 다운로드 10만 (시리즈 합계)",
      img: "/img/game/마이시크릿러브1.webp",
      link: "https://play.google.com/store/apps/details?id=com.softzen.ms1free",
    },
    {
      year: "2015년",
      title: "마이시크릿러브2",
      summary: "누적다운로드 10만 (시리즈 합계",
      img: "/img/game/마이시크릿러브2.webp",
      link: "https://play.google.com/store/apps/details?id=com.softzen.ms2free",
    },
    {
      year: "2013년",
      title: "SBS포트리스",
      summary: "누적다운로드 100만",
      img: "/img/game/SBS포트리스.webp",
      link: "#",
    },
    {
      year: "2012년",
      title: "마이레스토랑",
      summary: "누적다운로드 50만 (컴투스 퍼블리싱)",
      img: "/img/game/마이레스토랑.webp",
      link: "#",
    },
    {
      year: "2017년",
      title: "스튜어디스 타이쿤",
      summary: "누적다운로드 40만",
      img: "/img/game/스튜어디스타이쿤.webp",
      link: "https://play.google.com/store/apps/details?id=com.softzen.stycoon",
    },
    {
      year: "2018년",
      title: "카멜레온 맨",
      summary: "누적다운로드 10만",
      img: "/img/game/카멜레온맨.webp",
      link:
        "https://play.google.com/store/apps/details?id=com.softzen.chamelrun",
    },
  ];

  return (
    <Container
      maxWidth="lg"
      style={{ marginTop: "15px", marginBottom: "15px" }}
    >
      <Paper>
        {/* 게임서비스 시작 */}
        <Typography variant="h5" component="h5" className="p-1">
          게임 서비스
        </Typography>
        <hr className="line" />
        <Typography variant="subtitle1" component="h6" className="p-1">
          꿈을 현실로 만들어드립니다!
          <br />
          소프트젠은 10여년간 70여종 이상의 모바일 게임을 서비스해 오고 있으며,
          다양한 카테고리의 글로벌향 모바일게임으로 새로운 비전과 꿈을 이루어
          나가고 있습니다. 글로벌 서비스 분야에서 성공하고 있는 소프트젠의 꿈을
          함께 지켜봐 주십시오.
        </Typography>
        {/* 게임서비스 종료 */}

        <Grid
          container
          justify="center"
          style={{ width: "100%", marginTop: "40px" }}
        >
          {items.map((item, i) => (
            <Grid key={i} item md={4} sm={12} style={{ padding: "10px" }}>
              <Webzine
                className="webzines"
                year={item.year}
                title={item.title}
                summary={item.summary}
                img={item.img}
                link={item.link}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}
