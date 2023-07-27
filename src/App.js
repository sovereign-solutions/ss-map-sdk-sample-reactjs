import './App.scss';
import React, {useContext, useEffect} from "react";
import Map from "./components/Map/Map";
import {AppContext, AppProvider} from "./AppContext";
import {points, polygons} from "./geojson-sample";
import DetailPanel from "./components/Map/DetailPanel";

const App = () => {
    const {
        map,
        detail,
        setDetail
    } = useContext(AppContext);

    useEffect(() => {
        if (map) {
            map.addSource('demo-polygons', {
                'type': 'geojson',
                'data': polygons
            });
            map.addSource('demo-points', {
                'type': 'geojson',
                'data': points
            });
            map.addLayer(
                {
                    'id': 'demo-polygons',
                    'type': 'fill',
                    'source': 'demo-polygons',
                    'layout': {},
                    'paint': {
                        'fill-color': '#f08',
                        'fill-opacity': 0.4
                    }
                },
            );
            map.addLayer(
                {
                    'id': 'demo-points',
                    'type': 'circle',
                    'source': 'demo-points',
                    'layout': {},
                    'paint': {
                        'circle-radius': 10,
                        'circle-stroke-width': 3,
                        'circle-color': '#1930ff',
                        'circle-stroke-color': '#fff',
                    }
                },
            );
            const handleClick = (e) => {
                const properties = e.features[0].properties;
                setDetail(properties);
            }
            map.on('click', 'demo-polygons', handleClick);
            map.on('click', 'demo-points', handleClick);
            map.on('mouseenter', 'demo-polygons', () => {
                map.getCanvas().style.cursor = 'pointer';
            });
            map.on('mouseenter', 'demo-points', () => {
                map.getCanvas().style.cursor = 'pointer';
            });
        }
    }, [map])
    return (
        <div className="App">
            <Map/>
            {
                detail && (
                    <DetailPanel/>
                )
            }
        </div>
    );
}

export default () => {
    return (
        <AppProvider>
            <App/>
        </AppProvider>
    )
};
