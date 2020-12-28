import React, { ReactElement } from 'react';
import { TextField } from '@material-ui/core';

interface Props {
  required: boolean;
  id: string;
  name: string;
  value: string | number;
  onChange: (value: string) => void;
  variant: 'outlined' | 'standard' | 'filled' | undefined;
  label: string;
  secure: boolean;
  error: boolean;
  errorText: string;
  disabled: boolean;
  fullWidth: boolean;
  style: any | undefined;
  multiline: boolean;
}

export default function InputField({
  required,
  id,
  name,
  value,
  onChange,
  variant,
  label,
  secure,
  error,
  errorText,
  disabled,
  fullWidth,
  style,
  multiline,
}: Props): ReactElement {
  return (
    <TextField
      variant={variant || 'outlined'}
      margin="normal"
      required={required || false}
      fullWidth={fullWidth}
      id={id}
      multiline={multiline}
      label={label}
      name={name}
      style={style}
      error={error}
      disabled={disabled}
      helperText={errorText}
      value={value}
      type={secure ? 'password' : 'text'}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
