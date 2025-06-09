import React from 'react';
import { TextField } from '@mui/material';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';

interface CustomDatePickerProps extends Omit<DatePickerProps<Date>, 'renderInput'> {
  label: string;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ label, ...props }) => {
  return (
    <DatePicker
      {...props}
      label={label}
      renderInput={(params) => <TextField fullWidth size="small" {...params} />}
    />
  );
};

export default CustomDatePicker;
