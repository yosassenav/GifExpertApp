

export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=FdLjSoxvScjUR6yEEzsVJnkWH7W29Emx&rating=${category}&limit=10`;
    const res = await fetch(url);
    const { data } = await res.json();

    // console.log("res: ", res);
    // console.log("res.json(): ",res.json());


    const gifs = data.map((img)=>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs;
}