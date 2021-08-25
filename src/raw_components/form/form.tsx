import React from "react";
import useTextOnChange from "../../custom_hooks/useinput";

const nameAuth = (value: string, data: {}) => {
  var letters = /^[A-Z a-z]+$/;

  if (value.match(letters) && value.length > 10) {
    data["name"] = value;
    return true;
  } else {
    console.log("wrong name");
    return false;
  }
};

const emailAuth = (value: string, data: {}) => {
  var letters = /^[a-zA-Z0-9]*$/;
  var halfPart = "";

  if (value.includes("@gmail.com")) {
    var length = value.length - 10;
    var halfPart = value.substring(0, length);
  } else {
    console.log("wrong email");
    return false;
  }

  if (halfPart.match(letters)) {
    data["email"] = value;
    return true;
  } else {
    console.log("wrong email");
    return false;
  }
  return false;
};

const ageAuth = (value: string, data: {}) => {
  var letters = /^[0-9]+$/;

  var age = Number.parseInt(value);

  if (value.match(letters) && age >= 18) {
    data["age"] = value;
    return true;
  } else {
    console.log("wrong age");
    return false;
  }
};

function Form() {
  let data = {};

  let properties = useTextOnChange("");
  let properties2 = useTextOnChange("");
  let properties3 = useTextOnChange("");

  const auth = (): boolean => {
    if (
      properties.value != null &&
      properties2.value != null &&
      properties3.value != null
    ) {
      let result1 = nameAuth(properties.value, data);
      let result2 = emailAuth(properties2.value, data);
      let result3 = ageAuth(properties3.value, data);

      if (result1 && result2 && result3) {
        return true;
      }
    }
    return false;
  };

  const onSubmitEvent = e => {
    e?.preventDefault();
    if (auth()) {
      console.log("data is correct");
      console.log(data);
    }
  };
  return (
    <div>
      <form method="POST">
        <div>
          <input
            name="name"
            type="text"
            placeholder="enter your name"
            {...properties}
          />
        </div>
        <div>
          <input type="email" placeholder="enter your email" {...properties2} />
        </div>
        <div>
          <input type="text" placeholder="enter your age" {...properties3} />
        </div>
        <button onClick={onSubmitEvent}>submit</button>
      </form>
    </div>
  );
}

export default Form;
