import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './src/App';

const root = createRoot(document.getElementById('app'));
root.render(
<BrowserRouter>
    <App />
</BrowserRouter>
);