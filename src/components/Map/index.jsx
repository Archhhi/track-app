import { useEffect, useState } from 'react'
import style from './style.module.css'
import { TileLayer, MapContainer, LayersControl } from 'react-leaflet'

import 'leaflet-routing-machine'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import { useDispatch, useSelector } from 'react-redux'
import { getCoordinates, getRoute } from '../../redux/selectors/mapSelectors'
import { loadCoordinatesStart } from '../../redux/actions/map'

const maps = {
  base: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
}

function MapComponent() {
  const dispatch = useDispatch()
  const [map, setMap] = useState(null)
  const { start, end } = useSelector(getCoordinates)
  const route = useSelector(getRoute)

  // Create the routing-machine instance:
  useEffect(() => {
    if (!map) return
    if (map) {
      dispatch(loadCoordinatesStart(start, end))
    }
  }, [map, start, end])

  useEffect(() => {
    if (route) {
      route.addTo(map)
    }
  }, [route])

  return (
    <div className={style.mapWrapper}>
      <MapContainer
        center={[37.0902, -95.7129]}
        zoom={3}
        zoomControl={false}
        style={{ height: '100%', width: '100%', padding: 0 }}
        whenCreated={(map) => setMap(map)}
      >
        <LayersControl>
          <LayersControl.BaseLayer checked name="Map">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url={maps.base}
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </div>
  )
}

export default MapComponent
