import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles({
  root: {
    maxWidth: 378,
  },
  rootMobile: {
    maxWidth: "100%",
    marginBottom: "20px",
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({ img, title, contents, link }) {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");

  return (
    <Card className={isMobile ? classes.root : classes.rootMobile}>
      <CardMedia
        className={classes.media}
        image={`/img/${img}`}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
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
    </Card>
  );
}

MediaCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
  link: PropTypes.string,
};
