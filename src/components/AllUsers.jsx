import axios from "axios";
import { useEffect, useState } from "react";
import UserTable from "./UserTable";

const AllUsers = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );
        const data = res.data;
        setIsLoading(false);
        setUserData(data);
        console.log(data);
      } catch (error) {
        console.log(`we have failed to fetch the data ,error is ${error}`);
        setIsError(error);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading the data....</div>;
  }

  if (isError) {
    return (
      <div>
        <h3>something went wrong, we are not able to fetch the data</h3>
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>USER DASHBOARD</h1>
      <UserTable data={userData} />
    </div>
  );
};

export default AllUsers;
