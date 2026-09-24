import Image  from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
    return(
        <section className="bg-dark-purple text-center relative hero-curve pb-10">
            <Container>
                <h1 className="font-heading text-white text-[32px] md:text-[56px] lg:text-[80px] leading-[40px] md:leading-[64px] lg:leading-[80px] max-w-3xl mx-auto pb-2">Data <span className="underline decoration-eucalyptus decoration-4 underline-offset-8">tailored</span> to your needs.</h1>
                <Button variant="primary" href="#" className="mt-8" >
                    Learn more
                </Button>
                <Image src="/phone.png" alt="Workit app" width={767} height={441} className="relative z-10 mx-auto mt-10 -mb-28 md:-mb-38 max-w-[320px] md:max-w-[500px] lg:max-w-[650px]" priority/>
                <Image src="/spiral.svg" alt="" className="top-16 absolute hidden md:block -left-20 pointer-events-none" aria-hidden="true" width={270} height={215}/>
                <Image src="/spiral.svg" alt="" className="top-48 absolute hidden md:block -right-6 pointer-events-none" aria-hidden="true"  width={141} height={112}/>
            </Container> 
        </section>
    )
}