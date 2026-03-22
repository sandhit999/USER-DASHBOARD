import AllUsers from "./components/AllUsers";
import { Routes, Route } from "react-router-dom";
import UserDetails from "./components/UserDetails";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllUsers />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
};

export default App;
