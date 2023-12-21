import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <section
            className="overflow-hidden bg-[url(https://i.postimg.cc/HxSjnJHW/banner.jpg)] bg-cover bg-center bg-no-repeat"
        >
            <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="text-left ltr:sm:text-left rtl:sm:text-right">
                    <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">Your Taskify Pro</h2>

                    <p className="hidden max-w-lg text-justify text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
                        Welcome to Taskify Pro, your ultimate task management solution. Organize your tasks efficiently, prioritize with ease, and achieve your goals seamlessly. Elevate your productivity today!
                    </p>

                    <div className="mt-4 sm:mt-8">
                        <Link
                            to='/login'
                            className="inline-block rounded-full bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Let’s Explore
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;