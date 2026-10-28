import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SpotlightCard } from '@/components/react-bits/SpotlightCard';

describe('React Bits SpotlightCard Component', () => {
  it('renders children properly', () => {
    render(
      <SpotlightCard>
        <span data-testid="child-element">Pastry Delight</span>
      </SpotlightCard>,
    );

    expect(screen.getByTestId('child-element')).toBeInTheDocument();
    expect(screen.getByText('Pastry Delight')).toBeInTheDocument();
  });
});
