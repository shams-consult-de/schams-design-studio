export interface ProjectTypeOption {
  id: string;
  name: string;
  category: "privat" | "investor" | "kommune";
  costPerSqmMin: number;
  costPerSqmMax: number;
  typicalSqm: number;
  minSqm: number;
  maxSqm: number;
  hoaiRateLph1_4: number; // Percentage for design & permit (~4-6%)
  hoaiRateLph1_8: number; // Percentage for full service (~10-14%)
  avgApprovalWeeks: string;
  description: string;
}

export const projectTypes: ProjectTypeOption[] = [
  {
    id: "efh-neubau",
    name: "Neubau Einfamilienhaus / Stadtvilla",
    category: "privat",
    costPerSqmMin: 2200,
    costPerSqmMax: 3100,
    typicalSqm: 180,
    minSqm: 100,
    maxSqm: 500,
    hoaiRateLph1_4: 0.05,
    hoaiRateLph1_8: 0.12,
    avgApprovalWeeks: "8 – 14 Wochen",
    description: "Individueller Entwurf, Bauantrag & schlüsselfertige Bauüberwachung.",
  },
  {
    id: "mfh-neubau",
    name: "Neubau Mehrfamilienhaus / Geschosswohnungsbau",
    category: "investor",
    costPerSqmMin: 1950,
    costPerSqmMax: 2750,
    typicalSqm: 650,
    minSqm: 300,
    maxSqm: 3500,
    hoaiRateLph1_4: 0.045,
    hoaiRateLph1_8: 0.105,
    avgApprovalWeeks: "12 – 20 Wochen",
    description: "Flächen- & Stellplatzoptimierung für maximale Rendite und Genehmigungssicherheit.",
  },
  {
    id: "sanierung-anbau",
    name: "Kernsanierung, Aufstockung oder Anbau",
    category: "privat",
    costPerSqmMin: 1200,
    costPerSqmMax: 2100,
    typicalSqm: 140,
    minSqm: 40,
    maxSqm: 600,
    hoaiRateLph1_4: 0.06,
    hoaiRateLph1_8: 0.135,
    avgApprovalWeeks: "6 – 12 Wochen",
    description: "Bausubstanzanalyse, Brandschutz, Statikabstimmung & KfW/QNG Förderung.",
  },
  {
    id: "nutzungsaenderung",
    name: "Nutzungsänderung & § 34 BauGB Genehmigung",
    category: "investor",
    costPerSqmMin: 400,
    costPerSqmMax: 900,
    typicalSqm: 250,
    minSqm: 50,
    maxSqm: 2000,
    hoaiRateLph1_4: 0.08,
    hoaiRateLph1_8: 0.12,
    avgApprovalWeeks: "6 – 10 Wochen",
    description: "Rechtssichere Umwandlung (z.B. Gewerbe zu Wohnen, Büro zu Praxis).",
  },
  {
    id: "bebauungsplan",
    name: "Bebauungsplan (VEP) & Städtebauliche Studie",
    category: "kommune",
    costPerSqmMin: 50,
    costPerSqmMax: 180,
    typicalSqm: 2500,
    minSqm: 500,
    maxSqm: 15000,
    hoaiRateLph1_4: 0.15,
    hoaiRateLph1_8: 0.2,
    avgApprovalWeeks: "6 – 18 Monate",
    description: "Bauleitplanung, Umweltbericht & Satzungsverfahren für Kommunen & Entwickler.",
  },
];

export interface RegionOption {
  id: string;
  name: string;
  factor: number;
}

export const regions: RegionOption[] = [
  { id: "frankfurt", name: "Frankfurt am Main", factor: 1.1 },
  { id: "offenbach", name: "Offenbach & Kreis Offenbach", factor: 1.0 },
  { id: "roedermark", name: "Rödermark / Rodgau / Dreieich", factor: 0.98 },
  { id: "darmstadt", name: "Darmstadt & Dieburg", factor: 1.02 },
  { id: "hanau", name: "Hanau & Main-Kinzig-Kreis", factor: 0.97 },
  { id: "taunus", name: "Bad Homburg / Hochtaunus", factor: 1.12 },
  { id: "wiesbaden", name: "Wiesbaden & Mainz", factor: 1.05 },
  { id: "other", name: "Sonstige Region Hessen / DE", factor: 1.0 },
];

export interface CalculationResult {
  estimatedBuildingCostMin: number;
  estimatedBuildingCostMax: number;
  estimatedFeeMin: number;
  estimatedFeeMax: number;
  avgApprovalWeeks: string;
  scopeName: string;
}

export function calculateProjectEstimate(
  projectTypeId: string,
  sqm: number,
  regionId: string,
  scope: "lph1_4" | "lph1_8"
): CalculationResult {
  const pType = projectTypes.find((p) => p.id === projectTypeId) || projectTypes[0];
  const reg = regions.find((r) => r.id === regionId) || regions[0];

  const buildingCostMin = Math.round(sqm * pType.costPerSqmMin * reg.factor);
  const buildingCostMax = Math.round(sqm * pType.costPerSqmMax * reg.factor);

  const rate = scope === "lph1_4" ? pType.hoaiRateLph1_4 : pType.hoaiRateLph1_8;
  const feeMin = Math.round(buildingCostMin * rate * 0.9);
  const feeMax = Math.round(buildingCostMax * rate * 1.1);

  const scopeName =
    scope === "lph1_4"
      ? "LPH 1–4 (Grundlagen, Entwurf & Baugenehmigung)"
      : "LPH 1–8 (Vollständige Planung, Ausschreibung & Bauleitung vor Ort)";

  return {
    estimatedBuildingCostMin: buildingCostMin,
    estimatedBuildingCostMax: buildingCostMax,
    estimatedFeeMin: feeMin,
    estimatedFeeMax: feeMax,
    avgApprovalWeeks: pType.avgApprovalWeeks,
    scopeName,
  };
}
