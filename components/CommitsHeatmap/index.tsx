import * as React from 'react';
import './CommitsHeatmap.scss';

export type CommitHeatmapDataType = {
  date: string;
  commits: number;
}[];

export type CommitsHeatmapPropsType = {
  data: CommitHeatmapDataType;
};

export const CommitsHeatmap = ({ data }: CommitsHeatmapPropsType) => {
  const [hovered, setHovered] = React.useState<CommitHeatmapDataType[0] | null>(
    null
  );
  const [tooltipPos, setTooltipPos] = React.useState<{
    x: number;
    y: number;
  } | null>(null);

  const heatmapRef = React.useRef<HTMLDivElement | null>(null);

  const sortedData = [...data].sort((a, b) => a.date.localeCompare(b.date));
  const startDate = new Date(`${sortedData[0].date}T00:00:00.000Z`);
  const endDate = new Date(
    `${sortedData[sortedData.length - 1].date}T00:00:00.000Z`
  );

  const commitsByDate = new Map(sortedData.map((entry) => [entry.date, entry]));

  const allDays: CommitHeatmapDataType = [];
  for (
    let d = new Date(startDate);
    d <= endDate;
    d.setUTCDate(d.getUTCDate() + 1)
  ) {
    const dateStr = d.toISOString().split('T')[0];
    const existing = commitsByDate.get(dateStr);
    allDays.push(existing || { date: dateStr, commits: 0 });
  }

  const maxCommits = Math.max(...sortedData.map((entry) => entry.commits), 1);

  const getColorClass = (commits: number) => {
    if (commits === 0) return 'level-0';
    const intensity = commits / maxCommits;
    if (intensity < 0.25) return 'level-1';
    if (intensity < 0.5) return 'level-2';
    if (intensity < 0.75) return 'level-3';
    return 'level-4';
  };

  const firstWeekday = startDate.getUTCDay();
  const paddedDays: ({ date: string; commits: number } | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...allDays,
  ];

  const remainder = paddedDays.length % 7;
  if (remainder !== 0) {
    const trailing = 7 - remainder;
    for (let i = 0; i < trailing; i += 1) {
      paddedDays.push(null);
    }
  }

  const weeks: ({ date: string; commits: number } | null)[][] = [];
  for (let i = 0; i < paddedDays.length; i += 7) {
    weeks.push(paddedDays.slice(i, i + 7));
  }

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const todayDate = new Date();
  const today = `${todayDate.getUTCFullYear()}-${String(todayDate.getUTCMonth() + 1).padStart(2, '0')}-${String(todayDate.getUTCDate()).padStart(2, '0')}`;

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLDivElement>,
    day: CommitHeatmapDataType[0]
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHovered(day);
    setTooltipPos({
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
    });
  };

  const handleMouseLeave = () => {
    setHovered(null);
    setTooltipPos(null);
  };

  return (
    <div className="heatmap" ref={heatmapRef}>
      {/* Left side days */}
      <div className="heatmap__days">
        {daysOfWeek.map((day) => (
          <div key={day} className="heatmap__day-label">
            {day}
          </div>
        ))}
      </div>

      {/* Scrollable weeks */}
      <div className="heatmap__scroll">
        <div className="heatmap__container">
          {weeks.map((week, wi) => (
            <div key={wi} className="heatmap__week">
              {week.map((day, di) => {
                const isFuture = Boolean(day && day.date > today);
                const isInteractive = Boolean(day && !isFuture);

                return (
                <div
                  key={di}
                  className={`heatmap__square heatmap__square--${getColorClass(
                    day?.commits ?? 0
                  )} ${isFuture ? 'heatmap__square--future' : ''}`}
                  onMouseEnter={(e) => {
                    if (isInteractive && day) handleMouseEnter(e, day);
                  }}
                  onMouseLeave={handleMouseLeave}
                />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Tooltip rendered at top-level */}
      {hovered && tooltipPos && (
        <div
          className="heatmap__tooltip"
          style={{
            top: tooltipPos.y,
            left: tooltipPos.x,
          }}
        >
          <span>{hovered.date}</span>
          <strong>{hovered.commits} commits</strong>
        </div>
      )}
    </div>
  );
};
