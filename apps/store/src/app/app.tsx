import { PageLayout } from '@acadia/ui';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Product from '../pages/Product';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Dashboard />} />
        {/* <Route path="products" element={<div>products</div>}>
          <Route path=":teamId" element={<div>id</div>} />
        </Route> */}
        <Route path="products/:id" element={<Product />} />
      </Route>
    </Routes>
  );
};

export default App;
