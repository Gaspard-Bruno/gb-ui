import produce from 'immer'

import { ACTION_TYPES } from "./actions";

import { ACTION_TYPES as APPOINTMENT_ACTION_TYPES } from '../appointments/actions'

const initialState = {
  appointments: {}
};

const normalizeArray = (arr) => {
    const normalized = {}
    Object.keys(arr).forEach((key) => {
        
      const { id, attributes, relationships } = arr[key]
  
      const relationshipsAttributes = {}
      if (relationships) {
        Object.keys(relationships).forEach((key) => {
          const relationship = relationships[key].data
          if (relationship) {
            relationshipsAttributes[key] = relationship instanceof Array ? relationship.map((a) => a.id) : relationship.id
          }
        })
      }
  
      normalized[id] = { id, ...attributes, ...relationshipsAttributes }
    })
  
    return normalized
  }
  
  const updateEntitiesData = (state, draft, entity, dataKey, data) => {
    const entityData = data[dataKey]
  
    if (entityData) {
      draft[entity] = {
        ...state[entity],
        ...normalizeArray(entityData)
      }
    }
  }
  
export default (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {
          // UPDATE ENTITIES DATA
          case APPOINTMENT_ACTION_TYPES.GET_APPOINTMENTS_SUCCESS:   
            console.log("FUXK YE")
            console.log(action)
            console.log(action.result)
            console.log(action.payload)

            const data = action.result.normalizedData
            console.log(data)

            updateEntitiesData(state, draft, 'appointments', 'appointment', data)    
            break
    
    
          case ACTION_TYPES.RESET:
            draft.entities = initialState.entities
            break
    
          default:
            break;
        }
      })
};
