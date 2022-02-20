import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Select from '@mui/material/Select';

import MenuItem from '@mui/material/MenuItem';
import NativeSelect from '@mui/material/NativeSelect';

export default function Update() {
    let history = useHistory();
    const [Name, setName] = useState('');
    const [Description, setDescription] = useState('');
    const [Location, setLocation] = useState('');
    const [Salary, setSalary] = useState('');
    const [StartDate, setStartDate] = useState('');
    const [CloseDate, setCloseDate] = useState('');
    const [State, setState] = useState('');
    const [ID, setID] = useState(null);

    const sendDataToAPI = () => {
        console.log("aa", Name, Description, ID)
        axios.patch(`http://localhost:3100/Api/jobs/${ID}`, [
            {
                "propName":"name", "value": Name,
            },
            {
                  "propName":"description", "value": Description,
            },
             {
                "propName":"location", "value": Location,
            },
             {
                "propName":"salary", "value": Salary,
            },
             {
                 "propName":"start_date", "value": StartDate,
            },
             {
                "propName":"colse_date", "value": CloseDate,
            },
             {
                 "propName":"state", "value": State,
            }
        ]
      ).then(() => {
            history.push('/')
        })
    }

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setName(localStorage.getItem('Name'));
        setDescription(localStorage.getItem('Description'));
        setLocation(localStorage.getItem('Location'));
        setSalary(localStorage.getItem('Salary'));
        setStartDate(localStorage.getItem('Start Date'));
        setCloseDate(localStorage.getItem('Close Date'));
        setState(localStorage.getItem('State'));
    }, [])

    return (
         <Box
          sx={{
            width: 500,
            maxWidth: '100%',
          }}
        >
        <div>
            <Form>
                <Form.Field>
                    <label>Name</label>
                    <TextField
                        fullWidth
                        name="Name"
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Name' />
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <TextareaAutosize
                        minRows={1}
                        name="Description"
                        value={Description}
                        placeholder='Description'
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Field>
                  <Form.Field>
                    <label>Location</label>
                    <TextField
                    fullWidth
                        name="Location"
                        value={Location}
                        placeholder='Location'
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Salary</label>
                    <TextField
                    fullWidth
                        name="Salary"
                        value={Salary}
                        placeholder='Salary'
                        onChange={(e) => setSalary(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Start date</label>
                    <TextField
                    type="date"
                    fullWidth
                        name="StartDate"
                        value={StartDate}
                        placeholder='Start Date'
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Close date</label>
                    <TextField
                        fullWidth
                        type="date"
                        name="CloseDate"
                        value={CloseDate}
                        placeholder='Close Date'
                        onChange={(e) => setCloseDate(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>State</label>
                    <input
                        name="State"
                        value={State}
                        placeholder='State'
                        onChange={(e) => setState(e.target.value)}
                    />
                </Form.Field>
                 <br></br>
                <div>
                    <Button fullWidth color="primary" variant="contained" type='submit' onClick={sendDataToAPI}>Update</Button>
                </div>
            </Form>
        </div>
        </Box>
    )
}
