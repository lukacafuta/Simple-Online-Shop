// import { useNavigate } from "react-router-dom";
// import { apiUser } from "../common/api";
// import { useState } from "react";

// export default function Registration() {
//   //state variables to manage from inputs and registration
//   const [email, setEmail] = useState("");
//   const [codeSent, setCodeSent] = useState(false);
//   const [code, setCode] = useState("");
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   const navigate = useNavigate();

//   const handleCodeRequest = async (e) => {
//     e.preventDefault();
//     console.log("log run", e);
//     try {
//       const res = await apiUser.post("auth/registration/", { email });
//       // console.log(res);
//       setCodeSent(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleRegisterSubmit = async (e) => {
//     // console.log(codeSent);
//     // console.log(email, userName, code, password);
//     e.preventDefault();
//     // console.log("log run", e);
//     try {
//       const res = await apiUser.patch("/auth/registration/validation/", {
//         email: email,
//         username: userName,
//         code: code,
//         password: password,
//         password_repeat: password,
//         first_name: firstName,
//         last_name: lastName,
//       });
//       console.log(res);
//       navigate("/login");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="page-centered">
//       <h1>Registration</h1>
//     </div>
//   );
// }
