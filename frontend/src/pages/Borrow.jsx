import { useEffect, useState } from "react";
import api from "../services/api";

function Borrow() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const token =
        localStorage.getItem("access_token");

      const response = await api.get(
        "borrow/",
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      setRecords(response.data);
    } catch (error) {
      console.log(error);
    }
    };

    const returnBook = async (id) => {
  try {
    const token =
      localStorage.getItem("access_token");

    await api.post(
      `borrow/${id}/return_book/`,
      {},
      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );

    fetchRecords();

  } catch (error) {
    console.log(error);
  }
};

  return (
    <div style={{ padding: "20px" }}>
      <h1>Borrow Records</h1>

      {records.map((record) => (
        <div
          key={record.id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{record.book_title}</h3>

          <p>
            User:
            {record.username}
          </p>

          <p>
            Returned:
            {record.returned ? "Yes" : "No"}
          </p>
          {!record.returned && (
            <button onClick={() => returnBook(record.id)}>Return Book</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Borrow;