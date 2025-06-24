import type { TAlbum } from "./Album";
import AlbumPhotos from "../pages/AlbumPhotos";

function Modal({ album, onClose }: { album: TAlbum; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-[#455a648e] bg-opacity-10 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">{album.title}</h2>
        <p className="text-gray-700 mb-4">
          This is a detailed view of the album with ID: {album.id}.
        </p>
        <hr />
        <div className="flex space-x-2 mb-4 overflow-x-auto ">
          <AlbumPhotos albumId={album.id} />
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 cursor-pointer bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
