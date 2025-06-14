
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CostResults } from '@/types/costCalculator';

interface CostSummaryProps {
  results: CostResults;
}

const CostSummary = ({ results }: CostSummaryProps) => {
  if (results.totalMarketCost <= 0) {
    return null;
  }

  return (
    <Card className="border-primary/20 bg-gradient-to-br from-background to-muted/20">
      <CardHeader>
        <CardTitle className="text-xl">Cost Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-muted/50 rounded-lg">
            <div className="text-sm text-muted-foreground mb-1">Regional Market Rate</div>
            <div className="text-2xl font-bold">${results.totalMarketCost.toLocaleString()}</div>
          </div>
          <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
            <div className="text-sm text-primary mb-1">Your Savings with Dharesque</div>
            <div className="text-2xl font-bold text-primary">
              ${results.savings.toLocaleString()} ({results.savingsPercentage}% less)
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CostSummary;
