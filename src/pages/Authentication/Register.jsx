import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link,  useNavigate } from 'react-router-dom'
import { db } from '../../firebaseConfig'
import { collection, addDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";


const schema = yup.object().shape({
    name: yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
    email: yup.string().required('Email is required').email('Invalid email') .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Enter a valid email address'
    ),
    college: yup.string().required('Select college'),
    password: yup.string().required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
    ),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm your password'),
})
const Register = () => {

   
      const {
          register,
          handleSubmit,
          formState: { errors }
        } = useForm({
          resolver: yupResolver(schema)
      })


      const [loading, setLoading] = useState(false);

      const onSubmit = async (data) => {
          setLoading(true)
        try{
          const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);

          await addDoc(collection(db, "users"), {
            name: data.name,
            email: data.email,
            college: data.college,
            password: data.password,
          });
          alert("Registration successful");
          useNavigate('/login')
        } catch (error) {
          if (error.code === 'auth/email-already-in-use') {
              alert("This email is already in use.");
          }
          else{
              alert("An error occurred. Please try again.");
          }
        }finally{
          setLoading(false)
        }
        }
       
     
      
    
      const [showPassword, setShowPassword] = useState(false);
      const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className='bg-deepBlue w-full min-h-screen'>
      <Link className='font-pacifico text-1xl text-white  inline-flex py-5 px-2  cursor-pointer' to='/' >Electra  <span className='text-yellow-500'>Vote</span> </Link>
       <div className="max-w-md lg:max-w-lg  mx-auto p-5 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        {/* Name Field */}
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            {...register('name')}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Your full name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            {...register('email')}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="you@example.com"
            autoComplete='email'
            
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        
        <div>
          <label className="block mb-1 font-medium">College</label>
          <select {...register('college')} name="college" id="College" className='w-full border border-gray-300 p-2 rounded ' >
            <option value=""  disabled selected> Please select</option>
            <option value="College of Science">College of Science</option>
            <option value="College of Humanities">College of Humanities</option>
            <option value="College of Engineering">College of Engineering</option>
            <option value="College of Health Science">College of Health Science</option>
            <option value="College of Agriculture and Natural Resource">College of Agriculture and Natural Resource</option>
          </select>
          {errors.college && <p className="text-red-500 text-sm mt-1">{errors.college.message}</p>}
        </div>

        {/* Password Field */}
        <div className='relative'>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type={showPassword? 'text' : 'password'}
            {...register('password')}
            className="w-full border border-gray-300 p-2 rounded relative"
            placeholder="Create a password"
           
          />
          <span onClick={() => setShowPassword(!showPassword)} className='absolute right-0  px-4 mt-3 text-md cursor-pointer text-sm text-gray-600'>
            {showPassword? <i className="fa-solid fa-eye"></i> :<i className="fa-solid fa-eye-slash"></i>}
          </span>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

        {/* Confirm Password Field */}
        <div className='relative'>
          <label className="block mb-1 font-medium ">Confirm Password</label>
          <input
            type={showConfirmPassword? 'text' : 'password'}
            {...register('confirmPassword')}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Confirm your password"
          />
           <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className='absolute right-0  px-4 mt-3 text-md cursor-pointer text-sm text-gray-600'>
            {showConfirmPassword? <i className="fa-solid fa-eye"></i> :<i className="fa-solid fa-eye-slash"></i>}
          </span>
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit"   className={`w-full  text-white py-2 rounded transition ${loading? 'cursor-not-allowed bg-green-300' : 'cursor-pointer bg-green-600 hover:bg-green-700 '}`}>
          {loading? 'Registering' : 'Register'}
        </button>
        <p>Already have an account? <span ><Link to="/login" className='text-blue-700 hover:text-red-600'>Login</Link></span></p>
      </form>
    </div>
    </div>
  )
}

export default Register
