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