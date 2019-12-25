import actionTypes from '../actionTypes'
const { GET_LEAD, SET_CONVERTED_STATUS } = actionTypes

const initialState = []

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_LEAD: return [...state, payload]
    case SET_CONVERTED_STATUS: {
      const leadIndex = state.findIndex(singleState => singleState.id.value === payload.id)
      const lead = state[leadIndex]
      lead.convertedStatus = payload.convertedStatus
      state[leadIndex] = { ...lead }
      return [...state]
    }
    default: return state
  }
}