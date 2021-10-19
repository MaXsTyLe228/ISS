import React from "react";
import s from "./People.module.css";

class People extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            item: []
        };
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        item: result.people,//сразу на обьект с людьми
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


    render() {
        let counter = 0;
        const {error, isLoaded, item} = this.state
        if (error) {
            return <p>Error {error.message()}</p>
        } else if (!isLoaded) {
            return <p>Loading...</p>
        } else {
            return (<div className={s.people}>
                {item.map(i => {
                    if (i.craft === 'ISS') {
                        counter += 1;
                        return (
                            <div className={s.member}>
                                <img
                                    src={'https://c8.alamy.com/zooms/9/f43ce635a74e4353975d64b168c97c8f/2bxb8bd.jpg'}/>
                                <div className={s.memberName}>{i.name}</div>
                            </div>
                        )
                    }
                })}
                <div className={s.total}>Total amount: {counter} people on ISS</div>
            </div>)
        }
    }
}

export default People