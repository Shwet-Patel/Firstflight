import vdo from '../assets/bgvid.mp4';
import { Navbar } from '../components';

const Hero = () => {
    return(
        <div id='#home' className='relative'>
            {/* background video */}
            <video className='h-screen w-full object-cover' autoPlay loop muted>
                <source src={vdo} type='video/mp4' />  
            </video>
        
            {/* main content */}
            <div className='absolute top-0 left-0 w-full h-full z-10 bg-[linear-gradient(rgba(1,0,5,0.3),rgba(4,1,17,0.3))]'>
                <div className='fixed top-0 left-0 w-full'>
                    <Navbar />
                </div>
                <div className=' mt-52 items-center text-white text-center '>
                    <h1 className=' text-6xl font-extrabold hover:text-transparent duration-300'>FIRSTFLIGHT TRAVELS</h1>
                    <h4 className='mt-4 text-2xl font-mediun'>Plan your trip with us and travel around the world with the most affordable packages!</h4>
                    <button className='mt-8 px-8 py-2 rounded-2xl shadow-lg bg-white text-teal-800 text-2xl hover:bg-teal-800 hover:text-white hover:text-3xl duration-500'>Register Now!</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;