import { useEffect, useState } from "react";

function App() {
   const [allSectors, setSectors] = useState([]);
   const [userInfo, setUserInfo] = useState({
      name: "",
      sector: "",
      agreed: false,
   });

   useEffect(() => {
      const getSectors = async () => {
         try {
            const data = await fetch("http://localhost:9000/sectors");
            const allSectors = await data.json();
            setSectors(allSectors);
         } catch (error) {
            console.log(error.message);
         }
      };

      getSectors();
   }, []);

   const handleUserInfo = (e) => {
      setUserInfo({
         ...userInfo,
         [e.target.name]: e.target.name === "agreed" ? !userInfo.agreed : e.target.value,
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      const postData = await fetch("http://localhost:9000/users", {
         method: "POST",
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
         },
         body: JSON.stringify(userInfo),
      });

      await postData.json();
   };

   return (
      <div className="background md:h-screen">
         <section className="md:w-[60rem] md:h-[50rem] mx-auto h-screen mmd:py-32 py-40">
            <h1 className="md:text-4xl text-2xl font-bold text-center text-[#003049]">
               Please enter your name and pick the Sectors you are currently involved in
            </h1>

            <form className="w-full h-full md:mt-20 mt-14" onSubmit={handleSubmit}>
               <div className="md:pl-12 pl-4">
                  <label htmlFor="name" className="md:text-2xl text-lg font-semibold">
                     Name :
                  </label>
                  <input
                     type="text"
                     name="name"
                     id="name"
                     value={userInfo.name}
                     className="md:ml-2 ml-1 border border-slate-300 bg-gray-50 rounded-md focus:outline-0 md:px-3 px-2 md:py-3 py-2 md:w-[45%] text-xl"
                     onChange={handleUserInfo}
                  />
               </div>

               <div className="md:pl-12 pl-4 md:mt-5 mt-4">
                  <label htmlFor="sectors" className="md:text-2xl text-lg font-semibold">
                     Sectors :
                  </label>

                  <select
                     name="sectors"
                     id="sectors"
                     className="md:px-4 px-2 md:py-4 py-3 md:w-[43.5%] w-[73%] border border-slate-300 focus:outline-0 rounded-md bg-gray-50 md:ml-2 ml-1 md:text-xl"
                     value={userInfo.sector}
                     onChange={handleUserInfo}
                  >
                     {allSectors?.map((data, i) => (
                        <optgroup key={i + 5} label={Object.keys(data)}>
                           {Object?.values(data).map((options) =>
                              options?.map((opt, i) => (
                                 <option key={i + 2}>{opt}</option>
                              )),
                           )}
                        </optgroup>
                     ))}
                  </select>
               </div>

               <div className="flex items-center md:pl-12 pl-4 md:mt-5 mt-5">
                  <input
                     type="checkbox"
                     name="agreed"
                     checked={userInfo.agreed}
                     className="md:w-6 w-4 md:h-6 h-4 rounded-full md:mr-3 mr-2"
                     onChange={handleUserInfo}
                  ></input>
                  <label htmlFor="checkbox" className="md:text-2xl text-lg font-semibold">
                     Agree to terms
                  </label>
               </div>

               <input
                  type="submit"
                  value="Save"
                  className="bg-[#003049] text-slate-50 md:text-2xl text-xl md:px-6 px-5 md:py-2 py-1 rounded-full md:mt-8 mt-5 md:ml-12 ml-4 cursor-pointer"
               />
            </form>
         </section>
      </div>
   );
}

export default App;
