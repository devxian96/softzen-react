import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "100%",
    height: "100%",
    padding: "10px",
  },
}));

export default function MediaControlCard({ img, title, contents, link }) {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {contents}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={link}>
            <Button size="small" color="primary">
              더보기
            </Button>
          </Link>
        </CardActions>
      </div>
      {isMobile ? (
        <img className={classes.cover} src={`/img/${img}`} alt={title} />
      ) : (
        ""
      )}
    </Card>
  );
}

MediaControlCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
  link: PropTypes.string,
};
