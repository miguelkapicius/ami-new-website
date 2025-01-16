import { Header } from "@/components/header/header";
import { Hero } from "../_components/hero";
import { BadgeCard } from "../_components/badge-card";
import { CategoriesCards } from "../_components/categories-cards";
import { ImagesCarousel } from "../_components/images-carousel";
import { DepoimentsCards } from "../_components/depoiments-cards";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
    return (
        <div className="space-y-12">
            <section className="min-h-[90vh] bg-no-repeat object-cover bg-zinc-950 bg-center bg-cover home-bg text-background px-6">
                <Header />
                <Hero />
            </section>
            <section className="px-6">
                <div className="grid grid-cols-1 gap-6">
                    <BadgeCard
                        title="Dra. Patricia Kapicius"
                        description="Doutora e Mestre pela USP, Especialista em Pacientes com Necessidades Especiais"
                    />
                    <BadgeCard title="34" description="Anos de experiência" />
                    <BadgeCard title="+60k" description="Sorrisos tratados" />
                </div>
            </section>
            <section className="px-6 space-y-6">
                <h2 className="text-xl font-bold">Nossos Tratamentos</h2>
                <CategoriesCards />
            </section>
            <section className="px-6 space-y-6">
                <h2 className="text-xl font-bold">Por que escolher a AMI?</h2>
                <ImagesCarousel />
                <div className="grid grid-cols-1 gap-6">
                    <BadgeCard title="Equipe de Profissionais Altamente Qualificados" />
                    <BadgeCard title="Tecnologia de Ponta em Diagnóstico e Tratamento" />
                    <BadgeCard title="Ambiente Confortável e Acolhedor" />
                    <BadgeCard title="Atendimento Personalizado para Cada Paciente" />
                </div>
            </section>
            <section className="px-6 space-y-6">
                <h2 className="text-xl font-bold">Depoimentos</h2>
                <DepoimentsCards />
                <Button className="w-full">
                    Ver todos <ArrowRight />
                </Button>
            </section>
        </div>
    );
}
