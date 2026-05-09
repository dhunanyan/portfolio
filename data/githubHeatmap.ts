export const githubHeatmapPeriod = '2021-2026';

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

      const score = cluster.intensity + ((day + month * 3) % 3);
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
    if (idx > data.length * 20) break;
  }

  return data;
};

const data2021 = buildYearHeatmap(2021, 505, [
  { month: 6, start: 26, end: 30, intensity: 2 },
  { month: 7, start: 10, end: 13, intensity: 4 },
  { month: 8, start: 6, end: 28, intensity: 6 },
  { month: 9, start: 7, end: 22, intensity: 5 },
  { month: 10, start: 3, end: 18, intensity: 5 },
  { month: 11, start: 8, end: 30, intensity: 4 },
]);

const data2022 = buildYearHeatmap(2022, 559, [
  { month: 1, start: 7, end: 14, intensity: 4 },
  { month: 2, start: 1, end: 31, intensity: 6 },
  { month: 3, start: 4, end: 30, intensity: 7 },
  { month: 4, start: 2, end: 27, intensity: 6 },
  { month: 5, start: 2, end: 30, intensity: 5 },
  { month: 9, start: 3, end: 21, intensity: 5 },
  { month: 10, start: 1, end: 30, intensity: 6 },
]);

const data2023 = buildYearHeatmap(2023, 158, [
  { month: 2, start: 6, end: 16, intensity: 5 },
  { month: 3, start: 12, end: 20, intensity: 4 },
  { month: 4, start: 1, end: 18, intensity: 5 },
  { month: 7, start: 3, end: 31, intensity: 4 },
  { month: 8, start: 1, end: 8, intensity: 3 },
  { month: 9, start: 10, end: 24, intensity: 3 },
  { month: 10, start: 6, end: 12, intensity: 2 },
  { month: 11, start: 5, end: 22, intensity: 3 },
]);

const data2024 = buildYearHeatmap(2024, 1077, [
  { month: 1, start: 1, end: 29, intensity: 4 },
  { month: 2, start: 1, end: 12, intensity: 3 },
  { month: 7, start: 15, end: 31, intensity: 5 },
  { month: 8, start: 1, end: 30, intensity: 8 },
  { month: 9, start: 1, end: 31, intensity: 9 },
  { month: 10, start: 1, end: 30, intensity: 10 },
  { month: 11, start: 1, end: 31, intensity: 8 },
]);

const data2025 = buildYearHeatmap(2025, 268, [
  { month: 1, start: 3, end: 28, intensity: 5 },
  { month: 2, start: 3, end: 27, intensity: 6 },
  { month: 3, start: 1, end: 30, intensity: 6 },
  { month: 4, start: 1, end: 14, intensity: 4 },
  { month: 7, start: 1, end: 18, intensity: 6 },
  { month: 8, start: 20, end: 24, intensity: 3 },
  { month: 10, start: 8, end: 22, intensity: 4 },
]);

const data2026 = buildYearHeatmap(2026, 198, [
  { month: 1, start: 10, end: 18, intensity: 3 },
  { month: 2, start: 3, end: 28, intensity: 6 },
  { month: 3, start: 1, end: 30, intensity: 7 },
  { month: 4, start: 1, end: 10, intensity: 4 },
]);

export const githubHeatmap = [
  ...data2021,
  ...data2022,
  ...data2023,
  ...data2024,
  ...data2025,
  ...data2026,
];
