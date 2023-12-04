// https://exercism.org/tracks/typescript/exercises/run-length-encoding

export function encode(data: string): string {
  let res: string = "";
  let count: number = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === data[i + 1]) {
      count++;
    } else {
      count++;
      res = res + `${count > 1 ? count : ""}${data[i]}`;
      count = 0;
    }
  }
  return res;
}

export function decode(data: string): string {
  let res: string = "";
  let nextCount: string = "";
  for (let ch of data) {
    if (Number.isNaN(Number(ch)) || ch === " ") {
      res = res + ch.repeat(Number(nextCount || 1));
      nextCount = "";
    } else {
      nextCount = nextCount + ch;
    }
  }
  return res;
}
