import { Component } from 'react'
import ReactMapGL, { FlyToInterpolator } from 'react-map-gl'

// @todo - Clear up this mess and useState hooks etc.
class Map extends Component {
    state = {
        viewport: {
            width: '100vw',
            height: '100vh',
            latitude: 41.5868,
            longitude: -93.625,
            zoom: 1,
        },
    }

    render() {
        return (
            <ReactMapGL
                // @todo - Add Styles.
                mapboxApiAccessToken="pk.eyJ1IjoidGhlY2hhbmdlYmUiLCJhIjoiY2tibmRybGdqMXJ5ajJ2cW43bnNub3A5dyJ9.BOp3bf8_eooK1IeohZbriA"
                transitionDuration={1000}
                transitionInterpolator={
                    new FlyToInterpolator({
                        curve: 1.414,
                        speed: 1,
                        maxDuration: 1000,
                    })
                }
                onViewportChange={(viewport: any) =>
                    this.setState({ viewport })
                }
                {...this.state.viewport}
            />
        )
    }
}

export default Map
