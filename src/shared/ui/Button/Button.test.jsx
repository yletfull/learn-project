import { classNames } from 'shared/lib/classNames/classNames';
import { render, screen } from '@testing-library/react';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
  test('render', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('button theme', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button theme={ThemeButton.Clear}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
  });
});
