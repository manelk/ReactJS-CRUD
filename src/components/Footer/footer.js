import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

export default function Footer() {
  return (
    <footer>
      <Box
        color="white"
        style={{
          backgroundColor: "#20B2AA",
        }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center">Job Compass {new Date().getFullYear()}</Box>
        </Container>
      </Box>
    </footer>
  );
}
