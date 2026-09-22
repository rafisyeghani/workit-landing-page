import Image  from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
    return(
        <section className="bg-dark-purple text-center relative overflow-hidden rounded-b-[80%]">
            <Container>
                <h1 className="font-heading text-white text-[32px] md:text-[56px] lg:text-[80px] leading-[40px] md:leading-[64px] lg:leading-[80px]">Data <span className="border-b-4 border-eucalyptus">tailored</span> to your needs.</h1>
                <Button variant="primary" href="#" >
                    Learn more
                </Button>
                <Image src="/phone.png" alt="Workit app" width={767} height={441} className="mx-auto -mb-8" priority/>
                <Image src="/spiral.svg" alt="" className="absolute hidden md:block left-0" aria-hidden="true" width={270} height={215}/>
                <Image src="/spiral.svg" alt="" className="absolute hidden md:block right-0" aria-hidden="true" width={141} height={112}/>
            </Container> 
        </section>
    )
}