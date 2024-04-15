import propTypes from "prop-types";
import "./Title.css";

function Title({ title }) {
  return (
    <div>
      <h1 className="title">{title}</h1>
      <hr className="hr-rounded" />
    </div>
  );
}

Title.propTypes = {
  title: propTypes.string.isRequired,
};

export default Title;
