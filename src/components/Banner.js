import Arrow from '../assets/images/arrow.svg';

function Banner() {
    return (
        <div className="container mx-auto px-6 md:px-0 pt-4 md:pt-0 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2">

                <div className="w-full select-none md:px-0 md:py-0 relative rounded-3xl block md:hidden">
                    <iframe className="w-full" src="https://www.youtube.com/embed/tfoqXBeUwTk?si=HUNJGqpP7TSy-Hpq&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>

                <div className="mt-16">
                    <p className="drop-shadow-lg shadow-black text-white uppercase font-black text-3xl md:text-5xl leading-looser tracking-wide">
                        First we think<br/>then we build
                    </p>

                    <div className="my-8 w-full md:w-3/4 leading-6">
                        <p className="text-gray">Versadia is a specialized and experienced team that will bring your Digital Project Alive. We provide different services such as development, brand boost and consultancy</p>
                    </div>
                        
                    <div className="mt-4">
                        <a href="mailto:info@lucatropea.it">
                            <p className="get-touch">Get in touch <img src={Arrow} alt="Arrow" className="arrow inline-block text-white ml-2"/></p>
                        </a>
                    </div>
                </div>

                <div className="w-full bg-cover bg-no-repeat bg-center bg-header select-none px-6 md:px-0 py-16 md:py-0 relative rounded-3xl hidden md:block">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/tfoqXBeUwTk?si=HUNJGqpP7TSy-Hpq&amp;&autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>

             </div>
        </div>
    )
}

export default Banner;