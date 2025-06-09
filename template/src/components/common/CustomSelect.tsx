import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectProps } from '@mui/material';

interface Option {
  label: string;
  value: string | number;
}

interface CustomSelectProps extends SelectProps {
  label: string;
  options: Option[];
}

const CustomSelect: React.FC<CustomSelectProps> = ({ label, options, ...props }) => {
  return (
    <FormControl fullWidth size="small">
      <InputLabel>{label}</InputLabel>
      <Select label={label} {...props}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
