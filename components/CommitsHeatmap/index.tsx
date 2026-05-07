import * as React from 'react';
import './CommitsHeatmap.scss';
import type { CommitHeatmapDataType } from '@config';

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

  const startDate = new Date(data[0].date);
  const endDate = new Date(data[data.length - 1].date);
  const allDays: CommitHeatmapDataType = [];
  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().split('T')[0];
    const existing = data.find((x) => x.date === dateStr);
    allDays.push(existing || { date: dateStr, commits: 0 });
  }

  const maxCommits = Math.max(...data.map((d) => d.commits));

  const getColorClass = (commits: number) => {
    if (commits === 0) return 'level-0';
    const intensity = commits / maxCommits;
    if (intensity < 0.25) return 'level-1';
    if (intensity < 0.5) return 'level-2';
    if (intensity < 0.75) return 'level-3';
    return 'level-4';
  };

  const weeks: CommitHeatmapDataType[] = [];
  for (let i = 0; i < allDays.length; i += 7) {
    weeks.push(allDays.slice(i, i + 7));
  }

  const daysOfWeek = ['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue'];

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
              {week.map((day, di) => (
                <div
                  key={di}
                  className={`heatmap__square heatmap__square--${getColorClass(
                    day.commits
                  )}`}
                  onMouseEnter={(e) => handleMouseEnter(e, day)}
                  onMouseLeave={handleMouseLeave}
                />
              ))}
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
