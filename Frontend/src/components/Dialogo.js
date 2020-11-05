import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import MenuItem from '@material-ui/core/MenuItem';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


export default function FormDialog(props) {

  return (
    <div>
      <Dialog open={props.open} onClose={() => props.fun(false)} aria-labelledby="form-dialog-title">
        <form className="form" onSubmit={props.handleSubmit}>
        <DialogTitle id="form-dialog-title">Add Todo Card</DialogTitle>
        <DialogContent>      
            <TextField required
                id="description"
                label="Description"
                onChange={props.handleDescriptionChange}
                value={props.state.description}
                variant="outlined"
                style = {{width: "100%"}}>
            </TextField> <br></br> <br></br>
            <TextField required
                id="name"
                onChange={props.handleNameChange}
                value={props.state.name}
                label="Name"
                variant="outlined"
                style = {{width: "100%"}}>
            </TextField> <br></br> <br></br>
            <TextField required
                id="email"
                type = "email"
                onChange={props.handleEmailChange}
                value={props.state.email}
                label="Email"
                variant="outlined"
                style = {{width: "100%"}}>
            </TextField> <br></br> <br></br>
            <TextField required
                id="status"
                onChange={props.handleStatusChange}
                value={props.state.status}
                select
                label="Status"
                helperText="Please select the status"
                style = {{width: '100%'}}
                variant="outlined">
                <MenuItem value="Ready">Ready</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Done">Done</MenuItem>
            </TextField>             
                  
            
            <br></br>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <KeyboardDatePicker  required
                            margin="normal"
                            id="due-date"
                            label="Duedate"
                            format="dd-MM-yyyy"
                            value = {props.state.dueDate}
                            onChange={props.handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}                            
                            />
                        </Grid>
            </MuiPickersUtilsProvider>
            <br></br>
            <input
              required
              style = {{display: 'none', width: '100%'}}
              id="contained-button-file"
              multiple
              type="file"
              onChange={props.handleFileChange}              
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="default" component="span" style = {{width: "100%"}}>
              <CloudUploadIcon /> &nbsp; Upload File
              </Button>
            </label> <br></br> <br></br>        
        </DialogContent>
        <DialogActions>
          <Button type="submit" color="primary" variant="contained">
            Add #{props.state.items.length + 1}
          </Button>
          <Button onClick={() => props.fun(false)} color="secondary" variant="contained">
            Cancel
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
