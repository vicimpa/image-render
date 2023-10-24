const regExp = /^\/([^\/]*)\/?/;

export const getMethod = (url: string): [string, string] => {
  const result = regExp.exec(url);
  if (!result)
    throw new Error('Unknown url foramt');

  return [result[1], url.slice(result[0].length)];
};