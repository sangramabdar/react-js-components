import React, { useEffect, useState } from "react";
import style from "./pagination.module.css";

async function apiCall() {
  try {
    var result = await fetch(
      "https://jsonplaceholder.typicode.com/posts/2/comments"
    );

    if (result.status != 200) {
      throw "something is gone wrong";
    }

    return result.json();
  } catch (error) {
    return error;
  }
}

function Pagination() {
  const [buttonState, setButtonState] = useState([]);

  const [totalButtons, setTotalButtons] = useState([]);

  const [currentState, setCurrentState] = useState({
    startElement: 0,
    endElement: 9,
  });

  const [state, setPages] = useState([]);

  const [stateAPI, setStateAPI] = useState([]);

  const nextButtons = () => {
    var buttons = [];
    var number = buttonState[-1];
    if (totalButtons.length < number) {
      return;
    }
    var number = buttonState[-1];
    var number2 = number + 1;
    var index = 0;
    for (let i = number2; i <= number2 + 9; i++) {
      buttons[index] = i;
      index++;
    }
    setButtonState(buttons);
  };

  const previousButtons = () => {
    var number = buttonState[0];
    if (buttonState[0] == 1) {
      return;
    }
    var buttons = [];

    var number2 = number - 1;
    var index = 0;
    for (let i = number2 - 9; i <= number2; i++) {
      buttons[index] = i;
      index++;
    }
    setButtonState(buttons);
  };

  useEffect(() => {
    apiCall().then(result => {
      var buttons = [];

      if (result.length >= 10) {
        var countOfPages = result.length / 10;
        var subPage = result.length % 10;

        if (subPage > 0) {
          subPage = 1;
        }

        for (let i = 1; i <= countOfPages + subPage; i++) {
          buttons[i - 1] = i;
        }
      } else {
        buttons[0] = 1;
      }

      setTotalButtons(buttons);
      setButtonState(buttons.slice(0, 10));
      setStateAPI(result);
      setPages(result.slice(0, 10));
    });
  }, []);

  useEffect(() => {
    var newArray = stateAPI.slice(
      currentState.startElement,
      currentState.endElement
    );

    setPages(newArray);
  }, [currentState]);

  const buttonOnClick = event => {
    var number = Number.parseInt(event?.target?.innerText);

    if (number == 1) {
      setCurrentState({
        startElement: 0,
        endElement: 10,
      });
    } else {
      var newState = {
        startElement: (number - 1) * 10 - 1,
        endElement: number * 10 - 1,
      };
      setCurrentState({
        ...newState,
      });
    }
  };

  return (
    <div>
      <div className={style.container}>
        {state.map(element => {
          return (
            <ImageContainer
              title={element.name}
              email={element.email}
              key={element.id}
            />
          );
        })}
      </div>
      <button onClick={previousButtons}>previous pages</button>
      <div>
        {buttonState.map(element => {
          return (
            <>
              <button key={element} onClick={buttonOnClick}>
                {element}
              </button>
            </>
          );
        })}
      </div>
      <button onClick={nextButtons}>next pages</button>
    </div>
  );
}

function ImageContainer({ title, email }) {
  return (
    <div>
      <p>{title}</p>
      <p>{email}</p>
    </div>
  );
}

export default Pagination;
