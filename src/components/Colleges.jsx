import React, { useEffect, useState } from 'react'
import axios from "../axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import Loading from "./Loading";
import "./Dashboard.css";

const Colleges = () => {

    const [loading, setLoading] = useState(true);
    const [colleges, setCollege] = useState([]);

    //Parse College Data from Backend
    const getCollegeData = async () => {
        setLoading(true);
        try {
            const res = await axios.get("/collegedata");
            setLoading(false);
            setCollege(res.data);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    //Run only once
    useEffect(() => {
        getCollegeData();
    }, []);

    const theme = createMuiTheme({  
        typography: {
          fontFamily: 
            '"Poppins", serif',
        },
    })

    //Conditional Rendering
    if(loading){
        return <main><Loading /></main>
    }
    return (
        <div className="students-dashboards">
            <h1 className="text-center">College Dashboard</h1>
            <MuiThemeProvider theme={theme}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead className="college-table-header">
                            <TableRow>
                                <TableCell>College Name</TableCell>
                                <TableCell align="right">Year</TableCell>
                                <TableCell align="right">City</TableCell>
                                <TableCell align="right">Skills</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {colleges.map((data) => (
                                <TableRow
                                key={data.name}
                                    sx={{
                                        '&:last-child td, &:last-child th': { border: 0 },
                                        'fontFamily': "Poppins",
                                    }}
                                >
                                <TableCell component="th" scope="row">{data.name}</TableCell>
                                <TableCell align="right">{data.year}</TableCell>
                                <TableCell align="right">{data.city}</TableCell>
                                <TableCell align="right">{data.state}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </MuiThemeProvider>
        </div>
    )
}

export default Colleges;