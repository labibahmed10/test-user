import Swal from "sweetalert2";

const editUser = async (userData, id, setUserInfo, isUpdate) => {
   const data = await fetch(`http://localhost:9000/users/${id}`, {
      method: "PATCH",
      headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
   });

   const result = await data.json();

   if (result) {
      setUserInfo({
         name: "",
         sector: "",
         agreed: false,
         id: 0,
      });
      isUpdate(false);
      Swal.fire({
         title: "User post Was Updated!",
         icon: "success",
         confirmButtonText: "Cool!",
      });
   }

   return await result;
};

export default editUser;
