import { useEffect, useState } from "react";
import api from "../services/api";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  const [books, setBooks] = useState(0);
  const [authors, setAuthors] = useState(0);
  const [borrowed, setBorrowed] = useState(0);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const token =
        localStorage.getItem("access_token");

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const booksRes =
        await api.get("books/", { headers });

      const authorsRes =
        await api.get("authors/", { headers });

      const borrowRes =
        await api.get("borrow/", { headers });

      setBooks(booksRes.data.length);
      setAuthors(authorsRes.data.length);
      setBorrowed(borrowRes.data.length);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>📚 Library Dashboard</h1>
        <p>
          Manage books, authors and borrowing
          activities.
        </p>
      </div>

      <div style={styles.cardsContainer}>
        <DashboardCard
          title="Books"
          count={books}
          icon="📖"
        />

        <DashboardCard
          title="Authors"
          count={authors}
          icon="✍️"
        />

        <DashboardCard
          title="Borrow Records"
          count={borrowed}
          icon="🔄"
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "40px",
    backgroundColor: "#f4f6f9",
  },

  header: {
    marginBottom: "30px",
  },

  cardsContainer: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
};

export default Dashboard;