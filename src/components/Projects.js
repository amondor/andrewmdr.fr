import React from 'react'

export default function Projects(){
    
    
    return <div className= "flex items-center justify-center ">
        <div className=" max-w-8xl"> 
        <h1 class="general-sans-medium  border-blue-300 pl-3 text-2xl sm:text-3xl ">My Projects</h1>
        <div className="mb-10 ">
        <div class="my-2 ">
            {/* c'est ici  */}
            <a href="https://www.ecodeuxnet.fr/" target="blank" class="my-3 block h-full w-full rounded-md 
            border-b  py-4 px-2 shadow-sm hover:bg-secondary-light 
             hover:dark:bg-secondary-dark
            ">
                <div class="flex items-center justify-between ">
                    <h1 class="museo-sans-regular text-xl sm:text-2xl lg:text-3xl">Ecodeuxnet</h1>
                    <div class="flex items-center ">
                        <p class="text-md mt-2 text-sky-500 opacity-80 ">2022</p>
                        </div></div><p class=" text-md mt-3 text-gray-700 sm:mt-4">
                            Corporate websy.cleaningcleaning company.  
                            Co Corporate website for a cleaning company.or a cleaning company.
                            </p>                       
                        </a>
                    <div>
                </div>
            </div>
        </div>
      </div>
    </div>
}