import Carousel from "react-material-ui-carousel";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { blueGrey } from "@material-ui/core/colors";
import Card from "../common/CardComponent";
import VerticalCard from "../common/VerticalCardComponent";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Alert, AlertTitle } from "@material-ui/lab";
import Container from "@material-ui/core/Container";
import Marquee from "react-fast-marquee";
import { useEffect } from "react";
import "./index.css";

function Item(props) {
  return (
    <>
      {props.item.img.indexOf("mp4") !== -1 ? (
        <video
          loop
          autoPlay
          muted="muted"
          height="100%"
          className="carousel-img"
        >
          <source src={props.item.img} type="video/mp4" />
        </video>
      ) : (
        <img
          src={props.item.img}
          alt={props.item.name}
          width="100%"
          className="carousel-img"
        />
      )}
      <Box component="div" className="carousel-text">
        <Box
          color={props.item.color}
          className="carousel-text--title"
          style={{ textShadow: "#333 1px 0 20px" }}
        >
          <span
            className="carousel-text--black-box"
            style={{
              padding: "5px",
              paddingLeft: "1.4rem",
              paddingRight: "1.4rem",
            }}
          >
            {props.item.name}
          </span>
        </Box>
        <Box color={props.item.color}>
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            style={{
              textShadow: "#333 1px 0 20px",
              fontWeight: "bold",
            }}
          >
            {props.item.description}
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default function Index() {
  const isMobile = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "SoftZen";
  }, []);

  // Carousel Items
  const items = [
    {
      img: "/video/Racing Bike - 7251.mp4",
      name: "VR솔루션",
      description: "다양한 가상현실 기반 특수교육",
      color: blueGrey[50],
    },
    {
      img: "/img/slider-2.jpg",
      name: "반응형 3D웹 솔루션",
      description: "WebGL, D3, THREE, Unity",
      color: blueGrey[50],
    },
    {
      img: "/img/slider-1.jpg",
      name: "고객 맞춤형 솔루션",
      description: "공공부문 앱 솔루션, 기능성게임 앱 솔루션",
      color: blueGrey[50],
    },
  ];

  const cardItems = [
    {
      img: "solution.jpg",
      title: "솔루션",
      contents:
        "소프트젠은 고객을 위한 최적의 솔루션을 제공하고 있습니다.  정통부장관상과 신SW대상을 수상한 바 있는 SCI (Softzen Compressed Image) 및 모바일 폴더, 모바일광고 서버등의 모바일 솔루션을 보유하고 있습니다. 소프트젠의 모바일 및 전자책 솔루션을 확인해보세요.",
      link: "",
    },
    {
      img: "project.jpg",
      title: "프로젝트",
      contents:
        "소프트젠은 고객을 위한 최적의 솔루션을 제공하고 있습니다.  정통부장관상과 신SW대상을 수상한 바 있는 SCI (Softzen Compressed Image) 및 모바일 폴더, 모바일광고 서버등의 모바일 솔루션을 보유하고 있습니다. 소프트젠의 모바일 및 전자책 솔루션을 확인해보세요.",
      link: "",
    },
    {
      img: "partner.jpg",
      title: "고객 및 파트너",
      contents:
        "소프트젠은 고객을 위한 최적의 솔루션을 제공하고 있습니다.  정통부장관상과 신SW대상을 수상한 바 있는 SCI (Softzen Compressed Image) 및 모바일 폴더, 모바일광고 서버등의 모바일 솔루션을 보유하고 있습니다. 소프트젠의 모바일 및 전자책 솔루션을 확인해보세요.",
      link: "",
    },
  ];

  const verticalCardItem = {
    img: "angle.webp",
    title: "SOLVE : Softzen OnLine Virtual Education",
    contents:
      "소프트젠은 10여년 이상을 발달 장애인을 위한 교육 콘텐츠를 연구,개발, 서비스해 오고  있는, 특수교육 콘텐츠 분야의 가장 선도적인 업체입니다. SOLVE는 가상현실 교육시스템을 온라인교육과 접목하여 효과적인 몰입형 교육을 진행할 수 있습니다. 특히, 발달장애인의 의사소통, 사회적응, 직업훈련을 위한 교육 콘텐츠를 제공 함 으로써, 발달장애학생의 일생생활과 독립생활 능력을 향상 시킬 수 있습니다.",
    link: "",
  };

  return (
    <>
      {/* 슬라이더 시작 */}
      <Carousel
        interval={10000}
        style={{ height: "100vh" }}
        navButtonsProps={{
          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
          style: {
            backgroundColor: "transparent",
            borderRadius: 0,
          },
        }}
        indicatorContainerProps={{
          style: {
            position: "absolute",
            bottom: "1.2rem",
          },
        }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      {/* 슬라이더 종료 */}

      <Container maxWidth="lg">
        {/* 3개 카드 시작 */}
        <Grid
          container
          justify="center"
          spacing={isMobile ? 4 : 0}
          className="card-margin"
        >
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Card
                img={cardItems[value].img}
                title={cardItems[value].title}
                contents={cardItems[value].contents}
                link={cardItems[value].link}
              />
            </Grid>
          ))}
        </Grid>
        {/* 3개 카드 종료 */}

        {/* 가로 카드 시작 */}
        <Grid
          container
          spacing={isMobile ? 3 : 0}
          style={{ width: "100%", marginTop: "40px", marginBottom: "40px" }}
        >
          <VerticalCard
            img={verticalCardItem.img}
            title={verticalCardItem.title}
            contents={verticalCardItem.contents}
            link={verticalCardItem.link}
          />
        </Grid>
        {/* 가로 카드 종료 */}

        {/* 소프트젠 미션 시작 */}
        <Grid
          container
          spacing={isMobile ? 3 : 0}
          style={{ width: "100%", marginBottom: "40px" }}
        >
          <Alert severity="success" style={{ width: "100%" }}>
            <AlertTitle>소프트젠의 미션</AlertTitle>
            소프트젠은 전세계에 콘텐츠와 솔루션을 제공하는 글로벌 콘텐츠
            프로바이더로 성장하고 있습니다. 소프트젠은 당신과 함께 이 꿈을 펼쳐
            나가고 싶습니다.
          </Alert>
        </Grid>
        {/* 소프트젠 미션 종료 */}

        {/* 파트너사 시작 */}
        <Grid
          container
          spacing={isMobile ? 3 : 0}
          style={{ width: "100%", marginBottom: "40px" }}
        >
          <Typography variant="h5" component="h5" className="pb-3">
            고객 및 파트너
          </Typography>
          {isMobile ? (
            <div
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                borderRadius: "5px",
                paddingTop: "20px",
                paddingBottom: "20px",
                boxShadow: "gray 1px 1px 5px",
                overflow: "hidden",
              }}
            >
              <img
                className="ml-1 mr-1"
                src="/img/partner/구글플레이.webp"
                width="100"
                height="100"
                alt="구글플레이"
              />
              <img
                className="ml-1 mr-1"
                src="/img/partner/애플스토어.webp"
                width="100"
                height="100"
                alt="애플스토어"
              />
              <img
                className="ml-1 mr-1"
                src="/img/partner/티스토어.webp"
                width="100"
                height="100"
                alt="티스토어"
              />
              <img
                className="ml-1 mr-1"
                src="/img/partner/국립특수교육원.webp"
                width="100"
                height="100"
                alt="국립특수교육원"
              />
              <img
                className="ml-1 mr-1"
                src="/img/partner/샤크로.webp"
                width="100"
                height="100"
                alt="샤크로"
              />
              <img
                className="ml-1 mr-1"
                src="/img/partner/질병본부.webp"
                width="100"
                height="100"
                alt="질병본부"
              />
              <img
                className="ml-1 mr-1"
                src="/img/partner/카카오게임.webp"
                width="100"
                height="100"
                alt="카카오게임"
              />
              <img
                className="ml-1 mr-1"
                src="/img/partner/한국인터넷진흥원.webp"
                width="100"
                height="100"
                alt="한국인터넷진흥원"
              />
            </div>
          ) : (
            <Marquee
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                borderRadius: "5px",
                paddingTop: "20px",
                paddingBottom: "20px",
                boxShadow: "gray 1px 1px 5px",
                overflow: "hidden",
              }}
            >
              <img
                className="ml-1 mr-1"
                src="/img/partner/구글플레이.webp"
                width="100"
                height="100"
                alt="구글플레이"
              />
              <img
                className="ml-1 mr-1"
                src="/img/partner/애플스토어.webp"
                width="100"
                height="100"
                alt="애플스토어"
              />
              <img
                className="ml-1 mr-1"
                src="/img/partner/티스토어.webp"
                width="100"
                height="100"
                alt="티스토어"
              />
              <img
                className="ml-1 mr-1"
                src="/img/partner/국립특수교육원.webp"
                width="100"
                height="100"
                alt="국립특수교육원"
              />
              <img
                className="ml-1 mr-1"
                src="/img/partner/샤크로.webp"
                width="100"
                height="100"
                alt="샤크로"
              />
              <img
                className="ml-1 mr-1"
                src="/img/partner/질병본부.webp"
                width="100"
                height="100"
                alt="질병본부"
              />
              <img
                className="ml-1 mr-1"
                src="/img/partner/카카오게임.webp"
                width="100"
                height="100"
                alt="카카오게임"
              />
              <img
                className="ml-1 mr-1"
                src="/img/partner/한국인터넷진흥원.webp"
                width="100"
                height="100"
                alt="한국인터넷진흥원"
              />
            </Marquee>
          )}
        </Grid>
        {/* 파트너사 종료 */}
      </Container>
    </>
  );
}
