import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.css";
import { Delete } from "@material-ui/icons";
import Update from "./Actions/Update";
import Create from "./Actions/Create";
import View from "./Actions/View";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {user && <Route path="/" exact element={<Main />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/update" exact element={<Update />} />
      <Route path="/create" exact element={<Create />} />
      {/* <Route path="/view" exact element={<View />} /> */}
      <Route path="/view/:_id" element={<View />} />
    </Routes>
  );
}

export default App;
