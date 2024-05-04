import { Formik, Form, Field, ErrorMessage } from 'formik';
import Image from './Image'
import signInPic from '../../assets/Images/signIn.png'
import { NavLink, useNavigate } from 'react-router-dom';
import '../../cssfiles/signInForm.css'
import * as Yup from 'yup'
import { getUserData } from '../../services/usersServices';
import { useContext } from 'react';
import { logInData } from '../../App';
import Swal from 'sweetalert2'

const SignInForm = () => {
  const navigate = useNavigate()
  const {setLogedInUser} = useContext(logInData)

  
  return (
    <div className='w-[30%] sm:w-[75%] md:w-[75%] p-2 rounded sm:mt-[10%] md:mt-[60%] shadow-[0px_10px_15px_0px_rgba(100,116,139,1)] ' >
       <Formik className='w-full'
              initialValues={{email : '' , password : ''}}
              validationSchema={Yup.object({
                email:Yup.string().email('Invalid email address').required('Enter your email please'),
                password : Yup.string()
                              .min(8,'Must be 8 characters or more')
                              .max(20,'Must be 20 characters or less')
                              .required('Enter your password please')
              })}
              onSubmit={async(values,{setFieldError})=>{
                const userData = await getUserData(values.email,values.password)//get email and pass and return the user
                  if(userData?.data){
                    Swal.fire({//sweet alert to welcome the user
                      position: "center",
                      width: 300,
                      imageHeight: 200,
                      icon: "success",
                      title: `welcome ${userData?.data?.name}`,
                      showConfirmButton: false,
                      timer: 1500
                    });
                    setLogedInUser(userData?.data)
                    localStorage.setItem('user_data',JSON.stringify(userData?.data))
                    navigate('/')
                  }else{
                    Swal.fire({//sweet alert error to sign in the user
                      position: "center",
                      icon: "error",
                      title: `email or password is not correct!!!`,
                      showConfirmButton: false,
                      timer: 1800
                    });
                  }
              }}
       >
         {/* {({ isSubmitting }) => ( */}
           <Form className='flex flex-col gap-y-4 items-center w-full'>

            <div className='flex flex-col gap-y-1 items-center'>
                <Image src={signInPic} width={'70px'} height={'70px'}/>
                <span className='text-orange-400 text-sm font-semibold'>Sign In</span>
            </div>

            <div className='flex flex-col w-full px-3 gap-y-2'>
              <label htmlFor="email">Email :</label>
              <Field
              className='outline-none border border-gray-300 rounded pl-2 w-full hover:bg-slate-100'
              type="email"
              name="email"
              placeholder="Enter your email address"
              />
              <ErrorMessage name="email" render={(msg)=>(<div className='text-red-600'>{msg}</div>)} />
            </div>

            <div className='flex flex-col w-full px-3 gap-y-2'>
              <label htmlFor="password">Password :</label>
              <Field
              className='outline-none border border-gray-300 rounded pl-2 w-full hover:bg-slate-100' 
                  type="password" 
                  name="password"
                  placeholder="Enter your password"
              />
              <ErrorMessage name="password" component="div" />
              <a className='text-xs text-orange-500 '>Forgot password?</a>
            </div>

            <div className=' flex flex-col items-center w-full my-2 px-2 gap-y-2'>
              {/* <button type="submit" disabled={isSubmitting} className='relative btn3 border border-orange-500 rounded tracking-wider leading-none'>
                <span className="absolute inset-0 bg-orange-500 rounded"></span>
                <div className="relative p-2 bg-white rounded">
                  Submit        
                </div>
              </button> */}
              {/* <Link type='submit' to={'/'} className={'w-[50%] '}> */}
                <button type='submit' className="group w-[50%] flex justify-center py-1 relative border border-slate-300 overflow-hidden rounded-lg bg-white text-lg shadow">
                  <div className="absolute inset-0 w-2 bg-orange-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-orange-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span className="relative text-orange-400 group-hover:text-white text-sm">Submit</span>
                </button>
              <NavLink to={'/SignUp'} className={'w-[50%]'}>
                <button className="group w-full flex justify-center py-1 relative border border-slate-300 overflow-hidden rounded-lg bg-white text-lg shadow">
                  <div className="absolute inset-0 w-2 bg-orange-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-orange-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span className="relative text-orange-400 group-hover:text-white text-sm">Create an account</span>
                </button>              
              </NavLink>
            </div>
           </Form>
        {/*  )} */}
       </Formik>
   </div>
  )
}

export default SignInForm

// import React from 'react'
// import { Link, NavLink,Navigate, useNavigate } from 'react-router-dom'
// import { Formik, Form, Field, ErrorMessage, validateYupSchema } from 'formik';
// import * as Yup from 'yup';
// import Image from './Image';
// import '../../cssfiles/SignIn.css'
// import { getUsers } from '../../servicies/productsServicies';
// const SignIn = () => {
//   const navigate=useNavigate()
//   var validationSchema=Yup.object().shape({
//     // firstName: Yup.string()
//     //   .max(15, 'Must be 15 characters or less')
//     //   .required('Required'),
//     email: Yup.string().email('Invalid email address').required('Required'),
//     password: Yup.string()
//       .min(8,'Must be 8 characters or more')
//       .max(20, 'Must be 20 characters or less')
//       .required('Required')
//   })
//   return (
//     <div className='w-[25%] mt-2'>
//      <Formik 
      
//       initialValues={{email: '',password:'' }}
     
//       onSubmit={(values, { setSubmitting }) => {
//         // setTimeout(() => {
//         //   alert(JSON.stringify(values, null, 2));
//         //   setSubmitting(false);
//         // }, 400);
//         getUsers().then(result=>{
          

//           result.data.map(user=>{
//             if (user.email === values.email) {
//               if (user.password === values.password) {
//                 alert("login successfully")
//                 navigate("/")
//               }else{
//                validationSchema=Yup.object().shape({
//                   // firstName: Yup.string()
//                   //   .max(15, 'Must be 15 characters or less')
//                   //   .required('Required'),
        
//                   password: Yup.string().required('Password is wrong')
//                 })
//               }
              
//             }else if(values.email !== ""){
//               validationSchema=Yup.object().shape({
//                 // firstName: Yup.string()
//                 //   .max(15, 'Must be 15 characters or less')
//                 //   .required('Required'),
      
//                 email: Yup.string().required('email is wrong')
//               })
//             }

//           })
//         })
//         .catch(err =>console.log(err))
        
//         setSubmitting(false);
//       }}

//        validationSchema={validationSchema}
//     >
//       <Form className='flex flex-col items-center p-3 gap-y-10 w-full shadow-xl shadow-orange-500 rounded-md'>
      
//         <div className='flex justify-center items-center'>
//           <Image src={require("../../assets/images/userDefultImg.png")} width={"90px"} height={"140px"}/>
//         </div>

//         <div className='flex flex-col px-2 gap-y-5 w-full'>
//          <div className='flex flex-col gap-y-2 w-full' >
//           <label htmlFor="email">Email : </label>
//           <div className='flex gap-x-2 w-full'>
//             <Field name="email" type="email" placeholder="Enter Your Email" className="outline-none border border-gray-300 rounded-sm pl-2 w-full"/>
//             <ErrorMessage name="email" render={(msg)=>(<div className='text-red-600 text-xs'>{msg}</div>)}/>
//           </div>
          
//          </div>

//          <div className='flex flex-col gap-y-2 w-full'>
//           <label htmlFor="password">Password : </label>
//           <div className='flex gap-x-2 w-full'>
//             <Field name="password" type="password" placeholder="Enter Your Password" className="outline-none border border-gray-300 rounded-sm pl-2 w-full"/>
//             <ErrorMessage name="password" render={(msg)=>(<div className='text-red-600 text-xs'>{msg}</div>)}/>
            
//           </div>
//           <a className='text-xs text-orange-500'>Forgote Password? </a>
//          </div>
//         </div>

//         <div className='flex flex-col items-center w-full gap-y-2'>
//          {/* <NavLink to="/" className={"w-full flex justify-center items-center"}>
            
//         </NavLink> */}
//            <button type="submit" className="btn2 text-md rounded-md w-[50%] p-2 relative border border-gray-300 text-orange-500 leading-none overflow-hidden hover:text-white">
//              <span className="absolute inset-0 bg-orange-500"></span>
//              <span className="absolute text-md inset-0 flex justify-center items-center"> Sign in </span>
//              Sign in                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
//            </button>
//            <NavLink to="/register" className={"w-full flex justify-center items-center"}>
//            <button type="submit" className="btn2 text-md rounded-md w-[50%] p-2 bg-gradient-to-r from-white to-orange-200 relative border border-orange-500 text-orange-500 leading-none overflow-hidden hover:text-white">
//              <span className="absolute inset-0 bg-white"></span>
//              <span className="absolute text-md inset-0 flex justify-center items-center text-orange-500"> Create Account </span>
//              Create Account                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
//           </button> 
//            </NavLink>
             
    
         
//         </div>
//       </Form>
//      </Formik>
//     </div>
//   )
// }

// export default SignIn