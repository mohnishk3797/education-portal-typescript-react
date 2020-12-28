import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

interface LoginFormProps {
  classes: any;
  handleSigninSubmit: (name: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  classes,
  handleSigninSubmit,
}): React.ReactElement => {
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const handleClick = () => {
    if (!name) {
      setError(true);
      return;
    }
    setError(false);
    handleSigninSubmit(name);
  };
  return (
    <div className={classes.form}>
      <TextField
        variant="outlined"
        required
        fullWidth
        id="name"
        error={error}
        helperText={error ? 'Name Feild Required*' : ''}
        label="Name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={handleClick}
      >
        Submit
      </Button>
    </div>
  );
};
export default LoginForm;
