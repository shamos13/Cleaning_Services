import {Link} from "react-router-dom";
import heroImage from '../assets/hero-cleaning.jpg'
import {Star, Shield, Leaf, Clock } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Hero image with gradient overlay */}
            <div className="absolute inset-0" style={{backgroundImage: `url(${heroImage})`}}/>
            <div className="absolute inset-0 bg-linear-to-r from-[#C04846] from-20% via-[#C04846] via-15%"/>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Main Content*/}
                    <div className="text-white animate-fade-in">
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                            Professional
                            <span className="block">Cleaning Services</span>
                            You can Trust
                        </h1>
                        <p className="text-xl mb-8 text-white/90 leading-relaxed">
                            Transform your space with TonyTosh Cleaning Services. We provide
                            top-quality residential and commercial cleaning with a satisfaction
                            guarantee. Experience the difference of a truly clean environment.
                        </p>

                        {/* Feature highlights */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center space-x-2">
                                <Shield className="h-5 w-5"/>
                                <span className="text-sm">100% Satisfaction Guarantee</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Leaf className="h-5 w-5 text-accent"/>
                                <span className="text-sm">Eco-Friendly Products</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Star className="h-5 w-5 text-accent"/>
                                <span className="text-sm">Trained Professionals</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Clock className="h-5 w-5 text-accent"/>
                                <span className="text-sm">Flexible Scheduling</span>
                            </div>
                        </div>
                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/contact"
                                className="bg-[#E52223] text-white hover:bg-[#A91F21] px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all hover:bg-[#A91F21]/20"
                            >
                                Book a Cleaning
                            </Link>
                            <Link
                                to="/contact"
                                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:scale-105 active:scale-95 text-center"
                            >
                                Get Free Quote
                            </Link>
                        </div>
                    </div>

                    {/* Right Column - Stats or additional info */}
                    <div className="lg:text-right animate-slide-up">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <h3 className="text-2xl font-extrabold text-white mb-6 text-center"> Why Choose Us</h3>

                            <div className="space-y-6">
                                <div className="text-center">
                                    <div className="text-4xl font-bold mb-2 text-white">500+</div>
                                    <div className="text-white/80">Happy Customers</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold mb-2 text-white">5+</div>
                                    <div className="text-white/80">Average Rating</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold mb-2 text-white">24/7</div>
                                    <div className="text-white/80">Customer support</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 trasnsform -translate-x-1/2">
                <div className="animate-bounce">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;