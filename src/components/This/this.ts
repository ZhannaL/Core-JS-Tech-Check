export const fn = (number: number) => {
  if (number > 20) {
    return;
  }

  console.log(number);
  fn(number + 1);
};

fn(5);

Function.prototype.customBind = function (newContext) {
  return (...args) => {
    this.apply(newContext, args);
  };
};
