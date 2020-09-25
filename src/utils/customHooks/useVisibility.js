//libraries
import {useState} from "react";

const useVisibility = (initialState = false) => {
    const [visible, setVisible] = useState(initialState);

    const toggleVisible = () => setVisible(v => !v);

    return [visible, toggleVisible];
};

export default useVisibility;
