import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button onClick={props.onClick}>
            {(props.button == '') ? null: ((props.button == 'o') ? <img src="/O.svg" alt="O" /> : <img src="/X.svg" alt="X" />)}
        </button>
    );
};

Button.propTypes = {
    button: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Button;