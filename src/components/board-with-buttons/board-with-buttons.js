import createTags from '../../utils/create-tags';
import boardWithButtonsInterface from './board-with-buttons-interface';
import board from './../board/board';
import button from './../button//button';

const boardWithButtons = (data, rootApplicationNode) => {
    const state = {
        type: 'board-with-buttons',
        async buildBoardWithButtons() {
            let buildMarkUp = new Promise((resolve) => {
                const boardWithButtonsContainer = createTags('div', 'board-with-buttons-container');

                const boardObject = board(data.boardContent);
                const boardNode = boardObject.buildBoard();

                const buttonsObject = button(data.boardButtons);
                const buttonsNode = buttonsObject.buildButtons();

                boardWithButtonsContainer.appendChild(boardNode);
                boardWithButtonsContainer.appendChild(buttonsNode);

                rootApplicationNode.appendChild(boardWithButtonsContainer);

                resolve(boardObject);
            });

            const boardObject = await buildMarkUp;

            boardObject.setBoardHandlers();
        },
    };

    const boardWithButtonsInterfaceType = boardWithButtonsInterface(state);

    return Object.assign(Object.create(boardWithButtonsInterfaceType), { data });
};

export default boardWithButtons;
