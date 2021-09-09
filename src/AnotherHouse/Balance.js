import React, {useState} from 'react'

const Balance = ({setBalance, balance}) => {
    const [amount, setAmount] = useState('')
    const onChangeHandler = (e)=>{
        setAmount(e.target.value)
    }
    return (
        <div className = 'balance'>
            Balance {balance}
            <input onChange ={onChangeHandler}></input>
            <button onClick = {()=>setBalance(+amount)}>Set Balance</button>
        </div>
    )
}

export default Balance
