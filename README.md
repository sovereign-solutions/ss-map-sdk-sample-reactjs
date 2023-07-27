## Installation and Setup Instructions

Clone down this repository.
You will need `node` (required version is `>= 16`) and `npm` installed globally on your machine.  

## Install yarn
In the project directory, run:
```bash
npm install --global yarn
```
## Install package by using yarn command
```bash
yarn install
```

## Run the app by this command
```bash
yarn start
```

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.
The page will reload when you make changes.
You may also see any lint errors in the console.

## Build the app
```bash
yarn start
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed! 

## Components

### Proxy components (proxy between React and Map API)

- ReactMapboxGL
- Layer & Feature
  - property `symbol` displays a symbol.
  - property `line` displays a lineString.
  - property `fill` displays a polygon.
  - property `circle` displays a circle.
  - property `raster` displays a raster tiles.
  - property `fill-extrusion` displays a layer with extruded buildings.
  - property `background` displays a background layer.
  - property `heatmap` displays a heatmap layer.
- Source
- GeoJSONLayer

### DOM components (normal React components)

- ZoomControl
- ScaleControl
- RotationControl
- Marker (Projected component)
- Popup (Projected component)
- Cluster
