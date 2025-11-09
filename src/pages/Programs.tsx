import { useState } from "react";
import { ProgramCard } from "@/components/ProgramCard";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import type { Program } from "@shared/schema";
import { Loader2 } from "lucide-react";

export default function Programs() {
  const { data: programs = [], isLoading } = useQuery<Program[]>({
    queryKey: ["/api/programs"],
  });

  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(programs.map((p) => p.category)))];

  const filteredPrograms =
    selectedCategory === "All"
      ? programs
      : programs.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold">Programs We Offer</h1>
          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore bachelor's and postgraduate programs across medical, engineering, business, and other fields at Russia's top universities.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              data-testid={`button-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {category}
            </Button>
          ))}
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" data-testid="loader-programs" />
          </div>
        ) : filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground" data-testid="text-no-programs">
              No programs available in this category. Please check back later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
