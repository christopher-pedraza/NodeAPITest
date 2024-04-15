import propTypes from "prop-types";

import "./NotesSubmit.css";

function NotesSubmit({ text }) {
  return (
    <button className="submit-button" type="submit">
      {text}
    </button>
  );
}

NotesSubmit.propTypes = {
  text: propTypes.string.isRequired,
};

export default NotesSubmit;
