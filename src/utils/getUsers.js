const getUsers = async (setUsers) => {
   try {
      const data = await fetch("http://localhost:9000/users");
      const allUsers = await data.json();
      setUsers(allUsers);
      return await allUsers;
   } catch (error) {
      console.log(error.message);
   }
};

getUsers();

export default getUsers;
