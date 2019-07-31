import React from 'react';
import NavBar from './NavBar';
import AppRouter from './AppRouter';
import AlternativeMenu from './AlternativeMenu'

// import ExperienceTypeList from './ExperienceTypeList';
// import AllExperiences from './AllExperiences';
import LoginForm from './LoginForm';
// import SignUp from './SignUp';
import './App.css';

function App() {
  return (
    <div className="App">
      <AlternativeMenu/>
      {/* <NavBar/> */}
      {/* <ExperienceTypeList/>
      <AllExperiences/> */}

      {/* what values will we have, where are we making axios to? */}
      
      {/* <LoginForm/> */}
      {/* <SignUp/> */}

      <AppRouter/>

    </div>
  );
}

export default App;
