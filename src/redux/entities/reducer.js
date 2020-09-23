import produce from "immer";
import normalize from "json-api-normalizer";

import { ACTION_TYPES } from "./actions";

import { ACTION_TYPES as APPOINTMENT_ACTION_TYPES } from '../appointments/actions'
import { ACTION_TYPES as PROVIDER_ACTION_TYPES } from '../providers/actions'
import { ACTION_TYPES as CLIENT_ACTION_TYPES } from '../clients/actions'
import { ACTION_TYPES as CANDIDATE_LEAD_ACTION_TYPES } from '../candidateLeads/actions'

const initialState = {
  appointments: {},
  providers: {},
  admins: {},
  clients: {},
  services: {},
  providerServices: {},
  candidateLeads: {}
};

const updateEntitiesData = (state, draft, entity, dataKey, data) => {
  const entityData = data[dataKey];

  if (entityData) {
    draft[entity] = {
      ...state[entity],
      ...entityData
    };
  }
};

export default (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {
          // UPDATE ENTITIES DATA
          case APPOINTMENT_ACTION_TYPES.GET_APPOINTMENTS_SUCCESS:
          case PROVIDER_ACTION_TYPES.GET_PROVIDERS_SUCCESS:
          case CLIENT_ACTION_TYPES.GET_CLIENTS_SUCCESS:
          case CANDIDATE_LEAD_ACTION_TYPES.GET_CANDIDATE_LEADS_SUCCESS:
            const data = normalize(action.payload)

        updateEntitiesData(state, draft, "appointments", "appointment", data);
        updateEntitiesData(state, draft, "providers", "provider", data);
        updateEntitiesData(state, draft, "admins", "admin", data);
        updateEntitiesData(state, draft, "clients", "client", data);
        updateEntitiesData(state, draft, "services", "service", data);
        updateEntitiesData(state, draft, 'candidateLeads', 'candidateLead', data);   
        updateEntitiesData(
          state,
          draft,
          "providerServices",
          "providerService",
          data
        );
        break;

      case ACTION_TYPES.RESET:
        draft.entities = initialState.entities;
        break;

      default:
        break;
    }
  });
};
