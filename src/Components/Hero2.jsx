

const Hero2 = () => {
  return (
    <div>
        <div className="flex mx-[5rem] my-[4rem] justify-around">
            <div className="w-[45%]">
                <h2 className="font-bold text-[1.2em] mb-3">
                    Categories
                </h2>

                <p className="text-[1.0em]">
                    Immerse yourself in a world of mindful movement, from serene
                    meditations to empowering core workouts. Choose your path and discover 
                    blissful balance. 
                </p>

            </div>

            <div className="w-[45%]">
                <h1 className="text-[2.4rem] underline">Running</h1>
                <h1 className="text-[2.4rem] ">Yoga</h1>
                <h1 className="text-[2.4rem] ">Pilates</h1>
                <h1 className="text-[2.4rem] ">Core</h1>

            </div>

        </div>
    </div>
  )
}

export default Hero2