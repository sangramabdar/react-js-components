import axios from "axios";
import React, { useEffect } from "react";
import db from "../firabase";
function Firebase(props) {
  const getUsers = async () => {
    const users = await db.collection("users").get();

    const usersArray = users.docs.map(doc => {
      return { ...doc.data(), id: doc.id };
    });
    db.collection("users").add({
      name: "sangram",
      age: 22,
    });
    console.log(usersArray);

    // db.collection("users").doc(`${usersArray[0].id}`).delete();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return <div>firabase</div>;
}

function App() {
  return (
    <div>
      <Firebase />
    </div>
  );
}

export default App;
