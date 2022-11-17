const errorStatusesList = {
  badRequest: 400,
  internalServerError: 500,
  notFound: 404,
  unauthorized: 401,
  forbidden: 403,
  conflict: 409,
};

const resMessagesList = {
  badRequest: 'Вы передали некорректные данные',
  internalServerError: 'На сервере произошла ошибка',
  notFound: 'Указанный идентификатор не найден',
  unauthorized: 'Необходима авторизация',
  forbidden: 'Вы не можете удалять чужие фильмы',
  conflict: 'Пользователь с указанной почтой уже существует',
  deletionSuccess: 'Фильм удалён',
  incorrectCredentials: 'Неправильные почта или пароль',
  incorrectPath: 'Указанный путь не существует',
};

const allowedCors = [
  'https://praktikum.tk',
  'http://praktikum.tk',
  'http://localhost:3000',
  'https://localhost:3000',
  'https://evg.nomoredomains.icu',
  'http://evg.nomoredomains.icu',
];

const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

module.exports = {
  errorStatusesList,
  resMessagesList,
  allowedCors,
  DEFAULT_ALLOWED_METHODS,
};
