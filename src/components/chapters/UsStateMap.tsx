"use client";

import usaMap from "@svg-maps/usa";
import { findUsState } from "@/data/us-states";

interface UsStateMapProps {
  selectedState: string | null;
  onSelect: (stateName: string) => void;
}

export default function UsStateMap({
  selectedState,
  onSelect,
}: UsStateMapProps) {
  return (
    <div className="w-full">
      <p className="text-sm text-muted-foreground mb-4 text-center">
        Click your state on the map to begin your county chapter application.
      </p>
      <div className="rounded-xl border border-ink-200 bg-cream-50 p-3 sm:p-6 overflow-x-auto">
        <svg
          viewBox={usaMap.viewBox}
          role="img"
          aria-label="United States map. Select your state."
          className="w-full h-auto min-w-[280px] max-h-[420px] mx-auto"
        >
          {usaMap.locations.map((location) => {
            const isSelected = selectedState === location.name;

            return (
              <path
                key={location.id}
                d={location.path}
                tabIndex={0}
                role="button"
                aria-label={location.name}
                aria-pressed={isSelected}
                onClick={() => onSelect(location.name)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onSelect(location.name);
                  }
                }}
                className={`cursor-pointer stroke-white stroke-[0.5] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-1 ${
                  isSelected
                    ? "fill-gold-500 hover:fill-gold-400"
                    : "fill-ink-300 hover:fill-gold-300"
                }`}
              />
            );
          })}
        </svg>
      </div>
      {selectedState && (
        <p className="mt-3 text-sm text-center text-foreground">
          Selected state:{" "}
          <span className="font-semibold text-gold-700">
            {selectedState}
            {findUsState(selectedState)
              ? ` (${findUsState(selectedState)!.abbreviation})`
              : ""}
          </span>
        </p>
      )}
    </div>
  );
}
