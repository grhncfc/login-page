import React,{useState,useContext} from "react";

const DarkThemeContext = React.createContext();
const DarkThemeToggleContext = React.createContext();

export const useDarkTheme = () => {
    return useContext(DarkThemeContext);
};

export const useDarkThemeToggle = () => {
    return useContext(DarkThemeToggleContext);
};

export const DarkThemeProvider = ({children}) => {
    const [darkTheme,setDarkTheme] = useState(true);

    return (
        <DarkThemeContext.Provider value={darkTheme}>
            <DarkThemeToggleContext.Provider value={setDarkTheme}>
                {children}
            </DarkThemeToggleContext.Provider>
        </DarkThemeContext.Provider>
    );
};


// class Drawer extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             visible:false
//         }
//     }
//
//     handleVisible = () => {
//         return this.setState({
//             visible: !this.state.visible
//         });
//     };
//
//     render(){
//       return (<div onClick={this.handleVisible}>drawer</div>)
//     }
// }
//
// class Modal extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             visible:false
//         }
//     }
//
//     handleVisible = () => {
//         return this.setState({
//             visible: !this.state.visible
//         })
//     };
//
//     render(){
//         return (<div onClick={this.handleVisible}>drawer</div>)
//     }
// }
//
// class Tooltip extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             visible:false
//         }
//     }
//
//     handleVisible = () => {
//         return this.setState({
//             visible: !this.state.visible
//         })
//     };
//
//     render(){
//         return (<div onMouseEnter={this.handleVisible}>drawer</div>)
//     }
// }
//
// //visible
//
//
// const Drawer = () => {
//     // const [visible, setVisible] = useState(false);
//     //
//     // const handleVisible = () => setVisible(v => !v);
//     const {toggleVisible, visible} = useVisibility();
//
//     return (<div onMouseEnter={toggleVisible}>drawer</div>)
// };
//
// const Modal = () => {
//     // const [visible, setVisible] = useState(false);
//     //
//     // const toggleVisible = () => setVisible(v => !v);
//
//     const [toggleModalVisibility, isModalVisible] = useVisibility();
//
//     return (<div onMouseEnter={toggleVisible}>drawer</div>)
// };
//
// const Tooltip = () => {
//     const [toggleTooltipVisibility, isTooltipVisible] = useVisibility(false);
//     // const [visible, setVisible] = useState(false);
//     //
//     // const toggleVisible = () => setVisible(v => !v);
//
//     return (<div onMouseEnter={toggleVisible}>drawer</div>)
// };
//
//
// const useVisibility = (initialState = false) => {
//     const [visible, setVisible] = useState(initialState);
//
//     const toggleVisible = () => setVisible(v => !v);
//
//     return [toggleVisible, visible];
// };
