import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
export { pages, siteUrl, indexable } from './data/site';

export function render(url) {
  const context = {};
  const html = renderToString(<HelmetProvider context={context}><StaticRouter location={url}><App /></StaticRouter></HelmetProvider>);
  const { helmet } = context;
  const head = [helmet.title, helmet.meta, helmet.link, helmet.script].map(value => value.toString()).join('\n');
  return { html, head };
}
