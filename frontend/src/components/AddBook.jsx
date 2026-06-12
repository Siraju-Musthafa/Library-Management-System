import { useState, useEffect } from "react";
import api from "../services/api";

function AddBook({ refreshBooks }) {
  const [title, setTitle] = useState("");
  const [isbn, setIsbn] = useState("");
  const [author, setAuthor] = useState("");

  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetchAuthors();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("access_token");

      await api.post(
        "books/",
        {
          title,
          isbn,
          author,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTitle("");
      setIsbn("");
      setAuthor("");

      refreshBooks();

      alert("Book Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Book</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="ISBN"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
      />

      <br /><br />

      <select
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      >
        <option value="">
          Select Author
        </option>

        {authors.map((item) => (
          <option
            key={item.id}
            value={item.id}
          >
            {item.name}
          </option>
        ))}
      </select>

      <br /><br />

      <button type="submit">
        Add Book
      </button>
    </form>
  );
}

export default AddBook;