import normalize from 'normalize-object';

export const toCamelCaseObject = (object) => normalize(object, 'camel');
export const toSnakeCaseObject = (object) => normalize(object, 'snake');

export const toCamelCaseString = (text) => {
  return text.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2, offset) => {
    if (p2) {
      return p2.toUpperCase();
    }
    return p1.toLowerCase();
  });
};

export const toSnakeCaseString = (text) => {
  const separator = '_';

  return text
    .replace(/[\s-]/g, separator)
    .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
    .toLowerCase();
};
