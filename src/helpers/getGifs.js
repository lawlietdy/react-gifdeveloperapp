

export const getGifs = async ( category ) => { // Esta forma esta mal, porque cada vez que se llama otro componente se vuelve a hacer la peticion HTTPS 
    const url  = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=jXEZAIhBGZCpm1l3cx64iIOUAVF63RAo`; //encodeURI() sirve para mandar un texto con espacios
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.original.url,
        }
    })

    return gifs;

}