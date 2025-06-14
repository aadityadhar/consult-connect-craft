
export interface ProjectRow {
  id: string;
  roleLevel: string;
  experienceLevel: string;
  strength: number;
  region: string;
  duration: number;
}

export interface CostResults {
  totalMarketCost: number;
  totalOurCost: number;
  savings: number;
  savingsPercentage: string;
}
