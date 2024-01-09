import bg1 from "../assets/Images/bg-fitness-1.jpg";
import bg2 from "../assets/Images/bg-fitness-2.jpg";
import bg3 from "../assets/Images/bg-fitness-3.jpg";
import bg4 from "../assets/Images/bg-fitness-4.jpg";
import bg0 from "../assets/Images/bg-fitness-0.jpg";


const Why = () => {
  return (
    <div className='container '>
        <div className="">
            <div className="text-center mt-[4rem] mb-[3rem]"> 
                <h1 className="text-[1.2rem] font-medium py-2">
                    Why <i>fitcoach</i> will work for you
                </h1>

                <p className="text-[0.95rem] font-light">
                    A tonne of useful advice, guidance and coaching across the four keys to success
                    that will help you
                </p>
            </div>

            <div className="flex  space-x-[3rem] px-5 mx-[6rem] mb-[4rem] ">
                <div className="w-45% flex flex-col space-y-2 bg-gray-200 text-white rounded-2xl" 
                  style={{
                    background: `url(${bg2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                    <h1 className="pt-[10rem] mx-5 font-bold">
                        Small group personal training
                    </h1>

                    <p className="mx-5 pb-3 font-light">
                        Our small group personal training is unlike anything you"ld have experienced before.
                        In micro training group of just 6:1, all your workouts are customised, coached and 
                        recorded by an experienced fitness trainer.

                    </p>

                </div>

                <div className="  w-45% flex flex-col space-y-2 bg-blue-200 text-white rounded-2xl" 
                style={{
                    background: `url(${bg4})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                  }}
                >
                    <h1 className="pt-[10rem] mx-5 font-bold">
                        1-2-1 personal training
                    </h1>

                    <p className="mx-5 pb-3 font-light">
                      1-2-1 personal training is the ultimate investment in your health. You'll be working 
                      directly with your coach in your private studio, following a bespoke plan to ensure 
                      you hit your goals in record time.

                    </p>

                </div>

                <div>

                </div>

            </div>

            

        </div>

    </div>
  )
}

export default Why