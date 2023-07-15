import { useState } from "react";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import store from "./Redux/store";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <Provider store={store}>
      <Navbar setCurrentPage={setCurrentPage}></Navbar>
      {currentPage === "home" ? <Home></Home> : <Cart></Cart>}
    </Provider>
  );
}

export default App;
