import { serviceItems } from "../Data";

const Services = () => {
    return(
        <div id="#services" className="min-h-[90vh] mx-8">
            <div className=" text-4xl text-center font-bold py-12">
                We have the best services available for you!
            </div>

            <div className="grid grid-flow-col gap-x-8 ">
                {
                    serviceItems.map(({id,text,description,icon})=>{
                        return(
                            <div id={id} className=" w-full grid px-8 py-10 border-[0.5px] border-gray-400 rounded-md justify-items-center 
                                                    cursor-pointer hover:shadow-xl hover:border-transparent hover:translate-x-2 duration-500 ">
                                <div className="py-8">{icon}</div>
                                <h2 className="text-xl font-bold my-2">{text}</h2>
                                <h3 className="text-lg font-light text-gray-400">{description}</h3>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Services;