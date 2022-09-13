# gatsby-plugin-carrotquest

<img src="https://www.carrotquest.io/logos/ru-logo.svg" alt="Carrot quest logo" height="50"/>

To integrate [Carrot quest Conversational platform for business](https://www.carrotquest.io/) to your Gatsby website, you need to have an account with Carrot quest. [Sign up](https://www.carrotquest.io/panel/unauthorized/login/)

With Carrot quest you can:

1. Collect your users through all the channels including messengers. All users in one inbox, all channels in one user profile.
2. Engage with every user on their terms. Chat, messengers, e-mail are in one user profile.  
   Never lose track of conversation with your customer
3. Save time for you team, create an automated customer service FAQ chatbot and knowledge base
4. Accelerate growth throughout the customer lifecycle and engage more people with the help of communication tools
5. Qualify leads and focus your sales team on hot ones. Provide the other with self-service <br>

## Установка

```shell
yarn add gatsby-plugin-carrotquest
```

or

```shell
npm i gatsby-plugin-carrotquest
```

<br>

## Как использовать

To integrate [Live chat](https://www.carrotquest.io/chat/) and [Chatbots](https://www.carrotquest.io/chatbot/) to your Gatsby site, you need to have an account with Carrot quest. [Sign up](https://carrotquest.io/panel/unauthorized/register/).

Upon obtaining your `CARROTQUEST_ID`, you need to modify your `gatsby-config.js` as follows:

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

### Отслеживание посещаемых страниц для SPA

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
