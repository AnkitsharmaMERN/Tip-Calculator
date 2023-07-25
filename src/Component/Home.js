import React, { useState } from 'react'
import "./Home.css"

const Home = () => {
    const [amount, setamount] = useState({
        customer: '', value: '', service: '', tip:''
    })
    const [list, setlist] = useState([])
    const [tip, settip] = useState({})

    const handelchange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setamount({ ...amount, [name]: value })
    }

    const calculate = (event) => {
        event.preventDefault();
        // console.log(amount)
        const data = (amount.service / 100) * (amount.value)
        const updated = {...amount,tip:data}
        setlist([...list, updated])
        
        // console.log(list)
    }
    const total = ()=>{
        let totalTip = 0;
        let totalcustomer = list.length
        list.forEach((ele) => {
            totalTip += ele.tip;
        });
        settip({totalTip,totalcustomer});
    }



    return (
        <div className='mainContainer'>
            <div className='heading'>
                <h1>Tip Calculator</h1>
                <p>Build in React</p>
            </div>
            <div className='input'>
                <h3>Enter Your bill amount</h3>
                <input type="number" name='value' className='inputtag' value={amount.value} onChange={handelchange} />
                <hr />
                <div className='customersection'>
                    <label htmlFor='service'>How was The service :</label>
                    <select name='service' className='selectservice' onChange={handelchange}>
                        <option  >choose...</option>
                        <option value={20} >excellent 20%</option>
                        <option value={10} >Moderate 10%</option>
                        <option value={5} >bad 5%</option>
                    </select>
                    <input type='text' name="customer" value={amount.customer} onChange={handelchange} />
                    <button className='btn1' onClick={calculate}>Add Customer</button>
                </div>
            </div>
            <div className='output'>
                <hr />
                <h3>Customer List</h3>
                <hr />
            </div>
            {list.map((ele,ind) => {
                console.log(ele,ind)
                return (
                <>
                <ul>
                    <li>{ele.customer} offering a tip of {ele.tip} rupess</li>
                </ul>
                </>
                )
            })
            }
            <span className='btn'>
                <button className='btn2' onClick={total}>Calculate Tip & Customer</button>
            </span>
            <div className='totalcustomeroutput'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>
                                Total Customer
                            </th>
                            <th>
                                Tip
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{tip.totalcustomer}</td>
                            <td>{tip.totalTip}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='footer'>
                <h4>@2020 TIP.CALCULATOR</h4>
            </div>

        </div>
    )
}

export default Home