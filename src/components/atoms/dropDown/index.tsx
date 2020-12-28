import React, { ReactElement } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

interface Props {
  data: string[];
  onChange: (value: string) => void;
  value: string;
  id: string;
  label: string;
  error: boolean;
  errorText: string;
}

export default function DropDownInput({
  onChange,
  data,
  value,
  id,
  label,
  error,
  errorText,
}: Props): ReactElement {
  return (
    <FormControl variant="outlined" fullWidth style={{ marginTop: 16 }}>
      <InputLabel
        id={`dropdown-${id}`}
        error={error}
        style={{ backgroundColor: '#fff', paddingLeft: 4, paddingRight: 4 }}
      >
        {label}
      </InputLabel>
      <Select
        labelId={`dropdown-${id}`}
        id={id}
        fullWidth
        required
        error={error}
        value={value}
        onChange={(e: any) => onChange(e.target.value)}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {data.map((obj) => {
          return (
            <MenuItem key={obj} value={obj}>
              {obj}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText error={error}>{errorText}</FormHelperText>
    </FormControl>
  );
}
