import { PageLayout, ProductGrid } from '@acadia/ui';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route
          index
          element={
            <ProductGrid
              products={[
                { id: '1' },
                { id: '2' },
                { id: '3' },
                { id: '4' },
                { id: '5' },
                { id: '6' },
                { id: '7' },
                { id: '8' },
                { id: '9' },
                { id: '10' },
              ]}
            />
          }
        />
        <Route path="products" element={<div>products</div>}>
          <Route path=":teamId" element={<div>id</div>} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
