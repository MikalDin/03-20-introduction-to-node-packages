import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import logo from './logo.svg';
import './App.css';

function App() {

  const notify = () => {
              toast('Hello, this is A MESSAGE for mIkal!!!!')
              
              toast.success("sucess Notification! good job!!", {
                position: "top-center"
              });

              toast.error("Errorr. suttin Screwed it up Notification!", {
                position: "top-left"
              });

              toast.warn("Warning Notification! its getting messiyy!", {
                position: "bottom-left"
              });

              toast.info("Info Notification ! heads up!", {
                position: "bottom-center"
               });

               toast("Custon Style Notification with Css class!", {
                position: "bottom-right",
                className: 'foo-bar'
               })
              }
  return (
<> 
<button onClick={notify}>Notify</button>

<ToastContainer />
 </>
  )
}

export default App
