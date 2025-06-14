
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, TrendingDown, MapPin, Users, Clock } from 'lucide-react';

const CostCalculator = () => {
  const [teamSize, setTeamSize] = useState(1);
  const [role, setRole] = useState('');
  const [experience, setExperience] = useState('');
  const [region, setRegion] = useState('');
  const [duration, setDuration] = useState(1);

  // Our internal rates (not shown to users)
  const ourRates = {
    'junior': {
      '0-1': 10,
      '1-2': 15,
      '2-3': 20
    },
    'mid': {
      '4-5': 30,
      '5-7': 40
    },
    'senior': {
      '7-10': 50,
      '10+': 75
    },
    'expert': {
      '10+': 75,
      'lead': 100
    }
  };

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

  const calculateCost = () => {
    if (!role || !experience || !region) return null;

    const ourRate = ourRates[role as keyof typeof ourRates]?.[experience as keyof typeof ourRates['junior']];
    const marketRate = marketRates[region as keyof typeof marketRates]?.[role as keyof typeof marketRates['americas']]?.[experience as keyof typeof marketRates['americas']['junior']];

    if (!ourRate || !marketRate) return null;

    const monthlyHours = 160; // Standard work month
    const ourMonthlyCost = ourRate * monthlyHours * teamSize;
    const marketMonthlyCost = marketRate * monthlyHours * teamSize;
    const totalCost = ourMonthlyCost * duration;
    const marketTotalCost = marketMonthlyCost * duration;
    const savings = marketTotalCost - totalCost;
    const savingsPercentage = ((savings / marketTotalCost) * 100).toFixed(0);

    return {
      totalCost,
      marketTotalCost,
      savings,
      savingsPercentage
    };
  };

  const results = calculateCost();

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
    <div className="max-w-4xl mx-auto">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl">
            <Calculator className="mr-3 h-6 w-6 text-primary" />
            Project Cost Estimator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label>Team Size</Label>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <Input
                  type="number"
                  min="1"
                  max="50"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="flex-1"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Role Level</Label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger>
                  <SelectValue placeholder="Select role level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="junior">Junior Resources</SelectItem>
                  <SelectItem value="mid">Mid-Level Resources</SelectItem>
                  <SelectItem value="senior">Senior Level Resources</SelectItem>
                  <SelectItem value="expert">Subject Matter Experts</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Experience Level</Label>
              <Select value={experience} onValueChange={setExperience} disabled={!role}>
                <SelectTrigger>
                  <SelectValue placeholder="Select experience" />
                </SelectTrigger>
                <SelectContent>
                  {role === 'junior' && (
                    <>
                      <SelectItem value="0-1">0-1 years</SelectItem>
                      <SelectItem value="1-2">1-2 years</SelectItem>
                      <SelectItem value="2-3">2-3 years</SelectItem>
                    </>
                  )}
                  {role === 'mid' && (
                    <>
                      <SelectItem value="4-5">4-5 years</SelectItem>
                      <SelectItem value="5-7">5-7 years</SelectItem>
                    </>
                  )}
                  {role === 'senior' && (
                    <>
                      <SelectItem value="7-10">7-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </>
                  )}
                  {role === 'expert' && (
                    <>
                      <SelectItem value="10+">10+ years</SelectItem>
                      <SelectItem value="lead">Lead/Architect level</SelectItem>
                    </>
                  )}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Region</Label>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <Select value={region} onValueChange={setRegion}>
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="americas">Americas</SelectItem>
                    <SelectItem value="emea">EMEA</SelectItem>
                    <SelectItem value="apac">APAC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Project Duration (months)</Label>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <Input
                  type="number"
                  min="1"
                  max="24"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="flex-1"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {results && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-primary/20 bg-gradient-to-br from-background to-muted/20">
            <CardHeader>
              <CardTitle className="text-xl">Cost Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Regional Market Rate ({getRegionLabel(region)})</div>
                  <div className="text-2xl font-bold">${results.marketTotalCost.toLocaleString()}</div>
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

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Project Configuration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Team Size:</span>
                  <span className="font-medium">{teamSize} {teamSize === 1 ? 'person' : 'people'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Role:</span>
                  <span className="font-medium">{getRoleLabel(role)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Experience:</span>
                  <span className="font-medium">{getExperienceLabel(experience)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Region:</span>
                  <span className="font-medium">{getRegionLabel(region)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium">{duration} {duration === 1 ? 'month' : 'months'}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <Card className="mt-6 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-start space-x-3">
            <TrendingDown className="h-6 w-6 text-primary mt-1" />
            <div>
              <h4 className="font-semibold text-lg mb-2">Why Choose Dharesque?</h4>
              <p className="text-muted-foreground mb-3">
                Get the same quality of work at significantly lower costs compared to regional market rates.
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• No hidden fees or overhead costs</li>
                <li>• Direct access to skilled professionals</li>
                <li>• Flexible engagement models</li>
                <li>• 24/7 support available</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CostCalculator;
