 
 export const fetchData = async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }

    export const fetchPhotos = async (albumId: number) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
        
    }