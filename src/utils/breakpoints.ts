const breakpoints: { [index: string]: number } = {
  mobile: 480,
  tablet: 768,
};

const minQuery: { [index: string]: string } = {};
const maxQuery: { [index: string]: string } = {};

Object.keys(breakpoints).map((bp) => {
  minQuery[bp] = `@media (min-width: ${breakpoints[bp]}px)`;
  maxQuery[bp] = `@media (max-width: ${breakpoints[bp]}px)`;
  return null;
});

export { minQuery, maxQuery, breakpoints };
