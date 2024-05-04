import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup';
import React from 'react'
import Image from './Image'
import { useNavigate } from 'react-router-dom'
import signInPic from '../../assets/Images/signIn.png'
import { createUser } from '../../services/usersServices'
import axios from 'axios';


const Register = () => {
    const navigate = useNavigate()
  return (
        <div className='w-[30%] sm:w-[75%] md:w-[75%] p-2 rounded sm:mt-[80%] md:mt-[65%] shadow-[0px_10px_15px_0px_rgba(100,116,139,1)] ' >
       <Formik className='w-full'
            initialValues={{name:'',family:'',phone:'',address:'',email: '',password:'',copyPassword:'',basketList:[],wishList:[],rateStars:[] }}
            validationSchema={Yup.object({
                name:Yup.string().required('Enter your name please'),
                family:Yup.string().required('Enter your family please'),
                phone:Yup.number().nullable(),
                // phone:Yup.number().required('Enter your phone number please'),
                address:Yup.string().required('Enter your address please'),
                email: Yup.string().email('Invalid email address').required('Enter your email please')
                .test('Unique-Email', 'Email already exist', // <- key, message
                (value)=> {
                    return new Promise((resolve, reject) => {
                        axios.get(`http://localhost:9000/users`)
                            .then((res) => {
                              const existEmail = res?.data?.find(item=> item.email === value)
                              if (existEmail) {
                                resolve(false)
                              } else {
                                resolve(true)
                              }
                            })
                            .catch((error) => {
                                console.log('err ', error);
                            })
                    })
                }
            )
                ,
                password: Yup.string()
                    .min(8,'Must be 8 characters or more')
                    .max(20, 'Must be 20 characters or less')
                    .required('Enter your password please'),
                copyPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Password is not match')
            })}
            onSubmit={(values, { setSubmitting }) => {
              console.log('values : ',values);
              navigate('/signIn')
              createUser(values)
              setSubmitting(false);
            }}

       >
         {/* {({ isSubmitting }) => ( */}
           <Form className='flex flex-col gap-y-1 items-center w-full'>

            <div className='flex flex-col gap-y-1 items-center'>
                <Image src={signInPic} width={'70px'} height={'70px'}/>
                <span className='text-orange-400 text-sm font-semibold'>Sign Up</span>
            </div>
            <div className='flex flex-col w-full px-3'>
              <label className='text-sm' htmlFor="name">First Name :</label>
              <Field
                className='firstName outline-none border border-gray-300 rounded pl-2 w-full hover:bg-slate-100'
                type="text"
                name="name"
                placeholder="Enter your first name"
              />
              <ErrorMessage 
                name="name" 
                render={(msg) => (<div className="text-red-600">{msg}</div>)}
                // render={(msg) => (//this for showing errors popup after an error
                //   <Tooltip  anchorSelect=".firstName" place="right-start" style={{backgroundColor : '#E0E0E0', color : "#FF0000", fontWeight: 700}}>
                //   {msg}
                //   </Tooltip>)}
              />
            </div>

            <div className='flex flex-col w-full px-3'>
              <label className='text-sm' htmlFor="family">last Name :</label>
              <Field
                className='outline-none border border-gray-300 rounded pl-2 w-full hover:bg-slate-100'
                type="text"
                name="family"
                placeholder="Enter your last name"
              />
              <ErrorMessage 
                name="family" 
                render={(msg) => (<div className="text-red-600">{msg}</div>)}
              />
            </div>

            <div className='flex flex-col w-full px-3'>
              <label className='text-sm' htmlFor="phone">Phone Number :</label>
              <Field
                className='outline-none border border-gray-300 rounded pl-2 w-full hover:bg-slate-100'
                type="text"
                name="phone"
                placeholder="Enter your phone number"
              />
              <ErrorMessage 
                name="phone" 
                render={(msg) => (<div className="text-red-600">{msg}</div>)}
              />
            </div>

            <div className='flex flex-col w-full px-3'>
              <label className='text-sm' htmlFor="address">address :</label>
              <Field
                className='outline-none border border-gray-300 rounded pl-2 w-full hover:bg-slate-100'
                type="text"
                name="address"
                placeholder="Enter your address"
              />
              <ErrorMessage 
                name="address" 
                render={(msg) => (<div className="text-red-600">{msg}</div>)}
              />
            </div>

            <div className='flex flex-col w-full px-3'>
              <label className='text-sm' htmlFor="email">Email :</label>
              <Field
                className='outline-none border border-gray-300 rounded pl-2 w-full hover:bg-slate-100'
                type="email"
                name="email"
                placeholder="Enter your email address"
              />
              <ErrorMessage 
                name="email" 
                render={(msg) => (<div className="text-red-600">{msg}</div>)}
              />
            </div>

            <div className='flex flex-col w-full px-3'>
              <label className='text-sm' htmlFor="password">Password :</label>
              <Field
                className='outline-none border border-gray-300 rounded pl-2 w-full hover:bg-slate-100' 
                type="password" 
                name="password"
                placeholder="Enter your password"
              />
              <ErrorMessage 
                name="password" 
                render={(msg) => (<div className="text-red-600">{msg}</div>)}
              />
            </div>

            <div className='flex flex-col w-full px-3'>
              <label className='text-sm' htmlFor="copyPassword">Confirm Password :</label>
              <Field
                className='outline-none border border-gray-300 rounded pl-2 w-full hover:bg-slate-100' 
                type="password" 
                name="copyPassword"
                placeholder="Enter your password again"
              />
              <ErrorMessage 
                name="copyPassword" 
                render={(msg) => (<div className="text-red-600">{msg}</div>)}
              />
            </div>

            <div className=' flex flex-col items-center w-full my-2 px-2 gap-y-1'>
              {/* <NavLink className={'w-[50%] '}> */}
                <button type="submit" className="group w-[50%] flex justify-center py-1 relative border border-slate-300 overflow-hidden rounded-lg bg-white text-lg shadow">
                  <div className="absolute inset-0 w-2 bg-orange-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-orange-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span className="relative text-orange-400 group-hover:text-white text-sm">Create</span>
                </button>
              {/* </NavLink> */}
            </div>
           </Form>
         {/* )} */}
       </Formik>
   </div>
  )
}

export default Register


