const boardInterface = (state) => ({
    type: 'board-interface',
    buildBoard: () => state.buildBoard(),
});

export default boardInterface;
