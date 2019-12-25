import React from 'react'

import LeadsList from './components/LeadsList'
import Badge from './components/Badge'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectLeads } from './redux/selectors/leadsSelectors'
import { fetchNewLead } from './redux/actions/leadsActions'

const App = ({ leads, fetchNewLead }) => {
  return (
    <div className='App'>
      <Badge leads={[...leads]} />
      <LeadsList leads={[...leads]} />
      <button onClick={fetchNewLead}>Get New Lead</button>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  leads: selectLeads
})

export default connect(mapStateToProps, { fetchNewLead })(App)
