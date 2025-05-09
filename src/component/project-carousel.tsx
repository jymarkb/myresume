"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projectCard } from "@/lib/static-data";
import ProjectCard from "./project-card";
const ProjectCarousel = () => {
  return (
    <Carousel
      className="project-carousel w-full"
      opts={{
        align: "start", //this fix un-even scroll issue
        containScroll: "trimSnaps",
      }}
    >
      <CarouselContent>
        {projectCard.map((item, index) => {
          return (
            <CarouselItem
              key={index}
              className="card-container lg:basis-1/2 xl:basis-1/3"
            >
              <ProjectCard data={item} />
            </CarouselItem>
          );
        })}
      </CarouselContent>

      <div className="absolute right-0 top-0 mt-[-2rem] carousel-buttons flex gap-2">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default ProjectCarousel;
