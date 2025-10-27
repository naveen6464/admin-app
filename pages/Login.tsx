import React from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const Login = ({ onLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-lg">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-10 h-10">
                <svg viewBox="0 0 102 102" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="grad1_login">
                            <stop stopColor="#A5F3FC" offset="0%"></stop>
                            <stop stopColor="#38BDF8" offset="100%"></stop>
                        </linearGradient>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="grad2_login">
                            <stop stopColor="#818CF8" offset="0%"></stop>
                            <stop stopColor="#4F46E5" offset="100%"></stop>
                        </linearGradient>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="grad3_login">
                            <stop stopColor="#BEF264" offset="0%"></stop>
                            <stop stopColor="#4ADE80" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g transform="translate(1.000000, 1.000000)">
                            <path d="M50,100 C77.6142375,100 100,77.6142375 100,50 C100,22.3857625 77.6142375,0 50,0 C42.541361,0 35.5334314,2.05832608 29.5,5.63229805 C29.5,5.63229805 50,40 50,50 C50,60 29.5,94.367702 29.5,94.367702 C35.5334314,97.9416739 42.541361,100 50,100 Z" fill="url(#grad1_login)"></path>
                            <path d="M29.5,5.63229805 C11.3396695,16.4103348 0,31.8629994 0,50 C0,68.1370006 11.3396695,83.5896652 29.5,94.367702 C29.5,94.367702 50,60 50,50 C50,40 29.5,5.63229805 29.5,5.63229805 Z" fill="url(#grad2_login)"></path>
                            <path d="M29.5,5.63229805 C35.5334314,2.05832608 42.541361,0 50,0 C50,0 50,40 50,50 C50,50 29.5,5.63229805 29.5,5.63229805 Z" fill="url(#grad3_login)"></path>
                        </g>
                    </g>
                </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Tecosoft</h1>
          </div>
          <p className="text-gray-500">Your content, powered by AI.</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <Input id="email" label="Email Address" type="email" placeholder="admin@example.com" required />
          <Input id="password" label="Password" type="password" placeholder="••••••••" required />

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-primary hover:text-primary-hover">
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <Button type="submit" variant="gradient" className="w-full">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
