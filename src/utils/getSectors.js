const getSectors = async (setSectors) => {
   try {
      const data = await fetch("https://test-api-xbl0.onrender.com/sectors");
      const allSectors = await data.json();
      setSectors(allSectors);
   } catch (error) {
      console.log(error.message);
   }
};

export default getSectors;
