import { Component } from 'react'
import ReactMapGL, { FlyToInterpolator, InteractiveMap } from 'react-map-gl'

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
            <InteractiveMap
                // @todo - Add Styles.
                // @todo - Set Access Token via Env.
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
                onClick={(e) => console.log(e)}
                {...this.state.viewport}
            />
        )
    }
}

export default Map
