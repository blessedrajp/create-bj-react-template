import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  label: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, ...props }) => {
  return (
    <Button variant="contained" {...props} sx={{ ...props.sx, textTransform: 'none' }}>
      {label}
    </Button>
  );
};

export default CustomButton;
