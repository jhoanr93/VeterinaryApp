import {useState, useEffect} from "react"

const Form = () => {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [discharge, setDischarge] = useState('');
  const [symptom, setSympton] = useState('');

  const handleSubmit = () => {
    e.preventDefault();
    console.log('Send form')
  }

  return (
    <div className="md:w-1/2 lg:w2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Follow Patient</h2>

        <p className="text-lg mt-5 text-center mb-10"> Añade pacientes y {''}
        <span className="font-bold text-indigo-600 text-lg"></span></p>

        <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-gray uppercase font-bold" htmlFor="pet">
              Pet's Name
            </label>
            <input 
              id="pet"
              type="text"
              placeholder="pet name" 
              className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
              value={name}
              onChange={(e)=> setName(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray uppercase font-bold" htmlFor="owner">
              Owner's Name
            </label>
            <input 
              id="owner"
              type="text"
              placeholder="Owner's Name" 
              className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
              value={owner}
              onChange={(e)=> setOwner(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray uppercase font-bold" htmlFor="email">
              Email
            </label>
            <input 
              id="email"
              type="email"
              placeholder="email's owner" 
              className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray uppercase font-bold mt-5" htmlFor="discharge">
              Discharge
            </label>
            <input 
              id="discharge"
              type="date"              
              className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
              value={discharge}
              onChange={(e)=> setDischarge(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray uppercase font-bold mt-5" htmlFor="email">
              Symptom
            </label>
            <textarea
             id="symptom"
             className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
             placeholder="Describe symptom"
             value={symptom}
             onChange={(e)=> setSympton(e.target.value)}>
              
            </textarea>
          </div>

          <input type="submit"
          className="bg-indigo-600 w-full p-3 text-white upper-case font-wold hover:bg-indigo-700 cursor-pointer transition-all mt-5 rounded-full"
          value="Add patient" />

        </form>
    </div>

  )
}

export default Form