import NavBar from "./components/NavBar"
import Footer from "./components/footer"
import GroupedTeamMembers from "./pages/TeamMembers"
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NotFound from "./components/NotFound"

function App() {

  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/group-team-members" element={<GroupedTeamMembers />} />
        <Route path="*" element= { <NotFound />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
