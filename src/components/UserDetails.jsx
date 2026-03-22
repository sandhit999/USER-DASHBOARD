import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/userDetails.css";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <h2>Loading...</h2>;

  return (
    <div className="user-details">
      <h2>User Details</h2>

      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>

      <h3>Address</h3>
      <p>{user.address.street}, {user.address.suite}</p>
      <p>{user.address.city} - {user.address.zipcode}</p>

      <h3>Company</h3>
      <p><strong>{user.company.name}</strong></p>
      <p>{user.company.catchPhrase}</p>
      <p>{user.company.bs}</p>
    </div>
  );
};

export default UserDetails;