import React from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';

const SocialLogin = () => {
    return (
        <div>
            <div className='flex items-center justify-center my-6'>
                <div className=' bg-red-300 w-100 h-1'></div>
                <div className='mx-2 text-xl font-bold'>or</div>
                <div className=' bg-red-300 w-100 h-1'></div>
            </div>

            <div>
                <button className='w-50 block p-2 rounded-lg hover:bg-orange-500 font-bold mx-auto text-white bg-blue-400'>
                    <div className="flex items-center justify-center">
                        <img src={google} alt="" />
                        <span className='mx-2'>Google Sign in</span>
                    </div>
                </button>

                <button className='w-50 mt-2 block p-2 rounded-lg hover:bg-orange-500 font-bold mx-auto text-white bg-blue-400'>
                    <div className="flex items-center justify-center">
                        <img style={{ width: '20px' }} src={facebook} alt="" />
                        <span className='mx-2'>Facebook Sign in</span>
                    </div>
                </button>

                <button className='w-50 mt-2 block p-2 rounded-lg hover:bg-orange-500 font-bold mx-auto text-white bg-blue-400'>
                    <div className="flex items-center justify-center">
                        <img src={github} alt="" />
                        <span className='mx-2'>Github Sign in</span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;