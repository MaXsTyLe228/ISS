import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import s from './Map.module.css'

const Marker = ({text}) => <div className={s.marker}>{text}</div>;

class SimpleMap extends Component {
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

    render() {
        const {error, isLoaded, item} = this.state;
        const param = {
            center: {
                lat: 0,
                lng: 0,
            },
            zoom: 1
        };
        let l1 = this.state.item.latitude;
        let l2 = this.state.item.longitude;
        if (error) {
            return (
                <div className={s.map}>
                    Error
                </div>
            )
        } else if (!isLoaded) {
            return (
                <div className={s.map}>
                    <GoogleMapReact
                        bootstrapURLKeys={{key: 'AIzaSyBHF_yTVAjDCo9tqBkDW43OAQSO6p2Hvuw'}}
                        center={param.center}
                        zoom={param.zoom}
                    >
                        <Marker
                            lat={item.latitude}
                            lng={item.longitude}
                            text="📍"
                        />
                    </GoogleMapReact>
                </div>
            )
        } else {
            return (
                <div className={s.map}>
                    <GoogleMapReact
                        bootstrapURLKeys={{key: 'AIzaSyBHF_yTVAjDCo9tqBkDW43OAQSO6p2Hvuw'}}
                        center={{lat: l1, lng: l2}}
                        zoom={param.zoom}
                    >
                        <Marker
                            lat={item.latitude}
                            lng={item.longitude}
                            text="📍"
                        />
                    </GoogleMapReact>
                </div>
            );
        }
    }

}

export default SimpleMap;