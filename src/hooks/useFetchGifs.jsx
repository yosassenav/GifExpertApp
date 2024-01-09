import { useEffect, useState } from "react";
import { getGifs } from '/src/helpers/getGifs.js';

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getGifs(category)
          .then((newGifs) => {
            setImages(newGifs);
            setIsLoading(false);
          })
          .catch((error) => {
            setError(error);
            setIsLoading(false);
          });
    
        
      }, []);
    return {
        images,
        isLoading,
        error
    }
}