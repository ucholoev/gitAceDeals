import React from 'react';
import NavBar from './NavBar';
import Content from './Content';
import Footer from './Footer';

class App extends React.Component{
    render(){
        return(
            <div>
                <NavBar />
                <Content />
                <Footer />
            </div>
        )
    }
}

export default App;