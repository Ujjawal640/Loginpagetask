import React from 'react'
import {ImLinkedin,ImFacebook,ImInstagram} from 'react-icons/im/index'


const Banner = () => {
  return (
    <div className=" rounded-2xl  h-[550px] w-[555px] relative  " >
     <img className='  rounded-2xl w-full h-full absolute object-cover mix-blend-overlay ' src="https://s3-alpha-sig.figma.com/img/4ee0/0006/3107c45a2adce01efe60a8d70e6ea4b2?Expires=1686528000&Signature=fKFWzA9lTvSQzhvVmEF-uTw9uCglvVRZgUNymHPaNERX9~UZQ5cfrjRrSf7pl2DoLnEK-aRY9rqyq1oYrJoEA4TKp~NVP4c~-1DONZUrBu8-z8-3A0qIq~Hn460Ooz7ibOdx8WMRKkogTEqLzF3guGna7WCm36~szrOwqLci07zeY2O6oiA6s1JRLI3ymy6Sb52puEed7z0tK-mjnSOgqHgO8hiPoigkaV3eTdRZRAvsV4nF68WWTb5F7kt8OF2QveG2HCfP4-rtIZK3-REMwP6cMXvEbwWv-P0-h89iX5W~O-rCBoUPrQY2JZ5mxaavZm7oxO-jr1TbortdXcDfjA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
    <div className="text-white ">
     <h1 className='text-white  p-4 text-2xl ' >exo</h1>
     <div className="pt-64 ml-4 text-3xl ">
     <h1 className="text-white font-bold   " >100% Uptime😎</h1>
<p> Zero Infrastructure</p> <p></p> Management</div>
     </div>
    

    <div className="mt-20 ml-3 text-white flex space-x-80 ">
      
        <h4>aesthisia.com</h4>
<div className="flex space-x-4 ">
     < ImLinkedin/> 
     
     
     <ImFacebook/>
    
    
     <ImInstagram/>
     </div>
     
     </div>
  
     
    </div>
  )
}

export default Banner
