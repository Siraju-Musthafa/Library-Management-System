import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { logout } = useContext(AuthContext);

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        📚 Library Management
      </div>

      <div style={styles.links}>
        <Link style={styles.link} to="/">
          Dashboard
        </Link>

        <Link style={styles.link} to="/books">
          Books
        </Link>

        <Link style={styles.link} to="/authors">
          Authors
        </Link>

        <Link style={styles.link} to="/borrow">
          Borrow
        </Link>
      </div>

      <button
        onClick={logout}
        style={styles.logoutBtn}
      >
        Logout
      </button>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "#1e293b",
    color: "white",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  logo: {
    fontSize: "22px",
    fontWeight: "bold",
  },

  links: {
    display: "flex",
    gap: "25px",
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
  },

  logoutBtn: {
    background: "#ef4444",
    color: "white",
    border: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Navbar;