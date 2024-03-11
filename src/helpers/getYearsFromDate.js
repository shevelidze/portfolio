function getYearsFromDate(year, month) {
  const now = new Date();
  const targetDate = new Date(year, month);

  return new Date(now - targetDate).getFullYear() - 1970;
}

export { getYearsFromDate };