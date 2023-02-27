import { Chip } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import KingBedSharpIcon from '@mui/icons-material/KingBedSharp';


function Bedroom() {
  const [checked, setChecked] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
  });

  const handleChange = (event:any) => {
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  };

  return (
    <>
    <Chip icon={<KingBedSharpIcon color="success" />} label="Bedroom" color='success' variant="outlined" />
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.option1}
                onChange={handleChange}
                name="option1"
              />
            }
            label="1"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.option2}
                onChange={handleChange}
                name="option2"
              />
            }
            label="2"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.option3}
                onChange={handleChange}
                name="option3"
              />
            }
            label="3"
          />
        </FormGroup>
      </Grid>

      <Grid item xs={6}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.option4}
                onChange={handleChange}
                name="option4"
              />
            }
            label="4"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.option5}
                onChange={handleChange}
                name="option5"
              />
            }
            label="5"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.option6}
                onChange={handleChange}
                name="option6"
              />
            }
            label="5+"
          />
        </FormGroup>
      </Grid>
    </Grid>
    </>
  );
}

export default Bedroom;
