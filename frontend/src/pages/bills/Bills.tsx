import React, { useEffect, useState } from 'react'
import StripButton from '../../components/strip_button_com/StripButton'
import "./Bills.css";
import { connect } from "react-redux";
import { State } from "../../reducers/rootReducer"

function Bills({ user }: any) {
    const [payments, setPayments] = useState([])
    // useEffect(() => {
    //     let options = {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ studentID: 5 })
    //     };
    //     let path =
    //         process.env.NODE_ENV === "production"
    //             ? "/payment/"
    //             : "http://localhost:8000/payment/details";
    //     fetch(path, options)
    //         .then((data) => data.json())
    //         .then((data) => {
    //             console.log(data);
    //             setPayments(data)
    //         });
    // }, [])
    console.log('ameed',user);
    return (
        <div className="Bills">
            <div className="main">
                <div className="firstBox"> date </div>
                <div className="secondtBox"> semster</div>
                <div className="thirdtBox"> total price</div>
            </div>
            {
                payments.map((el, key) => (
                    <div>
                        <div className="main">
                            <div className="firstBox"> {user.date} </div>
                            <div className="secondtBox"> {user.semester}</div>
                            <div className="thirdtBox"> {user.totalprice}</div>
                        </div>
                        <StripButton />
                    </div>
                ))
            }
            <StripButton />
        </div>
    )
}

const mapStateToProps = (state: State) => {
    return { user: state.user };
};

export default connect(mapStateToProps)(Bills);