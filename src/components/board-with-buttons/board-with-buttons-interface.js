const boardWithButtonsInterface = (state) => ({
    type: 'board-with-buttons-interface',
    buildBoardWithButtons: () => state.buildBoardWithButtons(),
});

export default boardWithButtonsInterface;
