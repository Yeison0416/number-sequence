import createTags from '../../utils/create-tags';
import boardInterface from './board-interface';

// eslint-disable-next-line
import styles from './board.scss';

const FALLBACK_ELEMENTS_BOARD = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const board = (contentBoard = FALLBACK_ELEMENTS_BOARD) => {
    const state = {
        type: 'board',
        contentBoard,
        buildBoard() {
            const boardContainer = createTags('div', 'board-container');

            this.contentBoard.forEach((contentBoard) => {
                const boardElement = createTags('span', 'board-element');
                boardElement.innerText = contentBoard;
                boardContainer.appendChild(boardElement);
            });

            return boardContainer;
        },
    };

    const boardInterfaceType = boardInterface(state);

    return Object.assign(Object.create(boardInterfaceType), { contentBoard });
};

export default board;
