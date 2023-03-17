import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./routes/layout/layout.route";
import Header from "./routes/header/header.route";
import Contact from "./routes/contact/contact.route";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Header />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
