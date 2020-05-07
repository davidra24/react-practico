import md5 from 'md5';

export const gravatar = (email: string) => {
  const hash = md5((email || 'asdasdagfasop').toLowerCase(), {
    encoding: 'binary',
  });
  return `https://es.gravatar.com/avatar/${hash}?d=identicon`;
};
