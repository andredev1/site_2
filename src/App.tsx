import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NONAME } from 'dns';

function App() {
  return (
    <div className="App">
      <header className="App-header">


      <div style={{ 


  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  justifyItems: "center",
  flexDirection: "row-reverse",
  width: "100%",
  height: "100vh",
  backgroundImage: `url("https://imageswebpublic.s3.eu-west-1.amazonaws.com/background.png")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "50% 10%"
}



    }>
      <a
          className="App-link"
          href=
          "mailto:sc@ark4.net?subject=Contact&body=Dear Mr SC"
          target="_blank"
          rel="noopener noreferrer"
          style={{ 

textDecorationLine:'none',
            color: '#fff'
          }}
        >
          <div style={{ 


display: "flex",
fontFamily: 'arial',
alignItems: "center",
justifyContent: "center",
justifyItems: "center"}}>
          contact
          </div>
        </a>
    </div>
    
        
      </header>
    </div>
  );
}

export default App;



