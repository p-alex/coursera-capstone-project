const seededRandom = function (seed: number) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export const fetchAPI = ({ date }: { date: Date }): Promise<string[]> =>
  new Promise((resolve) => {
    let result: string[] = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }

    setTimeout(() => {
      resolve(result);
    }, 1500);
  });

export const submitAPI = function <T>({
  formData,
}: {
  formData: T;
}): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};
