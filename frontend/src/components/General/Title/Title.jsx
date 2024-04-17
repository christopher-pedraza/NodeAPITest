import propTypes from "prop-types";
import "./Title.css";

const titleContainerStyle = {
    marginBottom: "20px",
    width: "100%",
};

const titleStyle = {
    fontSize: "2.5em",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
};

function Title({ title }) {
    return (
        <div style={titleContainerStyle}>
            <h1 style={titleStyle}>{title}</h1>
            <hr className="hr-rounded" />
        </div>
    );
}

Title.propTypes = {
    title: propTypes.string.isRequired,
};

export default Title;
