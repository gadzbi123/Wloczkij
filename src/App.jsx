import { Route, Routes } from "react-router-dom";
import Contact from "./routes/contact/contact.route";
import Header from "./routes/header/header.route";
import Layout from "./routes/layout/layout.route";
import Shop from "./routes/shop/shop.route";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Header />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shop/*" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
