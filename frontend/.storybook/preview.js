import '@fontsource/jost';
import '../src/css/index.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light-gray',
    values: [
      {
        name: 'light-gray',
        value: 'hsl(231, 100%, 97%)',
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
