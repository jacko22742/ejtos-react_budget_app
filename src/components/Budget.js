import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { Currency, budget, dispatch} = useContext(AppContext);

    const changeBudget = (budget)=>{


        budget = parseInt(budget);
        if(budget > 20000)
        {
            alert('The budget can not be more than £20000');
        }

        if(budget < 600)
        {
            alert('The budget can not be lower than the spending');
        }
        
        else
        {
            dispatch({
                type: 'CHG_BUDGET',
                payload: parseInt(budget),
            })
        }
    }
    return (
        <div>
        <div className='alert alert-secondary'>
            <span>Budget: $</span>
            <input
            required='required'
            type='number'
            id='budget'
            value={budget}
            style={{ marginLeft: '2rem' , size: 10}}
            onChange={event=>changeBudget(event.target.value)}
            ></input>
        </div>
        <div className="alert alert-secondary dropdownContainer"> Currency {
          <select name="currency" id="currency" value={Currency}

            className="dropdown"
          >
              <option className="dropdown-options" value="$">$ Dollar</option>
              <option className="dropdown-options" value="£">£ Pound</option>
              <option className="dropdown-options" value="€">€ Euro</option>
              <option className="dropdown-options" value="₹">₹ Ruppee</option>
          </select>	
        }	
      </div>
        </div>


        
    );
};
export default Budget;