import 'reset-css';
import './index.scss';

import boardWithButtons from './components/board-with-buttons/board-with-buttons';
import data from './data/data';

function app() {
    return {
        buildBoard() {
            const rootElement = document.querySelector('#app-root');
            const boardWithButtonsObject = boardWithButtons(data, rootElement);
            boardWithButtonsObject.buildBoardWithButtons();
        },
    };
}

const apiApplication = app();
apiApplication.buildBoard();
