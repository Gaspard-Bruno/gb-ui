import produce from 'immer'
import normalize from 'json-api-normalizer';

import { ACTION_TYPES } from "./actions";

import { ACTION_TYPES as APPOINTMENT_ACTION_TYPES } from '../appointments/actions'

const initialState = {
  appointments: {},
  providers: {},
  admins: {},
  clients: {},
  services: {}
};

  const updateEntitiesData = (state, draft, entity, dataKey, data) => {
    const entityData = data[dataKey]
  
    if (entityData) {
      draft[entity] = {
        ...state[entity],
        ...entityData
      }
    }
  }  

export default (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {
          // UPDATE ENTITIES DATA
          case APPOINTMENT_ACTION_TYPES.GET_APPOINTMENTS_SUCCESS:   
            const data = normalize(action.payload)
            console.log("data", data)

            updateEntitiesData(state, draft, 'appointments', 'appointment', data)
            updateEntitiesData(state, draft, 'providers', 'provider', data)
            updateEntitiesData(state, draft, 'admins', 'admin', data)
            updateEntitiesData(state, draft, 'clients', 'client', data)
            updateEntitiesData(state, draft, 'services', 'service', data)
            break
  
          case ACTION_TYPES.RESET:
            draft.entities = initialState.entities
            break
    
          default:
            break;
        }
      })
};
