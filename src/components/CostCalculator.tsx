
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Calculator, Plus } from 'lucide-react';
import { ProjectRow as ProjectRowType, CostResults } from '@/types/costCalculator';
import { marketRates } from '@/data/marketRates';
import ProjectRow from './costCalculator/ProjectRow';
import CostSummary from './costCalculator/CostSummary';

const CostCalculator = () => {
  const [rows, setRows] = useState<ProjectRowType[]>([
    { id: '1', roleLevel: '', experienceLevel: '', strength: 1, region: '', duration: 1 }
  ]);

  console.log('CostCalculator render, rows:', rows);

  const addRow = () => {
    const newRow: ProjectRowType = {
      id: Date.now().toString(),
      roleLevel: '',
      experienceLevel: '',
      strength: 1,
      region: '',
      duration: 1
    };
    console.log('Adding new row:', newRow);
    setRows(prev => [...prev, newRow]);
  };

  const removeRow = (id: string) => {
    if (rows.length > 1) {
      console.log('Removing row:', id);
      setRows(prev => prev.filter(row => row.id !== id));
    }
  };

  const updateRow = (id: string, field: keyof ProjectRowType, value: string | number) => {
    console.log('Updating row:', { id, field, value });
    setRows(prev => {
      const updated = prev.map(row => 
        row.id === id ? { ...row, [field]: value } : row
      );
      console.log('Updated rows:', updated);
      return updated;
    });
  };

  const calculateTotalCost = (): CostResults => {
    let totalMarketCost = 0;
    let totalOurCost = 0;

    rows.forEach(row => {
      if (row.roleLevel && row.experienceLevel && row.region) {
        const marketRate = marketRates[row.region as keyof typeof marketRates]?.[row.roleLevel as keyof typeof marketRates['americas']]?.[row.experienceLevel as keyof typeof marketRates['americas']['junior']];
        
        if (marketRate) {
          const monthlyHours = 160;
          const rowMarketCost = marketRate * monthlyHours * row.strength * row.duration;
          totalMarketCost += rowMarketCost;
          
          // Our rates are significantly lower (rough estimate for calculation)
          const ourRate = marketRate * 0.4; // Approximately 60% savings
          const rowOurCost = ourRate * monthlyHours * row.strength * row.duration;
          totalOurCost += rowOurCost;
        }
      }
    });

    const savings = totalMarketCost - totalOurCost;
    const savingsPercentage = totalMarketCost > 0 ? ((savings / totalMarketCost) * 100).toFixed(0) : '0';

    return {
      totalMarketCost,
      totalOurCost,
      savings,
      savingsPercentage
    };
  };

  const results = calculateTotalCost();

  return (
    <div className="max-w-6xl mx-auto">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl">
            <Calculator className="mr-3 h-6 w-6 text-primary" />
            Project Cost Estimator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Role Level</TableHead>
                  <TableHead>Experience Level</TableHead>
                  <TableHead>Strength</TableHead>
                  <TableHead>Region</TableHead>
                  <TableHead>Project Duration (months)</TableHead>
                  {rows.length > 1 && <TableHead>Actions</TableHead>}
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row) => (
                  <ProjectRow
                    key={row.id}
                    row={row}
                    canRemove={rows.length > 1}
                    showActions={rows.length > 1}
                    onUpdate={updateRow}
                    onRemove={removeRow}
                  />
                ))}
              </TableBody>
            </Table>
            
            <div className="flex justify-start">
              <Button
                onClick={addRow}
                variant="outline"
                className="flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Add Row
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <CostSummary results={results} />
    </div>
  );
};

export default CostCalculator;
