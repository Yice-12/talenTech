import "./App.css";
import { Navbar } from "./components/Navbar";
import gitHubIcon from "./assets/images/github.svg";
import linkedinIcon from "./assets/images/linkedin.svg";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Principal from "./pages/Principal";
import { Link, Route, Routes } from "react-router-dom";

const icons = [
  {
    id: "github",
    icon: gitHubIcon,
  },
  {
    id: "linkedin",
    icon: linkedinIcon,
  },
];

function App() {
  // const contexto = useContext(MyContext);

  // const articulos = [
  //   {
  //     nombre: "pajarito",
  //     description: "Plumaje azul",
  //     price: 100000,
  //     img: pajaro,
  //     disponible: true,
  //   },
  //   {
  //     nombre: "Canario",
  //     description: "Plumaje de colores",
  //     price: 2000,
  //     img: canario,
  //     disponible: false,
  //   },
  // ];

  return (
    <>
      <Navbar icons={icons} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to={"/experience"}>Experiencia</Link>
        <Link to={"/contact"}>Contacto</Link>
        <Link to={"/principal"}>Principal</Link>
      </div>
      <h2 style={{ textAlign: "center", paddingTop: "20px" }}>
        Productos Higher order component{" "}
      </h2>

      {/* <UserList dataList={products} /> */}

      {/* <Card articulo={articulo2} /> */}
      {/* <Iteracion /> */}
      {/* {array.map((saludo) => (
        <Saludo saludo={saludo} />
      ))} */}
      {/* <Eventos /> */}

      <Routes>
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/principal" element={<Principal />} />
      </Routes>
    </>
  );
}

export default App;
