import 'reset-css';
import './index.scss';

function component() {
    const element = document.createElement('p');
    element.textContent = 'hello webpack';

    return element;
}

document.body.appendChild(component());
