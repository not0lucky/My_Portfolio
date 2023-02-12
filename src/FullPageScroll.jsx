import React from 'react'
import  Fullpage , {FullPageSections,FullpageSection,FullpageNavigation}  from '@ap.cx/react-fullpage'
import {Hero,About,Skills,Work,Header} from './components'

function FullPageScroll() {
  return (
    <Fullpage>
      <FullpageNavigation style={{color:'#fff'}}/>
      <FullPageSections>
        <FullpageSection>
          <Hero/>
        </FullpageSection>
        <FullpageSection>
          <About/>
        </FullpageSection>
        <FullpageSection>
          <Skills/>
        </FullpageSection>
        <FullpageSection>
          <Work/>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  )
}

export default FullPageScroll