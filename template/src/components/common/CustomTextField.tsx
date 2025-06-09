import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

interface CustomTextFieldProps extends TextFieldProps {}

const CustomTextField: React.FC<CustomTextFieldProps> = (props) => {
  return (
    <TextField
      fullWidth
      size="small"
      variant="outlined"
      {...props}
    />
  );
};

export default CustomTextField;
