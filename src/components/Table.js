import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [];

export default function CustomTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Make</TableCell>
            <TableCell align="right">Model</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map((row) => (
            <TableRow
              key={row.MakeId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
              <TableCell align="right">{row.MakeId}</TableCell>
              <TableCell align="right">{row.MakeName}</TableCell>
              <TableCell align="right">{row.VehicleTypeName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
