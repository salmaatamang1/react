import ReactDOM from 'react-dom/client'
import App from './App';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
const root=ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App/>)