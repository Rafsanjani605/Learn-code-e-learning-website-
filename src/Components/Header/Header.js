import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=''>
            {/* login signup */}
            <div className='flex justify-between px-10 items-center h-20 bg-slate-800 text-white'>
                <h1>01700000001</h1>
                <div>
                    <Link to='/login' className='pr-7'>Login</Link>
                    <Link to='/register'>Register</Link>
                    
                </div>
            </div>
            {/* main header */}
            <div className='flex justify-between items-center h-16 bg-white shadow-xl px-10  sticky top-14 w-full z-50'>
                <h1>Learn Code</h1>
                <div>
                    <Link to='/' className='mr-5'>Home</Link>
                    <Link to='/Courses' className='mr-5' >Courses</Link>
                    <Link className='mr-5'>About us</Link>
                    <Link className='mr-5'>Teachers</Link>
                    <Link className='mr-5'>Contact</Link>
                    <Link>My Course</Link>
                </div>

            </div>
            
        </div>
    );
};

export default Header;