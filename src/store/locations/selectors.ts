import { LocationState, Location } from './types';

export function mapCenter(state: LocationState): Location {
  const item = state.locations.filter(l => l.id === state.mapCenterId)[0];

  if (item == null) {
    return {
      id: 1,
      name: "Map Center",
      lat:6.93194,
      lng:79.84778
    };
  }

  return item;
}

export function allLocations(state: LocationState) {
  return state.locations.filter(l => l.id !== state.mapCenterId)
}
