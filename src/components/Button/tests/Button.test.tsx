import { fireEvent, render, screen } from '@testing-library/react';

import Button from '../Button';

describe('Button tests', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    render(
      <Button onClick={handleClick} icon='icon.png' iconAlt='icon'>
        Click me
      </Button>,
    );
  });

  test('renders the button with the correct text', () => {
    expect(screen.getByText(/click me/i)).toBeInTheDocument();
  });

  test('renders the button with an icon', () => {
    expect(screen.getByAltText(/icon/i)).toBeInTheDocument();
  });

  test('calls onClick prop when clicked', () => {
    fireEvent.click(screen.getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
