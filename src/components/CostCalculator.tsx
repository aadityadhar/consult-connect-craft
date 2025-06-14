
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Calculator, Plus, Minus } from 'lucide-react';

interface ProjectRow {
  id: string;
  roleLevel: string;
  experienceLevel: string;
  strength: number;
  region: string;
  duration: number;
}

const CostCalculator = () => {
  const [rows, setRows] = useState<ProjectRow[]>([
    { id: '1', roleLevel: '', experienceLevel: '', strength: 1, region: '', duration: 1 }
  ]);

  // Market rates by region for comparison
  const marketRates = {
    'americas': {
      'junior': { '0-1': 25, '1-2': 35, '2-3': 45 },
      'mid': { '4-5': 60, '5-7': 80 },
      'senior': { '7-10': 100, '10+': 125 },
      'expert': { '10+': 125, 'lead': 150 }
    },
    'emea': {
      'junior': { '0-1': 20, '1-2': 30, '2-3': 40 },
      'mid': { '4-5': 55, '5-7': 70 },
      'senior': { '7-10': 90, '10+': 115 },
      'expert': { '10+': 115, 'lead': 140 }
    },
    'apac': {
      'junior': { '0-1': 15, '1-2': 25, '2-3': 35 },
      'mid': { '4-5': 45, '5-7': 60 },
      'senior': { '7-10': 75, '10+': 95 },
      'expert': { '10+': 95, 'lead': 120 }
    }
  };

  const addRow = () => {
    const newRow: ProjectRow = {
      id: Date.now().toString(),
      roleLevel: '',
      experienceLevel: '',
      strength: 1,
      region: '',
      duration: 1
    };
    setRows([...rows, newRow]);
  };

  const removeRow = (id: string) => {
    if (rows.length > 1) {
      setRows(rows.filter(row => row.id !== id));
    }
  };

  const updateRow = (id: string, field: keyof ProjectRow, value: string | number) => {
    setRows(rows.map(row => 
      row.id === id ? { ...row, [field]: value } : row
    ));
  };

  const calculateTotalCost = () => {
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

  const getRoleLabel = (roleKey: string) => {
    const labels = {
      'junior': 'Junior Resources',
      'mid': 'Mid-Level Resources',
      'senior': 'Senior Level Resources',
      'expert': 'Subject Matter Experts'
    };
    return labels[roleKey as keyof typeof labels] || roleKey;
  };

  const getExperienceLabel = (expKey: string) => {
    const labels = {
      '0-1': '0-1 years',
      '1-2': '1-2 years',
      '2-3': '2-3 years',
      '4-5': '4-5 years',
      '5-7': '5-7 years',
      '7-10': '7-10 years',
      '10+': '10+ years',
      'lead': 'Lead/Architect level'
    };
    return labels[expKey as keyof typeof labels] || expKey;
  };

  const getRegionLabel = (regionKey: string) => {
    const labels = {
      'americas': 'Americas',
      'emea': 'EMEA',
      'apac': 'APAC'
    };
    return labels[regionKey as keyof typeof labels] || regionKey;
  };

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
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <Select 
                        value={row.roleLevel} 
                        onValueChange={(value) => {
                          updateRow(row.id, 'roleLevel', value);
                          updateRow(row.id, 'experienceLevel', ''); // Reset experience when role changes
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="junior">Junior Resources</SelectItem>
                          <SelectItem value="mid">Mid-Level Resources</SelectItem>
                          <SelectItem value="senior">Senior Level Resources</SelectItem>
                          <SelectItem value="expert">Subject Matter Experts</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select 
                        value={row.experienceLevel} 
                        onValueChange={(value) => updateRow(row.id, 'experienceLevel', value)}
                        disabled={!row.roleLevel}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience" />
                        </SelectTrigger>
                        <SelectContent>
                          {row.roleLevel === 'junior' && (
                            <>
                              <SelectItem value="0-1">0-1 years</SelectItem>
                              <SelectItem value="1-2">1-2 years</SelectItem>
                              <SelectItem value="2-3">2-3 years</SelectItem>
                            </>
                          )}
                          {row.roleLevel === 'mid' && (
                            <>
                              <SelectItem value="4-5">4-5 years</SelectItem>
                              <SelectItem value="5-7">5-7 years</SelectItem>
                            </>
                          )}
                          {row.roleLevel === 'senior' && (
                            <>
                              <SelectItem value="7-10">7-10 years</SelectItem>
                              <SelectItem value="10+">10+ years</SelectItem>
                            </>
                          )}
                          {row.roleLevel === 'expert' && (
                            <>
                              <SelectItem value="10+">10+ years</SelectItem>
                              <SelectItem value="lead">Lead/Architect level</SelectItem>
                            </>
                          )}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        min="1"
                        max="50"
                        value={row.strength}
                        onChange={(e) => updateRow(row.id, 'strength', Number(e.target.value))}
                      />
                    </TableCell>
                    <TableCell>
                      <Select 
                        value={row.region} 
                        onValueChange={(value) => updateRow(row.id, 'region', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select region" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="americas">Americas</SelectItem>
                          <SelectItem value="emea">EMEA</SelectItem>
                          <SelectItem value="apac">APAC</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        min="1"
                        max="24"
                        value={row.duration}
                        onChange={(e) => updateRow(row.id, 'duration', Number(e.target.value))}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={addRow}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                        {rows.length > 1 && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => removeRow(row.id)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {results.totalMarketCost > 0 && (
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
      )}
    </div>
  );
};

export default CostCalculator;
