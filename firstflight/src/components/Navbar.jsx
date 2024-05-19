import logo from '../assets/logo.png';
import {navlinks} from '../Data';

const Navbar = () => {
    return(
        <div className="bg-teal-900 shadow-sm">
            <div className='grid grid-flow-col min-h-20 items-center justify-between mx-8'>
                <img src={logo} alt='logo' className=' ml-16 h-16 w-16'/>
                <div className='grid grid-flow-col items-center gap-x-4'>
                    {
                        navlinks.map(({id,text,href})=>{
                            return(
                                <a key={id} href={href} className='px-4 py-2 rounded-md text-white text-lg font-medium hover:bg-white hover:text-black transition duration-500'>{text}</a>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Navbar;