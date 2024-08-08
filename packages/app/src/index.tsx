import { App } from './App';
import { createRoot } from 'react-dom/client';
import loadModule from '@emscripten-starter/wasm';

(async () => {
  const module = await loadModule();
  console.log(module._add(235, 235));

  const container = document.getElementById('app') as HTMLDivElement;
  const root = createRoot(container);
  root.render(<App />);
})();
