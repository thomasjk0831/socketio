import { useEffect, useState } from "react";

const PREFIX = "whatsapp-clone-";

export default function useLocalStorage(key, initialValue) {
  const prefixedkey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedkey);
    //set value to localstorage value if it exists and return
    if (jsonValue != null) return JSON.parse(jsonValue);
    //if initialvalue is a function call 'setId' then set value
    //to whatever that function returns
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      //if initialvalue has not been called with a function,
      //then just set value to be undefined
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedkey, JSON.stringify(value));
  }, [prefixedkey, value]);

  return [value, setValue];
}
