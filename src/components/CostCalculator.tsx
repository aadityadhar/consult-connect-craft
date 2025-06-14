
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, ExternalLink, TrendingUp, DollarSign } from 'lucide-react';

const CostCalculator = () => {
  const [juniorCount, setJuniorCount] = useState(0);
  const [midCount, setMidCount] = useState(0);
  const [seniorCount, setSeniorCount] = useState(0);
  const [smeCount, setSmeCount] = useState(0);
  const [duration, setDuration] = useState(1);
  const [region, setRegion] = useState('APAC');
  const [showResults, setShowResults] = useState(false);

  // Regional cost multipliers and market rates (sample data)
  const regionData = {
    'APAC': {
      name: 'Asia Pacific',
      multiplier: 1,
      marketRates: {
        junior: 25,
        mid: 45,
        senior: 70,
        sme: 90
      },
      savings: '60-70%'
    },
    'Americas': {
      name: 'Americas',
      multiplier: 2.5,
      marketRates: {
        junior: 65,
        mid: 110,
        senior: 175,
        sme: 225
      },
      savings: '40-50%'
    },
    'EMEA': {
      name: 'Europe, Middle East & Africa',
      multiplier: 2.2,
      marketRates: {
        junior: 55,
        mid: 95,
        senior: 155,
        sme: 200
      },
      savings: '45-55%'
    }
  };

  const handleCalculate = () => {
    if (juniorCount + midCount + seniorCount + smeCount > 0) {
      setShowResults(true);
    }
  };

  const selectedRegionData = regionData[region];

  return (
    <div className="max-w-6xl mx-auto">
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calculator className="mr-2 h-5 w-5" />
            Project Cost Estimator
          </CardTitle>
          <CardDescription>
            Estimate your project costs based on team composition, duration, and region
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            <div className="space-y-2">
              <Label htmlFor="junior">Junior Resources</Label>
              <Input
                id="junior"
                type="number"
                min="0"
                value={juniorCount}
                onChange={(e) => setJuniorCount(Number(e.target.value))}
                placeholder="0"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="mid">Mid-Level Resources</Label>
              <Input
                id="mid"
                type="number"
                min="0"
                value={midCount}
                onChange={(e) => setMidCount(Number(e.target.value))}
                placeholder="0"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="senior">Senior Level Resources</Label>
              <Input
                id="senior"
                type="number"
                min="0"
                value={seniorCount}
                onChange={(e) => setSeniorCount(Number(e.target.value))}
                placeholder="0"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="sme">Subject Matter Experts</Label>
              <Input
                id="sme"
                type="number"
                min="0"
                value={smeCount}
                onChange={(e) => setSmeCount(Number(e.target.value))}
                placeholder="0"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="duration">Duration (Months)</Label>
              <Select value={duration.toString()} onValueChange={(value) => setDuration(Number(value))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 24 }, (_, i) => i + 1).map((month) => (
                    <SelectItem key={month} value={month.toString()}>
                      {month} {month === 1 ? 'Month' : 'Months'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="region">Region</Label>
              <Select value={region} onValueChange={setRegion}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="APAC">APAC</SelectItem>
                  <SelectItem value="Americas">Americas</SelectItem>
                  <SelectItem value="EMEA">EMEA</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Regional Cost Comparison */}
          <div className="bg-muted/30 rounded-lg p-6">
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-primary" />
              Regional Market Comparison
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(regionData).map(([key, data]) => (
                <Card key={key} className={`${region === key ? 'border-primary bg-primary/5' : 'border-muted'} transition-all`}>
                  <CardContent className="p-4">
                    <h5 className="font-semibold mb-2">{data.name}</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Junior:</span>
                        <span>${data.marketRates.junior}/hr</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Mid-Level:</span>
                        <span>${data.marketRates.mid}/hr</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Senior:</span>
                        <span>${data.marketRates.senior}/hr</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">SME:</span>
                        <span>${data.marketRates.sme}/hr</span>
                      </div>
                      <div className="pt-2 border-t">
                        <div className="flex justify-between font-medium text-primary">
                          <span>Your Savings:</span>
                          <span>{data.savings}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <Button onClick={handleCalculate} className="w-full" size="lg">
            Calculate Estimated Cost
          </Button>
          
          {showResults && (
            <div className="mt-8 space-y-4">
              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold mb-4">Team Summary</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Card className="border-primary/20">
                    <CardContent className="p-4">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-1">Project Duration</p>
                        <p className="text-2xl font-bold text-primary">
                          {duration} {duration === 1 ? 'Month' : 'Months'}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-1">Total Team Size</p>
                        <p className="text-2xl font-bold">
                          {juniorCount + midCount + seniorCount + smeCount}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Resources
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20">
                    <CardContent className="p-4">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-1">Selected Region</p>
                        <p className="text-lg font-bold text-primary">
                          {selectedRegionData.name}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Estimated Savings: {selectedRegionData.savings}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {(juniorCount > 0 || midCount > 0 || seniorCount > 0 || smeCount > 0) && (
                  <div className="space-y-2">
                    <h5 className="font-medium">Team Composition:</h5>
                    {juniorCount > 0 && (
                      <div className="flex justify-between text-sm">
                        <span>{juniorCount} Junior Resource{juniorCount > 1 ? 's' : ''}</span>
                      </div>
                    )}
                    {midCount > 0 && (
                      <div className="flex justify-between text-sm">
                        <span>{midCount} Mid-Level Resource{midCount > 1 ? 's' : ''}</span>
                      </div>
                    )}
                    {seniorCount > 0 && (
                      <div className="flex justify-between text-sm">
                        <span>{seniorCount} Senior Level Resource{seniorCount > 1 ? 's' : ''}</span>
                      </div>
                    )}
                    {smeCount > 0 && (
                      <div className="flex justify-between text-sm">
                        <span>{smeCount} SME{smeCount > 1 ? 's' : ''}</span>
                      </div>
                    )}
                  </div>
                )}
                
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-center mb-3 flex items-center justify-center">
                    <DollarSign className="w-4 h-4 mr-1 text-primary" />
                    Want an official quote tailored to your specific requirements?
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#contact">
                      Get Official Quote
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CostCalculator;
