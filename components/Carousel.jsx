"use client";

import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import testimonial from "@/data/testimonial";
import { Card, CardContent } from "./ui/card";

const Carousels = () => {
  return (
    <div className="mt-24">
      <h2 className="text-3xl font-bold text-center text-cyan-900 mb-12">What Our Writers Say</h2>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {testimonial.map((testimonial, index) => {
            return <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3"> 
                <Card className="bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                        <blockquote className="space-y-6">
                            <p className="text-cyan-700 italic">&quot;{testimonial.text}&quot;</p>
                            <footer>
                                <div className="font-semibold text-cyan-900">{testimonial.author}</div>
                                <div className="text-sm  text-cyan-600">{testimonial.role}</div>
                            </footer>
                        </blockquote>
                    </CardContent>
                </Card>
            </CarouselItem>;
          })}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </div>
  );
};

export default Carousels;
