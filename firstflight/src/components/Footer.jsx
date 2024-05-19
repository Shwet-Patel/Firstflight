import {footerlinks , social} from '../Data';

const Footer = () => {
    return(
        <div id="footer" className="bg-teal-900  text-white">
            <div className="grid grid-cols-2 pt-12  mx-8 justify-around">
                <div className="pl-40">
                    <div className=" py-2 text-xl font-semibold">Quick Links</div>
                    <div className=" h-[2px] w-16 bg-white" />
                    <div className='flex flex-col mt-2'>
                    {
                        footerlinks.map(({id,text,href})=>{
                            return(
                                <a id={id} href={href} className='mt-4 w-28 text-base text-gray-200 hover:text-white hover:translate-x-2 duration-300'>{text}</a>
                            );
                        })
                    }
                    </div>

                </div>
                <div  className='pl-16'>
                    <div className=" py-2 text-xl font-semibold">Connect</div>
                    <div className=" h-[2px] w-16 bg-white" />
                    <div className='mt-8 flex flex-row gap-x-4 text-teal-900'>
                    {
                        social.map(({id,icon,href})=>{
                            return(
                                <a id={id} className='bg-white rounded-full p-2 transform transition-transform duration-300 hover:scale-125' href={href}>
                                    {icon}
                                </a>
                            );
                        })
                    }
                    </div>
                </div>
            </div>

            <div className="mt-20 py-4 text-md font-thin tracking-wider text-center min-h-12 items-center">
                <h4>Copyright &copy; {new Date().getFullYear()}  Firstflight Travels All Rights Reserved.</h4>
                <h4>Website developed by: Shwet Patel</h4>
            </div>
        </div>
    );
}

export default Footer;