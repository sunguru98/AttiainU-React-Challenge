import React from 'react'
import LeadsListItem from './LeadsListItem'

const LeadsList = ({ leads }) => {
  return (
    <div className='LeadsList'>
      {leads.map(lead => (
        <LeadsListItem lead={lead} key={lead.id.value} />
      ))}
    </div>
  )
}

export default LeadsList
