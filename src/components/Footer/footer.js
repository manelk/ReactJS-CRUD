import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

export default function Footer() {
  return (
    <footer>
      <Box
        color="white"
        style={{
            backgroundColor: "#30D5C8"
        }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center" >
            Job Compass  {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}