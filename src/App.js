
import './App.css';

import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';
import Footer from './Components/Footer';
import { Box } from '@chakra-ui/react';

function App() {
  return (
 
    <Box className="App" >
      <Box bg='#577b87' p='1.5rem'>
        <Navbar />
        </Box>
        <AllRoutes />
        <Footer />
      </Box>
   
   
  );
}

export default App;
