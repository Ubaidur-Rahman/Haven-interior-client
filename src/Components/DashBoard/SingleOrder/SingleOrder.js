import React, { useState } from 'react';
import Select from 'react-select';


const SingleOrder = (props) => {


  const { status, name, description, orderTime, email } = props.order;
  const [selectedOption, setSelectedOption] = useState(null);
  // const [selectValue, setSelectValue] = useState(null)

  const data = [
    {
      value: 'Pending',
      label: "Pending"
    },
    {
      value: 'OnGoing',
      label: "OnGoing"
    },
    {
      value: 'Done',
      label: "Done"
    }
  ];
 
  // set value for default selection
  
 
  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedOption(e.value);
   
  }
 console.log(selectedOption)


  return (



    <tbody>
      <tr>

        <td className="text-dark">{name}</td>
        <td className="text-dark">{email}</td>
        <td>{orderTime}</td>
        <td><Select
        placeholder={status}
        value={selectedOption} // set selected value
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
      /></td>
      </tr>

    </tbody>


  );
};

export default SingleOrder;