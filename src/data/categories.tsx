export type TreatmentCategory =
    | "Estética"
    | "Implantes e Próteses"
    | "Ortodontia"
    | "Clínica Geral";

export const categoryDetails: Record<
    TreatmentCategory,
    { title: string; description: string }
> = {
    Estética: {
        title: "Estética",
        description:
            "Melhore a aparência dos seus dentes com tratamentos como clareamento",
    },
    "Clínica Geral": {
        title: "Clínica Geral",
        description:
            "Cuidados abrangentes para manter e restaurar a saúde bucal.",
    },
    "Implantes e Próteses": {
        title: "Implantes e Próteses",
        description:
            "Substitua dentes perdidos e restaure o sorriso com soluções avançadas.",
    },
    Ortodontia: {
        title: "Ortodontia",
        description:
            "Alinhe seus dentes e melhore sua mordida com aparelhos ou alinhadores transparentes.",
    },
};
