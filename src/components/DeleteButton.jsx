import PropTypes from "prop-types";


export const DeleteButton = ({onClick}) => {
    return <button onClick={onClick} className="delete-button">Delete Category</button>
}

DeleteButton.propTypes = {
    onClick: PropTypes.func,
}