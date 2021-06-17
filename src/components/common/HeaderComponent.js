import React from "react";
import Icon from "@material-ui/core/Icon";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Link, useLocation } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";

import "./HeaderComponent.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  a: {
    color: "white !important",
    textDecoration: "none",
    fontWeight: "bold",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

export default function HeaderComponent() {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");
  const currentPath = useLocation().pathname;

  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <Link to="/" className={classes.a}>
          <ListItem button>
            <ListItemText>홈</ListItemText>
          </ListItem>
        </Link>
        <Link to="/about" className={classes.a}>
          <ListItem button>
            <ListItemText>회사소개</ListItemText>
          </ListItem>
        </Link>
        <Link to="/service" className={classes.a}>
          <ListItem button>
            <ListItemText>게임서비스</ListItemText>
          </ListItem>
        </Link>
        <Link to="/solution" className={classes.a}>
          <ListItem button>
            <ListItemText>솔루션</ListItemText>
          </ListItem>
        </Link>
        <Link to="/project" className={classes.a}>
          <ListItem button>
            <ListItemText>프로젝트</ListItemText>
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <AppBar
      elevation={0}
      position={currentPath === "/" ? "fixed" : "sticky"}
      style={{
        zIndex: 10,
      }}
    >
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link to="/" className={classes.a}>
            SOFT
            <Box color="secondary.main" display="inline">
              ZEN
            </Box>{" "}
            COMPANY
          </Link>
        </Typography>
        {isMobile ? (
          <>
            <Link to="/" className={classes.a}>
              <Button
                style={{ textShadow: "#333 1px 0 20px", fontSize: "1rem" }}
              >
                홈
              </Button>
            </Link>
            <Link to="/about" className={classes.a}>
              <Button
                style={{ textShadow: "#333 1px 0 20px", fontSize: "1rem" }}
              >
                회사소개
              </Button>
            </Link>
            <Link to="/service" className={classes.a}>
              <Button
                style={{ textShadow: "#333 1px 0 20px", fontSize: "1rem" }}
              >
                게임서비스
              </Button>
            </Link>
            <Link to="/solution" className={classes.a}>
              <Button
                style={{ textShadow: "#333 1px 0 20px", fontSize: "1rem" }}
              >
                솔루션
              </Button>
            </Link>
            <Link to="/project" className={classes.a}>
              <Button
                style={{ textShadow: "#333 1px 0 20px", fontSize: "1rem" }}
              >
                프로젝트
              </Button>
            </Link>
          </>
        ) : (
          <div>
            <React.Fragment>
              <Button onClick={toggleDrawer(true)}>
                <Icon style={{ marginBottom: "10px" }}>
                  <MenuIcon />
                </Icon>
              </Button>
              <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
                {list()}
              </Drawer>
            </React.Fragment>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
