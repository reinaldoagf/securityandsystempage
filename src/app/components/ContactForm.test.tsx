// ContactForm.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from './ContactForm';
import '@testing-library/jest-dom/extend-expect';

describe('ContactForm', () => {
  test('renders form with all fields', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/Nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Correo Electrónico/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mensaje/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Enviar/i })).toBeInTheDocument();
  });

  test('displays error messages for empty fields on submit', async () => {
    render(<ContactForm />);
    
    fireEvent.click(screen.getByRole('button', { name: /Enviar/i }));

    expect(await screen.findByText(/El nombre es obligatorio/i)).toBeInTheDocument();
    expect(screen.getByText(/El correo electrónico es obligatorio/i)).toBeInTheDocument();
    expect(screen.getByText(/El mensaje es obligatorio/i)).toBeInTheDocument();
  });

  test('displays error for invalid email', async () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/Correo Electrónico/i), { target: { value: 'invalid-email' } });
    fireEvent.click(screen.getByRole('button', { name: /Enviar/i }));

    expect(await screen.findByText(/El correo electrónico no es válido/i)).toBeInTheDocument();
  });

  test('submits the form successfully', async () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/Nombre/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Correo Electrónico/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Mensaje/i), { target: { value: 'Hello, this is a test message!' } });

    fireEvent.click(screen.getByRole('button', { name: /Enviar/i }));

    await waitFor(() => {
      expect(screen.getByText(/¡Mensaje enviado con éxito!/i)).toBeInTheDocument();
    });

    expect(screen.getByLabelText(/Nombre/i)).toHaveValue('');
    expect(screen.getByLabelText(/Correo Electrónico/i)).toHaveValue('');
    expect(screen.getByLabelText(/Mensaje/i)).toHaveValue('');
  });

  test('success message disappears after 3 seconds', async () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/Nombre/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Correo Electrónico/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Mensaje/i), { target: { value: 'Hello, this is a test message!' } });

    fireEvent.click(screen.getByRole('button', { name: /Enviar/i }));

    await waitFor(() => {
      expect(screen.getByText(/¡Mensaje enviado con éxito!/i)).toBeInTheDocument();
    });

    // Esperar 3 segundos para que el mensaje desaparezca
    await waitFor(() => {
      expect(screen.queryByText(/¡Mensaje enviado con éxito!/i)).not.toBeInTheDocument();
    }, { timeout: 3000 });
  });
});
