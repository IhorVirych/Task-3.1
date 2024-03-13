import './Card.css';
import PropTypes from 'prop-types';

function Card(props) {
  return (
    <div className="card-frame">
      <a href={props.link} target="_blank">
        <img src={props.previewURL} alt={props.text} />
        <p className="thumb-title">{props.text}</p>
      </a>
    </div>
  );
}
Card.propTypes = {
  link: PropTypes.string.isRequired,
  previewURL: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default Card;
