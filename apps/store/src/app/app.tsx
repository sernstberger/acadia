import { PageLayout } from '@acadia/ui';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<div>products</div>}>
          <Route path=":teamId" element={<div>id</div>} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
