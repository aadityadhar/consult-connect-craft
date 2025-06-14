
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { TableCell, TableRow } from '@/components/ui/table';
import { Minus } from 'lucide-react';
import { ProjectRow as ProjectRowType } from '@/types/costCalculator';

interface ProjectRowProps {
  row: ProjectRowType;
  canRemove: boolean;
  onUpdate: (id: string, field: keyof ProjectRowType, value: string | number) => void;
  onRemove: (id: string) => void;
}

const ProjectRow = ({ row, canRemove, onUpdate, onRemove }: ProjectRowProps) => {
  console.log('ProjectRow render:', { row, roleLevel: row.roleLevel, experienceLevel: row.experienceLevel });

  const handleRoleLevelChange = (value: string) => {
    console.log('Role level changing to:', value);
    onUpdate(row.id, 'roleLevel', value);
    onUpdate(row.id, 'experienceLevel', ''); // Reset experience when role changes
  };

  const handleExperienceLevelChange = (value: string) => {
    console.log('Experience level changing to:', value);
    onUpdate(row.id, 'experienceLevel', value);
  };

  return (
    <TableRow>
      <TableCell>
        <Select 
          value={row.roleLevel}
          onValueChange={handleRoleLevelChange}
        >
          <SelectTrigger className="w-full">
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
          onValueChange={handleExperienceLevelChange}
          disabled={!row.roleLevel}
        >
          <SelectTrigger className="w-full">
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
          onChange={(e) => onUpdate(row.id, 'strength', Number(e.target.value))}
          className="w-full"
        />
      </TableCell>
      <TableCell>
        <Select 
          value={row.region}
          onValueChange={(value) => onUpdate(row.id, 'region', value)}
        >
          <SelectTrigger className="w-full">
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
          onChange={(e) => onUpdate(row.id, 'duration', Number(e.target.value))}
          className="w-full"
        />
      </TableCell>
      <TableCell>
        <div className="flex items-center space-x-2">
          {canRemove && (
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onRemove(row.id)}
              className="h-8 px-2 text-muted-foreground hover:text-foreground"
            >
              <Minus className="h-4 w-4" />
            </Button>
          )}
        </div>
      </TableCell>
    </TableRow>
  );
};

export default ProjectRow;
