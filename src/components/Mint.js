import NFTLogo from '../assets/images/collection.webp'

function Mint() {
    return (
        <div className="container mx-auto my-28">
            <div className="grid grid-cols-2 gap-16 items-center">
                <div className="col-span-1">
                    <p className="text-white text-2xl opacity-75 pb-4 leading-normal">Versadias are 3,333 collectible ERC721 Non-Fungible Tokens (NFT) stored on Ethereum / Polygon blockchains. 
                        <br/>Each Versadia Character is an unique art.</p>
                    {/* <a className="radial-bg-btn px-12 py-4 text-2xl font-black uppercase dark-text rounded-xl">Mint soon...</a>*/}
                    <div className="liner"></div>
                </div>
                <div>
                    <img src={NFTLogo} alt="Logo" className="w-1/2 self-center ml-auto rounded-2xl floating" />
                </div>
            </div>
        </div>
    )
}

export default Mint;