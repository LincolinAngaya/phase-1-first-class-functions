const receivesAFunction = (callback) => callback()
const returnsAnAnonymousFunction = () => () => {};

const returnsANamedFunction = () => function callback() {}