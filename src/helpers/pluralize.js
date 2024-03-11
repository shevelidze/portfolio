function pluralize(count, word) {
  return count % 10 === 1 && count !== 11 ? word : word + "s";
}

export { pluralize };
