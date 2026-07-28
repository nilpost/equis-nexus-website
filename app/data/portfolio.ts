export type ApprovalStatus = "approved" | "pending";
export type DisclosureLevel = "public" | "investor-only";

export type SourcedField = {
  label: string;
  value: string;
  source: string;
  asOf?: string;
  approval: ApprovalStatus;
  disclosure: DisclosureLevel;
};

export type PortfolioMetric = {
  key: "capital-improvement" | "ltv" | "net-equity" | "value-uplift";
  label: string;
  value: number | null;
  suffix: "%";
  methodology: string;
  asOf: string | null;
  source: string | null;
  approval: ApprovalStatus;
  disclosure: DisclosureLevel;
};

export type PortfolioAsset = {
  slug: string;
  publicName: string;
  assetNumber: string;
  location: string;
  acquiredYear: string;
  assetType: string;
  strategy: string;
  status: string;
  thesis: string[];
  facts: SourcedField[];
  timeline: Array<{
    year: string;
    title: string;
    description: string;
    approval: ApprovalStatus;
    disclosure: DisclosureLevel;
  }>;
  metrics: PortfolioMetric[];
};

export const jingumaeResidence: PortfolioAsset = {
  slug: "jingumae-residence",
  publicName: "Jingumae Residence",
  assetNumber: "Asset 01",
  location: "Jingumae · Shibuya · Tokyo",
  acquiredYear: "2026",
  assetType: "Urban residential asset",
  strategy: "Company use · Long-term hold · Active improvement",
  status: "Active stewardship",
  thesis: [
    "A central Tokyo location connecting Shibuya, Omotesando and the wider Jingumae district.",
    "A durable reinforced-concrete asset suited to considered improvement and long-term ownership.",
    "A first operating asset through which Equis Nexus applies disciplined acquisition, improvement and stewardship.",
  ],
  facts: [
    {
      label: "Location",
      value: "Jingumae, Shibuya, Tokyo",
      source: "Approved company record",
      approval: "approved",
      disclosure: "public",
    },
    {
      label: "Acquired",
      value: "2026",
      source: "Approved company record",
      approval: "approved",
      disclosure: "public",
    },
    {
      label: "Completion",
      value: "2002",
      source: "Mitsui Resident First building record",
      approval: "approved",
      disclosure: "public",
    },
    {
      label: "Structure",
      value: "Reinforced concrete",
      source: "Mitsui Resident First building record",
      approval: "approved",
      disclosure: "public",
    },
    {
      label: "Building scale",
      value: "Five floors",
      source: "Mitsui Resident First building record",
      approval: "approved",
      disclosure: "public",
    },
    {
      label: "Connectivity",
      value: "Shibuya · Omotesando",
      source: "Mitsui Resident First building record",
      approval: "approved",
      disclosure: "public",
    },
  ],
  timeline: [
    {
      year: "2026",
      title: "Acquisition",
      description:
        "Equis Nexus established its real-estate platform through the acquisition and corporate ownership of its first Japanese asset.",
      approval: "approved",
      disclosure: "public",
    },
    {
      year: "2026",
      title: "Improvement",
      description:
        "A considered programme of renovation, furnishing and operational preparation is advancing the asset’s long-term use.",
      approval: "approved",
      disclosure: "public",
    },
    {
      year: "Ongoing",
      title: "Stewardship",
      description:
        "The property is held for company use and managed with a long-term perspective on condition, utility and value.",
      approval: "approved",
      disclosure: "public",
    },
  ],
  metrics: [
    {
      key: "capital-improvement",
      label: "Capital-improvement progress",
      value: null,
      suffix: "%",
      methodology: "Expenditure to date divided by approved improvement budget.",
      asOf: null,
      source: null,
      approval: "pending",
      disclosure: "public",
    },
    {
      key: "ltv",
      label: "Loan-to-value",
      value: null,
      suffix: "%",
      methodology:
        "Outstanding secured debt divided by independently supported current value.",
      asOf: null,
      source: null,
      approval: "pending",
      disclosure: "public",
    },
    {
      key: "net-equity",
      label: "Net-equity ratio",
      value: null,
      suffix: "%",
      methodology: "Current value less debt, divided by current value.",
      asOf: null,
      source: null,
      approval: "pending",
      disclosure: "public",
    },
    {
      key: "value-uplift",
      label: "Unrealized value uplift",
      value: null,
      suffix: "%",
      methodology:
        "Independently supported current value less total cost basis, divided by total cost basis.",
      asOf: null,
      source: null,
      approval: "pending",
      disclosure: "public",
    },
  ],
};

export function approvedPublicFacts(asset: PortfolioAsset) {
  return asset.facts.filter(
    (fact) => fact.approval === "approved" && fact.disclosure === "public",
  );
}

export function approvedPublicMetrics(asset: PortfolioAsset) {
  return asset.metrics.filter(
    (metric) =>
      metric.approval === "approved" &&
      metric.disclosure === "public" &&
      metric.value !== null &&
      metric.asOf !== null &&
      metric.source !== null,
  );
}
