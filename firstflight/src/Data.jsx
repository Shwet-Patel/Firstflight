//icons
import { IoMdAirplane } from "react-icons/io";
import { GiKnifeFork } from "react-icons/gi";
import { FaBus, FaHotel } from "react-icons/fa";
import { FaFacebookF , FaInstagram , FaGithub , FaYoutube , FaTwitter , FaLinkedinIn } from "react-icons/fa";

import a1 from './assets/a1.jpg';
import a2 from './assets/a2.jpg';
import a3 from './assets/a3.jpg';
import a4 from './assets/a4.jpg';
import a5 from './assets/a5.jpg';
import a6 from './assets/a6.jpg';

import p1 from './assets/p1.jpg';
import p2 from './assets/p2.jpg';
import p3 from './assets/p3.jpg';
import p4 from './assets/p4.jpg';


export const navlinks = [
    { id: 1 , text: "Home" , href:"#home"},
    { id: 2 , text: "Locations" , href:"#locations"},
    { id: 3 , text: "Packages" , href:"#packages"},
    { id: 4 , text: "About us" , href:"#aboutus"},
    { id: 5 , text: "Contact us" , href:"#contactus"},
];

export const serviceItems = [
    { id: 1 , text: "Flight Services" , description: "Arrival & Departure" , icon: < IoMdAirplane size = {90} />},
    { id: 2 , text: "Food Services" , description: "Catering" , icon: < GiKnifeFork size = {90} />},
    { id: 3 , text: "Travel Services" , description: "Pick-up & drop" , icon: < FaBus size = {90} />},
    { id: 4 , text: "Hotel Services" , description: "Check-in/out" , icon: < FaHotel size = {90} />},
];

export const footerlinks = [
    {id:1 , text:"Register" , href:""},
    {id:2 , text:"About us" , href:""},
    {id:3 , text:"Contact us" , href:""},
];

export const social = [
    {id:1 , icon:<FaFacebookF className=" size-6  duration-300 text-teal-900"/> , href:""},
    {id:2 , icon:<FaInstagram className="  size-6 duration-300 text-teal-900"/> , href:""},
    {id:3 , icon:<FaTwitter  className=" size-6  duration-300 text-teal-900"/> , href:""},
    {id:4 , icon:<FaLinkedinIn   className=" size-6 duration-300 text-teal-900"/> , href:""},
    {id:5 , icon:<FaYoutube className=" size-6 duration-300 text-teal-900"/> , href:""},
    {id:6 , icon:<FaGithub className=" size-6  duration-300 text-teal-900"/> , href:""},
];

export const locations = [
    {id:1 , name:'Kashmir' , country:'India' , image:a1 , description:'Heaven on Earth Kashmir is one of the most beautiful travel destinations to visit in North India. Nowhere in India you will behold the scenic landscapes, icy glaciers, pristine lakes and lofty mountains as beautiful as Kashmir. Serenity and Tranquility redefines itself from the ambiance of Kashmir. Be it summer, Winter or Monsoon, every season has its own charm in Kashmir. The numerous wonders of nature, culture, cuisines and rich history of Kashmir will elevate your travel experience in Incredible India.'},
    {id:2 , name:'Istanbul', country:'Turkey', image:a2 , description:'Istanbul, that offers unique historical and cultural riches together has hosted many different civilizations with its geography spread over two continents. This unique city which is admired by its charming nature and the attractive atmosphere is also the symbol of dynamic and modern city life. Istanbul has a multicultural texture and a lively atmosphere that melts the past and future in a single pot which provides a sense of universal history at every step.'},
    {id:3 , name:'Paris' , country:'France' , image:a3 , description:'Paris is a diverse and sophisticated city that appeals to the wealthy but can also be enjoyed on a budget. In addition to the Eiffel Tower, Paris has countless other gorgeous landmarks and monuments that add to the beauty of the spacious boulevards and their charming cafes. French cuisine is also world famous, and you can find some of the best of it in Paris. It has many stunning sights that showcase impressive architecture and design, and these places have become world-famous for their beauty.'},
    {id:4 , name:'Bali' , country:'Indonesia', image:a4 , description:`Bali's beauty goes way deeper than its beautiful appearances. Matching Bali's natural wonders are its ever-growing choice of awesome accommodations. From lavish resorts to affordable hostels, developers go all-out to create outstanding, well-equipped and enjoyable places to stay. Private villas can even be rented at unbelievably affordable prices. Many resorts and hotels have splendid swimming and infinity pools, most of which are attractions in themselves.`},
    {id:5 , name:'Dubai', country:'UAE', image:a5 , description:`Dubai is an ideal holiday destination for families, with theme parks, beaches, Friday brunches and more to keep everyone happy. The famous Burj Khalifa, the tallest building in the world, is well worth the entrance fee. Burj Al-Arab, often touted as the world's only 7-star hotel, remains underwhelming. Similarly, the Aquaventure Water Park at the Palms Atlantis Hotel is not to be missed. Jumeriah Beach Residence is well established as Dubai's most popular beachfront, and its close proximity to a whole host of restaurants, cafes and shops make it more than worthy of its status.`},
    {id:6 , name:'Geneva', country:'Switzerland', image:a6 , description:`The charming city of Geneva comes with a plethora of attractions and tremendous natural beauty that makes every traveler fall in love with it. However, because of this overabundance of attractions, it becomes difficult for the backpackers to determine where to go first. Most of them generally miss out on all the best things that this fantastic city has to offer. The capital of Switzerland and a beautiful lakeside city, Geneva is home to many international organisations like the UN.`},
];

export const packagedetails = [
    {id:1 , name:'Bronze' , image:p1 , price:9999 , features:[{id:1 , text:'2 Star Hotel' },{id:2 , text:'5 Nights Stay'},{id:3 , text:'Free photo Session'},{id:4 , text:'Friendly Tour Guide'},{id:5 , text:'24/7 Customer Help Center'}]},
    {id:2 , name:'Silver' , image:p2 , price:19999 , features:[{id:1 , text:'3 Star Hotel' },{id:2 , text:'7 Nights Stay'},{id:3 , text:'Free photo Session'},{id:4 , text:'Friendly Tour Guide'},{id:5 , text:'24/7 Customer Help Center'}]},
    {id:3 , name:'Gold' , image:p3 , price:29999 , features:[{id:1 , text:'4 Star Hotel' },{id:2 , text:'10 Nights Stay'},{id:3 , text:'Free photo Session'},{id:4 , text:'Friendly Tour Guide'},{id:5 , text:'24/7 Customer Help Center'} , {id:6 , text:'Breakfast & Dinner'}]},
    {id:4 , name:'Platinum', image:p4 , price:39999 ,  features:[{id:1 , text:'5 Star Hotel' },{id:2 , text:'14 Nights Stay'},{id:3 , text:'Free photo Session'},{id:4 , text:'Friendly Tour Guide'},{id:5 , text:'24/7 Customer Help Center'} , {id:6 , text:'Breakfast & Dinner'} , {id:7 , text:'Bornfire'}]},
];