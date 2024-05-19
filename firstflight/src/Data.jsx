//icons
import { IoMdAirplane } from "react-icons/io";
import { GiKnifeFork } from "react-icons/gi";
import { FaBus, FaHotel } from "react-icons/fa";
import { FaFacebookF , FaInstagram , FaGithub , FaYoutube , FaTwitter , FaLinkedinIn } from "react-icons/fa";

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