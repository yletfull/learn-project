import { fireEvent, render, screen } from '@testing-library/react';
import {
  renderWithTranslation,
} from 'shared/lib/renderWithTranslation';
import Sidebar from './Sidebar';

describe('Sidebsar', () => {
  test('render', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle', () => {
    renderWithTranslation(<Sidebar />);
    const ToggleButton = screen.getByTestId('sidebarToggleButton');
    fireEvent.click(ToggleButton);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
