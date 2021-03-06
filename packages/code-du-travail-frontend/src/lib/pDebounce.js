// https://github.com/sindresorhus/p-debounce
// Since node_modules can't be transpiled without broke relaod feature
// in nextjs, we add pDebounce locaaly

function pDebounce(fn, wait, opts) {
  if (!Number.isFinite(wait)) {
    throw new TypeError("Expected `wait` to be a finite number");
  }

  opts = opts || {};

  let leadingVal;
  let timer;
  let resolveList = [];

  return function () {
    const ctx = this;
    const args = arguments;

    return new Promise((resolve) => {
      const runImmediately = opts.leading && !timer;

      clearTimeout(timer);

      timer = setTimeout(() => {
        timer = null;

        const res = opts.leading ? leadingVal : fn.apply(ctx, args);

        for (resolve of resolveList) {
          resolve(res);
        }

        resolveList = [];
      }, wait);

      if (runImmediately) {
        leadingVal = fn.apply(ctx, args);
        resolve(leadingVal);
      } else {
        resolveList.push(resolve);
      }
    });
  };
}

export default pDebounce;
