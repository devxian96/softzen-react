import PropTypes from "prop-types";
import "./webzine.css";

export default function webzine({ year, title, summary, img, link }) {
  return (
    <div className="webzine">
      <a href={link} rel="noreferrer" target="_blank">
        <img
          src={img}
          alt={title}
          title={title}
          style={{ borderRadius: "15px" }}
        />
        <div className="webzine__data">
          <h3 className="webzine__title">{title}</h3>
          <h5 className="webzine__year">{year}</h5>
          <p className="webzine__summary">{summary}</p>
        </div>
      </a>
    </div>
  );
}

webzine.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  img: PropTypes.string,
  link: PropTypes.string,
};
