import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { ColDef, DataGrid } from "@material-ui/data-grid";
import { getShop } from "../../../api/shops";
import { useContext, useState } from "react";
import { ProvinceFilterContext } from "../../contexts/ProvinceFilterContext";
import Pagination from "./Pagination";

const columns: ColDef[] = [
  { field: "commerce", headerName: "Marca", width: 300 },
  { field: "location", headerName: "Barrio/Localidad", width: 400 },
  {
    field: "address",
    headerName: "Domicilio",
    width: 600,
  },
];

export default function MainContent() {
  const [pageSize, setPageSize] = useState(10);
  const { province } = useContext(ProvinceFilterContext);

  const rows = getShop({ province });

  return (
    <Container fixed maxWidth="xl">
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h5" style={{ margin: "25px 0" }}>
            {province}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <FormControl style={{ minWidth: 200 }}>
            <InputLabel id="select-label">Comercios por página</InputLabel>
            <Select
              labelId="select-label-label"
              id="simple-select"
              value={pageSize}
              onChange={({ target: { value } }) => setPageSize(value as number)}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={100}>100</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <div style={{ height: 645, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          rowsPerPageOptions={[10, 20, 50, 100]}
          onPageSizeChange={({ pageSize }) => setPageSize(pageSize)}
          components={{
            Pagination,
          }}
        />
      </div>
    </Container>
  );
}
