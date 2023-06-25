import { HELLO } from './constants.js';

const $body = document.querySelector('body');
$p.innerHTML = `${HELLO} Popup`;
$p.innerHTML = 'Hello Popup';
if ($body) {
  $body.appendChild($p);
}
