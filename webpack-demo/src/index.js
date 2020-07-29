import './index.css';

const p1 = document.createElement('p');
p1.textContent = 'Hello from Dev Server'
document.body.append(p1);

const p2 = document.createElement('p');
const numbers1 = [1, 2, 3, 4, 5, 6];
const numbers2 = [7, 8, 9, 10, 11, 12];
const numbers3 = [...numbers1, ...numbers2];
p2.textContent = numbers3.join(' ');
document.body.append(p2);