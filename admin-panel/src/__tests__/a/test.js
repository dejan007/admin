import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Index from '../../../pages/contact/index';

test('Renders button', () => {

    render(<Index/>);
    
    const button = screen.getByText(/Contact us !/i);
    expect(button).toBeInTheDocument();
})