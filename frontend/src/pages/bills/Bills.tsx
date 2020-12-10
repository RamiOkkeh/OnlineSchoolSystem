import React ,{useEffect, useState} from 'react'
import StripButton from '../../components/strip_button_com/StripButton'
import "./Bills.css";
import { connect } from "react-redux";
import { State } from "../../reducers/rootReducer"

 function Bills({user}:any) {
     const [payments,setPayments]=useState([{date:1234556,semester:"first",amount:"150jd"},{date:1234556,semester:"first",amount:"150jd"}])
     useEffect(()=>{
        let options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify({studentID:user.id})
          };
          let path =
            process.env.NODE_ENV === "production"
              ? "/payment/"
              : "http://localhost:8000/payment/";
          fetch(path, options)
            .then((data) => data.json())
            .then((data) => {
                setPayments(data)
            });  
     },[])
    return (
        <div className="Bills"> 
            <div className="main"> 
                <div className="firstBox"> date </div>
                <div className="secondtBox"> semster</div>
                <div className="thirdtBox"> total price</div>
            </div>
            {
                payments.map((el,key)=>(
                    <div>
                    <div className="main"> 
                    <div className="firstBox"> {el.date} </div>
                    <div className="secondtBox"> {el.semester}</div>
                    <div className="thirdtBox"> {el.amount}</div>
                </div>
                
                <StripButton />
                </div>
                ))
            }
        {/* <StripButton /> */}
        </div>
    )
}   

const mapStateToProps = (state:State) => {
    return {user:state.user};
  };
  
  export default connect(mapStateToProps)(Bills);