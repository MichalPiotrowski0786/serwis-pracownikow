import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const jobs = [
  {
    id: 'INT',
    name: 'Intern',
  },
  {
    id: 'JC',
    name: 'Junior Consultant',
  },
  {
    id: 'C',
    name: 'Consultant',
  },
  {
    id: 'SC',
    name: 'Senior Consultant',
  },
  {
    id: 'SV',
    name: 'Supervisor',
  },
  {
    id: 'MG',
    name: 'Manager',
  },
  {
    id: 'SMG',
    name: 'Senior Manager',
  },
  {
    id: 'DR',
    name: 'Director',
  },
  {
    id: 'CEO',
    name: 'CEO',
  },
];

const locs = [
  {
    id: 'PL',
    name: 'Poland',
  },
  {
    id: 'DE',
    name: 'Deutschland',
  },
  {
    id: 'FR',
    name: 'France',
  },
  {
    id: 'RU',
    name: 'Russia',
  },
  {
    id: 'DE',
    name: 'Deutschland',
  },
  {
    id: 'CZ',
    name: 'Czech Republic',
  },
  {
    id: 'UK',
    name: 'United Kingdom',
  },
  {
    id: 'ESP',
    name: 'Spain',
  },
  {
    id: 'CH',
    name: 'Switzerland',
  },
];

function Form({setLastEntry}) {
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [job, setJob] = React.useState('INT');
  const [loc, setLoc] = React.useState('PL');

  const nameHandleChange = (event) => {
    setName(event.target.value);
  };

  const surnameHandleChange = (event) => {
    setSurname(event.target.value);
  };

  const jobHandleChange = (event) => {
    setJob(event.target.value);
  };

  const locHandleChange = (event) => {
    setLoc(event.target.value);
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '33ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Name"
            value={name}
            onChange={nameHandleChange}
          />
          <TextField
            required
            id="outlined-required"
            label="Surname"
            value={surname}
            onChange={surnameHandleChange}
          />
          <TextField
            id="outlined-select"
            select
            label="Job title"
            value={job}
            onChange={jobHandleChange}
            helperText="Please select your job title"
          >
            {jobs.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select"
            select
            label="Location"
            value={loc}
            onChange={locHandleChange}
            helperText="Please select your location"
          >
            {locs.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
          <Button 
          variant="contained"
          size="large"
          endIcon={<SendIcon />}
          onClick={() => {
            if(name !== '' && surname !== ''){
              setLastEntry([{n: name, s: surname, j: job, l: loc},]);
              alert(`Added new employee to database: ${name} ${surname}`);
            } 
          }}
          sx={{ mt: 1.5, ml: 3 }}
          >
            Add
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default Form;
