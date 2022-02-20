import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default class Create extends React.Component {
  state = {
      formData: {
          Name: '',
          Description: '',
          Location:'',
          Salary:'',
          StartDate:'',
          CloseDate:'',
          State:'',
      },
      submitted: false,
      Errors:[],
  }

  handleChange = (event) => {
      const { formData } = this.state;
      formData[event.target.name] = event.target.value;
      this.setState({ formData });
   //   console.log("a", formData)
  }

  handleSubmit = () => {
      console.log("this.Errors", this.state.Errors.length)
      if(this.state.Errors.length !== 0){
        this.sendDataToAPI();
      }
  }

  sendDataToAPI = () => {
    const { formData } = this.state;
    console.log("form data", formData);
    axios.post(`http://localhost:3100/Api/jobs`, {
      "name":formData.Name,
      "description": formData.Description,
      "location": formData.Location,
      "salary": formData.Salary,
      "start_date": formData.StartDate,
      "colse_date": formData.CloseDate,
      "state": formData.State
    }).then(() => {
      console.log("success")
      window.location.pathname = '/';
    })
  }


  render() {
      const { formData, submitted } = this.state;
      return (
             <Box
              sx={{
                width: 500,
                maxWidth: '100%',
              }}
            >
           <p>{this.state.Name}</p>

          <ValidatorForm
              onSubmit={this.handleSubmit}
              onError={errors => this.state.Errors = errors}
          >
              {/* <h2>Simple form</h2> */}
              <div>
                <label>Job name</label>
                 <TextValidator
                    fullWidth
                    onChange={this.handleChange}
                    name="Name"
                    value={formData.Name}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
              </div>
           <div>
             <label>Description</label>
             <TextValidator
                fullWidth
                onChange={this.handleChange}
                name="Description"
                value={formData.Description}
                validators={['required']}
                errorMessages={['this field is required']}
            />
           </div>
               <div>
                 <label>Location</label>
                 <TextValidator
                    fullWidth
                    onChange={this.handleChange}
                    name="Location"
                    value={formData.Location}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
               </div>
               <div>
                 <label>Salary</label>
                 <TextValidator
                    fullWidth
                    onChange={this.handleChange}
                    name="Salary"
                    value={formData.Salary}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
               </div>
               <div>
                 <label>Start Date</label>
                 <TextValidator
                    fullWidth
                    type='date'
                    onChange={this.handleChange}
                    name="StartDate"
                    value={formData.StartDate}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
               </div>
               <div>
                 <label>Close Date</label>
                 <TextValidator
                    fullWidth
                    type='date'
                    onChange={this.handleChange}
                    name="CloseDate"
                    value={formData.CloseDate}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
               </div>
              <div>
                 <label>Job State</label>
                 <TextValidator
                    fullWidth
                    onChange={this.handleChange}
                    name="State"
                    value={formData.State}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
               </div>
               <br></br>
               <div>
                 <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                    type="submit"
                    onClick={this.handleSubmit}
                >
                    Submit
                </Button>
               </div>
          </ValidatorForm>
          </Box>
      );
  }
}
