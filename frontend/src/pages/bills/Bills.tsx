import React, { useEffect, useState } from 'react'
import StripButton from '../../components/strip_button_com/StripButton'
import "./Bills.css";
import { connect } from "react-redux";
import { State } from "../../reducers/rootReducer"
import AssignBills from './AssignBills'
import local_IP from '../../local_IP';

function Bills({ user, role }: any) {
    // console.log('whosme', user);
    const [payments, setPayments] = useState([])
    useEffect(() => {
        let options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ studentID: user.userID })
        };
        let path =
            process.env.NODE_ENV === "production"
                ? "/payment/"
                : `${local_IP}/payment/details`;
        fetch(path, options)
            .then((data) => data.json())
            .then((data) => {
                console.log(">>>>>>", data);
                setPayments(data)
            });
    }, [user])
    return (
        <div>
            {
                role === 'Principal' ?
                    <AssignBills /> :
                    <div>
                        <div className="Bills">
                            <div className="main">
                                <div className="firstBox"> date </div>
                                <div className="secondtBox"> semster</div>
                                <div className="thirdtBox"> total price</div>
                                <div className="thirdtBox"> Status </div>
                            </div>
                            {
                                payments.length ?
                                    payments.map((el, key) => (
                                        <div key={key}>
                                            <div className="main">
                                                <div className="firstBox"> {el['dueDate']} </div>
                                                <div className="secondtBox"> {el['semester']}</div>
                                                <div className="thirdtBox"> {el['amount']}</div>
                                                {
                                                    el['paid'] ?
                                                        <div className="thirdtBox"> Paid </div>
                                                        :
                                                        <div className="fourthtBox"> <StripButton price={el['amount']} semester={el['semester']} user={user} /> </div>
                                                }
                                            </div>
                                        </div>
                                    )) : <div className="empty"><h4>No payments yet</h4></div>
                            }
                        </div>
                    </div>

            }
        </div>
    )
}

const mapStateToProps = (state: State) => {
    return {
        user: state.user,
        role: state.role,
    };
};

export default connect(mapStateToProps)(Bills);