import {packagedetails} from '../Data'

const Packages = () => {
    return(
        <div id="packages" className="py-8">
            <div className="text-3xl font-bold text-center py-4">Packages</div>
            <div className='flex flex-wrap flex-row gap-y-8'>
                {
                    packagedetails.map(({id ,price, name , image , features})=>{
                        return(
                            <div key={id} className="relative mx-16 shadow-lg flex flex-row rounded-lg overflow-hidden ">
                                <div>
                                    <img className=" max-w-48 h-auto object-cover" src={image} alt={name} />
                                    <div className="absolute top-0 left-0 text-lg font-bold text-white pt-4 pl-4">Rs. {price} /-</div>  
                                </div>
                                <ul className='px-8 py-2 text-left list-disc'>
                                    {
                                        features.map(({id,text})=>{
                                            return(
                                                <li key={id}>{text}</li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Packages;