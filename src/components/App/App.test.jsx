import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe('App components', () => {
  it('app renders', () => {
    render(<App />)
    expect(screen.getByText('Find course:')).toBeInTheDocument()
  })

  it('typing in Searchbox works', () => {
    render(<App />)
    expect(screen.queryByDisplayValue(/React/)).toBeNull()
    userEvent.type(screen.getByRole('textbox'), 'React')

    expect(screen.queryByDisplayValue(/React/)).toBeInTheDocument()
  })

  it('search filter is working', () => {
    render(<App />)
    expect(screen.getByText(/test/)).toBeInTheDocument()
    expect(screen.getByText(/test2/)).toBeInTheDocument()

    userEvent.type(screen.getByRole('textbox'), 'test')

    expect(screen.getByText(/test/)).toBeInTheDocument()
    expect(screen.queryByText(/test2/)).toBeNull()


  })
})