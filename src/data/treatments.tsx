import { TreatmentCategory } from "./categories";

interface Treatment {
    title: string;
    description: string;
    benefits: string[];
    category: TreatmentCategory;
}

const items: Treatment[] = [
    {
        title: "Invisalign",
        description: "aparelho invisível",
        benefits: ["Sorriso Alinhado"],
        category: "Ortodontia",
    },
];
