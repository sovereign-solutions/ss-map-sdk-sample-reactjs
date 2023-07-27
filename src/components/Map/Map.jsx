import React, {useContext, useMemo, useState} from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import lightStyle from './MapStyles/light-style';
import {AppContext} from "../../AppContext";
import "mapbox-gl/dist/mapbox-gl.css"

const Map = (props) => {
    const {
        setMap
    } = useContext(AppContext)
    const {
        width = '100%',
        height = '100%',
        scrollZoom = true,
        boxZoom = true,
        dragRotate,
        dragPan,
        interactive,
        preserveDrawingBuffer = false,
        antialias,
        maxBounds,
        children
    } = props;

    const handleStyleLoad = (map) => {
        setMap(map)
    }

    const MapBox = useMemo(() => ReactMapboxGl({
        accessToken: '',
        scrollZoom: scrollZoom,
        boxZoom: boxZoom,
        dragRotate: dragRotate,
        dragPan: dragPan,
        interactive: interactive,
        preserveDrawingBuffer: preserveDrawingBuffer,
        antialias: antialias,
        maxBounds: maxBounds,
    }), []);
    return (
        <>
            <MapBox
                containerStyle={{
                    height,
                    width,
                }}
                center={{
                    lng: 106.67551040343085,
                    lat: 10.793215708744995
                }}
                style={lightStyle}
                onStyleLoad={handleStyleLoad}
                zoom={[15]}
            >
                {children}
            </MapBox>
        </>
    )
}
export default Map;
