import ToosClass from './ToosClass';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-scroll';
const App = () => {
  return (
    <Router>
      <div className='toosclass'>
        <ToosClass />
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
        <Link className='back-to-top' to='header' smooth={true} duration={1000}>
          <i className='fa fa-arrow-up'></i>
        </Link>
      </div>
    </Router>
  );
};

export default App;
