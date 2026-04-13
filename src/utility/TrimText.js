const TrimWords = (text, length) => {
  const words = text.split(" ");
  const trimWords = words.slice(0, length);
  const trimedText = trimWords.join(" ");
  return `${trimedText}...`;
};

export { TrimWords };
