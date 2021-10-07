import 'zone.js';
import { CommonEngine } from '@nguniversal/common/engine';

function check(Component, _props, _children) {
  return !!Component.forRender;
}

async function renderToStaticMarkup(Component, props, children) {
  const engine = new CommonEngine();

  const html = await engine.render(Component.forRender());

  return { html };
}

export default {
  check,
  renderToStaticMarkup,
};