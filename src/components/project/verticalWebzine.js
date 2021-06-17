import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import LinkIcon from "@material-ui/icons/Link";
import Tooltip from "@material-ui/core/Tooltip";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows"; // Window Icon
import AndroidIcon from "@material-ui/icons/Android"; // Android Icon
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone"; // IOS
import PropTypes from "prop-types";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import ImportContactsTwoToneIcon from "@material-ui/icons/ImportContactsTwoTone"; // 전자책
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"; // 질병관리본부
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle"; // 특수교육
import WebIcon from "@material-ui/icons/Web"; // 웹 일반

export default function VerticalWebzine({
  img,
  title,
  subtitle,
  contents,
  link,
  badge,
  mainIcon,
}) {
  const isMobile = useMediaQuery("(min-width:600px)");

  return (
    <div className="vertical-webzine mb-5">
      <div className="vertical-webzine--text">
        {/* 모바일 에서 이미지 출력 */}
        {img !== "" && !isMobile ? (
          <img src={img} alt={title} width="100%" />
        ) : (
          ""
        )}
        <div className="vertical-webzine--title">{title}</div>
        <div className="vertical-webzine--subtitle">{subtitle}</div>
        <div className="vertical-webzine">
          <div className="p-1">
            <Icon>
              {mainIcon === "book" ? (
                <ImportContactsTwoToneIcon style={{ fontSize: 55 }} />
              ) : (
                ""
              )}
              {mainIcon === "hospital" ? (
                <LocalHospitalIcon style={{ fontSize: 55 }} />
              ) : (
                ""
              )}
              {mainIcon === "edu" ? (
                <SupervisedUserCircleIcon style={{ fontSize: 55 }} />
              ) : (
                ""
              )}
              {mainIcon === "web" ? <WebIcon style={{ fontSize: 55 }} /> : ""}
            </Icon>
          </div>
          <div className="vertical-webzine--summary">
            {contents.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </div>
        </div>
        <div className="pl-3 pr-3">
          {badge.windows ? (
            <Tooltip title="Windows 지원">
              <Icon className="pr-1">
                <DesktopWindowsIcon />
              </Icon>
            </Tooltip>
          ) : (
            ""
          )}
          {badge.android ? (
            <Tooltip title="Android 지원">
              <Icon className="pr-1">
                <AndroidIcon />
              </Icon>
            </Tooltip>
          ) : (
            ""
          )}
          {badge.ios ? (
            <Tooltip title="IOS 지원">
              <Icon className="pr-1">
                <PhoneIphoneIcon />
              </Icon>
            </Tooltip>
          ) : (
            ""
          )}
          {link !== "" ? (
            <Tooltip title="바로가기">
              <IconButton aria-label="바로가기" href={link} target="_blank">
                <LinkIcon />
              </IconButton>
            </Tooltip>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* PC 에서 이미지 출력 */}
      {img !== "" && isMobile ? (
        <div className="vertical-webzine--img">
          <img src={img} alt={title} width="100%" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

VerticalWebzine.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  contents: PropTypes.array,
  link: PropTypes.string,
  badge: PropTypes.object,
  mainIcon: PropTypes.string,
};
