import { render } from '@testing-library/react';

import CartButton from './cart-button';

describe('CartButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CartButton />);
    expect(baseElement).toBeTruthy();
  });
});
