

export interface TAlbum {
    id: number;
    title: string;
}

function Album({ album,onOpen }: { album: TAlbum, onOpen: (album: TAlbum) => void }) {
 
  return (
    <div className="bg-white shadow-lg rounded-md p-4 mb-4 hover:shadow-xl transition-shadow duration-300">
      <p className=" bg-blue-100 rounded-full px-2 w-fit text-sm text-gray-500 mt-2 ">Post ID: {album.id}</p>
      <h2 className="text-xl font-bold mb-2">{album.title}</h2>
      <div className="flex justify-end items-center">
        <button
        onClick={() => onOpen(album)}
        className=" px-4 py-2 cursor-pointer text-blue-500 underline hover:text-blue-700 transition-colors duration-300"
        >Read More </button>
      </div>
    </div>
  );
}

export default Album;