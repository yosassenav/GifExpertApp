import { GifItem } from "./GifItem";
import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import "../../src/styles.css";


export const Gifgrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);

    console.log({images, isLoading});
    
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