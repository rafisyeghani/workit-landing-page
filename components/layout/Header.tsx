import Image  from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Header() {
    return(
        <header className="bg-dark-purple">
            <Container>
                <nav className="flex items-center justify-between py-8">
                    <Image src="/logo-white.svg" alt="Workit Logo" width={95} height={24} priority />
                    <Button variant="secondary" href="#">Apply for access</Button>
                </nav>
            </Container>
        </header>
    )
}