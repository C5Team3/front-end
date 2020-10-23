import React from 'react'
import MainContainer from '../../containers/MainContainer'
import {WelcomeSubTitle, WelcomeTitle, EntryDataForm } from './style'
import { TopBar, TopTextBox, NextButtonBox } from '../Globals/GlobalStyle'


const SignUpEntryData = () => {
  return(
    <MainContainer dark>
      <TopBar/>
      <TopTextBox>
        <WelcomeTitle>Welcome!</WelcomeTitle>
        <WelcomeSubTitle>Ready to rock with us?</WelcomeSubTitle>
      </TopTextBox>
      <EntryDataForm>
        
      </EntryDataForm>
      <NextButtonBox>
        
      </NextButtonBox>
    </MainContainer>
  )
}

export default SignUpEntryData;