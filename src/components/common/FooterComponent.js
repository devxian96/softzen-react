import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
  a: {
    color: "white !important",
    textDecoration: "none",
    fontWeight: "bold",
  },
}));

export default function FooterComponent() {
  const classes = useStyles();

  return (
    <Box
      style={{
        boxShadow: "rgb(45 45 45) 0px -1px 10px 1px",
        backgroundColor: "#333",
        width: "100%",
        height: "100px",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <Typography variant="h6" className={classes.title}>
        <Link to="/" className={classes.a}>
          SOFT
          <Box color="secondary.main" display="inline">
            ZEN
          </Box>{" "}
          COMPANY
        </Link>
      </Typography>

      <Typography
        variant="subtitle2"
        component="span"
        className={classes.title}
      >
        (13494) 경기도 성남시 분당구 대왕판교로660, 유스페이스1, A동 712-1호.
        <br />
        (13494) Uspace1 #A-712-1, 660 Daewangpangyo-ro, Bundang-gu, Seongnam-si,
        Gyeonggi-do, Korea
      </Typography>

      <a
        style={{ color: "white", padding: "10px" }}
        href="https://www.facebook.com/mysoftzen/"
      >
        <FacebookIcon />
      </a>
    </Box>
  );
}
