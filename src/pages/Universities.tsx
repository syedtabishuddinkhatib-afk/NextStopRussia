import { UniversityCard } from "@/components/UniversityCard";
import { useQuery } from "@tanstack/react-query";
import type { University } from "@shared/schema";
import { Loader2 } from "lucide-react";

export default function Universities() {
  const { data: universities = [], isLoading } = useQuery<University[]>({
    queryKey: ["/api/universities"],
  });

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold">Our Partner Universities</h1>
          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            We are officially authorized partners with Russia's leading universities. Each partnership is verified and backed by official documentation.
          </p>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" data-testid="loader-universities" />
          </div>
        ) : universities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.map((university) => (
              <UniversityCard key={university.id} university={university} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground" data-testid="text-no-universities">
              No universities available at the moment. Please check back later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
