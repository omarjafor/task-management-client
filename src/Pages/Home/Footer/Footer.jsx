import logo from './../../../../public/logo.png';

const Footer = () => {
    return (
        <footer className="bg-teal-100">
            <div className="mx-auto max-w-5xl px-6 py-12 sm:px-6 lg:px-8">
                <div className="flex justify-center text-teal-600">
                    <img src={logo} alt="" className='h-12' />
                </div>

                <p className="mx-auto mt-6 max-w-lg text-center leading-relaxed text-black">
                    Stay in Touch with Taskify Pro!
                    Join us on our mission to streamline task management. Follow us on social media for the latest updates, productivity hacks, and more. Let&apos;s conquer tasks together!
                </p>

                <ul className="mt-12 font-medium flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                    <li>
                        <a className="text-black transition hover:text-gray-700/75" href="/"> About </a>
                    </li>

                    <li>
                        <a className="text-black transition hover:text-gray-700/75" href="/"> Careers </a>
                    </li>

                    <li>
                        <a className="text-black transition hover:text-gray-700/75" href="/"> History </a>
                    </li>

                    <li>
                        <a className="text-black transition hover:text-gray-700/75" href="/"> Services </a>
                    </li>

                    <li>
                        <a className="text-black transition hover:text-gray-700/75" href="/"> Projects </a>
                    </li>

                    <li>
                        <a className="text-black transition hover:text-gray-700/75" href="/"> Blog </a>
                    </li>
                </ul>

                <ul className="mt-12 flex justify-center gap-6 md:gap-8">
                    <a className="text-white cursor-pointer hover:text-gray-700" href="https://www.facebook.com/omarjaforchy" target="blank">
                        <img src="https://i.ibb.co/w0ZjxMz/facebook.png" alt="" className="w-10 h-10" />
                    </a>
                    <a className="ml-3 text-white cursor-pointer hover:text-gray-700" href="https://www.instagram.com/" target="blank">
                        <img src="https://i.ibb.co/Rjk4dw2/instagram.png" alt="" className="w-10 h-10" />
                    </a>
                    <a className="ml-3 text-white cursor-pointer hover:text-gray-700" target="blank" href="https://www.linkedin.com/in/omarjaforchy">
                        <img src="https://i.ibb.co/1JGFPJk/linkedin.png" alt="" className="w-10 h-10" />
                    </a>
                    <a className="ml-3 text-white cursor-pointer hover:text-gray-700" href="https://www.youtube.com/" target="blank">
                        <img src="https://i.ibb.co/8PKZfxC/youtube.png" alt="" className="w-10 h-10" />
                    </a>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;