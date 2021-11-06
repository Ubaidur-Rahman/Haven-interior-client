import React, { useState } from 'react';


const SingleOrder = (props) => {


  const { status, name, description, orderTime, email, _id } = props.order;
  const [selectedOption, setSelectedOption] = useState(null);


  const [orderStatus, setOrderStatus] = useState(status)
  const handleStatusChange = (e) => {
    console.log('updating status..', e.target.value, _id)
    setOrderStatus(e.target.value)
    const newOrder = { status: e.target.value, id: _id }
    fetch('http://localhost:5055/updateOrder', {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newOrder)
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  return (

    <tbody>
      <tr>

        <td className="text-dark">{name}</td>
        <td className="text-dark">{email}</td>
        <td>{orderTime}</td>
        <td>
          <select style={{
            color: status === 'Pending' ? 'red' :
              status === 'Ongoing' ? 'orange' : 'green'
          }} onChange={handleStatusChange} name="status" id="status" defaultValue={orderStatus}>
            <option value="Pending">Pending</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Done">Done</option>
          </select>
        </td>
      </tr>

    </tbody>


  );
};

export default SingleOrder;