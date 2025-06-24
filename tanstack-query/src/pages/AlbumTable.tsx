import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../utils/data";
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import Paper from "@mui/material/Paper";
import type { TAlbum } from "../components/Album";
import { useState } from "react";

function AlbumTable() {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  });
  const {
    data: albums,
    isPending,
    error,
  } = useQuery({
    queryKey: ["albums"],
    queryFn: fetchData,
  });

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "title", headerName: "Title", width: 150 },
  ];

  const rows = albums?.map((album: TAlbum) => ({
    id: album.id,
    title: album.title,
  })) || [];

  if (error) return <div>Error: {error.message}</div>;

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      {isPending ? (
        <div>Loading Data...</div>
      ) : (
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          checkboxSelection
          sx={{ border: 0 }}
        />
      )}
    </Paper>
  );
}

export default AlbumTable;
