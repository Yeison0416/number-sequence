import createTags from '../../utils/create-tags';
import buttonInterface from './button-interface';

// eslint-disable-next-line
import styles from './button.scss';

const FALLBACK_BUTTON_DATA = [
    {
        buttonLabel: ['start', 'stop'],
        labelState: 0,
        state: false,
    },
    {
        buttonLabel: ['reset'],
        labelState: 0,
        state: false,
    },
];

const button = (buttonData = FALLBACK_BUTTON_DATA) => {
    const handleButtonsClickEvent = (startButton, resetButton) => {
        startButton.startButtonNode.addEventListener('click', () => {
            startButton.labelState = (startButton.labelState + 1) % startButton.buttonLabel.length;
            startButton.startButtonNode.innerText = startButton.buttonLabel[startButton.labelState];
            resetButton.resetButtonNode.disabled = false;
        });

        resetButton.resetButtonNode.addEventListener('click', () => {
            resetButton.resetButtonNode.disabled = true;
            startButton.labelState = 0;
            startButton.startButtonNode.innerText = startButton.buttonLabel[startButton.labelState];
        });
    };

    const state = {
        type: 'button',
        buildButtons() {
            const startButtonObject = {};
            const resetButtonObject = {};

            const buttonsContainer = createTags('div', 'buttons-container');
            const startButton = createTags('button', 'start-button');
            const resetButton = createTags('button', 'reset-button');

            buttonData.forEach((button) => {
                if (button.buttonLabel.length - 1 > 0) {
                    startButton.innerText = button.buttonLabel[button?.labelState ?? 0];
                    startButton.disabled = button?.state ?? false;
                    Object.assign(startButtonObject, { startButtonNode: startButton }, button);
                } else {
                    resetButton.innerText = button.buttonLabel[button.labelState ?? 0];
                    resetButton.disabled = button?.state ?? true;
                    Object.assign(resetButtonObject, { resetButtonNode: resetButton }, button);
                }
            });

            buttonsContainer.appendChild(startButton);
            buttonsContainer.appendChild(resetButton);

            handleButtonsClickEvent(startButtonObject, resetButtonObject);

            return buttonsContainer;
        },
    };

    const buttonInterfaceType = buttonInterface(state);

    return Object.assign(Object.create(buttonInterfaceType), { buttonData });
};

export default button;
