import { classNames } from 'shared/lib/classNames/classNames';
import { render, screen } from '@testing-library/react';
import Button from 'shared/ui/Button/Button';

describe('classNames', () => {
  test('with only first argument', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
