import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import styles from './ordersMap.module.scss';
export default function OrdersMap() {

    const [selected, setSelected] = useState({});

    const mapStyles = {
        height: "500px",
        width: "95%",
        minWidth: "500px",
        marginBottom: "30px"
    };

    const defaultCenter = {
        lat: 48.4251, lng: 11.1734
    }

    const locations = [
        {
            name: "London",
            location: {
                lat: 51.552,
                lng: -0.3998
            },
            description: "John from London bought item worth 344$"
        },
        {
            name: "Belgrade",
            location: {
                lat: 44.792,
                lng: 20.4849
            },
            description: "Maria from Belgrade bought item worth 221$"
        },
        {
            name: "Prague",
            location: {
                lat: 50.073,
                lng: 14.447
            },
            description: "Tom from Prague bought item worth 1344$"
        },
        {
            name: "Nice",
            location: {
                lat: 43.3797,
                lng: 7.272
            },
            description: "Alice from Nice bought item worth 2224$"
        },
        {
            name: "Paris",
            location: {
                lat: 48.823,
                lng: 2.344
            },
            description: "Matt from Paris bought item worth 344$"
        }
    ];
    const onSelect = item => {
        setSelected(item);
    }
    console.log(selected);
    return (
        <div className={styles.wrapper}>
            <p className={styles.tip}>*Click on pin for details</p>
            <LoadScript
                googleMapsApiKey='AIzaSyDyyuOh29mki7RJUCliuyMN_LdKtc752RQ'>
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={5}
                    center={defaultCenter}
                >
                    {
                        locations.map(item => {
                            return (
                                <Marker
                                    key={item.name}
                                    position={item.location}
                                    onClick={() => onSelect(item)} />
                            )
                        })
                    }
                    {
                        selected.location &&
                        (
                            <InfoWindow
                                position={selected.location}
                                clickable={true}
                                onCloseClick={() => setSelected({})}
                            >
                                <>
                                    <p>{selected.description}</p>
                                </>
                            </InfoWindow>
                        )
                    }
                </GoogleMap>

            </LoadScript>
        </div>
    );
}
