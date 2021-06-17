import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import FlagIcon from "@material-ui/icons/Flag";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TimelineIcon from "@material-ui/icons/Timeline";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import MailIcon from "@material-ui/icons/Mail";
import GradeIcon from "@material-ui/icons/Grade";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { useEffect } from "react";
import "./index.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
}));

export default function Index() {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "SoftZen - 회사소개";
  }, []);

  return (
    <Container
      maxWidth="lg"
      style={{ marginTop: "15px", marginBottom: "15px" }}
    >
      <Paper>
        {/* 회사소개 시작 */}
        <Typography variant="h5" component="h5" className="p-1">
          회사소개
        </Typography>
        <hr className="line" />
        <img src="/img/logo.webp" alt="logo" className="p-1 rounded" />

        <Typography variant="subtitle1" component="h6" className="p-1">
          소프트젠은 2002년도 3월에 모바일 분야에 새로운 비전을 가지고
          탄생되었습니다.
        </Typography>

        <Typography component="p" className="p-1">
          창업후 3개월이 지난, 2002년도 6월에는 산업자원부로부터 기술력을
          인정받아 신기술 사업자로 연구자금을 지원받았으며, 2002년 11월에는
          정보통신부로부터 출연 연구자금을 지원 받는등 창업 초기부터 기술력을
          인정받아온 최고의 기술 전문가 집단으로, 솔루션 개발과 게임 콘텐츠
          서비스의 양대 분야에서 사업을 전개하고 있습니다. <br />
          <br /> 현재 소프트젠은 빅데이타 처리 및 대용량 데이타 처리기술,
          가상현실 및 증강현실 기술에 관심을 가지고 회사의 개발력을 집중하고
          있으며, 데이타 기술과 가상현실 기술을 융합하는 새로운 분야에 도전하고
          있습니다.
        </Typography>
        {/* 회사소개 종료 */}

        {/* 회사연혁 시작 */}
        <Typography variant="h5" component="h5" className="p-1">
          <TimelineIcon style={{ marginRight: "5px", fontSize: "2rem" }} />
          회사 연혁
        </Typography>

        <Timeline align="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <FlagIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  2002년 03월
                </Typography>
                <Typography>(주)소프트젠 설립. 자본금 5000만원</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <GradeIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  2004년 05월
                </Typography>
                <Typography>신SW대상 정통부장관상 수상 (SCI 솔루션)</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="inherit">
                <VerifiedUserIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  2005년 12월
                </Typography>
                <Typography>벤처인증</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="inherit">
                <VerifiedUserIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  2006년 04월
                </Typography>
                <Typography>INNOBIZ 인증</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot>
                <ArrowDownwardIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  2009년 10월
                </Typography>
                <Typography>기업부설연구소 설립</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <AttachMoneyIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  2015년 09월
                </Typography>
                <Typography>자본금 총액 5억원으로 증자</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        {/* 회사연혁 종료 */}

        {/* 회사현황 시작 */}
        <Typography variant="h5" component="h5" className="p-1">
          <EqualizerIcon style={{ marginRight: "5px", fontSize: "2rem" }} />
          회사 현황
        </Typography>

        <table className="pl-1 pr-1">
          <tbody>
            <tr>
              <td>법 인 명</td>
              <td>주식회사 소프트젠</td>
            </tr>
            <tr>
              <td>사업자번호</td>
              <td>220-86-34258</td>
            </tr>
            <tr>
              <td>자 본 금</td>
              <td>500,000,000원</td>
            </tr>
            <tr>
              <td>기업형태</td>
              <td>벤처기업</td>
            </tr>
            <tr>
              <td>설 립 일</td>
              <td>2002년3월29일</td>
            </tr>
            <tr>
              <td>주 업 종</td>
              <td>소프트웨어개발 및 모바일게임개발</td>
            </tr>
          </tbody>
        </table>
        {/* 회사현황 종료 */}

        {/* 사업 제휴 및 문의 시작 */}
        <Typography variant="h5" component="h5" className="p-1">
          <MailIcon style={{ marginRight: "5px", fontSize: "2rem" }} />
          사업 제휴 및 문의
        </Typography>

        <Typography component="p" className="p-1">
          소프트젠이 보유하고 있는 기술과 솔루션에 관심이 있으신 분들은 아래
          영업 및 제휴 담당을 통해 문의해 주십시요. 솔루션 개발, 웹 사이트 구축,
          앱게임, 게임개발, 대용량 서버개발등 소프트젠이 제공하는 창조적
          솔루션은 고객의 가치를 최우선으로 하고 있습니다.
        </Typography>

        <Typography component="p" className="p-1">
          <b>영업 및 제휴 담당 : 김연표 대표</b>
          <br />
          <b>
            <a href="mailto:softzen@softzen.co.kr" className={classes.link}>
              softzen@softzen.co.kr
            </a>
          </b>
        </Typography>
        {/* 사업 제휴 및 문의 종료 */}
      </Paper>
    </Container>
  );
}
