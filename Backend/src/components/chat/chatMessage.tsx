import React, { useEffect, useState } from 'react';
import { State } from '../../reducers/rootReducer';
import { connect } from 'react-redux';
import './chat.css';


function ChatMessage({ message, user, userDetails }) {

    function formatDate(input) {
        if (input.createdAt) {
            var epoch = new Date(0);
            epoch.setSeconds(parseInt(input.createdAt.seconds));
            var date = epoch.toISOString();
            date = date.replace('T', ' ');
            return date.split('.')[0].split(' ')[0];
        }
        return ''
    };

    function formatTime(input) {
        if (input.createdAt) {
            var epoch = new Date(0);
            epoch.setSeconds(parseInt(input.createdAt.seconds));
            var date = epoch.toISOString();
            date = date.replace('T', ' ');
            return `${epoch.toLocaleTimeString().split(' ')[0].split(':')[0]}:${epoch.toLocaleTimeString().split(' ')[0].split(':')[1]}`;
        }
        return ''
    };

    const messageClass = message.uid === user.userID ? 'sent' : 'received'
    const messageRole = message.role === 'Student' ? '' : 'important'
    // console.log(message.uid, user.userID);
    return (
        <div>
            <p className={`date_${messageClass}`}>
                {formatDate(message)}
            </p>
            <p className={`name_${messageClass} ${messageRole}`}>
                {message.name}
            </p>
            <div className={`message ${messageClass}`}>
                <p className={`message ${messageRole}`}>
                    {message.text}
                </p>
            </div>
            <p className={`name_${messageClass}`}>
                {formatTime(message)}
            </p>
        </div>
    )

}

const mapStateToProps = (state: State) => {
    return {
        user: state.user,
        userDetails: state.userDetails,
    };
};

export default connect(mapStateToProps)(ChatMessage)