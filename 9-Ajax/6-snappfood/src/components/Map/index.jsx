import React, {Component} from 'react';
import L from 'leaflet';
import {isChrome} from 'react-device-detect';
import {Map, WMSTileLayer, Marker, Popup, FeatureGroup} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import './styles.scss';

import vendorIconUrl from '../../assets/images/map/pin-vendor.png';
import userIconUrl from '../../assets/images/map/pin-user.png';
import boxMotorUrl from '../../assets/images/map/box-motor.png';

const rasterSetting = {
    url: isChrome
        ? 'https://raster.snappmaps.ir/styles/snapp-style/{z}/{x}/{y}{r}.webp'
        : 'https://raster.snappmaps.ir/styles/snapp-style/{z}/{x}/{y}{r}.png',
    format: 'image/png'
};

const defaultMap = {
    mapZoom: 13,
    mapPosition: [35.77402006461328, 51.418338418006904]
};

/**
 * @param {string} type
 */
function getIcon(type){
    switch (type.toLowerCase()) {
        case "vendor":
            return vendorIconUrl;
        case "user":
            return userIconUrl;
        case "express":
            return boxMotorUrl;
    }
}

class MapComponent extends Component {
    state = {
        mapZoom: this.props.mapZoom ? this.props.mapZoom : defaultMap.mapZoom,
        centerLocation: null
    };

    constructor(props) {
        super(props);
        this.groupRef = React.createRef();
    }

    handleZoomStart = e => {
        if (this.map && this.map.leafletElement) {
            this.setState({
                mapZoom: this.map.leafletElement.getZoom()
            });
        }
        let center;
        if (this.props.centerMarker) {
            center = e.target.getCenter();
            this.setState({
                centerLocation: Object.values(center)
            });
        }
        if (this.props.onDrag) this.props.onDrag(center);
    };

    handleDrag = e => {
        let center;
        if (this.props.centerMarker) {
            center = e.target.getCenter();
            this.setState({
                centerLocation: Object.values(center)
            });
        }
        if (this.props.onDrag) this.props.onDrag(center);
    };

    handleClick = e => {
        if (this.props.onClick) this.props.onClick(e);
    };

    iconAnchor = size => {
        switch (size) {
            case 50:
                return [23, 44];

            default:
                return [19, 45];
        }
    };

    renderMarkerArrays(markers) {
        return markers.map(marker => {
            const icon = new L.Icon({
                iconUrl: getIcon(marker.type),
                iconSize: [marker.size],
            });
            return (
                <Marker key={marker.type} position={marker.position} icon={icon}>
                    <Popup>
                        {marker.popup}
                    </Popup>
                </Marker>
            );
        });
    }

    render() {
        const {mapZoom} = this.state;
        const {
            mapPosition,
            dragging = true,
            zooming = true,
            markerArrays = []
        } = this.props;
        return (
            <Map
                ref={el => (this.map = el)}
                className={'mapContainer'}
                animate={true}
                onClick={this.handleClick}
                onDrag={this.handleDrag}
                center={mapPosition ? mapPosition : defaultMap.mapPosition}
                zoom={mapZoom}
                onZoomEnd={this.handleZoomStart}
                zoomControl={false}
                attributionControl={false}
                maxZoom="18"
                dragging={dragging}
                closePopupOnClick={zooming}
                doubleClickZoom={zooming}
                zoomSnap={zooming}
                zoomDelta={zooming}
                trackResize={zooming}
                touchZoom={zooming}
                scrollWheelZoom={zooming}
            >
                <WMSTileLayer
                    url={rasterSetting.url}
                    format={rasterSetting.format}
                    detectRetina={true}
                />
                <FeatureGroup ref={this.groupRef}>
                    {this.renderMarkerArrays(markerArrays)}
                </FeatureGroup>
            </Map>
        );
    }
}

export default MapComponent;
