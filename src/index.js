import Backend from 'i18next-http-backend';
console.log(Backend)

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello Webpack';

  return element;
}

document.body.appendChild(component());