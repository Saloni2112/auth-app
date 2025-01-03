// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Loading from "../components/Loading";
// import { toast } from "react-toastify";

// const Register = () => {
//   const { user, isSuccess, isLoading, isError, message } = useSelector(
//     (state) => state.auth
//   );

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (user && isSuccess) {
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
//       <h1 className="display-1 text-center mb-4">Register Here</h1>
//       <div className="card p-3 rounded-0 shadow-lg">
//         <form>
//           <input
//             type="text"
//             placeholder="Enter Name"
//             className="my-2 form-control rounded-0"
//           />
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
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             className="my-2 form-control rounded-0"
//           />
//           <button className="btn btn-success rounded-0 w-100">Register</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Register;
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import { toast } from 'react-toastify';
import { registerUser } from '../features/auth/authSlice';

const Register = () => {
const dispatch = useDispatch()

  const navigate = useNavigate()


  const {user,isSuccess, isLoading , isError , message} = useSelector((state) => state.auth)

const [formData , setFormData] = useState({
  name: "",
  email: "",
  password: "",
  conformPassword: "",
});

const {name , email , password, conformPassword} = formData;

const handleChange = e => {
  setFormData({
    ...formData,
    [e.target.name] : e.target.value,
  })
}

const handleSubmit = e => {
  e.preventDefault()
  if(password !== conformPassword){
    toast.error('Passwords Not Match!!')
  }else{
    dispatch(registerUser(formData))
}}

useEffect(()=>{
  if(user && isSuccess){
    navigate("/")
  }

if (isError && message) {
  toast(message);
}

},[user , isError , isSuccess , message]);

if (isLoading){
  return <Loading />;
}

  return (
    <>
      <h1 className="display-1 text-center mb-4">Register Here</h1>
      <div className="card p-3 rounded-0 shadow-lg">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            className="my-2 form-control rounded-0"
          name="name"
          value={name}
          onChange={handleChange}
          required
          />
          <input
            type="email"
            placeholder="Enter Email"
            className="my-2 form-control rounded-0"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="my-2 form-control rounded-0"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="my-2 form-control rounded-0"
            name="conformPassword"
            value={conformPassword}
            onChange={handleChange}
            required
          />
          <button className="btn btn-success rounded-0 w-100">Register</button>
        </form>
      </div>
    </>
  )
}

export default Register
