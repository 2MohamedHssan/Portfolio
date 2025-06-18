import React, { useEffect, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import About from './About';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollDemo = () => {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        // Initialize smooth scrollbar
        const bodyScrollBar = Scrollbar.init(scrollContainerRef.current, {
            damping: 0.1,
            delegateTo: document
        });

        bodyScrollBar.setPosition(0, 0);
        bodyScrollBar.track.xAxis.element.remove();

        // Set up ScrollTrigger scroller proxy
        ScrollTrigger.scrollerProxy(scrollContainerRef.current, {
            scrollTop(value) {
                if (arguments.length) {
                    bodyScrollBar.scrollTop = value;
                }
                return bodyScrollBar.scrollTop;
            }
        });

        bodyScrollBar.addListener(ScrollTrigger.update);

        // Horizontal scroll sections animation
        const horizontalSections = gsap.utils.toArray('.horizontal');

        horizontalSections.forEach((sec, i) => {
            const thisPinWrap = sec.querySelector('.pin-wrap');
            const thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');

            const getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);

            gsap.fromTo(thisAnimWrap, {
                x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue()
            }, {
                x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() : 0,
                ease: "none",
                scrollTrigger: {
                    trigger: sec,
                    scroller: scrollContainerRef.current,
                    pinType: 'transform',
                    start: "top top",
                    end: () => "+=" + thisAnimWrap.scrollWidth,
                    pin: thisPinWrap,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                    scrub: true,
                }
            });
        });

        // Handle ScrollTrigger markers if present
        if (document.querySelector('.gsap-marker-scroller-start')) {
            const markers = gsap.utils.toArray('[class *= "gsap-marker"]');
            bodyScrollBar.addListener(({ offset }) => gsap.set(markers, { marginTop: -offset.y }));
        }

        return () => {
            // Cleanup
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            if (bodyScrollBar) {
                bodyScrollBar.destroy();
            }
        };
    }, []);

    return (
        <div
            id="main-scrollbar"
            ref={scrollContainerRef}
            className="font-sans font-light m-0 p-0 w-auto h-screen overflow-auto"
        >
            <section className="horizontal w-full h-full relative overflow-x-hidden bg-gray-900 text-white">
                <div className="pin-wrap flex relative z-10">
                    <div className="animation-wrap to-right flex relative z-10">
                        <div className="item px-[80px] py-[150px] overflow-hidden flex-none w-screen h-[calc(100vh-300px)] flex flex-col items-center bg-gray-900">
                            <div className=" animate-pulse w-full flex justify-center items-center py-10">
                                <div className="w-40 h-40 md:w-96 md:h-96 relative rounded-full overflow-hidden bg-gray-700 shadow-lg border-4 border-teal-400">
                                    <img
                                        src="/mohamed.webp"
                                        alt="Mohamed Hassan"
                                        className=" object-cover"
                                    />
                                </div>
                            </div>
                            <h1 data-aos="zoom-in" className="text-3xl font-bold py-2 text-flicker-in-glow md:text-5xl lg:text-7xl">MOHAMED HASSAN</h1>
                        </div>
                        <div className="item px-[80px] flex-none w-screen h-[calc(100vh-300px)] flex items-center justify-center bg-gray-900 text-white">
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
                </div>
            </section>
        </div>

    );
};

export default HorizontalScrollDemo;