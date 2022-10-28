# movies-explorer-api

Привет! Данный проект является бэкендом итогового проекта на Яндекс.Практикуме.

## Функционал

* Авторизация и регистрация пользователей
* Hедактирование информации о текущего пользователя
* Сохранение фильма в избранное и удаление
* Загрузка полного списка избранных для текущего пользователя фильмов

## Описание технической части

* Серверная часть написана на node js с использованием фреймворка express
* База данных развернута на основе MongoDB. Для работы с БД используется Mongoose
* Защита реализована посредством использования Helmet и Rate-limiter'a
* Входящие данные валидируются на уровне запросов при помощи Joi, celebrate
* Пароли пользователей в БД хранятся в виде хеша, для их шифрования используется bcryptjs
* За авторизацию отвечает jsonwebtoken
* Приложение функционирует на виртуальной машине Яндекс.Облака
* Дополнительно на облаке развернуты nginx в качестве прокси и pm2
* Также был зарегистрирован домен (приведен ниже) и выпущен SSL для работы по https-протоколу

## Директории

`/routes` — папка с файлами роутера  
`/controllers` — папка с файлами контроллеров пользователя и карточки   
`/models` — папка с файлами описания схем пользователя и карточки  
  
## Запуск проекта

`npm run start` — запускает сервер   
`npm run dev` — запускает сервер с hot-reload

## Ссылка на репозиторий проекта

`IP` 51.250.87.21
`Домен` https://api.evg.nomoredomains.icu
`Github` https://github.com/evgboch/movies-explorer-api
