import { render } from '@testing-library/react';

import ProductGrid from './product-grid';

describe('ProductGrid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductGrid />);
    expect(baseElement).toBeTruthy();
  });
});
