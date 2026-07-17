import { Container } from "react-bootstrap"
import { profile } from "../data/content"

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <p>
          © {new Date().getFullYear()} {profile.name} — construit avec React & React-Bootstrap.
        </p>
      </Container>
    </footer>
  )
}

export default Footer