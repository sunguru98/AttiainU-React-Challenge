import React, { useState } from 'react'
import { connect } from 'react-redux'
import { changeConvertedStatus } from '../redux/actions/leadsActions'

const LeadsListItem = ({
  lead: {
    id: { value },
    gender,
    email,
    phone,
    picture: { thumbnail },
    name: { title, first, last },
    convertedStatus
  },
  changeConvertedStatus
}) => {

  const [convertedState, setConvertedState] = useState(convertedStatus)

  const handleChange = idValue => {
    changeConvertedStatus({ id: idValue, status: !convertedStatus })
    setConvertedState(!convertedState)
  }

  return (
    <div className='LeadsListItem'>
      <img src={thumbnail} alt='lead thumbnail' />
      <div>
        <h3>Name: </h3>
        <p>{`${title}.${[first, last].join(' ')}`}</p>
        <h3>Gender: </h3>
        <p>{`${gender}`}</p>
        <h3>Email: </h3>
        <p>{`${email}`}</p>
        <h3>Phone: </h3>
        <p>{`${phone}`}</p>
      </div>
      <span>Convert Lead <input onChange={() => handleChange(value)} type='checkbox' checked={convertedState} /></span>
    </div>
  )
}

export default connect(null, { changeConvertedStatus })(LeadsListItem)
