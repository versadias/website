
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

import Hidden from '../assets/images/hidden.webp'

import MV1 from '../assets/images/metaverse/1.webp'

function Metaverse() {
    return (
        <div className="w-full text-center text-white mb-32" id="metaverse">
            <p className="uppercase text-xl tracking-normal">Our<br/><span className="text-3xl orbitron font-black tracking-widest">Metaverse</span></p>
            <div class="w-1/3 mx-auto">
                <p className="py-8 opacity-50">We are creating a Roleplay Minecraft Server set in an actual metropolis, where you as a player will experience a gameplay as a citizen, like in real life.</p>
            </div>
            <div className="my-16">
                <Carousel infiniteLoop={true}
                            autoPlay={false} 
                            interval={4000} 
                            transitionTime={1000} 
                            showStatus={false} 
                            dynamicHeight={true} 
                            showIndicators={false} 
                            swipeable={true}
                            showThumbs={false}>
                    <div>
                        <div className="grid grid-cols-4 gap-8">

                            {/* Main square */}
                            <div className="meta-card" style={{
                                backgroundImage: `url(${MV1})`
                            }}>
                                <div className="content">
                                    <p className="shadower">Main square</p>
                                    <p className="opacity-70 text-sm shadower">30 August</p>
                                </div>
                            </div>

                            <div className="meta-card" style={{
                                backgroundImage: `url(${Hidden})`
                            }} />
                            
                            <div className="meta-card" style={{
                                backgroundImage: `url(${Hidden})`
                            }} />

                            <div className="meta-card" style={{
                                backgroundImage: `url(${Hidden})`
                            }} />
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-4 gap-8">

                            <div className="meta-card" style={{
                                backgroundImage: `url(${Hidden})`
                            }} />
                            
                            <div className="meta-card" style={{
                                backgroundImage: `url(${Hidden})`
                            }} />

                            <div className="meta-card" style={{
                                backgroundImage: `url(${Hidden})`
                            }} />

                            <div className="meta-card" style={{
                                backgroundImage: `url(${Hidden})`
                            }} />

                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Metaverse;