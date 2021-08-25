import { useState } from "react";

function useInput<T>(initialValue: T) {
  const [state, setState] = useState<T>(initialValue);

  return {
    value: state,
    onChange: event => {
      setState(event?.target?.value);
    },
  };
}

export default useInput
