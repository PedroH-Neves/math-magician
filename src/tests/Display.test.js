import React from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from '../components/NavBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<Navbar />);
});