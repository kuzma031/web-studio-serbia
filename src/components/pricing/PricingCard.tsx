import Link from "next/link";
import { Check, Star } from "lucide-react";
import { Package } from "@/shared/packages";

interface PricingCardProps {
  pkg: Package;
  variant?: "compact" | "full";
}

export function PricingCard({ pkg, variant = "compact" }: PricingCardProps) {
  const isCompact = variant === "compact";

  return (
    <div
      className={`card-elevated p-8 relative flex flex-col ${
        pkg.popular
          ? isCompact
            ? "border-2 border-primary"
            : "border-2 border-primary lg:scale-105"
          : ""
      }`}
    >
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
            <Star size={14} />
            Najpopularnije
          </span>
        </div>
      )}

      <div className={`text-center ${isCompact ? "mb-6" : "mb-8"}`}>
        <h3 className={`font-bold mb-2 ${isCompact ? "text-xl" : "text-2xl"}`}>
          {pkg.name}
        </h3>
        <div className={isCompact ? "mb-2" : "mb-3"}>
          {pkg.price ? (
            <div className="flex flex-col items-center gap-1">
              <span
                className={`text-muted-foreground line-through ${
                  isCompact ? "text-lg" : "text-xl"
                }`}
              >
                {pkg.regularPrice}
              </span>
              <div className="flex items-baseline gap-1">
                <span
                  className={`font-extrabold text-accent ${
                    isCompact ? "text-4xl" : "text-5xl"
                  }`}
                >
                  {pkg.price}
                </span>
                <span className="text-sm text-muted-foreground">/godišnje</span>
              </div>
            </div>
          ) : (
            <span
              className={`font-bold text-primary ${
                isCompact ? "text-2xl" : "text-3xl"
              }`}
            >
              Po dogovoru
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground">{pkg.description}</p>
        {/* {!isCompact && (
          <p className="text-sm text-primary font-medium mt-2">
            Rok izrade: {pkg.timeline}
          </p>
        )} */}
      </div>

      <div className="flex-1">
        {!isCompact && (
          <p className="text-sm font-semibold text-foreground mb-3">
            Uključeno:
          </p>
        )}
        <ul className={`space-y-3 ${isCompact ? "mb-8" : "mb-6"}`}>
          {pkg.features.slice(0, isCompact ? 6 : undefined).map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {!isCompact && pkg.notIncluded && pkg.notIncluded.length > 0 && (
          <>
            <p className="text-sm font-semibold text-muted-foreground mb-3">
              Nije uključeno:
            </p>
            <ul className="space-y-2 mb-6">
              {pkg.notIncluded.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="text-sm">• {feature}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <Link
        href={`/kontakt?paket=${pkg.id}`}
        className={`w-full text-center ${
          pkg.popular ? "btn-accent" : "btn-outline"
        }`}
      >
        {pkg.price ? "Izaberi paket" : "Kontaktiraj nas"}
      </Link>
    </div>
  );
}
