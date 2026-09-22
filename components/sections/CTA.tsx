import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
    return(
        <section className="bg-white py-20 lg:py-28">
            <Container className="grid gap-0 lg:grid-cols-2 items-center">
                <div className="rounded-full bg-eucalyptus overflow-hidden aspect-square max-w-[400px]">
                    <Image src="/founder.png" alt="Louis Graham" width={477} height={477}/>
                </div>
                <div className="relative bg-dark-purple p-8 lg:-ml-24 lg:mt-24 lg:p-12">
                    <h2 className="text-white text-[32px] leading-[40px] font-heading md:text-[56px] md:leading-[64px]">
                        Be the first to test
                    </h2>
                    <p className="bg-dark-purple font-body text-white/80 text-[18px] leading-[32px] mt-6">
                        Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I’ll be in touch to schedule a call.
                    </p>
                    <Button variant="primary">Apply for access</Button>
                    <Image src="/spiral.svg" alt="" className="absolute bottom-0 right-0 hidden md:block" aria-hidden="true" width={100} height={100}/>
                </div>
            </Container>
        </section>
    )
}