import React from "react";
import s from '../Header.module.css'


class Location extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            item: []
        };
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/iss-now.json')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        item: result.iss_position,//сразу на обьект с позицией
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: true
                    })
                }
            )
    }
    componentWillUnmount(){

    }
    render() {
        const {error, isLoaded, item} = this.state;
        if (error) {
            return (
                <div className={s.block}>
                    <div className={s.title}>IIS is now located at:</div>
                    <div className={s.text}>Error: {error.message()}</div>
                </div>
            )
        } else if (!isLoaded) {
            return (
                <div className={s.block}>
                    <div className={s.title}>IIS is now located at:</div>
                    <div className={s.text}>Loading...</div>
                </div>
            )
        } else {
            return (
                <div className={s.block}>
                    <div className={s.title}>IIS is now located at:</div>
                    <div className={s.text}>longitude: {item.longitude},
                        latitude: {item.latitude}</div>
                </div>
            )
        }

    }
}

export default Location