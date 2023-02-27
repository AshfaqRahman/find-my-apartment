import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';


interface ChipData {
  label: string;
}

function FormComponent() {
  const [value, setValue] = useState('');
  const [chipData, setChipData] = useState<ChipData[]>([]);

  const handleInputChange = (event:any) => {
    setValue(event.target.value);
  };

  const handleAddChip = () => {
    if (value.trim() !== '') {
      setChipData([...chipData, { label: value.trim() }]);
      setValue('');
    }
  };

  const handleDeleteChip = (chipToDelete:any) => () => {
    setChipData((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <div>
      <TextField label="Keywords" value={value} onChange={handleInputChange} style={{  borderRadius: '5px' }} />
      <button onClick={handleAddChip}>Add</button>
      <Box mt={2}>
        {chipData.map((chip, index) => (
          <Chip
            key={index}
            label={chip.label}
            onDelete={handleDeleteChip(chip)}
            style={{ marginRight: 8, marginBottom: 8 }}
            color='success'
          />
        ))}
      </Box>
    </div>
  );
}

export default FormComponent;
