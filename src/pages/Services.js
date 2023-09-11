function Services() {
    return (
        <div className="container mx-auto mb-16 mt-8 px-6 md:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 self-center">
                <div className="text-white">
                    <div className="mb-8">
                        <p className="font-black text-orange-200 uppercase text-4xl pb-12">01. Custom Software</p>
                        <div className="grid grid-cols-2">
                            <div className="border border-[#202020] p-4">
                                <p>Web Applications</p>
                            </div>
                            <div className="border border-[#202020] p-4">
                                <p>Mobile Applications</p>
                            </div>
                            <div className="border border-[#202020] p-4">
                                <p>AR/VR Applications</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-8">
                        <p className="font-black text-red-200 uppercase text-4xl pb-12">02. Software Consultancy</p>
                        <div className="grid grid-cols-2">
                            <div className="border border-[#202020] p-4">
                                <p>Roadmap</p>
                            </div>
                            <div className="border border-[#202020] p-4">
                                <p>Software Architecture</p>
                            </div>
                            <div className="border border-[#202020] p-4">
                                <p>Mentorship</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-8">
                        <p className="font-black text-yellow-200 uppercase text-4xl pb-12">03. Brand Boost</p>
                        <div className="grid grid-cols-2">
                            <div className="border border-[#202020] p-4">
                                <p>UI Design</p>
                            </div>
                            <div className="border border-[#202020] p-4">
                                <p>UX Design</p>
                            </div>
                            <div className="border border-[#202020] p-4">
                                <p>SEO</p>
                            </div>
                            <div className="border border-[#202020] p-4">
                                <p>Copywriting</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-center">
                    <div className="grid grid-cols-2 gap-0 text-white">
                        <div className="relative border border-[#202020] w-full aspect-square flex items-center justify-center">
                            <p className="font-black text-xl lg:text-4xl absolute text-center top-2 lg:top-8 opacity-20">01.</p>
                            <p className="font-black text-xl lg:text-4xl text-center">Custom Software</p>
                        </div>
                        <div className="relative border border-[#202020] w-full aspect-square flex items-center justify-center">
                            <p className="font-black text-xl lg:text-4xl absolute text-center top-2 lg:top-8 opacity-20">02.</p>
                            <p className="font-black text-xl lg:text-4xl text-center">Software Consultancy</p>
                        </div>
                        <div className="relative border border-[#202020] w-full aspect-square flex items-center justify-center">
                            <p className="font-black text-xl lg:text-4xl absolute text-center top-2 lg:top-8 opacity-20">03.</p>
                            <p className="font-black text-xl lg:text-4xl text-center">Brand Boost</p>
                        </div>
                        <div className="relative border border-[#202020] w-full aspect-square flex items-center justify-center">
                            <p className="font-black text-xl lg:text-4xl absolute text-center top-2 lg:top-8 opacity-20">04.</p>
                            <p className="font-black text-xl lg:text-4xl text-center">Digital Experiences</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;