import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SessionProvider } from './src/context/SessionContext.jsx';
import App from './src/App';
import './style.css';

const root = createRoot(document.getElementById('app'));
root.render(
<BrowserRouter>
    <SessionProvider>
        <App />
    </SessionProvider>
</BrowserRouter>
);