import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import Home from './components/Home';
import Units from './components/Units';
import UnitDetail from './components/UnitDetail';

function App() {
  return (
    <Router>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Units">Units</NavLink>
        </li>
      </ul>
    </nav>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Units" element={<Units/>} />
          <Route path="/detail/:detail_id" element={<UnitDetail />} />
        </Routes>
      </div>
  </Router>
  );
}

export default App;
/* 
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import { getUnitsFetch } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  const units = useSelector(state => state.myFirstReducer.units);
  return (
    <div className="App">
      <button onClick={() => dispatch(getUnitsFetch())}>
        Get units
      </button>
      <div> Names: {units.map(((unit,index) => (<div key={index}>{unit.name}</div>)))}</div>
    </div>
  );
}
*/