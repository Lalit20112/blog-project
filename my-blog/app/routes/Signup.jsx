import React,{useState} from 'react';
import {useNavigation} from "react-router"
import { json } from 'stream/consumers';
// import { Link } from 'react-router';


const Signup = () => {
  const navigate = useNavigation()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  console.log(name,email,password)

  async function signup(e){
    e.preventDefault()
    if(!name || !email || !password){
      alert("Name,Email or Password is empty!")
      return null 
    }
    try{
      const response = await fetch("http://localhost:8080/auth/signup",{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({name:name, email:email, password:password})
      })
      const data = await response.json()
      if(response.ok){
        console.log("user created", data)
      }
      else{
        console.error("Signup failed",data.message)
      }

      
      console.log(data,"dagta")
      console.log(response,"resopose")
    }catch(error){console.log(error)}
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create an Account</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="John Doe"
              name= "name"
              value={name}
              onChange={(e) => setName(e.target.value)}


            
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
               name= "email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}

            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="••••••••"
              name= "password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}

            />
          </div>
          <button
            onClick={signup}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          {/* <Link to="/login" className="text-indigo-600 hover:underline">
            Log in
          </Link> */}
          <a href="/" className="text-indigo-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;