import './App.css'
import DaisyNav from './DaisyNav/DaisyNav';

import LineChart from './LineChart/LineChart';
import Navbar from './Navbar/Navbar';
import PriceOptions from './PriceOptions/PriceOptions';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <DaisyNav></DaisyNav>
      <h2 className="text-7xl items-center text-center">Welcome</h2>

      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      
    </div>
  );
};

export default App;