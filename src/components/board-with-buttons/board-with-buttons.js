import createTags from '../../utils/create-tags';
import boardWithButtonsInterface from './board-with-buttons-interface';

const boardWithButtons = (boardObject, buttonsObject) => {
    const state = {
        type: 'board-with-buttons',
        boardObject,
        buildBoardWithButtons() {
            const boardWithButtonsContainer = createTags('div', 'board-with-button-container');
            const boardNode = boardObject.buildBoard();
            const buttonsNode = buttonsObject.buildButtons();
            boardWithButtonsContainer.appendChild(boardNode);
            boardWithButtonsContainer.appendChild(buttonsNode);

            return boardWithButtonsContainer;
        },
    };

    const boardWithButtonsInterfaceType = boardWithButtonsInterface(state);

    return Object.assign(Object.create(boardWithButtonsInterfaceType), { boardObject });
};

export default boardWithButtons;
