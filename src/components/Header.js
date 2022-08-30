import Logo from '../assets/images/logo.png'
import Navigation from './Navigation';

import TwitterLogo from '../assets/images/twitter.svg'
import DiscordLogo from '../assets/images/discord.svg'
import OpenseaLogo from '../assets/images/opensea.svg'

function Header() {
    return (
        <div className="header">
            <div className="grid grid-cols-4 gap-8">
                <div>
                    <img src={Logo} alt="Versadias" className="w-full" />
                </div>
                <div className="col-span-2">
                    <Navigation />
                </div>
                <div>
                    <a href="/"><img src={OpenseaLogo} alt="Opensea" className="nav-icon" /></a>
                    <a href="/"><img src={TwitterLogo} alt="Twitter" className="nav-icon" /></a>
                    <a href="/"><img src={DiscordLogo} alt="Discord" className="nav-icon" /></a>
                </div>
            </div>
        </div>
    );
}

export default Header;