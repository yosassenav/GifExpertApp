import PropTypes from "prop-types";
import { getGifs } from "../helpers/getGifs"


export const Gifgrid = ({category}) => {

    getGifs(category);
    
    return (
        <>
            <h3>{category}</h3>
            <li>{category}</li>
        </>
    )
}

Gifgrid.propTypes = {
    category: PropTypes.string.isRequired,
  };