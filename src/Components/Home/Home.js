import React from 'react';
import  './home.css'
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    
    const  courses = useLoaderData()

    // console.log(courses)
    // console.log(courses.picture)
    return (
        <div>
            <div className='home-bgimg'> 

            <div className='flex justify-end'>
            <div className='h-115 md:w-2/5 bg-black   text-xl font-bold absolute top-56 md:left-2/4 xl:left-2/4 bg-opacity-70'>
                <h1 className='text-amber-600 mt-28 text-2xl font-semibold px-10'>DON’T HAVE SPACE ON </h1>
                <h1 className='text-amber-600 px-10 text-2xl font-semibold '>CAMPUS? LET’S START ONLINE </h1>
                <p className='text-white px-10 text-lg pt-14'>Kun mi la dek  alta, alproksimigxis prenis tamen benos havis zuro la la trankvilan. Ke la tiuj ni boate. Por mejlojn unue la viro. Sursxipe kukoj elsendis mi mi densa boatanoj ni al. Tre tiam al estas da ke ia, atingi sentis mauxron al mi ne, dankecon mi cxion.</p>
                <button className='btn bg-amber-600 mx-10 mt-9'>Find Coureses now</button>
            </div>
            </div>

            </div>

            {/* img end */}
            <div className=''>
                <div className=' bg-skew-y-6 bg-white md:h-80 lg:h-80 items-center text-2xl font-semibold grid grid-cols-12 text-center py-10'>
                    <div className='col-span-12  py-6 sm:col-span-6 md:col-span-3'>
                        <p>Over 40 million</p>
                        <p>Students</p>
                    </div>
                    <div className='col-span-12 py-6 sm:col-span-6 md:col-span-3'>
                        <p>more than 20,000</p>
                        <p>course</p>
                    </div>
                    <div className= 'col-span-12 py-6 sm:col-span-6 md:col-span-3'>
                        <p>Free contact</p>
                        <p>anytime</p>
                    </div>
                    <div className='col-span-12 py-6 sm:col-span-6 md:col-span-3'>
                        <p>learn at your pace</p>
                        <p>On any device</p>
                    </div>

               </div>
            </div>

            {/*  Courses*/}
            <div className='bg-violet-50 py-20'>
                <div className='py-10 text-center'>
                     <h1 className='text-3xl font-bold pb-5'>Our Awesome Courses</h1>
                     <p>Discover your potential with our excellent courses. Learn at your own pace </p>
                     <p>and enhance your skills for a brighter future.</p>
                </div>

{/* mapping */}
               <div className='flex justify-center'>
               <div className='grid  md:grid-cols-12 justify-center gap-6'>
                   {
                    courses.length < 3 ? (
                        <div>
                            
                        </div>

                        
                
                
                        

                    ) : (
                        courses.slice(0,3).map(course=> {
                            return <div className=' md:col-span-6 lg:col-span-4 '>
                                <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={course.picture} /></figure>
                        <div className="card-body">
                        <h2 className="card-title">{course.coure_name}</h2>
                        {
                        course.description.length < 60?(
                        <p>{course.description}</p>
                        
                        )   :  (
                        <p>
                        {course.description.slice(0 , 60)}... <Link>see more</Link>
                        
                        </p>
                        
                        
                        ) 
                        }
                        
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                        </div>
                        </div>
                        </div>
                        
                            
                            </div>
                        })
                        

                    )


                   }
                    

                </div>
                
               </div>
               {/* more courses button */}
               <div className='text-center my-10 '>
                <Link className='px-5 py-3 bg-amber-600 text-white font-bold rounded-lg'>More Classes</Link>

               </div>
               
            </div>
            {/* our impacts */}
            <div className='w-20/21 bg-indigo-950 pr-4 py-10'>
                <h1 className='text-end text-white text-7xl py-5 font-bold' >our</h1>
                <h1 className='text-end text-white text-7xl  py-5 font-bold'>Impact</h1>

               <section className='flex justify-end py-20'>
               <div className='lg:flex lg:justify-between items-center text-white w-4/6 lg:h-80 bg-gradient-to-r  from-green-800 to-teal-200 text-3xl md:text-4xl font-semibold rounded-xl shadow-sm pl-7'> 
                    <div className='lg:pl-20 py-7'>
                        <p className='text-4xl md:text-6xl'>1000+</p>
                        <p>job placement </p>
                        <p>Worlwide</p>

                    </div>
                    <div className='py-7'>
                        <p className='text-4xl md:text-6xl'>1200+</p>
                        <p>connected</p>
                        <p>companies</p>

                    </div>
                    <div className=' lg:pr-20 py-7'>
                        <p className=' text-4xl md:text-6xl'>17+</p>
                        <p>placement</p>
                        <p>executive</p>

                    </div>
                </div>
               </section>

                <div></div>
            </div>

            {/* impact end */}
       
       
        </div>
    );
};

export default Home;



