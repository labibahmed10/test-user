import Swal from "sweetalert2";
import getUsers from "./getUsers";

const postUserInfo = async (userData, update, isUpdate, setUsers, setId, setUserInfo) => {
   const data = await fetch("https://test-api-xbl0.onrender.com/users", {
      method: "POST",
      headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
   });
   const result = await data.json();

   if (result?.id > 0) {
      Swal.fire({
         title: "Would you like to change your information now!",
         icon: "warning",
         showCancelButton: true,
         cancelButtonText: "Yes, Edit now!",
         confirmButtonColor: "#d22",
         cancelButtonColor: "#3085d6",
         confirmButtonText: "No, Not now!",
      }).then((result) => {
         //
         if (!result.isConfirmed) {
            isUpdate(!update);

            Promise.resolve(getUsers(setUsers)).then((data) => {
               const updatingUser = data?.find((user) => user.id === userData.id);
               setId(updatingUser?.id);
            });
         }

         if (result.isConfirmed) {
            setUserInfo({
               name: "",
               sector: "",
               agreed: false,
               id: 0,
            });

            Swal.fire({
               title: "User post is done!",
               icon: "success",
               confirmButtonText: "Cool!",
            });
         }
      });
   }
};

export default postUserInfo;
