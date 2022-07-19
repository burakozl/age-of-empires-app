import React from 'react'

function FilterCostRow({ unit, isCheckedWoodCheckbox, isCheckedFoodCheckbox, isCheckedGoldCheckbox }) {
    return (
        <div>
            {
                isCheckedWoodCheckbox === true && isCheckedGoldCheckbox === true && isCheckedFoodCheckbox === true
                    ? ((unit.cost.Wood ? "Wood :" + unit.cost.Wood + ", " : "")) + (unit.cost.Food ? " Food :" + unit.cost.Food + ", " : "") + (unit.cost.Gold ? "Gold :" + unit.cost.Gold : "")
                    : (unit.cost !== null && isCheckedWoodCheckbox === true && isCheckedGoldCheckbox === true)
                        ? (unit.cost.Wood && unit.cost.Gold ? "Wood :" + unit.cost.Wood + ", Gold :" + unit.cost.Gold : "")
                        : (unit.cost !== null && isCheckedWoodCheckbox === true && isCheckedFoodCheckbox === true)
                            ? (unit.cost.Wood ? "Wood :" + unit.cost.Wood + ", " : "") + (unit.cost.Food ? "Food :" + unit.cost.Food : "")
                            : (unit.cost !== null && isCheckedFoodCheckbox === true && isCheckedGoldCheckbox === true)
                                ? (unit.cost.Food ? "Food :" + unit.cost.Food + ", " : "") + (unit.cost.Gold ? "Gold :" + unit.cost.Gold : "")
                                : unit.cost !== null && unit.cost.Wood && unit.cost.Food
                                    ? "Wood :" + unit.cost.Wood + ", Food :" + unit.cost.Food
                                    : unit.cost !== null && unit.cost.Wood && unit.cost.Gold
                                        ? "Wood :" + unit.cost.Wood + ", Gold :" + unit.cost.Gold
                                        : unit.cost !== null && unit.cost.Food && unit.cost.Gold
                                            ? "Food :" + unit.cost.Food + ", Gold :" + unit.cost.Gold
                                            : unit.cost !== null && unit.cost.Wood && !unit.cost.Food && !unit.cost.Gold
                                                ? "Wood :" + unit.cost.Wood
                                                : unit.cost !== null && unit.cost.Food && !unit.cost.Gold && !unit.cost.Wood
                                                    ? "Food :" + unit.cost.Food
                                                    : unit.cost !== null && unit.cost.Gold && !unit.cost.Food && !unit.cost.Wood
                                                        ? "Gold :" + unit.cost.Gold
                                                        : "null"
            }
        </div>
    )
}

export default FilterCostRow
