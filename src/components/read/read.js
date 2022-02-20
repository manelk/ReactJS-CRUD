import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';


export default function Read() {
    // state = {
    //     text: "",
    //     message: "",
    //     open: false
    //   };
    const [apiData, setApiData] = useState([]);
    const [text, setText] = useState("");
    const [message, setMessage] = useState("aaaaaa");
    useEffect(() => {
        axios.get(`http://localhost:3100/Api/jobs`)
            .then((getData) => {
              //  console.log("getData", getData.data.JobsList)
                setApiData(getData.data.JobsList);
            })
    }, [])

    const setData = (id, name, description, location, salary, start_date, colse_date, state) => {
        localStorage.setItem('ID', id)
        localStorage.setItem('Name', name)
        localStorage.setItem('Description', description)
        localStorage.setItem('Location', location)
        localStorage.setItem('Salary',salary)
        localStorage.setItem('Start Date', start_date)
        localStorage.setItem('Close Date', colse_date)
        localStorage.setItem('State', state)
    }

    const getData = () => {
        axios.get(`http://localhost:3100/Api/jobs`)
            .then((getData) => {
                setApiData(getData.data.JobsList);
                setMessage("aa");
            })
    }

    const onDelete = (id) => {
        axios.delete(`http://localhost:3100/Api/jobs/${id}`)
        .then(() => {
            getData();
            setOpen(false)
        })
    }

      const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };

    return (

        <div>
             <div>
              <h3   style={{textAlignVertical: "center",textAlign: "center",}}>Job Compass List</h3>
            </div>
             <Link to='/create'>
                <Button
                    color="green"
                    >
                    Add new job
                </Button>
            </Link>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        {/* <Table.HeaderCell>ID</Table.HeaderCell> */}
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
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
                                <Table.Cell>{data.description}</Table.Cell>
                                <Table.Cell>{data.location}</Table.Cell>
                                <Table.Cell>{data.salary}</Table.Cell>
                                <Table.Cell>{data.start_date}</Table.Cell>
                                <Table.Cell>{data.colse_date}</Table.Cell>
                                <Table.Cell>{data.state}</Table.Cell>
                                <Table.Cell>
                                    <Link to='/update'>
                                        <Button
                                            color="blue"
                                            onClick={() => setData(data._id, data.name, data.description,data.location,  data.salary, data.start_date, data.colse_date,data.state )}>
                                            Update
                                        </Button>
                                    </Link>
                                     <Dialog
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                      >
                                        <DialogContent>
                                          <DialogContentText id="alert-dialog-description">
                                            Are you sure you want to delete this?
                                          </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                          <Button color="primary" onClick={() => onDelete(data._id)  }>Yes</Button>
                                          <Button color="red" onClick={handleClose} autoFocus>
                                            Cancel
                                          </Button>
                                        </DialogActions>
                                      </Dialog>
                                    {/* <Button color="red" onClick={() => onDelete(data._id)  }>Delete</Button> */}
                                    <Button color="red"  onClick={handleClickOpen} >Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}
