import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUnits } from '../actions';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Form from 'react-bootstrap/Form';


function Units() {
    const dispatch = useDispatch();

    const [radioValue, setRadioValue] = useState('1');

    const [list, setList] = useState([]);

    const [isCheckedWoodCheckbox, setIsCheckedWoodCheckbox ] = useState(false);
    const [isCheckedFoodCheckbox, setIsCheckedFoodCheckbox ] = useState(false);
    const [isCheckedGoldCheckbox, setIsCheckedGoldCheckbox ] = useState(false);

    const [isVisibleWood, setIsVisibeWood] = useState(true);
    const [isVisibleFood, setIsVisibeFood] = useState(true);
    const [isVisibleGold, setIsVisibeGold] = useState(true);

    const [woodRange, setWoodRange] = useState(25);
    const [foodRange, setFoodRange] = useState(25);
    const [goldRange, setGoldRange] = useState(25);

    const units = useSelector(state => state.units.units);
    const loading = useSelector(state => state.units.loading);
    const error = useSelector(state => state.units.error);
    
    let temp = [];

    const withoutNullValues = units.filter(item => item.cost !== null)
    //console.log(withoutNullValues);
    
    useEffect(() => {
      dispatch(getUnits());
    },[]);



    if(radioValue === '1'){
      temp = units;
    }else if(radioValue === '2'){
      const filteredDarkAge = units.filter(item => item.age === 'Dark');
      temp = filteredDarkAge;
    }else if(radioValue === '3'){
      const filteredFedualAge = units.filter(item => item.age === 'Feudal');
      temp = filteredFedualAge;
    }else if(radioValue === '4'){
      const filteredCastleAge = units.filter(item => item.age === 'Castle');
      temp = filteredCastleAge;
    }else if(radioValue === '5'){
      const filteredImperialAge = units.filter(item => item.age === 'Imperial');
      temp = filteredImperialAge;
    }
    
    
    
    
    const handleChangeWood = (e) => {
      setIsCheckedWoodCheckbox(e.target.checked)
      console.log(isCheckedWoodCheckbox);
      if(!isCheckedWoodCheckbox){
            const filterByWood = withoutNullValues.filter(item =>  item.cost.Wood >= woodRange);
            setList(filterByWood);
            setIsVisibeWood(false);
          }else{
            setIsVisibeWood(true);
            setList([]);
          } 
      }
      const rangeWood = (e) => {
        setWoodRange(e.target.value);
        console.log(woodRange);
        if(isCheckedWoodCheckbox){
            const filterByWood = withoutNullValues.filter(item =>  item.cost.Wood >= woodRange);
            setList(filterByWood);
        }else{
          setList([]);
        }
      }

      const handleChangeFood = (e) => { 
        setIsCheckedFoodCheckbox(e.target.checked);     
        if(!isCheckedFoodCheckbox){
              const filterByFood = withoutNullValues.filter(item => item.cost.Food >= foodRange);
              setList(filterByFood);
              setIsVisibeFood(false);
            }else{
              setIsVisibeFood(true);
              setList([]);
              
            } 
        }
        const rangeFood = (e) => {
          setFoodRange(e.target.value);
          if(isCheckedFoodCheckbox){
              const filterByFood = withoutNullValues.filter(item => item.cost.Food >= foodRange);
              setList(filterByFood);
          }else{
              setList([]);
          }
        }
       
        const handleChangeGold = (e) => {   
          setIsCheckedGoldCheckbox(e.target.checked)
          if(!isCheckedGoldCheckbox){
                const filterByGold = withoutNullValues.filter(item => item.cost.Gold >= goldRange);
                //console.log(filterByGold);
                setList(filterByGold);
                setIsVisibeGold(false);
              }else{
                setIsVisibeGold(true);
                setList([]);
              }  
          }
          const rangeGold = (e) => {
            setGoldRange(e.target.value);
            if(isCheckedGoldCheckbox){
              const filterByGold = withoutNullValues.filter(item => item.cost.Gold >= goldRange);
              setList(filterByGold);
            }else{
                setList([]);
            }
          }

        if(list.length > 1){
          temp = list;
        }

    const radios = [
      { name: 'All', value: '1' },
      { name: 'Dark', value: '2' },
      { name: 'Feudal', value: '3' },
      { name: 'Castle', value: '4' },
      { name: 'Imperial', value: '5' },
    ];
  return (
    <div>
      <h1>Units Page</h1>
      <div className="container">
            <div className="ages mb-5">
                <h4>Ages</h4>
                <ButtonGroup className="mb-2">
                    {radios.map((radio, idx) => (
                      <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant="outline-secondary"
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                      >
                        {radio.name}
                      </ToggleButton>
                    ))}
                </ButtonGroup>
            </div >
            <div className='mb-5'>
            <h4>Costs</h4>
              <Form.Group className="col-5 mb-3">
                <div className='costWood'>
                  <Form.Check
                    type="checkbox"
                    id="costOfwood"
                    label="Wood"
                    onChange={handleChangeWood}
                  />
                  <input disabled={isVisibleWood} onChange={rangeWood} value={woodRange - 5}  type="range" id="wood" name="wood" min="0" max="200" step="5"></input><span>[0 - 200] {woodRange}</span>
                </div>
                <div className='costFood'>
                  <Form.Check
                    type="checkbox"
                    id="costOffood"
                    label="Food"
                    onChange={handleChangeFood}
                  />
                  <input disabled={isVisibleFood} onChange={rangeFood} value={foodRange - 5} step="5" type="range" id="food" name="food" min="0" max="200"></input>
                  <span>[0 - 200] {foodRange}</span>
                </div>
                <div className='costGold'>
                  <Form.Check
                    type="checkbox"
                    id="costOfgold"
                    label="Gold"
                    onChange={handleChangeGold}
                  />
                  <input disabled={isVisibleGold} onChange={rangeGold} value={goldRange - 5} step="5" type="range" id="gold" name="gold" min="0" max="200"></input><span>[0 - 200] {goldRange}</span>
                </div>   
              </Form.Group>
            </div>

            <div className="table">
            {loading && <h3>Loading...</h3>}
            {error && !loading && <h2>{error}</h2>}
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">name</th>
                            <th scope="col">age</th>
                            <th scope="col">costs</th>
                        </tr>
                    </thead>
                    <tbody>
                        {temp.map((unit,i) => (
                          <tr key={i}>
                            <th scope="row">{unit.id}</th>
                            <td>
                              <Link to={`/detail/${unit.id}`}>{unit.name}</Link>
                            </td>
                            <td>{unit.age}</td>
                            <td>{
                              unit.cost !== null && unit.cost.Wood && unit.cost.Food 
                              ? "Wood :" + unit.cost.Wood + ", Food :" + unit.cost.Food
                              : unit.cost !== null && unit.cost.Wood && unit.cost.Gold
                              ? "Wood :" + unit.cost.Wood + ", Gold :" + unit.cost.Gold
                              : unit.cost !== null && unit.cost.Food && unit.cost.Gold
                              ? "Food :" + unit.cost.Food + ", Gold :" + unit.cost.Gold
                              : unit.cost!==null && unit.cost.Wood && !unit.cost.Food && !unit.cost.Gold 
                              ? "Wood :" + unit.cost.Wood
                              : unit.cost!==null && unit.cost.Food && !unit.cost.Gold && !unit.cost.Wood
                              ? "Food :" + unit.cost.Food
                              : unit.cost!==null && unit.cost.Gold && !unit.cost.Food && !unit.cost.Wood
                              ? "Gold :" + unit.cost.Gold
                              : "null"
                          }</td>
                          </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Units