import './App.css'
import Form from './components/Form'
import img from './assets/images/img.jpg';
import logo from './assets/images/logo.png';
import FranchiseeSection from './components/FranchiseeSection';
import Choose from './components/Choose';
import FAQComponent from './components/FAQComponent';

function App() {
 

  return (
    <>
    <div className=''>
      <img src={logo} alt="logoImg" className='mx-auto'/>
      <div className='flex flex-col md:flex-row items-center justify-center'>
        <img src={img} alt="image" className='w-3/4 md:w-1/2'/>
      <Form />  
      </div>
    </div>
    <FranchiseeSection />
    <Choose />
    <FAQComponent />
    </>
  )
}

export default App
