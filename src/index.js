import 'reset-css';
import './index.scss';

import board from './components/board/board';
import boardWithButtons from './components/board-with-buttons/board-with-buttons';
import button from './components/button/button';
import data from './data/data';

function app() {
    const boardObject = board(data.boardContent);
    const buttonsObject = button(data.boardButtons);
    const boardWithButtonsObject = boardWithButtons(boardObject, buttonsObject);
    const boardWithButtonsNode = boardWithButtonsObject.buildBoardWithButtons();

    const rootElement = document.querySelector('#app-root');
    rootElement.appendChild(boardWithButtonsNode);

    return rootElement;
}

document.body.appendChild(app());
