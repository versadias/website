import NFTLogo from '../assets/images/collection.png'

function Mint() {
    return (
        <div className="container mx-auto my-32">
            <div className="grid grid-cols-2 gap-16 items-center">
                <div className="col-span-1">
                    <p className="text-white text-2xl opacity-75 pb-16">Versadias are 3,333 collectible ERC721 Non-Fungible Tokens (NFT) stored on Ethereum / Polygon blockchains. 
                        <br/>Each Versadia Character is an unique art.</p>
                    <a href="/" className="radial-bg-btn px-12 py-4 text-2xl font-black uppercase dark-text rounded-xl">Mint now</a>
                </div>
                <div>
                    <img src={NFTLogo} alt="Logo" className="w-2/3 self-center ml-auto" />
                </div>
            </div>
        </div>
    )
}

export default Mint;