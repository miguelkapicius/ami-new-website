import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { categoryDetails } from "@/data/categories";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CategoriesCards() {
    return (
        <div className="grid grid-cols-1 gap-6">
            {Object.entries(categoryDetails).map(([key, category]) => (
                <Card key={key}>
                    <CardHeader>
                        <CardTitle>{category.title}</CardTitle>
                        <CardDescription>
                            {category.description}
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button>
                            Saber mais <ArrowRight />
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
