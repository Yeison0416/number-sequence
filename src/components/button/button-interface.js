const buttonInterface = (state) => ({
    type: 'button-interface',
    buildButtons: () => state.buildButtons(),
});

export default buttonInterface;
