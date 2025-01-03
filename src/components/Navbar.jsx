// import React from 'react'
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   const { user } = useSelector((state) => state.auth);
//   return (
   
//     <nav className="navbar bg-dark">
//     <div className="container-fluid">
//       <Link to={"/"}>
//         <span className="navbar-brand mb-0 h1 text-light">Auth App</span>
//       </Link>
//       <span>
//         {user ? (
//           <>
//             <button className="mx-2 btn btn-sm btn-danger rounded-0">
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link
//               to="/login"
//               className="mx-1 btn btn-sm btn-success rounded-0"
//             >
//               Login
//             </Link>
//             <Link
//               to="/register"
//               className="mx-2 btn btn-sm btn-success rounded-0"
//             >
//               Register
//             </Link>
//           </>
//         )}
//       </span>
//     </div>
//   </nav>
//   )
// }
// https://i.pinimg.com/originals/de/80/b8/de80b8abacbbea41f1c90883531d9218.gif

// export default Navbar
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOutUser } from '../features/auth/authSlice';

const Navbar = () => {

  const {user} = useSelector((state) => state.auth)
 
const dispatch = useDispatch()

const handleLogOut = () =>{
  dispatch(logOutUser())
}

  return (
    <nav className="navbar bg-dark">
    <div className="container-fluid">
<Link to={"/"}><span className="navbar-brand mb-0 h1 text-light">Auth app</span></Link>
   <span>
   {
    user ? <>
    <button onClick={handleLogOut} className='mx-2 btn btn-danger btn-sm rounded-1'>LogOut</button>
    </> : <>
    <Link to="/login" className='mx-2 btn btn-success btn-sm rounded-1'>Login</Link>
    <Link to="/register" className='mx-2 btn btn-success btn-sm rounded-1'>Register</Link></>
   }
   </span>
    </div>
  </nav>
  )
}

export default Navbar
