import { StrictMode } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

const mount = () => render(<StrictMode><App /></StrictMode>);

describe('Nimexa custom project ordering', () => {
  it('explains that projects are built only after an order', () => {
    mount();
    expect(screen.getByRole('heading', { name: /Tell Us What Project You Need/i })).toBeTruthy();
    expect(screen.getByText(/No ready-made projects are kept for sale/i)).toBeTruthy();
    expect(screen.queryByText('Campus Placement Portal')).toBeNull();
  });

  it('provides a direct WhatsApp requirement link', () => {
    mount();
    const link = screen.getByRole('link', { name: 'Discuss Your Requirement on WhatsApp' });
    expect(decodeURIComponent(link.href)).toContain('price and delivery time');
  });

  it('validates the quote form and sends a custom requirement', async () => {
    const user = userEvent.setup();
    const open = vi.spyOn(window, 'open').mockReturnValue(null);
    mount();
    const form = screen.getByRole('form', { name: 'Request a quote' });
    await user.click(within(form).getByRole('button', { name: 'Request Quote' }));
    expect(open).not.toHaveBeenCalled();
    await user.type(within(form).getByRole('textbox', { name: /^Name/ }), 'Asha Kumar');
    await user.selectOptions(within(form).getByRole('combobox', { name: /^Branch/ }), 'CSE');
    await user.type(within(form).getByRole('textbox', { name: 'Project Requirement' }), 'Attendance application');
    await user.type(within(form).getByRole('textbox', { name: 'More Details' }), 'Needed next month');
    await user.click(within(form).getByRole('button', { name: 'Request Quote' }));
    expect(open).toHaveBeenCalledTimes(1);
    const message = new URL(open.mock.calls[0][0]).searchParams.get('text');
    expect(message).toContain('Attendance application');
    expect(message).toContain('Needed next month');
  });

  it('supports FAQ expansion and mobile navigation', async () => {
    const user = userEvent.setup();
    mount();
    const faq = screen.getByRole('button', { name: 'Do you have ready-made projects?' });
    await user.click(faq);
    expect(faq.getAttribute('aria-expanded')).toBe('true');
    await user.click(screen.getByRole('button', { name: 'Open menu' }));
    expect(document.getElementById('menuBtn').getAttribute('aria-expanded')).toBe('true');
  });
});
