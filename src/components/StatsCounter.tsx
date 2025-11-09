interface StatsCounterProps {
  value: string;
  label: string;
}

export function StatsCounter({ value, label }: StatsCounterProps) {
  return (
    <div className="text-center space-y-2" data-testid="stats-counter">
      <div className="text-4xl lg:text-5xl font-bold text-primary" data-testid="stats-value">
        {value}
      </div>
      <div className="text-sm lg:text-base text-muted-foreground" data-testid="stats-label">
        {label}
      </div>
    </div>
  );
}
