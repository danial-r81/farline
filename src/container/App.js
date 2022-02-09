import ToosClass from './ToosClass';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
      document.querySelector('.to-top').classList.add('show-back-to-top');
    } else {
      document.querySelector('.to-top').classList.remove('show-back-to-top');
    }
  });

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
        <a href='#' className='to-top'>
          <i className='fa fa-chevron-up'></i>
        </a>
      </div>
    </Router>
  );
};

export default App;
