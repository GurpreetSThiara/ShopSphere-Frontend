



import Footer from './UserScreens/Componnents/Footer/Footer';

import HomePage from './UserScreens/Views/HomePage/HomePage';
import ResponsiveAppBar from './UserScreens/Componnents/NavigationBar/ResponsiveAppBar';
import ProductPage from './UserScreens/Componnents/ProductPages/ProductPage';

function App() {
  return (
    <div >
     
      <div>
      <ResponsiveAppBar/>
      </div>
      <br/>  <br/>
   
  
  
      <ProductPage/>
      <div>
        <Footer/>
      </div>
     
    </div>
  );
}

export default App;
