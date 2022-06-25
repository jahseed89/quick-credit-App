import "./aside.scss";
import { useState } from "react";



const Aside = ()=>{

    const [counter, setCounter] = useState(0)

    const increement = ()=>{
        setCounter((addCount) => addCount+1)
    }
    const decreement = ()=>{
        setCounter((subCount) => subCount-1)
    }

    const date = new Date()

    return (
        <div>
            <div className="aside">
                <h3>Quick Credit</h3>
                <div className="aside__avata">images</div>
                <p>It's about {date.getHours() % 12} hours now</p>
                <div>
                    <button onClick={increement}>..+..</button>
                    <h1>{counter}</h1>
                    <button onClick={decreement}>..-..</button>
                </div>
                <div className="text__abtUs">
                    <p>Apply for up to ₦100,000 with loan tenors of up to 90days and have your money sent straight to your bank account in minutes.</p>
                </div>
                <div className="aside__footer">
                    <p>Terms and Conditions | Privacy</p>
                    <p>&copy;2022 Quick Credit Inc. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}
export default Aside;