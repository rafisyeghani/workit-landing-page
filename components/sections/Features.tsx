import Container from "@/components/ui/Container";

export default function Features() {
    return(
        <section className="bg-ghost-white py-20 lg:py-24 pt-32 md:pt-40 rounded-b[80%] relative overflow-hidden">
            <Container className="grid gap-12 md:grid-cols-1 lg:grid-cols-3 text-center">
                <article className="flex flex-col items-center gap-6">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-davy-grey font-heading text-dark-purple">
                        1
                    </span>
                    <h3 className="font-heading text-[32px] leading-[40px] text-dark-purple">
                        Actionable insights
                    </h3>
                    <p className="font-body text-[18px] leading-[32px] text-dark-purple">
                        Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.
                    </p>
                </article>
                <article className="flex flex-col items-center gap-6">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-davy-grey font-heading text-dark-purple">
                        2
                    </span>
                    <h3 className="font-heading text-[32px] leading-[40px] text-dark-purple">
                        Data-driven decisions
                    </h3>
                    <p className="font-body text-[18px] leading-[32px] text-dark-purple">
                        Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.
                    </p>
                </article>
                <article className="flex flex-col items-center gap-6">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-davy-grey font-heading text-dark-purple">
                        3
                    </span>
                    <h3 className="font-heading text-[32px] leading-[40px] text-dark-purple">
                        Always affordable
                    </h3>
                    <p className="font-body text-[18px] leading-[32px] text-dark-purple">
                        Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.
                    </p>
                </article>
            </Container> 
        </section>
    )
}