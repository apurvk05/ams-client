import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAttendence,
  fetchDatewiseAttendance,
} from "../redux/action/studentAction";
import "../Style/navbar.css";
import BarChart from "react-bar-chart";

import axios from "axios";
import HomeHelper from "../Components/HomeHelper";
import { useNavigate } from "react-router-dom";

//latest imports
import "@fortawesome/fontawesome-free/css/all.min.css";

import Grid from "@mui/material/Unstable_Grid2";
import StatBox from "../Components/StatBox";

import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import "../Style/Home.css";

import { tokens } from "../theme";
import {
  Box,
  Card,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ProgressCircle2 from "../Components/ProgressCircle2";

import { Chart } from "react-google-charts";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  height: "auto",
  padding: "auto",
  bgcolor: "background.paper",
  border: `1px ridge 'slategrey'`,
  borderRadius: "10%",
  boxShadow: 15,
  p: 4,
};

const Home = () => {
  const store = useSelector((store) => store);
  const history = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAttendence());
    dispatch(fetchDatewiseAttendance());
  }, []);

  //updated code here
  var attendedTotal = 0;
  var totalClasses = 0;
  var takenClasses = 0;

  const labels = store.student.attendence.map((res) => {
    return res.subjectName;
  });
  const attended = store.student.attendence.map((res) => {
    attendedTotal += res.lectureAttended;
    return res.lectureAttended;
  });
  const notAttended = store.student.attendence.map((res) => {
    return res.totalLecturesByFaculty - res.lectureAttended;
  });
  const totalLecturesTaken = store.student.attendence.map((res) => {
    takenClasses += res.totalLecturesByFaculty;
    return res.totalLecturesByFaculty;
  });
  const remainingLectures = store.student.allSubjects.map((res, index) => {
    totalClasses += res.totalLectures;
    return res.totalLectures - totalLecturesTaken[index];
  });

  const overall = (attendedTotal/takenClasses)*100;

  const data = [
    ["Status", "Percentage"],
    ["Present", overall],
    ["Absent", 100-overall],
  ];

  const options = {
    is3D: true,
    colors: [ data[1][1]>=75?"#539165":data[1][1]>=60?"#ffa559":"#d21312", "#394867"],
    chartArea: {width: 800},
    legend: {position: 'bottom', textStyle: {color: '#708090', fontSize: 14}},
    chartArea:{left:'30%',top:0,width:'75%',height:'85%'},
  };

  const theme = useTheme();
  const colors = tokens("dark");
  const [selectedSubject, setSubject] = useState();

  const color = { color: "blue" };
  const margin = { top: 20, right: 20, bottom: 30, left: 50 };
  const handleBarClick = (element) => {
    console.log(`The  ${element.text} with value ${element.value} was clicked`);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const cardColors = ["bg-success gradient ", "bg-danger gradient", "bg-info gradient", "bg-secondary gradient"];

  //Is function ko na chhede
  function AttendanceProgress(props) {
    const completed = props.attended / props.total;
    const classes = `studentStats ${cardColors[props.i % 4]}`;
    return (
      <Card
        className={classes}
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        sx={{ margin: "5px" }}
      >
        <Button
          variant="text"
          onClick={() => {
            setSubject(props.subject);
            handleOpen();
          }}
        >
          <Box className={cardColors[props.i % 4]} p="30px">
            <Box
              width="100%"
              className={cardColors[props.i % 4]}
              display="flex"
              justifyContent="space-around"
            >
              <StatBox
                title={props.subject}
                subtitle={[
                  "Attended - " + props.attended,
                  "Total Classes - " + props.total,
                ]}
                progress={completed}
                increase={(completed * 100).toFixed(1)}
                index={props.i}
              />
            </Box>
          </Box>
        </Button>
      </Card>
    );
  }

  let i = 0;
  return (
    <>
      {store.student.isAuthenticated ? (
        <>
          <HomeHelper />
          <Grid container style={{ margin: "auto" }} maxWidth="1200px">
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              width={"90%"}
              height={"400px"}
              className="studentOverall"
            />
            {store.student.attendence.map((res, index) => (
              <AttendanceProgress
                subject={res.subjectName}
                attended={res.lectureAttended}
                total={res.totalLecturesByFaculty}
                i={index}
              />
            ))}
          </Grid>

          <Modal
            open={open}
            onClose={() => {
              handleOpen();
              i = 0;
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            {/* <Box sx={style}>
                <h3 style={{ fontFamily: "cursive" }} align="center">
                  {selectedSubject}
                </h3>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: "auto" }} aria-label="simple table">
                    <TableHead>
                      <TableCell width="80px" scope="col" align="center">
                        S. no.
                      </TableCell>
                      <TableCell width="80px" scope="col" align="center">
                        Status
                      </TableCell>
                      <TableCell width="80px" scope="col" align="center">
                        Date
                      </TableCell>
                    </TableHead>
                    <TableBody>
                      {store.student.datewise.map((res, index) => {
                        if (res.subjectName === selectedSubject) {
                          i++;
                          return (
                            <TableRow key={index}>
                              <TableCell
                                width="80px"
                                align="center"
                                scope="row"
                              >
                                {i}
                              </TableCell>
                              <TableCell width="80px" align="center">
                                {res.status}
                              </TableCell>
                              <TableCell width="80px" align="center">
                                {res.date}
                              </TableCell>
                            </TableRow>
                          );
                        }
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box> */}
            <div>
              {open && (
                <div className="modal-container">
                  <div className="modal-content">
                    <Button
                      variant="contained"
                      onClick={handleOpen}
                      sx={{
                        width: "2px",
                        bgcolor: "red",
                        marginBottom: "10px",
                      }}
                    >
                      Close
                    </Button>
                    <table>
                      <TableContainer component={Paper}>
                        <Table
                          sx={{ minWidth: "auto" }}
                          aria-label="simple table"
                        >
                          <TableHead>
                            <TableCell width="80px" scope="col" align="center">
                              S. no.
                            </TableCell>
                            <TableCell width="80px" scope="col" align="center">
                              Status
                            </TableCell>
                            <TableCell width="80px" scope="col" align="center">
                              Date
                            </TableCell>
                          </TableHead>
                          <TableBody>
                            {store.student.datewise.map((res, index) => {
                              if (res.subjectName === selectedSubject) {
                                i++;
                                return (
                                  <TableRow key={index}>
                                    <TableCell
                                      width="80px"
                                      align="center"
                                      scope="row"
                                    >
                                      {i}
                                    </TableCell>
                                    <TableCell width="80px" align="center">
                                      {res.status}
                                    </TableCell>
                                    <TableCell width="80px" align="center">
                                      {res.date}
                                    </TableCell>
                                  </TableRow>
                                );
                              }
                            })}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </Modal>
        </>
      ) : (
        history("/")
      )}
    </>
  );
};

export default Home;
