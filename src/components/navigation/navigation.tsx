import React, { useEffect, useRef, useState } from "react";
import style from "./navigation.module.css";

const SpotifyLogo = React.memo(function (props) {
  console.log("child");
  return <div className={style.spotify}>spotify</div>;
});

function NavigationComponent(props) {
  const { name } = props;
  return <div className={style.navigation_element2}>{name}</div>;
}

function Navigation() {
  const components = ["premium", "support", "download", "sign up", "log in"];

  const [state, setState] = useState(true);

  const ref = useRef(null);

  const navbar_classes = state
    ? `${style.navigation_container} ${style.navigation_container_right}`
    : `${style.navigation_container}`;

  const element_classes = state
    ? `${style.navigation_element} ${style.navigation_element_hidden}`
    : `${style.navigation_element}`;

  useEffect(() => {
    window.addEventListener("resize", () => {
      setState(!state);
    });
  }, [state]);

  let index = 1;
  return (
    <div ref={ref} className={navbar_classes}>
      <SpotifyLogo />
      <div className={element_classes}>
        {components.map(name => {
          return <NavigationComponent key={index++} name={name} />;
        })}
      </div>
    </div>
  );
}

export default Navigation;
