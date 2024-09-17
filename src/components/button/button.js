import createTags from '../../utils/create-tags';
import buttonInterface from './button-interface';

// eslint-disable-next-line
import styles from './button.scss';

const FALLBACK_BUTTON_DATA = [
    {
        buttonLabel: ['start', 'stop'],
        currentState: false,
    },
    {
        buttonLabel: ['reset'],
        currentState: false,
    },
];

const button = (buttonData = FALLBACK_BUTTON_DATA) => {
    const state = {
        type: 'button',
        buildButtons() {
            const buttonsContainer = createTags('div', 'buttons-container');

            buttonData.forEach((button) => {
                const buttonElement = createTags('button', 'button');
                button?.currentState ? (buttonElement.innerText = button.buttonLabel[1]) : (buttonElement.innerText = button.buttonLabel[0]);
                buttonsContainer.appendChild(buttonElement);
            });

            return buttonsContainer;
        },
    };

    const buttonInterfaceType = buttonInterface(state);

    return Object.assign(Object.create(buttonInterfaceType), { buttonData });
};

export default button;
