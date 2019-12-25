import actionTypes from '../actionTypes'
import axios from 'axios'
const { GET_LEAD, SET_CONVERTED_STATUS } = actionTypes

export const fetchNewLead = () => async dispatch => {
  try {
    const {
      data: { results }
    } = await axios.get('https://randomuser.me/api/')
    const lead = { ...results[0] }
    lead.convertedStatus = false
    dispatch({ type: GET_LEAD, payload: lead })
  } catch (err) {
    console.log(err)
  }
}

export const changeConvertedStatus = ({ id, status }) => dispatch => {
  try {
    dispatch({
      type: SET_CONVERTED_STATUS,
      payload: { id, convertedStatus: status }
    })
  } catch (err) {
    console.log(err)
  }
}
