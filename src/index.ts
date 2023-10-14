type TClass = string | Record<string, boolean | null | undefined>;

const classcraft = (...args: TClass[]): string => {
  const result: string[] = [];

  args.forEach((arg) => {
    if (typeof arg === "string") {
      result.push(arg);
    } else {
      Object.entries(arg).forEach(([name, shouldAdd]) => {
        if (shouldAdd) {
          result.push(name);
        }
      });
    }
  });

  return result.join(" ");
};

export default classcraft;
