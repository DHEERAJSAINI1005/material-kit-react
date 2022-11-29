import { Helmet } from 'react-helmet-async';
import { Link, Container, Typography, Divider, Stack, Button,Paper } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
import Iconify from '../components/iconify';
// sections
import { LoginForm } from '../sections/auth/login';
import './style.scss';

export default function LoginPage() {

  return (
    <>
      <Helmet>
        <title> Login | Minimal UI </title>
      </Helmet>

      <Paper className='login_paper_main_paper'>
        <Logo
          sx={{
            position: 'fixed',
            top: { xs: 16, sm: 24, md: 40 },
            left: { xs: 16, sm: 24, md: 40 },
          }}
        />

        <Container maxWidth="sm">
          <Paper className="login_page_paper_style">
            <Typography variant="h4" gutterBottom>
              Sign in 
              {/* to Minimal */}
            </Typography>

            <Typography variant="body2" sx={{ mb: 5 }}>
              Don’t have an account? {''}
              <Link variant="subtitle2">Get started</Link>
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="eva:google-fill" className="login_page_google_icon"/>
              </Button>

              <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="eva:facebook-fill" className="login_page_facebook_icon"  />
              </Button>

              <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="eva:twitter-fill" className="login_page_twitter_icon"/>
              </Button>
            </Stack>

            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                OR
              </Typography>
            </Divider>
                                                                              
            <LoginForm />
          </Paper>
        </Container>
      </Paper>
    </>
  );
}
