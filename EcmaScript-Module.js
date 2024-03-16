/* 
  Export  the class/function/variable.... -> Named Export
  Import  them into the other file. -> Named Import
  Defaulst exports

  If you're not using a module bundler(webpack/parcel) & 
  you'd like to use import/export syntax, then You have to 
  add type="module" to that script.

  <script type="module" src="index.js"></script>
 */

import Helper, {
  ToString,
} from './EcmaScript-Module-file2.js';

const text = 'hello world!';
function capitalize(str) {
  const newHelper = new Helper(str);
  return newHelper.capitalize();
}
console.log(capitalize(text));

const message = 'london';

function capitalize2(str) {
  const toString = new ToString();
  return toString.capitalize(str);
}
console.log(capitalize2(message));
