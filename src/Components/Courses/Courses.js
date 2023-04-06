import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const allcourse = useLoaderData()


    console.log(allcourse)
    return (
        <div>
            {
                allcourse.map(course =>{
                    return <div>
                        {/* hero */}
                        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={course.picture} className="max-w-80 md:max-w-lg rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{course.coure_name}</h1>
      <p className="py-6">{course.description}</p>
      <h2 className='text-4xl pb-3 font-bold'>price: {course.price} $</h2>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>


                        {/* hero */}
                    </div>
                })

            }
            
        </div>
    );
};

export default Courses;