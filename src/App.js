import "./App.css";
import ListUser from "./components/ListUser";
import Login from "./components/login";
import DropdownList from "./components/modal";
import { Button } from "react-bootstrap";
import React from "react";

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      {/* <Login /> */}
      <ListUser />
    </div>
  );
}

export default App;
