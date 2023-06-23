const getSectors = async (setSectors) => {
   try {
      const data = await fetch("http://localhost:9000/sectors");
      const allSectors = await data.json();
      setSectors(allSectors);
   } catch (error) {
      console.log(error.message);
   }
};

getSectors();

export default getSectors;
