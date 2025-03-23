import axios from "axios";
import { Loader2 } from "lucide-react";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("");
  const [bio, setBio] = useState("");
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {

    // event.stopPropagation();

    try {
        setLoading(true);
        const { data } = await axios.post('http://localhost:5000/api/auth/signup', {
            fullName,
            email,
            password,
            age,
            profession,
            bio
        })

        console.log(data);

        setLoading(false);
        navigate('/')

    } catch (error) {
        console.log(error);
        
    }


    console.log(data);
  };

  return (
    <>

      {isLoading && (
        <div className="absolute inset-0 w-full h-full bg-black opacity-50">
          <div className="flex justify-center items-center h-full">
            <Loader2 className="animate-spin text-sky-500" />
          </div>
        </div>
      )}

      <div className="flex justify-center items-center mx-auto bg-black">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-purple-400 text-black p-8 rounded-lg shadow-lg w-80 sm:w-96"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Sign Up
          </h2>

          {/* Full Name Field */}
          <div className="mb-1">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              {...register("fullName", { required: "Full Name is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={(e) => setFullName(e.target.value)}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-1">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email",
                },
              })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* {password } */}
          <div className="mb-1">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Age Field */}
          <div className="mb-1">
            <label className="block text-gray-700">Age</label>
            <input
              type="number"
              {...register("age", {
                required: "Age is required",
                min: { value: 0, message: "Give a valide age" },
              })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={(e) => setAge(e.target.value)}
            />
            {errors.age && (
              <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
            )}
          </div>

          <div className="mb-1">
            <label className="block text-gray-700">Profession</label>
            <input
              type="text"
              {...register("profession")}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={(e) => setProfession(e.target.value)}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Bio Field */}
          <div className="mb-1">
            <label className="block text-gray-700">Bio</label>
            <textarea
              {...register("bio")}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={(e) => setBio(e.target.value)}
            />
            {errors.bio && (
              <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
            disabled={isLoading}
          >
            Sign Up
          </button>
          <p className="text-center text-gray-600 mt-4">Already have an account? <a href="/login" className="text-blue-500 hover:underline">Log in</a></p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
