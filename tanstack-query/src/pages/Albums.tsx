import { useQuery } from "@tanstack/react-query"
import type { TAlbum } from "../components/Album";
import { useState } from "react";
import Modal from "../components/Modal";
import Album from "../components/Album";
import { fetchData } from "../utils/data";

function Albums() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState<TAlbum | null>(null);

    // handle open modal
    const handleOpen = (album: TAlbum) => {
      setSelectedAlbum(album);
      setIsOpen(true);
    };

    // handle close modal
    const handleClose = () => {
      setSelectedAlbum(null);
      setIsOpen(false);
    };


    const { data: albums, isPending,error} = useQuery({
        queryKey: ['albums'],
        queryFn: fetchData,
    })

    if(error) return <div>Error: {error.message}</div>
    
  return (
    <div className="container mx-auto p-4">
      {isPending ? (
        <div>Loading Data...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {albums &&
            albums.map((album: TAlbum) => (
              <Album key={album.id} album={album} onOpen={handleOpen} />
            ))}
          {isOpen && selectedAlbum && (
            <Modal onClose={handleClose} album={selectedAlbum} />
          )}
        </div>
      )}
    </div>
  );
}

export default Albums;