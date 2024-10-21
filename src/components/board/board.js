import createTags from '../../utils/create-tags';
import boardInterface from './board-interface';

// eslint-disable-next-line
import styles from './board.scss';

const FALLBACK_ELEMENTS_BOARD = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const board = (contentBoard = FALLBACK_ELEMENTS_BOARD) => {
    const BOARD_ELEMENT_TURN_ON = 'board-element--turn-on';
    const DELAY = 1000;

    const handlerButtonsClickEvent = (startBoardCallback, stopBoardCallback, resetBoard) => {
        document.addEventListener('startButtonEvent', (event) => {
            const startButtonState = event.detail.startButton;
            const isBoardStopped = startButtonState.labelState ? false : true;
            isBoardStopped ? stopBoardCallback(isBoardStopped) : startBoardCallback(isBoardStopped);
        });
        document.addEventListener('resetButtonEvent', (event) => {
            const resetButtonState = event.detail.resetButton;
            const isBoardResetted = resetButtonState.labelState ? true : false;
            isBoardResetted ? resetBoard(isBoardResetted) : resetBoard(isBoardResetted);
        });
    };

    const boardHandler = () => {
        let boardElements = Array.from(document.querySelectorAll('.board-element'));
        let lastBoardElementTurnedOn;
        const boardState = {
            isBoardStopped: false,
            isBoardResseted: false,
        };

        const startBoard = async (isBoardStopped) => {
            lastBoardElementTurnedOn?.classList.remove(BOARD_ELEMENT_TURN_ON);
            const lastBoardElementIndex = boardElements.length - 1;
            boardState.isBoardStopped = isBoardStopped;

            if (boardState.isBoardResseted) {
                boardState.isBoardResseted = false;
                boardState.isBoardStopped = false;
            }

            for (const [index, boardElement] of boardElements.entries()) {
                if (boardState.isBoardStopped) {
                    lastBoardElementTurnedOn = boardElements[index - 1];
                    lastBoardElementTurnedOn.classList.add(BOARD_ELEMENT_TURN_ON);
                    boardElements = boardElements.slice(index);
                    break;
                }

                if (boardState.isBoardResseted) {
                    break;
                }

                boardElement.classList.add(BOARD_ELEMENT_TURN_ON);
                await delay(DELAY);
                boardElement.classList.remove(BOARD_ELEMENT_TURN_ON);

                if (index === lastBoardElementIndex) {
                    boardElements = Array.from(document.querySelectorAll('.board-element'));
                    startBoard(isBoardStopped);
                }
            }
        };

        const stopBoard = (isBoardStopped) => {
            boardState.isBoardStopped = isBoardStopped;
        };

        const resetBoard = (isBoardResetted) => {
            boardState.isBoardResseted = isBoardResetted;
            boardElements = Array.from(document.querySelectorAll('.board-element'));
            boardElements.forEach((boardElement) => {
                boardElement.classList.remove(BOARD_ELEMENT_TURN_ON);
            });
        };

        return [startBoard, stopBoard, resetBoard];
    };

    const delay = (timer) => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(), timer);
        });
    };

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
        setBoardHandlers() {
            const [startBoard, stopBoard, resetBoard] = boardHandler();
            handlerButtonsClickEvent(startBoard, stopBoard, resetBoard);
        },
    };

    const boardInterfaceType = boardInterface(state);

    return Object.assign(Object.create(boardInterfaceType), { contentBoard });
};

export default board;
