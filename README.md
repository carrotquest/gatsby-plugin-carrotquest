# gatsby-plugin-carrotquest

<img src="https://www.carrotquest.io/logos/ru-logo.svg" alt="carrot quest logo" height="50"/>

Подключите платформу для коммуникации с пользователями [Carrot quest](https://www.carrotquest.io/) к вашему сайту на Gatsby. [Зарегистрируйтесь](https://www.carrotquest.io/panel/unauthorized/login/), установка сервиса займет 7 минут.

Carrot quest поможет:

1.  Собирать больше лидов с сайта и передавать их в продажи или вести дальше по воронке автоматически.
2.  Организовать общение с клиентами в одном окне, отвечать на вопросы пользователей 24/7 и при этом сократить нагрузку на команду поддержки. <br>

## Установка

```shell
yarn add gatsby-plugin-carrotquest
```

или

```shell
npm i gatsby-plugin-carrotquest
```

<br>

## Как использовать

Для установки [бизнес-чата](https://www.carrotquest.io/chat/) и [чат-бота](https://www.carrotquest.io/chatbot/) на ваш Gatsby сайт, вам необходимо [создать аккаунт Carrot quest](https://carrotquest.io/panel/unauthorized/register/).

После регистрации возьмите `CARROTQUEST_ID`, настройте свой файл `gatsby-config.js` как в примере:

```js
// В вашем gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-carrotquest",
      options: {
        carrotquestId: "CARROTQUEST_ID",
        mobileDelay: 2000, // Optional. Задержка для mobile devices.
        desktopDelay: 500, // Optional. Задержка для other devices.
      },
    },
  ],
};
```

<br>

### Отслеживание посещения страниц для SPA

```js
// В вашем gatsby-browser.js
const isEnabledCarrotquest = () => typeof carrotquest === `object`;

exports.onRouteUpdate = ({ location }) => {
  if (isEnabledCarrotquest()) {
    if (location.href.indexOf("/blog/") > -1) {
      carrotquest.track("Просмотр блога", {
        URL: location.href,
      });
    } else {
      carrotquest.track("Просмотр страницы", {
        URL: location.href,
      });
    }
  }
};
```
