import PropTypes from "prop-types";
import "./Description.css";
import Loader from './Loader';


const Description = ({weatherDescription, isLoading}) => {
  return (
    <div className="description">
      <h2 className="description_title">Description</h2>
      <div className="description_divider">
        {isLoading && <Loader/>}
        <p className="description_text">{weatherDescription}</p>
        </div>
    </div>
  )
};

Description.defaultProps = {
  weatherDescription: "Waiting for location data."
};

Description.propTypes = {
  weatherDescription: PropTypes.string,
  isLoading: PropTypes.bool
};

export default Description;