import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Header from "../Header/header";
import Footer from "../Footer/footer";

export default function Read() {
  const [apiData, setApiData] = useState([]);
  const [text, setText] = useState("");
  const [message, setMessage] = useState("aaaaaa");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3100/Api/jobs`).then((getData) => {
      console.log("getData", getData.data.JobsList);
      setApiData(getData.data.JobsList);
    });
  }, []);

  const setData = (
    id,
    name,
    description,
    location,
    salary,
    start_date,
    colse_date,
    state
  ) => {
    localStorage.setItem("ID", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Description", description);
    localStorage.setItem("Location", location);
    localStorage.setItem("Salary", salary);
    localStorage.setItem("Start Date", start_date);
    localStorage.setItem("Close Date", colse_date);
    localStorage.setItem("State", state);
  };

  const getData = () => {
    axios.get(`http://localhost:3100/Api/jobs`).then((getData) => {
      setApiData(getData.data.JobsList);
      setMessage("aa");
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onDelete = (id) => {
    axios.delete(`http://localhost:3100/Api/jobs/${id}`).then(() => {
      console.log("aa");
      getData();
      setOpen(false);
    });
  };

  return (
    <div>
      <Header />
      <div>
        <div>
          <h3 style={{ textAlignVertical: "center", textAlign: "center" }}>
            Job Compass List
          </h3>
        </div>
        <Link to="/create">
          <Button
            style={{
              backgroundColor: "#20B2AA",
            }}
          >
            Add new job
          </Button>
        </Link>
        <Table celled>
          <Table.Header>
            <Table.Row>
              {/* <Table.HeaderCell>ID</Table.HeaderCell> */}
              <Table.HeaderCell>Name</Table.HeaderCell>
              {/* <Table.HeaderCell>Description</Table.HeaderCell> */}
              <Table.HeaderCell>Location</Table.HeaderCell>
              <Table.HeaderCell>Salary</Table.HeaderCell>
              <Table.HeaderCell>Start Date</Table.HeaderCell>
              <Table.HeaderCell>Close Date</Table.HeaderCell>
              <Table.HeaderCell>State</Table.HeaderCell>
              {/* <Table.HeaderCell>Update</Table.HeaderCell>
                    <Table.HeaderCell>Delete</Table.HeaderCell> */}
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {apiData.map((data) => {
              return (
                <Table.Row>
                  {/* <Table.Cell>{data._id}</Table.Cell> */}
                  <Table.Cell>{data.name}</Table.Cell>
                  {/* <Table.Cell>{data.description}</Table.Cell> */}
                  <Table.Cell>{data.location}</Table.Cell>
                  <Table.Cell>{data.salary}</Table.Cell>
                  <Table.Cell>{data.start_date}</Table.Cell>
                  <Table.Cell>{data.colse_date}</Table.Cell>
                  <Table.Cell>{data.state}</Table.Cell>
                  <Table.Cell>
                    <Link to="/update">
                      <IconButton
                        aria-label="edit"
                        style={{
                          backgroundColor: "#20B2AA",
                        }}
                        onClick={() =>
                          setData(
                            data._id,
                            data.name,
                            data.description,
                            data.location,
                            data.salary,
                            data.start_date,
                            data.colse_date,
                            data.state
                          )
                        }
                      >
                        <EditIcon />
                      </IconButton>
                    </Link>
                    {/* <Button color="red" onClick={() => onDelete(data._id)  }>Delete</Button> */}
                    {/* <Button color="red"  onClick={handleClickOpen} >
                                </Button> */}
                    <IconButton
                      onClick={handleClickOpen}
                      aria-label="delete"
                      style={{
                        backgroundColor: "#20B2AA",
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <Dialog open={open} onClose={handleClose}>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          Are you sure you want to delete this?
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={() => onDelete(data._id)}>Yes</Button>
                        <Button color="red" onClick={handleClose} autoFocus>
                          Cancel
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
