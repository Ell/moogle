export function isRenderer() {
  if (typeof process === 'undefined' || !process || !process.type) {
    return true;
  }

  return process.type === 'renderer';
}

export default isRenderer();
