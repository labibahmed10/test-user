function App() {
   return (
      <div className="background h-screen">
         <section className="md:w-[60rem] md:h-[50rem] mx-auto h-screen py-32 ">
            <h1 className="text-4xl font-bold text-center text-[#003049]">
               Please enter your name and pick the Sectors you are currently involved in
            </h1>

            <form action="" className="w-full h-full">
               <div className="pl-12">
                  <label htmlFor="name" className="text-2xl font-semibold">
                     Name :
                  </label>
                  <input
                     type="text"
                     name="name"
                     id="name"
                     className="ml-2 border border-slate-300 bg-gray-50 rounded-md focus:outline-0 px-3 py-3 w-[45%] mt-20 text-xl"
                  />
               </div>

               <div className="pl-12 mt-5">
                  <label htmlFor="sectors" className="text-2xl font-semibold">
                     Sectors :
                  </label>

                  <select
                     name="sectors"
                     id="sectors"
                     className="px-4 py-4 w-[43.5%] border border-slate-300 focus:outline-0 rounded-md bg-gray-50 ml-2 text-xl"
                  >
                     <optgroup label="many">Many</optgroup>
                     <option value="">Optisonsa</option>
                     <option value="">Oa</option>
                     <option value="">Optisonsa</option>
                  </select>
               </div>

               <div className="flex items-center pl-12 mt-5">
                  <input
                     id="checkbox"
                     type="checkbox"
                     value=""
                     className="w-6 h-6 rounded-full mr-3"
                  ></input>
                  <label htmlFor="checkbox" className="text-2xl font-semibold">
                     Agree to terms
                  </label>
               </div>

               <input
                  type="submit"
                  value="Save"
                  className="bg-[#003049] text-slate-50 text-2xl px-6 py-2 rounded-full mt-8 ml-12"
               />
            </form>
         </section>
      </div>
   );
}

export default App;
