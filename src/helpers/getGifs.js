export const getGifs = async (category) => {
    const apiKey = 'FdLjSoxvScjUR6yEEzsVJnkWH7W29Emx';
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=${apiKey}&rating=g&limit=10`;
  
    try {
      const res = await fetch(url);
      const { data } = await res.json();
  
      const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      }));
  
      return gifs;
    } catch (error) {
      console.error('Error fetching gifs:', error);
      // Handle the error appropriately (e.g., throw an error or return an empty array)
      return [];
    }
  };
  