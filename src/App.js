import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import logo from './logo.svg';
import './App.css';

function App() {

  const handleSuccess = () => toast.success("Success message!");
  const handleError = () => toast.error("Error message!");
  const handleInfo = () =>  toast.info("Info message");
  const handleWarning = () => toast.warning("Warning message");

  
  return (
    <div>

  <button onClick={handleSuccess}>Success</button>
  <button onClick={handleError}>Error</button>
  <button onClick={handleInfo}>Info</button>
  <button onClick={handleWarning}>Warning</button>
  
  <ToastContainer />
  </div>

  )
}

export default App
