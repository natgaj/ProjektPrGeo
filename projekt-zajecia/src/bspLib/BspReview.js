import React, { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { BSP_data } from "./bsp_data";
import { getItem } from "localforage";

function List_rewiev() {
    const [value, setValue] = useState(0)
    const filterd_data = BSP_data.filter(item => item.prop.key == value)
    const style = {
        border: "2px solid grey",
        borderRadius: "5px",
        margin: "1vh 1vw",
        display: "flex",
        justifyContent: "flex-end",
    };
    return (
        <div>
            <input type='range' min='0' max='2' onChange={e => { console.log(e.target.value); setValue(e.target.value) }} />
            <h1>LISTA DRONÓW</h1>
            <div className="block_review" style={style}>
                {
                    <TableContainer component={Paper}>
                        <Table
                            sx={{ minWidth: 650 }}
                            size="small"
                            aria-label="a dense table"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Lp. </TableCell>
                                    <TableCell align="center">Nazwa</TableCell>
                                    <TableCell align="center">Producent</TableCell>
                                    <TableCell align="center">Liczba i rodzaj silników</TableCell>
                                    <TableCell align="center">Maksymalny udźwig [kg]</TableCell>
                                    <TableCell align="center">Waga całkowita [kg]</TableCell>
                                    <TableCell align="center">
                                        Maksymalna prędkość [km/h]
                                    </TableCell>
                                    <TableCell align="center">Metoda startu</TableCell>
                                    <TableCell align="right">Więcej</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filterd_data.map((row) => (

                                    < TableRow
                                        hover
                                        key={row.prop.key}
                                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.prop.key}
                                        </TableCell>

                                        <TableCell align="left">{row.prop.NAZWA}</TableCell>
                                        <TableCell align="left">{row.prop.PRODUCENT}</TableCell>
                                        <TableCell align="left">
                                            {row.prop.liczba_i_rodzaj_silników}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.prop.maksymalny_udźwig}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.prop.waga_całkowita}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.prop.maksymalna_prędkość}
                                        </TableCell>
                                        <TableCell align="center">
                                            {row.prop.metoda_startu}
                                        </TableCell>
                                        <TableCell align="center">
                                            <Link to={row.prop.key}>
                                                <ManageSearchIcon />
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                }
            </div>
        </div >
    );
}

export default List_rewiev;