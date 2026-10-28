import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from '@/components/bakery/Header';

describe('Bakery Public UI Smoke Tests', () => {
  it('renders header with public navigation links and brand name', () => {
    render(<Header />);

    expect(screen.getByText('bo.s_kitchen')).toBeInTheDocument();
    expect(screen.getByText('Beranda')).toBeInTheDocument();
    expect(screen.getByText('Menu Kue')).toBeInTheDocument();
    expect(screen.getByText('Kisah Kami')).toBeInTheDocument();
    expect(screen.getByText('Kontak & Lokasi')).toBeInTheDocument();
    expect(screen.getByText('WhatsApp Order')).toBeInTheDocument();
  });
});
