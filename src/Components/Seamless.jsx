import watch from "../assets/Images/wristwatch.jpg"

const Seamless = () => {
  return (
    <div>
        <div className="text-center my-4 text-[1.7em] font-bold">
            <h1>Seamless <i>tracking</i> &</h1>
            <h1><i>playful</i> progress</h1>
        </div>

        <div className="mx-[4rem] text-center mb-5 font-thin">
        <p className="py-[0.15em]">
            Leave the phone behind, grab your Apple Watch and watch your fitness
            </p>
            <p>
            dreams take flight wiith easy tracking and customizable, fun checklists.  
            </p>
       

        </div>

        <div className="flex space-x-7 px-5 mx-[5rem] mt-[3rem] mb-[4rem]">

            <div className="py-4 pb-[4rem] flex flex-col items-center space-y-2 w-45% bg-gray-100 rounded-xl">

                <div className="mb-4">
                <img src={watch} alt="" />

                </div>
               
                <div className="ml-4">
                <h1 className="mb-2 mt-4 text-[1.2em] font-bold">
                    Track your flow on apple watch
                </h1>

                <p className="text-[0.95em] font-thin">
                    No phone, no fuss. Just glance and conquer your goals with 
                    seamless apple watch tracking.
                </p>
    
                </div>
               

            </div>

            

            <div className="py-4 pb-[4rem] flex flex-col items-center space-y-2 w-45% bg-pink-100 rounded-xl">
                <div>
                    <ul className="mb-[3.8rem]">
                    <li className="py-2 font-bold"> 
                        Connect with a fitness community
                    </li>

                    <li className="py-2 font-bold">
                        Daily movement
                    </li>

                    <li className="py-2 font-bold">
                        Regular health check-ups
                    </li>

                    <li className="py-2 font-bold">
                        Stress management
                    </li>

                    <li className="py-2 font-bold">
                        Adequate rest and recovery
                    </li>
                    </ul>
                  
                </div>

                <div className="ml-4">
                <h1 className="mb-2 mt-4 text-[1.2em] font-bold">
                    Conquer your goals with our checklists
                </h1>

                <p className="text-[0.95em] font-thin">
                    Tick, tock, tick- watch your fitness dreams into reality with our customizable checklists .
                </p>

                </div>
               
                

            </div>

        </div>

       

    </div>
  )
}

export default Seamless