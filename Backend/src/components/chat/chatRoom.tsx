import React, { useEffect, useRef, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "./chat";
import ChatMessage from "./chatMessage";
import { Button, TextField } from "@material-ui/core";
import { State } from "../../reducers/rootReducer";
import { connect } from "react-redux";
import "./chat.css";

function ChatRoom({ user, userDetails, classroomID }) {
  const messageRef =
    userDetails.role === "Student"
      ? firestore.collection(`messages/${user.schoolID}/${user.classroomID}`)
      : firestore.collection(`messages/${user.schoolID}/${classroomID}`);
  const query = messageRef.orderBy("createdAt");
  const [messages] = useCollectionData(query, { idField: "id" });
  const [newMsg, setNewMsg] = useState("");
  const scroll: any = useRef();

  useEffect(() => {
    console.log("object");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("send");
    await messageRef.add({
      text: newMsg,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid: userDetails.id,
      name: userDetails.name,
      role: userDetails.role,
    });
    setNewMsg("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  console.log("messages>>>", messages, classroomID, user, userDetails);

  return (
    <div className="room">
      <div className="chatBox">
        {messages &&
          messages.map((msg: any) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
        <div ref={scroll}></div>
      </div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <TextField
          id="outlined-multiline-static"
          label="Type a message"
          value={newMsg}
          variant="outlined"
          onChange={(e: any) => setNewMsg(e.target.value)}
        />
        <Button variant="outlined" type="submit">
          send
        </Button>
      </form>
    </div>
  );
}

const mapStateToProps = (state: State) => {
  return {
    user: state.user,
    userDetails: state.userDetails,
    classroomID: state.classroomID,
  };
};

export default connect(mapStateToProps)(ChatRoom);
