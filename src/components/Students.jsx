import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import axios from "../axios";
import Loading from "./Loading";
import  "./Dashboard.css"
import StudentPieChart from "./StudentPieChart";

const Students = () => {
    
    const [loading, setLoading] = useState(true);
    const [students, setStudent] = useState([]);

    const getStudentData = async () => {
        setLoading(true);
        try {
            const res = await axios.get("/studentdata");
            setLoading(false);
            setStudent(res.data);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    //Run only once
    useEffect(() => {
        getStudentData();
    }, []);

    //Conditional Rendering
    if(loading){
        return <main><Loading /></main>
    }
    return (
        <div className="students-dashboards">
            <h1 className="text-center">Students Dashboard</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className="college-table-header">
                        <TableRow>
                            <TableCell>Students Name</TableCell>
                            <TableCell align="right">Gender</TableCell>
                            <TableCell align="right">College</TableCell>
                            <TableCell align="right">Skills</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((data) => (
                            <TableRow
                                key={data.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                            >
                                <TableCell component="th" scope="row">{data.name}</TableCell>
                                <TableCell align="right">{data.gender}</TableCell>
                                {/* Conditionally Render College Name acc to College_id*/}
                                <TableCell align="right">{
                                    data.college_id === "ksu" ?
                                        "Karnataka State University" :
                                    data.college_id === "iiser" ?
                                        "Indian Institutes of Science Education and Research" :
                                    data.college_id === "iit" ?
                                        "Indian Institute of Technology" :
                                    data.college_id === "nit" ?
                                        "National Institute of Technology" :
                                    data.college_id === "lpu" ?
                                        "Lovely Professional University" :
                                    " "
                                }
                                </TableCell>
                                <TableCell align="right">{data.skills.map(skill => skill + ",   ")}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="student-pie-charts">
                <StudentPieChart />
            </div>
        </div>
    );
}

export default Students
