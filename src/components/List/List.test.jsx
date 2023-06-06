import { render, screen } from '@testing-library/react';

import List from './List';

const data = ['t1', 't2', 't3'];

describe('List component', () => {
  it('List renders', () => {
    render(<List items={data} />);

    expect(screen.getByText('t1')).toBeInTheDocument();
  });
});
