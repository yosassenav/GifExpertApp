import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { getGifs } from "../helpers/getGifs"

import PropTypes from "prop-types";
// import "../../src/styles.css";


export const Gifgrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect(()=>{
        getGifs(category)
        .then(newGifs => setImages(newGifs))
        // console.log(newGifs);
        

    },[]);
    
    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {images.map((image)=>{
                    return (
                    <GifItem 
                    key={image.id} 
                    {...image}
                    />
                    )
                    
                })}
            </div>

        </>
    )
}

Gifgrid.propTypes = {
    category: PropTypes.string.isRequired,
  };