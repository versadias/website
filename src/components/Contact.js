import Banner from '../assets/images/banner_2x.webp'
import Arrow from '../assets/images/arrow.svg';

function Contact() {
    return (
        <div className="flex w-full h-32 md:h-48 bg-cover" style={{ backgroundImage: `url('${Banner}')` }}>
            <div className="container mx-auto self-center">
                <div className="float-none text-center md:text-left md:float-right text-white font-bold text-2xl md:text-4xl">
                    <a href="mailto:info@lucatropea.it"><p>Let's get in touch <img src={Arrow} alt="Arrow" className="arrow inline-block text-white ml-2 border-white border-2 rounded-full p-3"/></p></a>
                </div>
            </div>
        </div>
    )
}

export default Contact;