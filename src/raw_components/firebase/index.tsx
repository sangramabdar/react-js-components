import React, { useEffect, useRef, useState } from "react";
import "./index.custom.css";
import ReactDOM from "react-dom";

import db from "../../firabase";
import useInput from "../../custom_hooks/useinput";

var id = 0;

function UserInput(props) {
  const inputProps1 = useInput("");
  const inputProps2 = useInput("");

  const onClickHandler = event => {
    db.collection("users")
      .doc(`${id}`)
      .set({ name: inputProps1.value, age: inputProps2.value });
    id++;

    props.refresh();
  };
  return (
    <div>
      <input type="text" {...inputProps1} />
      <input type="number" {...inputProps2} />
      <button onClick={onClickHandler}>add user</button>
    </div>
  );
}

function App() {
  const [state, setUsers] = useState([]);

  const getUsers = async () => {
    var data = await db.collection("users").get();
    var users = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));

    setUsers(users);
  };

  const deleteUser = id => {
    db.collection("users").doc(`${id}`).delete();
    id--;
    getUsers();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <UserInput refresh={getUsers} />
      {state.length > 0
        ? state.map((user, index) => {
            return (
              <div key={index}>
                <div>{user.name}</div>
                <div>{user.age}</div>
                <button>update</button>
                <button
                  onClick={() => {
                    deleteUser(user.id);
                  }}
                >
                  delete
                </button>
              </div>
            );
          })
        : "no users"}
    </div>
  );
}

ReactDOM.render(<App></App>, document.getElementById("root"));
