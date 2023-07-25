import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IAcronym } from "../../../models/acronym";
import { Box } from "@mui/material";

const columnsToShow: GridColDef[] = [
    { field: 'shortForm', headerName: 'Short Form', flex: 1, editable: true, },
    { field: 'fullForm', headerName: 'Full Form', flex: 2, editable: true, },
    { field: 'description', headerName: 'Description Form', flex: 3, editable: true, }
];

export default function AcronymList({ acronymsToShow }: { acronymsToShow: IAcronym[] }) {

    return (
        <>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={acronymsToShow}
                    columns={columnsToShow}
                    initialState={{
                        pagination: {
                            paginationModel: {
                            pageSize: 5,
                            },
                        },
                    }}
                    //rowHeight={33}
                    pageSizeOptions={ [5, 10, 15] }
                    disableRowSelectionOnClick
                />
            </Box>
        </>
    );
}