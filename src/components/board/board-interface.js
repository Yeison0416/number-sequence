const boardInterface = (state) => ({
    type: 'board-interface',
    buildBoard: () => state.buildBoard(),
    setBoardHandlers: () => state.setBoardHandlers(),
});

export default boardInterface;
