import React from 'react'
import LoginFormInline from "./login_inline"
import LoginFormLevel from "./login_level"

export default class Login extends React.Component {
    render() {
        return <div>
            <LoginFormInline/>
            <LoginFormLevel/>
        </div>
    }
}