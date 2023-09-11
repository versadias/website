import Paradise from '../assets/images/customers/paradise.svg';
import DarkHorizon from '../assets/images/customers/dark.png';
import Etheria from '../assets/images/customers/etheria.png';
import YungApes from '../assets/images/customers/yapes.png';

function Partners() {
    return (
        <div className="w-full py-10 md:py-24 bg-dzn">
            <div className="text-white text-center text-4xl font-bold">
                <div className="relative w-auto">
                    <p className="awesome">Some trusted clients</p>

                    <div className="container mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mt-16 px-6 md:px-0">
                            <div className="self-center">
                                <img src="https://www.farimpresa.eu/wp-content/uploads/2023/05/logo-Farimpresa_white23.png" className="w-32 md:w-48 mx-auto grayscale hover:grayscale-0" alt="Etheria" />
                            </div>
                            <div className="self-center">
                                <img src={Paradise} className="w-32 md:w-48 mx-auto grayscale hover:grayscale-0" alt="Paradise Trippies"/>
                            </div>
                            <div className="self-center">
                                <img src={DarkHorizon} className="w-32 md:w-48 mx-auto grayscale hover:grayscale-0" alt="Dark Horizon"/>
                            </div>
                            <div className="self-center">
                                <img src="https://i.imgur.com/ueLbyoY.png" className="w-32 md:w-48 mx-auto grayscale hover:grayscale-0" alt="Etheria" />
                            </div>
                            <div className="self-center">
                                <img src={Etheria} className="w-32 md:w-48 mx-auto grayscale hover:grayscale-0" alt="Etheria" />
                            </div>
                            
                            <div className="self-center">
                                <img src={YungApes} className="w-16 md:w-28 mx-auto grayscale hover:grayscale-0" alt="Yung Apes" />
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Partners;