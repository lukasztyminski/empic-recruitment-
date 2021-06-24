import { render, screen } from 'test-utils';
import Root from './Root';

describe('Root component', () => {
  it('Renders the root component', () => {
    render(<Root />);
    screen.getByTitle('Test root');
  });
});
