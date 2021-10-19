import s from "./Header.module.css";
import Location from "./Location/Location";
import Time from "./Time/Time";
import React from "react";

class Header extends React.Component {

    render() {
        return (
            <div className={s.header}>
                <Location/>
                <Time/>
            </div>
        )
    }
}

export default Header