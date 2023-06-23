const getUsers = async (setUsers) => {
   try {
      const data = await fetch("https://test-api-xbl0.onrender.com/users");
      const allUsers = await data.json();
      setUsers(allUsers);
      return await allUsers;
   } catch (error) {
      console.log(error.message);
   }
};

getUsers();

export default getUsers;
