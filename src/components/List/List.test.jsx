import { render, screen } from '@testing-library/react';
import Search from '../Search/Search';

import List from './List';

const data = ['t1', 't2', 't3'];
const onChange = jest.fn()


describe('List component', () => {
  it('List renders', () => {
    render(<List items={data} />);
    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getByText('t1')).toBeInTheDocument();
  });

  it('List renders witout data', () => {
    render(<List />);

    expect(screen.queryByRole('list')).toBeNull()

  });
  it('List snapshot', () => {
    const list = render(<List items={data} />);

    expect(list).toMatchSnapshot()

  });

  it('List empty snapshot', () => {
    const list = render(<List />);

    expect(list).toMatchSnapshot()

  });

  it('dinamyc styles works', () => {
    render(<Search value='abc' onChange={onChange} ></Search>)
    expect(screen.getByRole('textbox')).toHaveClass('input')
    expect(screen.getByRole('textbox')).toHaveClass('filled')
    expect(screen.getByText('Search')).toHaveClass('label')
  })
});
