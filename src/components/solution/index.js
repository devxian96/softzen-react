import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DevicesOtherIcon from "@material-ui/icons/DevicesOther";
import { useEffect } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "./index.css";

function Card({ title, subtitle, summary, img, pos }) {
  const isMobile = useMediaQuery("(min-width:600px)");

  return (
    <div
      className={pos === "left" ? "card-left card-height" : "card card-height"}
    >
      {pos === "left" && isMobile ? (
        <div className="card-left">
          <img className="card-img--left" src={img} alt={title} />
        </div>
      ) : (
        ""
      )}
      <div className="card pr-1">
        <div style={{ display: "block" }}>
          {!isMobile ? <img width="100%" src={img} alt={title} /> : ""}
          <Typography variant="h4" component="h4" className="p-1 card-title">
            {title}
          </Typography>
          <Typography component="p" className="p-1 pt-0 card-subtitle">
            {subtitle}
          </Typography>

          <Typography component="p" className="p-1 pt-5 card-text">
            {summary}
          </Typography>
        </div>
      </div>
      {pos === "right" && isMobile ? (
        <div className="card">
          <img className="card-img--right" src={img} alt={title} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Index() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "SoftZen - 솔루션";
  }, []);

  const classes = useStyles();
  const items = [
    {
      title: "VR솔루션",
      subTitle: "Virtual Reality",
      summary:
        "일상생활, 직업훈련, 사회적응분야에서 다양한 가상현실기반 특수교육 솔루션 제공",
      img: "/img/slider-3.jpg",
      pos: "right",
    },
    {
      title: "반응형 3D웹 솔루션",
      subTitle: "Reactive 3D WEB",
      summary:
        "소프트젠의 WebGL을 이용한 반응형 3D웹 솔루션으로 게임, 홈페이지, 스마트홈등의 분야에 적용하고 있으며, WebVR 연구를 진행하고 있습니다.",
      img: "/img/slider-2.jpg",
      pos: "left",
    },
    {
      title: "고객 맞춤형 솔루션",
      subTitle: "Adaptive Solution",
      summary:
        "소프트젠은 고객이 원하는 형태의 솔루션을 개발 제공하고 있습니다.",
      img: "/img/slider-1.jpg",
      pos: "right",
    },
  ];
  return (
    <Container
      maxWidth="lg"
      style={{ marginTop: "15px", marginBottom: "15px" }}
    >
      <Paper>
        {/* 페이지 설명 시작 */}
        <Typography variant="h5" component="h5" className="p-1">
          기술과 솔루션
        </Typography>
        <hr className="line" />
        <Typography variant="h6" component="h6" className="p-1">
          소프트젠에서 제공하는 최적의 솔루션과 기술
        </Typography>
        {/* 페이지 설명 종료 */}

        {/* 카드 시작 */}
        {items.map((item, i) => (
          <Card
            key={i}
            title={item.title}
            subtitle={item.subTitle}
            summary={item.summary}
            img={item.img}
            pos={item.pos}
          />
        ))}
        {/* 카드 종료 */}

        {/* 수상 실적및 기술 시작 */}
        <Typography variant="h5" component="h5" className="p-1">
          수상 실적 및 기술 등록 실적
          <Button
            href="http://www.softzen.co.kr/swoa/"
            target="_blank"
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<DevicesOtherIcon>send</DevicesOtherIcon>}
          >
            스마트홈 구현사례
          </Button>
        </Typography>

        <Typography component="p" className="p-1">
          소프트젠은 모바일 압축 솔루션인 SCI(Softzen Compresses Image)로
          정부통신부 장관상 및 신 SW대상을 수상한 바 있으며, 모바일광고 서버,
          모바일 압축솔루션, 엠풀더와 같이 서버와 모바일 분야에서 특허출원과
          프로그램 등록 실적을 보유하고 있는 소프트웨어 기술분야의 전문가
          집단입니다.
        </Typography>
        {/* 수상 실적및 기술 종료 */}
      </Paper>
    </Container>
  );
}
