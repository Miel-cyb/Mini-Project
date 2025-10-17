// LoginForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../firebaseConfig"; 
import { useNavigate } from "react-router-dom";




const schema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required') .matches(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    'Enter a valid email address'
  ),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const Login= () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const navigate = useNavigate();

const onSubmit = async (data) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
    const user = userCredential.user;
    alert("Login successful!");
    navigate("/dashboard"); 
  } catch (error) {
    console.error("Login error:", error);
    alert("Invalid email or password. Please try again.");
  }
};


  return (
    <div className='bg-deepBlue w-full min-h-screen'>
    <Link className='font-pacifico text-1xl text-white inline-flex py-5 px-2 cursor-pointer' to='/' >Electra  <span className='text-yellow-500'>Vote</span> </Link>
    <div className="max-w-md lg:max-w-lg  mx-auto p-5 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            {...register('email')}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="you@example.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

  
        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            {...register('password')}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter your password"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

 
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-400 transition">
          Login
        </button>
        <p>Don't have an account?<span> <Link to="/register" className='text-blue-700 hover:text-red-600'>Register</Link> </span></p>
      </form>
    </div>
    </div>
  );
};

export default Login;
