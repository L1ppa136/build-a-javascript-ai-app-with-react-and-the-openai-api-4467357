import PropTypes from "prop-types";
import "./Description.css";


const Description = ({weatherDescription}) => {
  return (
    <div className="description">
      <h2 className="description_title">Description</h2>
      <div className="description_divider">
        <p className="description_text">{weatherDescription}</p>
        </div>
    </div>
  )
};

Description.defaultProps = {
  weatherDescription: "Waiting for location data."
};

Description.propTypes = {
  weatherDescription: PropTypes.string
};

export default Description;