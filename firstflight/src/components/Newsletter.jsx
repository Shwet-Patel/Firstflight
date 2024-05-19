import { useState } from "react";

const Newsletter = () => {
    const [email , setEmail] = useState("");

    return(
        <div id="newsletter" className="grid grid-cols-2 min-h-[50vh] mx-8 place-items-center">
            <div className="mx-24">
                <h1 className="text-4xl font-extrabold">Newsletter</h1>
                <h3 className="mt-2 text-xl font-normal text-gray-800">Subscribe to get offers and latest updates every week!</h3>
            </div>
            <div className=" shadow-xl p-2 rounded-2xl text-lg">
                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="E-mail" 
                    className="ml-4 w-72 border-0 focus:outline-none"/>
                <button className=" px-6 py-3 bg-teal-800 text-white rounded-2xl border-2 border-teal-800 hover:bg-white hover:text-teal-800 duration-500">Subscribe</button>
            </div>
        </div>
    );
}

export default Newsletter;