import Header from "./components/Header"
import Form from "./components/Form"
import { PatientList } from "./components/PatientList"

function App() {
  return (
    <div className="container mx-5 mt-20">
      <Header/>
      <div className="mt-12 md:flex mx-5">
        <Form/>
        <PatientList/>
      </div>
      
    </div>
  )
}

export default App
