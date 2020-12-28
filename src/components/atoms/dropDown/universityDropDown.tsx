import React, { ReactElement, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import api from '../../../redux/services';
import { universityData } from '../../../redux/actionTypes';

interface universitiesDropDownProps {
  setUniversity: (data: universityData | null) => void;
  error: boolean;
  errorText: string;
}

export default function UniversityDropDown({
  setUniversity,
  error,
  errorText,
}: universitiesDropDownProps): ReactElement {
  const [universities, setUniversities] = useState([]);
  const handleChange = (value: string) => {
    api.education
      .getUniversity(value)
      .then((res) => {
        res.json().then((result) => {
          setUniversities(result);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Autocomplete
      id="university-box-demo"
      options={universities as universityData[]}
      onChange={(value, data) => setUniversity(data)}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          error={error}
          helperText={errorText}
          label="Select University"
          onChange={(e: any) => handleChange(e.target.value)}
          variant="outlined"
        />
      )}
    />
  );
}
