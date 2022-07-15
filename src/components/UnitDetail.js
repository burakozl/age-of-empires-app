import React from 'react';
import { useParams, Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

function UnitDetail() {

    const {detail_id} = useParams();

    const units = useSelector(state => state.units.units);
    

    const filteredUnit = units.find((item) => item.id === Number(detail_id));
    

    if(!filteredUnit) {
      return <Navigate to="/Units" />
    }

  return (
    <div>
      <h1>Unit Detail Page</h1>
      <div className="mb-5">
        <table className="table table-bordered">
          <tbody>
              <tr>
                  <th scope="row">ID:</th>
                  <td>{filteredUnit.id}</td>
              </tr>
              <tr>
                  <th scope="row">Name:</th>
                  <td>{filteredUnit.name}</td>
              </tr>
              <tr>
                  <th scope="row">Description:</th>
                  <td> {filteredUnit.description }</td>
              </tr>
              <tr>
                  <th scope="row">Min. Required Age:</th>
                  <td>{filteredUnit.age}</td>
              </tr>
              <tr>
                  <th scope="row">Wood Cost: </th>
                  <td>{filteredUnit.cost !== null ? filteredUnit.cost.Wood : "-"}</td>
              </tr>
              <tr>
                  <th scope="row">Food Cost: </th>
                  <td>{filteredUnit.cost !== null ? filteredUnit.cost.Food : "-"}</td>
              </tr>
              <tr>
                  <th scope="row">Gold Cost: </th>
                  <td>{filteredUnit.cost !== null ? filteredUnit.cost.Gold : "-"}</td>
              </tr>
              <tr>
                  <th scope="row">Build Time: </th>
                  <td>{filteredUnit.build_time ? filteredUnit.build_time : "-" }</td>
              </tr>
              <tr>
                  <th scope="row">Reload Time: </th>
                  <td>{filteredUnit.reload_time}</td>
              </tr>
              <tr>
                  <th scope="row">Hit Points: </th>
                  <td>{filteredUnit.hit_points}</td>
              </tr>
              <tr>
                  <th scope="row">Attack: </th>
                  <td>{filteredUnit.attack}</td>
              </tr>
              <tr>
                  <th scope="row">Armor: </th>
                  <td>{filteredUnit.armor ? filteredUnit.armor : "-"}</td>
              </tr>
              <tr>
                  <th scope="row">Accuracy: </th>
                  <td>{filteredUnit.accuracy ? filteredUnit.accuracy : "-"}</td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UnitDetail;
