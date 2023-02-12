import { html } from 'lit';
import '../src/card-fawaz-2.js';

export default {
  title: 'CardFawaz2',
  component: 'card-fawaz-2',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <card-fawaz-2
      style="--card-fawaz-2-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </card-fawaz-2>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
