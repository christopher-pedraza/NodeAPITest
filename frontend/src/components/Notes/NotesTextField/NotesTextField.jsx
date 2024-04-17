import propTypes from "prop-types";

import "./NotesTextField.css";

const textFieldStyle = {
    backgroundColor: "transparent",
    border: "2px solid white",
    borderRadius: "4px",
    fontSize: "16px",
    padding: "14px",
    marginRight: "5px",
    width: "80%",
    color: "white",
};

function NotesTextField({ value, onChange }) {
    return (
        <input
            style={textFieldStyle}
            value={value}
            onChange={onChange}
            placeholder="Introduce una nota..."
        />
    );
}

NotesTextField.propTypes = {
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
};

export default NotesTextField;
