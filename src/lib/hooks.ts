import { RefObject, useRef, useState } from "react";

export function getRefValue<T>(ref: RefObject<T>) {
  return ref.current as T;
}

export function useStateRef<S>(
  defaultValue: S
): [S, (value: S) => void, RefObject<S>] {
  const ref = useRef(defaultValue);
  const [state, _setState] = useState(defaultValue);
  const setState = (value: S) => {
    _setState(value);
    ref.current = value;
  };

  return [state, setState, ref];
}
