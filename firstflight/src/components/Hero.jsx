import vdo from '../assets/bgvid.mp4';
import { Navbar } from '../components';

const Hero = () => {
    return(
        <div className='relative'>
            {/* background video */}
            <video className=' h-screen w-full object-cover' autoPlay loop muted>
                <source src={vdo} type='video/mp4' />  
            </video>
        
            {/* main content */}
            <div className=' absolute top-0 left-0 w-full h-full'>
                <Navbar />
                <div className=' mt-36 items-center text-white text-center '>
                    <h1 className=' text-6xl font-extrabold text'>FIRSTFLIGHT TRAVELS</h1>
                    <h4 className='mt-4 text-2xl font-mediun'>Plan your trip with us and travel around the world with the most affordable packages!</h4>
                    <button className='mt-8 px-6 py-2 shadow-lg rounded-xl hover:text-2xl hover:bg-teal-800 hover:text-white bg-white text-black  text-xl leading-loose duration-300'>Register Now!</button>
                </div>
            </div>
            
        </div>
    );
}

export default Hero;