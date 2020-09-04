import produce from 'immer'

import * as actionTypes from './actionTypes'
import {
  GET_SERVICES_SUCCESS,
} from '../services/actionTypes'


const initialState = {
  services: {},
}

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

const reducer = (state = initialState, action = {}) => {
  return produce(state, draft => {
    switch (action.type) {
      // UPDATE ENTITIES DATA
      case GET_SERVICES_SUCCESS:

        const data = action.result.normalizedData
        updateEntitiesData(state, draft, 'services', 'service', data)

        break


      case actionTypes.RESET:
        draft.entities = initialState.entities
        break

      default:
        break;
    }
  })
}

export default reducer
