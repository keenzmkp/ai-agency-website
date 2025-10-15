import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactPage from '@/app/contact/page';

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
}));

describe('Contact Form Integration', () => {
  beforeEach(() => {
    // Mock fetch pour les tests
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders contact form correctly', () => {
    render(<ContactPage />);
    
    expect(screen.getByLabelText(/nom complet/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/adresse email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /envoyer/i })).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    render(<ContactPage />);
    
    const submitButton = screen.getByRole('button', { name: /envoyer/i });
    fireEvent.click(submitButton);
    
    // Vérifier que les champs requis sont marqués comme invalides
    await waitFor(() => {
      expect(screen.getByLabelText(/nom complet/i)).toHaveClass('border-error-500');
    });
  });

  it('validates email format', async () => {
    render(<ContactPage />);
    
    const emailInput = screen.getByLabelText(/adresse email/i);
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.blur(emailInput);
    
    await waitFor(() => {
      expect(emailInput).toHaveClass('border-error-500');
    });
  });

  it('submits form with valid data', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'Message envoyé avec succès' }),
    });

    render(<ContactPage />);
    
    // Remplir le formulaire
    fireEvent.change(screen.getByLabelText(/nom complet/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/adresse email/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Test message' },
    });
    
    // Soumettre le formulaire
    fireEvent.click(screen.getByRole('button', { name: /envoyer/i }));
    
    // Vérifier que l'API est appelée
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: expect.stringContaining('John Doe'),
      });
    });
  });

  it('handles form submission error', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    render(<ContactPage />);
    
    // Remplir et soumettre le formulaire
    fireEvent.change(screen.getByLabelText(/nom complet/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/adresse email/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Test message' },
    });
    
    fireEvent.click(screen.getByRole('button', { name: /envoyer/i }));
    
    // Vérifier que l'erreur est gérée
    await waitFor(() => {
      expect(screen.getByText(/erreur/i)).toBeInTheDocument();
    });
  });
});
