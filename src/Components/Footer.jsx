import { Link } from "react-router-dom";
import logo from "/Images/Logo .svg";
const Footer = () => {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={logo} alt="company-image" />
          <p>
            We are a family owned Mediterraneran restuarant, focused on
            traditional recipes servred with a modern twist{" "}
          </p>
        </div>
        <div>
          <h3>Important Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Reservations</Link>
            </li>
            <li>
              <Link to="/">Order Online</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Contact us</h3>
          <ul>
            <li>
              Address : <br /> Pretoria CBD
            </li>
            <li>
              Phone : <br /> +27 84 514 4582
            </li>
            <li>
              Email : <br /> nobatanathapelo@gmail.com
            </li>
          </ul>
        </div>

        <div>
          <h3>Social Links</h3>
          <ul>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">Youtube</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
