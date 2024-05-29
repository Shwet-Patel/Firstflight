import {locations} from '../Data';


const Location = () => {
    return(
        <div id="locations" className="my-8">
            <div className="text-3xl font-bold text-center py-4">Locations</div>
            <div className='flex flex-wrap flex-row gap-16 justify-center'>
                {
                    locations.map(({id , name , image , country , description})=>{
                        return(
                            <div key={id} className="relative w-full mx-16 shadow-lg flex flex-row rounded-lg overflow-hidden ">
                                <div>
                                    <img className=" max-w-48 h-auto object-cover" src={image} alt={name} />
                                    <div className="absolute bottom-0 left-0 text-lg font-bold text-white pb-6 pl-4">
                                        <h3 className='font-thin'>{name}</h3>
                                        <h4 className='text-2xl'>{country}</h4>
                                    </div>
                                </div>
                                <div className='px-8 py-8 text-center'>
                                    <p>{description}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Location;