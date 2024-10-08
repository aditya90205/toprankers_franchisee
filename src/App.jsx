import './App.css';
import Form from './components/Form';
import img from './assets/images/img.png';
import logo from './assets/images/logo.png';
import FranchiseeSection from './components/FranchiseeSection';
import Choose from './components/Choose';
import FAQComponent from './components/FAQComponent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the toastify CSS

function App() {
  return (
    <>
      {/* Main content */}
      <div className=''>
        <img src={logo} alt="logoImg" className='mx-auto w-1/2 md:w-1/4' />
        <div className='flex flex-col md:flex-row items-center justify-around'>
          <img src={img} alt="image" className='w-3/4 md:w-1/2 lg:w-2/5' />
          <Form />
        </div>
      </div>
      
      {/* Other components */}
      <FranchiseeSection />
      <Choose />
      <FAQComponent />

      {/* Toast Container for global use */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;

