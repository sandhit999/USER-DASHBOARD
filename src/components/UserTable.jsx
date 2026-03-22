import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/userTable.css";

const UserTable = ({ data }) => {
  const navigate = useNavigate();

  const [filteredData, setFilteredData] = useState([...data]);

  const filterChangeHandler = (e) => {
    const input = e.target.value.toLowerCase();

    const filteredArr = data.filter(
      (user) =>
        user.name.toLowerCase().includes(input) ||
        user.email.toLowerCase().includes(input)
    );

    setFilteredData(filteredArr);
  };

  const ascClickHandler = () => {
    const ascArr = [...filteredData].sort(
      (a, b) => a.name.localeCompare(b.name) || a.email.localeCompare(b.email)
    );
    setFilteredData(ascArr);
  };

  const descClickHandler = () => {
    const descArr = [...filteredData].sort(
      (a, b) => b.name.localeCompare(a.name) || b.email.localeCompare(a.email)
    );
    setFilteredData(descArr);
  };

  return (
    <div className="user-container">
      <span>Search by name / email :</span>
      <input type="text" onChange={filterChangeHandler} />

      <span>Sort :</span>
      <button onClick={ascClickHandler}>↑</button>
      <button onClick={descClickHandler}>↓</button>

      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((user) => (
              <tr
                key={user.id}
                onClick={() => navigate(`/user/${user.id}`)}
                style={{ cursor: "pointer" }}
              >
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.company?.name}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;