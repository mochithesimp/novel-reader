import type { ReactNode } from "react";

interface Props {
    title: string;
    children: ReactNode;
}

const Section = ({ title, children }: Props) => {
    return (
        <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
                {title}
            </h2>

            {children}
        </section>
    );
};

export default Section;