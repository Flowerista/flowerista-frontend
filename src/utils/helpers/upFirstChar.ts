export const upFirstChar = (str: string): string => {
  const strTrim = str.trim();
  const newStr =
    strTrim.charAt(0).toUpperCase() + strTrim.slice(1).toLocaleLowerCase();
  return newStr;
};
