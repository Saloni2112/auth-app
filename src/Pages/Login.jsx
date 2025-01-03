// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Loading from "../components/Loading";
// import { toast } from "react-toastify";

// const Login = () => {
//   const { user, isLoading, isSuccess, isError, message } = useSelector(
//     (state) => state.auth
//   );

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (user) {
//       navigate("/");
//     }

//     if (isError && message) {
//       toast.error(message);
//     }
//   }, [user, isSuccess, isError, message]);

//   if (isLoading) {
//     return <Loading />;
//   }

//   return (
//     <>
//       <h1 className="display-1 text-center mb-4">Login Here</h1>
//       <div className="card p-3 rounded-0 shadow-lg">
//         <form>
//           <input
//             type="email"
//             placeholder="Enter Email"
//             className="my-2 form-control rounded-0"
//           />
//           <input
//             type="password"
//             placeholder="Enter Password"
//             className="my-2 form-control rounded-0"
//           />
//           <button className="btn btn-success rounded-0 w-100">Login</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Login;
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'
import { toast } from 'react-toastify'
import { loginUser } from '../features/auth/authSlice'

const Login = () => {
const {user , isLoading , isSuccess , isError , message} = useSelector((state) => state.auth)
const navigate = useNavigate()
const dispatch = useDispatch()


const [formData , setFormData] = useState({
 
  email: "",
  password: "",
  
});

const { email , password} = formData;

const handleChange = e => {
  setFormData({
    ...formData,
    [e.target.name] : e.target.value,
  })
}

const handleSubmit = e => {
  e.preventDefault()
 dispatch(loginUser(formData))
}


useEffect(()=>{
  if(user){
    navigate("/")
  }

  if (isError && message) {
    toast.error(message);
  }

},[user ,isError , isSuccess , message]);

if(isLoading){
  return(<Loading/>);
}

  return (
    <>
    <h1 className="display-1 text-center mb-4">Login Here</h1>
    <div className="card p-3 rounded-0 shadow-lg">
      <form onSubmit={handleSubmit}>
       
        <input
          type="email"
          placeholder="Enter Email"
          className="my-2 form-control rounded-0"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="my-2 form-control rounded-0"
          name="password"
          value={password}
          onChange={handleChange}
        />
       
        <button className="btn btn-success rounded-0 w-100">Login</button>
      </form>
    </div>
  </>
  )
}

export default Login
