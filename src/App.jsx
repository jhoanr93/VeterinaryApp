import Header from "./components/Header"
import Form from "./components/Form"
import { PatientList } from "./components/PatientList"
import { useState } from "react"

function App() {

  const [patientVar, setPatient] = useState([]);
  const [patientOnly, setPatientOnly] = useState({});

  return (
    <div className="container mx-5 mt-20">
      <Header

      />
      <div className="mt-12 md:flex mx-5">
        <Form
        patientProp = {patientVar}
        setPatient = {setPatient}
        patientOnly = {patientOnly}
        setPatientOnly ={setPatientOnly}
        />
        <PatientList
          patientProp = {patientVar}
          setPatientOnly ={setPatientOnly}
        />
      </div>
      
    </div>
  )
}

export default App
