import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div className="shadow-sm py-12">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 px-6 md:px-0">
                    <div>
                        <Link to="/" relative="path"><img draggable="false" src="https://i.imgur.com/6Rcf7eS.png" alt="Logo" className="w-14 relative self-center " /></Link>
                        <Link to="/" relative="path"><img draggable="false" src="https://i.imgur.com/6Rcf7eS.png" alt="Logo" className="w-12 relative md:visible hidden md:absolute opacity-25 -left-1 top-2 secondary-logo" /></Link>
                    </div>
                    <div className="self-center col-span-2 text-right hidden md:block navbar">
                        <Link to="/" relative="path">
                            <span className="mx-8">Home</span>
                        </Link>
                        <Link to="/services" relative="path">
                            <span className="mx-8">Services</span>
                        </Link>
                        <a href="mailto:info@lucatropea.it">
                            <span className="mx-8">Contact</span>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navigation;