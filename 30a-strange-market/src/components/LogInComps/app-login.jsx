// import {Container, Box} from '@mui/material';

import VerificationPage from "./VerificationPage";
import HomePage from "./Home";

export default function LogIn() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        {!loggedIn && <VerificationPage setLoggedIn={setLoggedIn} />}
        {loggedIn && <HomePage />}
      </Box>
    </Container>
  );
}
