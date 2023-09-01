const mergeStackTrace = (
  stackTraceToMerge: string,
  baseStackTrace: string,
) => {
  const mergeLine = stackTraceToMerge.split("\n");
  const baseLine = baseStackTrace.split("\n");

  let newStackTrace = "";
  for (const line of mergeLine) {
    if (baseLine.includes(line)) {
      continue;
    }

    newStackTrace += line + "\n";
  }

  return newStackTrace + baseStackTrace;
};

export class ExtendableError extends Error {
  constructor(message?: string, err?: Error) {
    super(message);
    this.name = this.constructor.name;
    if (!err || !err.stack) {
      return;
    }

    if (Object.prototype.hasOwnProperty.call(Error, "captureStackTrace")) {
      Error.captureStackTrace(this, this.constructor);
      if (this.stack) {
        this.stack = mergeStackTrace(this.stack, err.stack);
      }
    }
  }
}
