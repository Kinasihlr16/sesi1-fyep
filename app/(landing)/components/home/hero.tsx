import { FiFastForward } from "react-icons/fi";
import Button from "../ui/button";
import Image from "next/image";

const HeroSection =() => {
    return (
        <section id="hero-section"className="container mx-auto h-screen flex">
            <div className="relative self-center">
                            <Image src="/images/img-basketball.svg" alt="image sporton" height={423} width={432} className="grayscale absolute left-0 -top-20"></Image>
                <div className="relative ml-40 self-center w-full">
                <div className="text-primary italic">Friday Sale, 50%</div>
                <h1 className="font-extrabold text-[95px] italic bg-gradient-to-b leading-tight from-black to-[#979797D1] bg-clip-text text-transparent">
                    WEAR YOUR <br /> TOP-QUALITY <br /> SPORTSWEAR
                </h1>
                <p className="w-1/2 mt-10 leading-loose">
                    Engineered for endurance and designed for speed. Experience gear that moves as fast as you do. Premium fabrics. Unmatched comfort. Limitless motion.
                </p>
                <div className="flex gap-5 mt-14 ">
                    <Button> Explore More <FiFastForward/> </Button>
                    <Button variant="ghost"> Watch Video <Image src="/images\icon-play-video.svg" alt="icon playvideo" width={29} height={29}/></Button>
                </div>
                </div>
                <Image src="/images/img-hero.svg" alt="image sporton hero" width={700} height={700} className="absolute -right-25 top-1/2 -translate-y-1/2 z-0"></Image>
            </div>
                <Image src="/images/img-ornament-hero.svg" alt="image sorton" width={420} height={420} className="absolute -right-[200px] top-1/2 -translate-y-1/2 z-0"></Image>
                
        </section>
    )
}
export default HeroSection;