import Swal from "sweetalert2";

const postUserInfo = async (userInfo, setUserInfo) => {
   const data = await fetch("http://localhost:9000/users", {
      method: "POST",
      headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
   });
   const result = await data.json();

   if (result?.id > 0) {
      setUserInfo({
         name: "",
         sector: "",
         agreed: false,
      });

      Swal.fire({
         title: "Success",
         text: "User post is done!",
         icon: "success",
         confirmButtonText: "Cool!",
      });
   }
};

export default postUserInfo;
