import propTypes from "prop-types";

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

const dividerStyle = {
    borderTop: "2px solid #bbb",
    borderRadius: "5px",
    width: "80%",
};

function Title({ title }) {
    return (
        <div style={titleContainerStyle}>
            <h1 style={titleStyle}>{title}</h1>
            <hr style={dividerStyle} />
        </div>
    );
}

Title.propTypes = {
    title: propTypes.string.isRequired,
};

export default Title;
