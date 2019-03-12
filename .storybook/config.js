import { configure } from '@storybook/react';

function loadStories() {
  require('../src/index.stories');
}

configure(loadStories, module);
