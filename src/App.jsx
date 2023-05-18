import { Outlet } from "react-router-dom";
import Header from "./Components/Shared/Header";
import Footer from "./Components/Shared/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <div className="min-h-[calc(100vh-136px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
