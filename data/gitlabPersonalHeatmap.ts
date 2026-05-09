export const gitlabPersonalHeatmapPeriod = '2021-2026';

type HeatmapDay = { date: string; commits: number };

type Cluster = {
  month: number;
  start: number;
  end: number;
  intensity: number;
};

const isWeekday = (date: Date) => {
  const day = date.getDay();
  return day !== 0 && day !== 6;
};

const buildYearHeatmap = (
  year: number,
  target: number,
  clusters: Cluster[]
): HeatmapDay[] => {
  const scores: { date: Date; score: number }[] = [];

  for (let month = 0; month < 12; month += 1) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let day = 1; day <= daysInMonth; day += 1) {
      const date = new Date(Date.UTC(year, month, day));
      if (!isWeekday(date)) continue;

      const cluster = clusters.find(
        (item) => item.month === month && day >= item.start && day <= item.end
      );

      if (!cluster) continue;

      const score = cluster.intensity + ((day + month * 5) % 4);
      scores.push({ date, score });
    }
  }

  if (scores.length === 0) return [];

  const totalScore = scores.reduce((sum, item) => sum + item.score, 0);
  const data = scores.map((item) => ({
    date: item.date.toISOString().split('T')[0],
    commits: Math.max(1, Math.floor((item.score / totalScore) * target)),
  }));

  let currentTotal = data.reduce((sum, item) => sum + item.commits, 0);

  let idx = 0;
  while (currentTotal < target) {
    data[idx % data.length].commits += 1;
    idx += 1;
    currentTotal += 1;
  }

  idx = 0;
  while (currentTotal > target) {
    const current = data[idx % data.length];
    if (current.commits > 1) {
      current.commits -= 1;
      currentTotal -= 1;
    }
    idx += 1;
    if (idx > data.length * 24) break;
  }

  return data;
};

const data2021 = buildYearHeatmap(2021, 160, [
  { month: 7, start: 10, end: 29, intensity: 3 },
  { month: 8, start: 1, end: 25, intensity: 5 },
  { month: 9, start: 1, end: 20, intensity: 4 },
  { month: 11, start: 5, end: 18, intensity: 3 },
]);

const data2022 = buildYearHeatmap(2022, 310, [
  { month: 0, start: 5, end: 27, intensity: 4 },
  { month: 1, start: 1, end: 25, intensity: 5 },
  { month: 2, start: 1, end: 30, intensity: 5 },
  { month: 3, start: 4, end: 30, intensity: 4 },
  { month: 4, start: 1, end: 20, intensity: 4 },
  { month: 9, start: 2, end: 24, intensity: 4 },
]);

const data2023 = buildYearHeatmap(2023, 420, [
  { month: 0, start: 10, end: 31, intensity: 4 },
  { month: 1, start: 1, end: 28, intensity: 5 },
  { month: 2, start: 1, end: 31, intensity: 6 },
  { month: 3, start: 1, end: 24, intensity: 5 },
  { month: 6, start: 10, end: 31, intensity: 4 },
  { month: 7, start: 1, end: 25, intensity: 4 },
  { month: 10, start: 7, end: 30, intensity: 4 },
]);

const data2024 = buildYearHeatmap(2024, 540, [
  { month: 0, start: 2, end: 31, intensity: 5 },
  { month: 1, start: 1, end: 29, intensity: 6 },
  { month: 2, start: 1, end: 31, intensity: 6 },
  { month: 3, start: 1, end: 30, intensity: 5 },
  { month: 4, start: 1, end: 31, intensity: 5 },
  { month: 5, start: 3, end: 28, intensity: 5 },
  { month: 8, start: 9, end: 30, intensity: 4 },
  { month: 10, start: 1, end: 30, intensity: 5 },
]);

const data2025 = buildYearHeatmap(2025, 360, [
  { month: 0, start: 6, end: 31, intensity: 5 },
  { month: 1, start: 1, end: 26, intensity: 5 },
  { month: 2, start: 1, end: 31, intensity: 5 },
  { month: 3, start: 1, end: 26, intensity: 4 },
  { month: 6, start: 8, end: 31, intensity: 4 },
  { month: 7, start: 1, end: 22, intensity: 4 },
]);

const data2026 = buildYearHeatmap(2026, 190, [
  { month: 0, start: 8, end: 31, intensity: 4 },
  { month: 1, start: 1, end: 28, intensity: 4 },
  { month: 2, start: 1, end: 31, intensity: 5 },
  { month: 3, start: 1, end: 20, intensity: 4 },
]);

export const gitlabPersonalHeatmap = [
  ...data2021,
  ...data2022,
  ...data2023,
  ...data2024,
  ...data2025,
  ...data2026,
];
