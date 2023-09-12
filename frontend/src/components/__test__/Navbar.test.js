import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';

test('gir sammme tekst som er satt inn i title', async () => {
    render(<Navbar title="My header" />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
});