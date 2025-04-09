export function convertToISOFormat(dateStr) {
  const [day, month, year] = dateStr.split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

export const getPrevNextStations = (timeTableRows) => {
  const now = new Date();

  const validRows = timeTableRows
    ?.filter((row) => row.scheduledTime)
    .map((row) => ({
      ...row,
      scheduledDate: new Date(row.actualTime || row.scheduledTime),
    }))
    .sort((a, b) => a.scheduledDate - b.scheduledDate);

  if (!validRows || validRows.length === 0) return { prev: null, next: null };

  let prev = null;
  let next = null;

  for (let i = 0; i < validRows.length; i++) {
    if (validRows[i].scheduledDate > now) {
      next = validRows[i];
      prev = validRows[i - 1] || null;
      break;
    }
  }

  return { prev, next };
};
