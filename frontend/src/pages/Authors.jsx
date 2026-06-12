import { useEffect, useState } from "react";
import api from "../services/api";
import AddAuthor from "../components/AddAuthor";

function Authors() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetchAuthors();
  }, []);
    
    const deleteAuthor = async (id) => {
  try {
    const token =
      localStorage.getItem("access_token");

    await api.delete(
      `authors/${id}/`,
      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );

    fetchAuthors();
  } catch (error) {
    console.log(error);
  }
};

  const fetchAuthors = async () => {
    try {
      const token = localStorage.getItem("access_token");

      const response = await api.get("authors/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAuthors(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <AddAuthor refreshAuthors={fetchAuthors} />

      <hr />
      <h1>Authors</h1>

      {authors.map((author) => (
        <div
          key={author.id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{author.name}</h3>
          <p>{author.email}</p>
          <button onClick={() => deleteAuthor(author.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Authors;