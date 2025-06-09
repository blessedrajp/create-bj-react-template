import React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

interface Option {
  label: string;
  value: string;
}

interface CustomRadioGroupProps {
  label: string;
  value: string;
  options: Option[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomRadioGroup: React.FC<CustomRadioGroupProps> = ({ label, value, options, onChange }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup value={value} onChange={onChange} row>
        {options.map((option) => (
          <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default CustomRadioGroup;
