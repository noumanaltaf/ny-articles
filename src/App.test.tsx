import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render article list panel element', () => {
  render(<App />);
  const articleListPanelElement = screen.getByTestId('article-list-panel');
  expect(articleListPanelElement).toBeInTheDocument();
});

test('render article detail panel element', () => {
  render(<App />);
  const articleDetailPanelElement = screen.getByTestId('article-detail-panel');
  expect(articleDetailPanelElement).toBeInTheDocument();
});

