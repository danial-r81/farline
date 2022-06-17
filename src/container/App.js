import { HashRouter } from 'react-router-dom';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Fartak from './Fartak';
const App = () => {
   return (
      <HashRouter>
         <div className='fartak'>
            <Fartak />
            <ToastContainer
               position='top-right'
               autoClose={3000}
               hideProgressBar={false}
               newestOnTop
               closeOnClick
               rtl={true}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               transition={Bounce}
               theme='colored'
               limit={1}
            />
         </div>
      </HashRouter>
   );
};

export default App;
