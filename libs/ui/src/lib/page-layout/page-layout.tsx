import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { PageHeader } from '../ui';

/* eslint-disable-next-line */
export interface PageLayoutProps {}

export function PageLayout(props: PageLayoutProps) {
  return (
    <div>
      <PageHeader brand="Store" />
      <Container maxWidth="md" sx={{ padding: 2 }}>
        <Outlet />
      </Container>
    </div>
  );
}

export default PageLayout;
