import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const initialState = {
  email:null,
  password: null,
};


export default function LoginForm() {
  const navigate = useNavigate();
 
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({ ...initialState });

  const handleChange = (key,val) =>{
    setData({
      ...data,
      [key]: val,
    });
  }

  const handleSubmit = () => {
    // navigate('/dashboard', { replace: true });
  };
  return (
    <>
      <Stack spacing={3}>
        <TextField name="email"
         label="Email address"
         onChange={handleChange}
         required/>

        <TextField
          name="password"
          label="Password"
          required
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleSubmit}>
        Login
      </LoadingButton>
    </>
  );
}
