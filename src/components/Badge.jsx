import React from 'react'
import { BadgeContainer } from '../styles/Badge.styles'

const Badge = ({ leads }) => {
  return (
    <BadgeContainer>
      <h1>{leads.filter(lead => lead.convertedStatus).length}</h1>
      <span>vs</span>
      <h1>{leads.length}</h1>
    </BadgeContainer>
  )
}

export default Badge
