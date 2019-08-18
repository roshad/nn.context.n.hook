import React from "react";
import "./App.css";
import ThemeContextProvider, { ThemeContext } from "./context";
import AuthContextProvider, { AuthContext } from "./authContext";
function App() {
    return (
        <div className="App">
            <AuthContextProvider>
                <ThemeContextProvider>
                    <Navbar />
                    <BookList />
                    <Toggle />
                </ThemeContextProvider>
            </AuthContextProvider>
        </div>
    );
}
function Toggle() {
    return (
        <AuthContext.Consumer>
            {contextAuth => (
                <ThemeContext.Consumer>
                    {context => {
                        const { auth, toggle: authToggle } = contextAuth;
                        const { toggle } = context;
                        return (
                            <div>
                                <input
                                    type="checkbox"
                                    name="themeToggle"
                                    onClick={toggle}
                                />
                                <label
                                    onClick={authToggle}
                                    htmlFor="themeToggle"
                                >
                                    {auth ? "in" : "out"}
                                </label>
                            </div>
                        );
                    }}
                </ThemeContext.Consumer>
            )}
        </AuthContext.Consumer>
    );
}
class Navbar extends React.Component {
    static contextType = ThemeContext;
    render() {
        const { isLight, light, dark } = this.context;
        const style = isLight ? light : dark;
        return (
            <nav className="Navbar" style={{ ...style }}>
                <h1>ABC</h1>
                <ul>
                    <li>thing1</li>
                    <li>thing2</li>
                    <li>thing3</li>
                </ul>
            </nav>
        );
    }
}

class BookList extends React.Component {
    static contextType = ThemeContext;
    render() {
        const { isLight, light, dark } = this.context;
        const style = isLight ? light : dark;
        return (
            <ul className="booklist" style={{ ...style }}>
                <li>book1</li>
                <li>book2</li>
                <li>book3</li>
            </ul>
        );
    }
}
export default App;
