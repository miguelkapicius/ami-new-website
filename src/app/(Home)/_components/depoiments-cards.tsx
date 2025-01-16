"use client";

import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { depoiments } from "@/data/depoiments";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

export function DepoimentsCards() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );
    return (
        <div className="grid grid-cols-1 gap-6">
            <Carousel plugins={[plugin.current]} className="w-full max-w-xs">
                <CarouselContent>
                    {depoiments.map((depoiment) => (
                        <CarouselItem key={depoiment.text}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <CardDescription>
                                            {depoiment.text}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}
