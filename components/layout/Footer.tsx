import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Footer() {
    return(
        <footer className="bg-white py-12 text-center">
            <Container className="flex flex-col items-center gap-6">
                <Image src="/logo-dark.svg" alt="Workit Logo" width={95} height={24}/>
                <div className="flex gap-6">
                    <a href="#" aria-label="Facebook">
                        <Image src="/icons/fb.svg" alt="" width={20} height={20}/>
                    </a>
                    <a href="#" aria-label="Twitter">
                        <Image src="/icons/twitter.svg" alt="" width={20} height={20}/>
                    </a>
                    <a href="#" aria-label="Instagram">
                        <Image src="/icons/ig.svg" alt="" width={20} height={20}/>
                    </a>
                </div>
            </Container>
        </footer>
    )
}