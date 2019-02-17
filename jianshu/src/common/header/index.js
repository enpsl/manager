import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from "react-redux";
import { actionCreators } from './store';
import { HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
} from "./style"

const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className="left">首页</NavItem>
                <NavItem className="left">下载APP</NavItem>
                <NavItem className="right">登陆</NavItem>
                <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
                <SearchWrapper>
                    <CSSTransition
                        timeout={200}
                        in={props.focused}
                        classNames="slide"
                    >
                        <NavSearch
                            className={props.focused ? "focused" : ""}
                            onFocus={props.handleInputFocused}
                            onBlur={props.handleInputBlured}
                        />
                    </CSSTransition>
                    <i className={props.focused ? "focused iconfont" : "iconfont"}>&#xe614;</i>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className="writting"><i className="iconfont">&#xe615;</i>写文章</Button>
                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWrapper>
    );
};

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(["header", "focused"])
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocused() {
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlured() {
            dispatch(actionCreators.searchBlur())
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Header)