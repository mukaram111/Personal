import React from 'react'
import HomeFooter from '../footers/homeFooter'
import EventNavbar from '../navBars/eventNavbar'
import SectionThreeEvents from './SectionThreeEvents'
import SectionOneEvents from './SectionOneEvents'
import SectionTwoEvents from './SectionTwoEvents'

const EventMain = () => {
  return (
    <>
<EventNavbar/>
<SectionOneEvents/>
<SectionTwoEvents/>
<SectionThreeEvents/>
<HomeFooter/>

    </>
  )
}

export default EventMain