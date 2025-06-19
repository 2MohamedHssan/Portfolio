import React from 'react'

function HorizntalReplacement() {
    return (
        <section className="w-full h-full relative overflow-x-hidden bg-gray-900 text-white">
            <div className="animation-wrap to-right flex flex-col relative z-10">
                <div className=" overflow-hidden flex-none w-screen flex flex-col items-center bg-gray-900">
                    <div className=" animate-pulse w-full flex justify-center items-center py-10">
                        <div className="w-40 h-40 md:w-96 md:h-96 relative rounded-full overflow-hidden bg-gray-700 shadow-lg border-4 border-teal-400">
                            <img
                                src="/mohamed.WebP"
                                alt="Mohamed Hassan"
                                className=" object-cover"
                            />
                        </div>
                    </div>
                    <h1 data-aos="zoom-in" className="text-3xl font-bold py-2 text-flicker-in-glow md:text-5xl lg:text-7xl">MOHAMED HASSAN</h1>
                </div>
                <div className=" w-screen flex items-center justify-center bg-gray-900 text-white">
                    <div className="max-w-6xl text-center animate-float bg-gray-700 p-8 rounded-lg shadow-lg">
                        <h2 className="text-4xl md:text-7xl font-bold text-teal-400 mb-6">Who I Am</h2>
                        <p className="text-gray-300 md:text-4xl text-base leading-relaxed">
                            I'm Mohamed Hassan, a full-stack web developer with a strong focus on frontend technologies.
                            I specialize in building intuitive, responsive, and high-performance interfaces using React, Next.js, and Tailwind CSS.
                            I’m also familiar with backend development using Node.js, Express, and MongoDB,
                            allowing me to build and integrate full web solutions from frontend to database.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HorizntalReplacement
