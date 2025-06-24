import type { TPhoto } from "../pages/AlbumPhotos"


function AlbumPhoto({photo}: {photo: TPhoto}) {
  return (
    <div
    key={photo.id}
    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
    >
        <img
            src={photo.thumbnailUrl}
            alt="Album Thumbnail"
            className="w-32 h-32 object-cover mb-2 rounded"
        />
        <h3 className="text-sm font-semibold text-gray-800">{photo.title}</h3>
        <a
            href={photo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-2 cursor-pointer"
        >
            View Full Image
        </a>
    </div>
  )
}

export default AlbumPhoto