import { Button } from "@/components/ui/button";
import { useQueryParams } from "@/hooks";
import { cn } from "@/lib/utils";
import { renderElements } from "@/utils";

type TeamFilterProps = {
  className?: string;
  onFilterChange?: (filters: { division?: string; program?: string }) => void;
};

type DivisionTags =
  | "ketua"
  | "wakil-ketua"
  | "sekretaris"
  | "bendahara"
  | "humas"
  | "pdd"
  | "perkap"
  | "acara";
type ProgramTags = "koperasi" | "umkm" | "pkk" | "kwt" | "bank-sampah";

export const TeamFilter = ({ className, onFilterChange }: TeamFilterProps) => {
  const { queryParams, handleUpdateFilter } = useQueryParams<
    DivisionTags,
    ProgramTags
  >();

  const currentDivision = queryParams.division ?? "";
  const currentProgram = queryParams.program ?? "";

  const handleSetProgram = (tag: ProgramTags) => {
    const newValue = currentProgram === tag ? undefined : tag;
    handleUpdateFilter({ program: newValue });

    if (onFilterChange) {
      onFilterChange({
        division: queryParams.division,
        program: newValue,
      });
    }
  };

  const handleSetDivision = (tag: DivisionTags) => {
    const newValue = currentDivision === tag ? undefined : tag;
    handleUpdateFilter({ division: newValue });

    if (onFilterChange) {
      onFilterChange({
        division: newValue,
        program: queryParams.program,
      });
    }
  };

  const programs = [
    {
      id: "5f17b73e-3b1b-4e06-b9e2-61f88e3291f5",
      label: "Koperasi",
      tag: "koperasi" as const,
    },
    {
      id: "d8f33c7e-3edb-4fc3-9025-41c888a86ff6",
      label: "UMKM",
      tag: "umkm" as const,
    },
    {
      id: "a9b4fbc9-b3c9-4e91-8100-352421fcfd1c",
      label: "PKK",
      tag: "pkk" as const,
    },
    {
      id: "c0c8b998-3dc3-453b-9f89-d6a2d6dbbbf2",
      label: "KWT",
      tag: "kwt" as const,
    },
    {
      id: "e2c72eec-6e8a-41d2-8dc3-4d2fd18b0e35",
      label: "Bank Sampah",
      tag: "bank-sampah" as const,
    },
  ];

  const divisions = [
    {
      id: "7d4a6d76-5f90-4b61-936e-b5e74771a75e",
      label: "Ketua",
      tag: "ketua" as const,
    },
    {
      id: "32dbfd4c-c659-48c7-9b0f-1e29b18a0ef6",
      label: "Wakil Ketua",
      tag: "wakil-ketua" as const,
    },
    {
      id: "2c6ac79b-8378-4872-9e3d-cf56cd0bc7cf",
      label: "Sekretaris",
      tag: "sekretaris" as const,
    },
    {
      id: "998a7f2f-fec8-4347-8b71-9d8e0129f184",
      label: "Bendahara",
      tag: "bendahara" as const,
    },
    {
      id: "0d14c19a-bc58-4b92-82d3-4f9f674a9cb7",
      label: "Humas",
      tag: "humas" as const,
    },
    {
      id: "bfa4dd75-d158-4e5a-96c1-b4cfc005f22a",
      label: "PDD",
      tag: "pdd" as const,
    },
    {
      id: "2f4c0a38-b519-4e1a-86b2-ff7d43a6c5c6",
      label: "Perkap",
      tag: "perkap" as const,
    },
    {
      id: "ab37dd13-0a29-4d8f-970e-2c9fc19d07fc",
      label: "Acara",
      tag: "acara" as const,
    },
  ];

  return (
    <header
      className={cn(
        "bg-background space-y-4 rounded-xl p-4 transition-all duration-300",
        className,
      )}
    >
      {/* Divisions Filter */}
      <div className="flex flex-wrap gap-2">
        {renderElements({
          of: divisions,
          keyExtractor: (d) => d.id,
          render: (d) => (
            <Button
              variant={currentDivision === d.tag ? "default" : "outline"}
              size="sm"
              onClick={() => handleSetDivision(d.tag)}
              className={`group relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out ${
                currentDivision === d.tag
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow"
                  : "bg-background text-foreground hover:bg-muted/60 hover:text-foreground hover:border-border/80 border"
              } focus-visible:ring-primary/50 focus-visible:ring-2 focus-visible:outline-none`}
            >
              <span className="relative z-10">{d.label}</span>
            </Button>
          ),
        })}
      </div>

      {/* Work Programs Filter */}
      <div className="flex flex-wrap gap-2">
        {renderElements({
          of: programs,
          keyExtractor: (w) => w.id,
          render: (w) => (
            <Button
              variant={currentProgram === w.tag ? "default" : "outline"}
              size="sm"
              onClick={() => handleSetProgram(w.tag)}
              className={`group relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out ${
                currentProgram === w.tag
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow"
                  : "bg-background text-foreground hover:bg-muted/60 hover:text-foreground hover:border-border/80 border"
              } focus-visible:ring-primary/50 focus-visible:ring-2 focus-visible:outline-none`}
            >
              <span className="relative z-10">{w.label}</span>
            </Button>
          ),
        })}
      </div>
    </header>
  );
};
