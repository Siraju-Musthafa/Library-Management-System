import { useEffect, useState } from "react";
import api from "../services/api";
import AddBook from "../components/AddBook";

function Books() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const token = localStorage.getItem("access_token");

      const response = await api.get("books/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBook = async (id) => {
    try {
      const token = localStorage.getItem("access_token");

      await api.delete(`books/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchBooks();
    } catch (error) {
      console.log(error);
    }
    };
    
    const borrowBook = async (bookId) => {
  try {
    const token =
      localStorage.getItem("access_token");

    await api.post(
      "borrow/",
      {
        book: bookId,
      },
      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );

    alert("Book Borrowed");

    fetchBooks();

  } catch (error) {
    console.log(error);
  }
};

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div style={{ padding: "20px" }}>
      <AddBook refreshBooks={fetchBooks} />
      <hr />
      <h1>Books</h1>

      <input
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px",
        }}
      />

      {filteredBooks.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>

          <p>ISBN: {book.isbn}</p>

          <p>Author: {book.author_name}</p>

          <p>
            Available:
            {book.available ? " Yes" : " No"}
          </p>

          {book.available && (
            <button onClick={() => borrowBook(book.id)}>Borrow</button>
          )}

          <button onClick={() => deleteBook(book.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Books;