let a = document.getElementsByTagName('div')[0];

let div = document.createElement('div')
div.innerHTML = '<h1>Hello world</h1>';
// a.appendChild(div);
// a.prepend(div);
// a.before(div);
a.after(div);