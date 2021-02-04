/* eslint-disable */
import React, { Component, createContext } from 'react'

export const ThemeContext = createContext()

export class ThemeProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { isDarkMode: false }
    }
    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, tastesLikeChicken: true }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}
