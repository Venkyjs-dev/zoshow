// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
// import ErrorPage from "./pages/ErrorPage";
// import Home from "./pages/Home";
// // import About from "./pages/About";
// // import Services from "./pages/Services";
// // import Contact from "./pages/Contact";

// import InventoryBrowser from "./pages/InventoryBrowser";

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         {/* <Route index element={<Home />} /> */}
//         {/* <Route path="about" element={<About />} />
//           <Route path="services" element={<Services />} />*/}
//         <Route path="*" element={<ErrorPage />} />
//         <Route path="inventory" element={<InventoryBrowser />} />
//       </Route>
//     </Routes>
//   );
// }

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import InventoryBrowser from "./pages/InventoryBrowser"; // <--- Import is key
import BookingPage from "./pages/BookingPage";

export default function App() {
  return (
    <Routes>
      {/* The Layout wraps everything */}
      <Route path="/" element={<Layout />}></Route>

      <Route path="inventory" element={<InventoryBrowser />} />

      <Route path="booking" element={<BookingPage />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
