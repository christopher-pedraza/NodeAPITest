import propTypes from "prop-types";

import "./NotesSubmit.css";

const submitButtonStyle = {
    backgroundColor: "white",
    border: "none",
    color: "#04aa6d",
    padding: "16px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "4px",
    width: "15%",
};

function NotesSubmit({ text }) {
    return (
        <button style={submitButtonStyle} type="submit">
            {text}
        </button>
    );
}

NotesSubmit.propTypes = {
    text: propTypes.string.isRequired,
};

export default NotesSubmit;
