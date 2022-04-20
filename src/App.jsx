import Header from "./components/Header"
import Form from "./components/Form"
import { PatientList } from "./components/PatientList"
import { useState } from "react"
import { useEffect } from "react"

function App() {

  const [patientVar, setPatient] = useState([]);
  const [patientOnly, setPatientOnly] = useState({});
  
  useEffect(() => {
    const getLS = () => {
      const patientsLS = JSON.parse(localStorage.getItem('patients')) ?? [];
      setPatient(patientsLS)
    }
    getLS();
  },[]);

  useEffect(()=>{
    localStorage.setItem('patients', JSON.stringify (patientVar));
  }, [patientVar])

  const deletePatient = (id) =>{
    const updatedPatients = patientVar.filter( patientOnly => patientOnly.id !== id)
    setPatient(updatedPatients)
  }

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
          deletePatient = {deletePatient}
        />
      </div>
      
    </div>
  )
}

export default App
