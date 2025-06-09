import React from 'react';
import { Switch, FormControlLabel } from '@mui/material';

interface CustomSwitchProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({ label, checked, onChange }) => {
  return (
    <FormControlLabel
      control={<Switch checked={checked} onChange={onChange} />}
      label={label}
    />
  );
};

export default CustomSwitch;
