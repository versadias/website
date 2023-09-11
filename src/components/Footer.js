import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
            <div className="w-full py-8 md:py-10 bg-[#0a0a0a]">
                <div className="container mx-auto px-6 md:px-0">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">

                        <div className="flex">
                            <img src="https://i.imgur.com/6Rcf7eS.png" alt="Logo" className="w-24 opacity-50 hover:opacity-100 self-center py-8" />
                        </div>

                        <div className="w-full">
                            <p className="text-white border-b border-gray border-opacity-25 border-dashed pb-2 w-1/2 mb-2">Navigation</p>
                            <Link to="/" relative="path"><p className="text-gray py-1">Home</p></Link>
                            <Link to="/services" relative="path"><p className="text-gray py-1">Services</p></Link>
                            <a href="mailto:info@lucatropea.it"><p className="text-gray py-1">Contact</p></a>
                        </div>
                        
                        <div className="w-full">
                            <p className="text-white border-b border-gray border-opacity-25 border-dashed pb-2 w-1/2 mb-2">Extra</p>
                            <Link to="/" relative="path">
                                <p className="text-gray py-1">Careers</p>
                            </Link>
                            <Link to="/privacy-policy" relative="path">
                                <p className="text-gray py-1">Privacy Policy</p>
                            </Link>
                            <Link to="/cookie-policy" relative="path">
                                <p className="text-gray py-1">Cookie Policy</p>
                            </Link>
                        </div>
                        
                        <div className="w-full">
                            <p className="text-white border-b border-gray border-opacity-25 border-dashed pb-2 w-2/3 md:w-1/2 mb-2">Social</p>
                            <a href="https://www.instagram.com/versadiastudios/">
                                <div className="bg-dark w-12 h-12 inline-flex mr-4 mt-2">
                                    <i className="fa-brands fa-instagram text-white text-2xl self-center mx-auto"></i>
                                </div>
                            </a>
                            <a href="https://discord.gg/fcj8xKbVHP">
                                <div className="bg-dark w-12 h-12 inline-flex mr-4 mt-2">
                                    <i className="fa-brands fa-discord text-white text-2xl self-center mx-auto"></i>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/company/versadia/">
                                <div className="bg-dark w-12 h-12 inline-flex mt-2">
                                    <i className="fa-brands fa-linkedin-in text-white text-2xl self-center mx-auto"></i>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="container mx-auto px-6 md:px-0">
                    <p className="text-gray text-sm py-4"><b>Copyright © 2023 Versadia</b><br/>Tutti i diritti riservati</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;