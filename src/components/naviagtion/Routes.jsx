import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Tours from "../tours/Tours";
import Contact from "../contact/Contact";
import SearchResults from "../searchResult/SearchResult";
import SeatAllocation from "../seatAllocation/SeatAllocation";
import PersonalDetails from "../personalDetails/PersonalDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/buses" element={<SearchResults />} />
        <Route path="/seat-allocation" element={<SeatAllocation />} />
        <Route path="/details" element={<PersonalDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
