import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(
  propertyName,
  monthlyChange,
  monthlyEarnings,
  totalEarnings,
  occupancyType
) {
  return {
    propertyName,
    monthlyChange,
    monthlyEarnings,
    totalEarnings,
    occupancyType,
  };
}

const rows = [
  // createData('Wayne Manor', 0.8, 10000, 150000, 'renting'),
  // createData('Moonstone Villa', 5.4, 12500, 640000, 'leasing'),
  // createData('Oceanview Mansion', 12.8, 7000, 84000, 'management'),
  // createData('Golden Horizon Villa', 1.2, 6600, 115000, 'concession'),
  // createData('Serenity Springs Chalet', 15, 4800, 122500, 'license'),
  // createData('Star Sun Hotel', 15, 4800, 122500, 'license'),
  createData("Wayne Manor", 0.8, 10000, 150000, "renting"),
  createData("Stark Tower", 5.4, 12500, 640000, "leasing"),
  createData("Daily Planet", 12.8, 7000, 84000, "management"),
  createData("Oceanview Manison", 1.2, 6600, 115000, "concession"),
  createData("Baxter Building", 15, 4800, 122500, "license"),
  createData("Hall of Justice", 15, 4800, 122500, "license"),
];

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Total Revenue</h3>
      <div className="inside">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 892.8 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Property</TableCell>
                <TableCell align="right">Change from last month (%)</TableCell>
                <TableCell align="right">Earnings this month ($)</TableCell>
                <TableCell align="right">Total earnings ($)</TableCell>
                <TableCell align="right">Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.propertyName}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.propertyName}
                  </TableCell>
                  <TableCell align="right">{row.monthlyChange}</TableCell>
                  <TableCell align="right">{row.monthlyEarnings}</TableCell>
                  <TableCell align="right">{row.totalEarnings}</TableCell>
                  <TableCell align="right">{row.occupancyType}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
