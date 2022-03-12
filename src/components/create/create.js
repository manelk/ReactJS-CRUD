import React from "react";
//import { Form } from "semantic-ui-react";
import axios from "axios";
//import { useHistory } from "react-router";
//import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
//import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default class Create extends React.Component {
  state = {
    formData: {
      Name: "",
      Description: "",
      Location: "",
      Salary: "",
      StartDate: "",
      CloseDate: "",
      State: "",
      Category: "",
    },
    submitted: false,
    Errors: [],
  };

  handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
    console.log("a", formData);
  };

  handleSubmit = () => {
    console.log("this.Errors", this.state.Errors.length);
    // if (this.state.Errors.length !== 0) {
    this.sendDataToAPI();
    // }
  };

  sendDataToAPI = () => {
    const { formData } = this.state;
    console.log("form data", formData);
    axios
      .post(`http://localhost:3100/Api/jobs`, {
        name: formData.Name,
        category: "",
        description: formData.Description,
        location: formData.Location,
        salary: formData.Salary,
        start_date: formData.StartDate,
        colse_date: formData.CloseDate,
        state: formData.State,
      })
      .then(() => {
        console.log("success");
        window.location.pathname = "/";
      });
  };

  render() {
    const { formData, submitted, getItems } = this.state;
    return (
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          m: 2,
        }}
      >
        <p>{this.state.Name}</p>

        <ValidatorForm
          onSubmit={this.handleSubmit}
          onError={(errors) => (this.state.Errors = errors)}
        >
          <div>
            <label>Job name</label>
            <TextValidator
              required
              fullWidth
              onChange={this.handleChange}
              name="Name"
              value={formData.Name}
              validators={["required"]}
              errormessages={["this field is required"]}
            />
          </div>
          <div>
            <label>Description</label>
            <TextValidator
              required
              fullWidth
              onChange={this.handleChange}
              name="Description"
              value={formData.Description}
              validators={["required"]}
              errormessages={["this field is required"]}
            />
          </div>
          <div>
            <label>Location</label>
            <TextValidator
              required
              fullWidth
              onChange={this.handleChange}
              name="Location"
              value={formData.Location}
              validators={["required"]}
              errormessages={["this field is required"]}
            />
          </div>
          <div>
            <label>Salary</label>
            <TextValidator
              required
              fullWidth
              onChange={this.handleChange}
              name="Salary"
              value={formData.Salary}
              validators={["required"]}
              errormessages={["this field is required"]}
            />
          </div>
          <div>
            <label>Start Date</label>
            <TextValidator
              required
              fullWidth
              type="date"
              onChange={this.handleChange}
              name="StartDate"
              value={formData.StartDate}
              validators={["required"]}
              errormessages={["this field is required"]}
            />
          </div>
          <div>
            <label>Close Date</label>
            <TextValidator
              required
              fullWidth
              type="date"
              onChange={this.handleChange}
              name="CloseDate"
              value={formData.CloseDate}
              validators={["required"]}
              errormessages={["this field is required"]}
            />
          </div>
          <label>Job State</label>
          <Select
            name="State"
            value={formData.State}
            onChange={this.handleChange}
            fullWidth
            required
          >
            <MenuItem key={"Closed"} value={"Closed"}>
              Closed
            </MenuItem>
            <MenuItem key={"Open"} value={"Open"}>
              Open
            </MenuItem>
          </Select>
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
