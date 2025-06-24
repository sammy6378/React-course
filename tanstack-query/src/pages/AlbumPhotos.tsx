import { useQuery } from "@tanstack/react-query"
import { fetchPhotos } from "../utils/data"
import AlbumPhoto from "../components/AlbumPhoto"

export interface TPhoto {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

function AlbumPhotos({albumId}: {albumId: number}) {
    const {data:photos, isPending, error} = useQuery({
        queryKey: ['photos', albumId],
        queryFn: () => fetchPhotos(albumId),
        enabled: !!albumId, // Only run the query if albumId is provided
    })

    console.log("Id",albumId);

    if(error) return <div>Error: {error.message}</div>
  return (
    <div
      className="container mx-auto p-4 flex gap-3">
        {isPending ? (
            <div>Loading Data...</div>
        ) : (
           photos.map((photo: TPhoto) => (
            <AlbumPhoto key={photo.id} photo={photo}/>
           ))
        )}
    </div>
  )
}

export default AlbumPhotos