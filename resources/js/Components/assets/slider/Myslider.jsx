import { useEffect, useState } from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

function Myslider({ slides }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [current]);

    let previousSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    let nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    return (
        <div className="relative overflow-hidden">
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide}
                        alt={`Slide ${index}`}
                        className="w-full"
                    />
                ))}
            </div>
            <div className="absolute inset-y-0 flex items-center z-10">
                <button onClick={previousSlide} className="left-0">
                    <FiArrowLeftCircle className="text-3xl text-white hover:text-gray-300" />
                </button>
                <button onClick={nextSlide} className="right-0">
                    <FiArrowRightCircle className="text-3xl text-white hover:text-gray-300" />
                </button>
            </div>
            <div className="absolute bottom-4 flex justify-center w-full">
                {slides.map((slide, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-4 h-4 bg-gray-600 rounded-full mx-1 focus:outline-none ${
                            index === current ? "bg-white" : ""
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    );
}

export default Myslider;
