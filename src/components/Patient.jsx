export const Patient = ({patientProp, setPatientOnly}) => {
  
  const {name, owner, email, discharge, symptom} = patientProp

  return (
    <div className="mt-5 bg-white shadow-md px-5 py-10 rounded-xl mx-5 my-10">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Name: {""}
        <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Owner : {""}
        <span className="font-normal normal-case">{owner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        e-MAIL: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de alta: {""}
        <span className="font-normal normal-case">{discharge}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sympthons: {""}
        <span className="font-normal normal-case">
        {symptom}
        </span>
      </p>

      <div className=" flex justify-between mt-10">
        <button className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-full"
        onClick={() => setPatientOnly(patientProp)}
        >
          Edit
        </button>
        <button className="py-2 px-10 bg-red-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-full">
          Delete
        </button>
      </div>

    </div>
  );
}

    
    
   