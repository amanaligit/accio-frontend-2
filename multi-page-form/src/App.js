import './App.css';
import { useState } from 'react'
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import ConfirmationPage from './ConfirmationPage';
import SuccessPage from './SuccessPage';

function App() {
  const [pageNo, setPageNo] = useState(0);
  const [formData, setFormData] = useState({ email: '', username: '', password: '', confirmPassword: '', firstName: '', lastName: '', country: '', dob: '', address: ''})


  switch(pageNo){
    case 0: return <UserDetails setPageNo={setPageNo} setFormData={setFormData} formData={formData} />
    case 1: return <PersonalDetails setPageNo={setPageNo} setFormData={setFormData} formData={formData}/>
    case 2: return <ConfirmationPage formData={formData} setPageNo={setPageNo}/>
    case 3: return <SuccessPage/>
    default: return <div>End of Form</div>;
  }
}

export default App;
