import numeral from 'numeral';

export function money(value: number): string {
  return numeral(value).format('0,0.00');
}

export function titleize(text: string): string {
  const words = text.split(" ");
  let result = "";

  words.forEach((word: string, i: number) => {
    result += `${i > 0 ? " " : ""}${word.charAt(0).toUpperCase()}${word.slice(1)}`;
  });

  return result;
}

export function humanize(text: string): string {
  return text.replace("_", " ");
}

export function options(arr: any[], key: string, label: string) {
  return arr.map((item: any) => ({ key: item[key], label: item[label] }));
}