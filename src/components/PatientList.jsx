import {React} from 'react'
import { Patient } from './Patient'

export const PatientList = ({patientProp, setPatientOnly, deletePatient}) => {


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patientProp && patientProp.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Patient List</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Manage your
            <span className="text-indigo-600 font-bold">
              {" "}
              Patients and dates
            </span>
          </p>

          {patientProp.map((patientVarTemp) => (
            <Patient
              key={patientVarTemp.id}
              patientProp={patientVarTemp}
              setPatientOnly={setPatientOnly}
              deletePatient={deletePatient}
            ></Patient>
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No patients</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Start adding patients
            <span className="text-indigo-600 font-bold">
              {" "}
              and it will appear in this zone
            </span>
          </p>
        </>
      )}
    </div>
  );
}
