'use client';
import { GoogleLogin } from '@react-oauth/google';

const Login: React.FC = () => {
    return (
        <div className="flex flex-col h-screen justify-center items-center bg-gradient-to-r from-black to-gray-900">
            <div className="shadow-xl rounded-lg p-8 max-w-sm w-full text-center">
                <h1 className="text-3xl font-bold text-white mb-6">Happening Now.</h1>
                <p className="text-gray-400 mb-4">Please login using your Google account to continue.</p>
                <div className='flex justify-center'>
                    <GoogleLogin
                        onSuccess={(cred) => { console.log(cred); }}
                        onError={() => console.log('Login Failed')}
                        useOneTap
                    />
                </div>
                <p className="mt-6 text-gray-400">Don't have an account? <a href="#" className="text-blue-500 font-semibold hover:underline">Sign up here</a></p>
            </div>
        </div>
    );
}

export default Login;
