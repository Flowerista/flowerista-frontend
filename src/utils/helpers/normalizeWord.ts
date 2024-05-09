export const normalizeWord = (size: string) => {
  const [firstChar, ...otherChar] = size.split('');

  return [
    firstChar.toUpperCase(),
    ...otherChar.map((item) => item.toLowerCase())
  ].join('');
};
