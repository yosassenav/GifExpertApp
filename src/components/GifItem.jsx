import PropTypes from "prop-types";

export const GifItem = ({title, url}) => {

    return  (
        <div className="card">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    );
   
};

GifItem.prototypes = {
    id: PropTypes.number,
    title : PropTypes.string,
    url: PropTypes.string,
};