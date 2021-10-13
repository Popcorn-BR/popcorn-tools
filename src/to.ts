export const to = <T>(promise: Promise<T>) =>
  promise.then((result) => [result, null]).catch((error) => [null, error]);