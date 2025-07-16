import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { getRouter } from './routers/subdomains';

const root = ReactDOM.createRoot(document.getElementById('root'));
const App = getRouter();
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);