import propTypes from "prop-types";

import "./NotesTextField.css";

function NotesTextField({ value, onChange }) {
  return <input className="text-field" value={value} onChange={onChange} />;
}

NotesTextField.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default NotesTextField;
