import React, { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      console.log('Logging in with:', { email, password });
      // Add code here to handle login, like calling an API to verify credentials
    } else {
      console.log('Signing up with:', { email, password, confirmPassword });
      // Add code here to handle signup, such as saving the data in a database
    }
    
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black ">
      <div className=" max-w-md p-6 bg-white rounded-lg shadow-lg h-[40rem]  font-semibold ">
        <h2 className="text-center text-3xl font-bold text-purple-900 mb-11 mt-5 ml-5 mr-5 ">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>

        <form className="space-y-12" onSubmit={handleSubmit}>
        <input
            type="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-14 font-semibold pl-4 text-[20px] outline-purple-900"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-14 font-semibold pl-4 text-[20px] outline-purple-900"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-14 font-semibold pl-4 text-[20px] outline-purple-900"
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full h-14 font-semibold pl-4 text-[20px] outline-purple-900"
            />
          )}
          <button 
            type="submit"
            className="w-full px-4 h-14 py-4 text-white bg-purple-900 hover:bg-purple-900 rounded-2xl"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div className="text-center mt-5 mb-3">
          <p className="text-purple-900 font-bold">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="ml-1 cursor-pointer hover:underline font-bold"
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login

