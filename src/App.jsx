import About from "./About"
import Home from "./Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignUp from "./SignUp"
import Login from "./Login"
import Error from "./Error"
import Nav from "./Nav"
function App() {

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
