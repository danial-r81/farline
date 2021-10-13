import ToosClass from './ToosClass';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='container'>
        <ToosClass />
      </div>
    </Router>
  );
};

export default App;
