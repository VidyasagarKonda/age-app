import { Grid } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { MainDiv, AgeDiv, AgeNum, AgeGrid, TimerLabel } from './SubComponent';

export function MainComponent(props) {
  const [remainingHr, setRemainingHr] = useState('');
  const [remainingMin, setRemainingMin] = useState('');
  const [remainingSec, setRemainingSec] = useState('setRemaining');
  const [ageCal, setAgeCal] = useState('');

  var DOB = props.DOB;
  var DOD = 'Nov 07, 2050 00:00:00';

  const daysBetweenDates = function () {
    var diffDays, oneDay;
    oneDay = 24 * 60 * 60 * 1000;
    diffDays = (new Date() - Date.parse(DOB)) / oneDay;
    setAgeCal(diffDays / 365);
  };

  const daysLeftfunction = function () {
    let dif = Date.parse(DOD) - new Date();
    setRemainingHr(Math.round(dif / 1000 / 60 / 60));
    setRemainingMin(Math.round(dif / 1000 / 60));
    setRemainingSec(dif / 1000);
  };

  setInterval(daysLeftfunction, 50);
  setInterval(daysBetweenDates, 50);
  return (
    <>
      <MainDiv>
        <AgeDiv>AGE</AgeDiv>
        <AgeNum>{ageCal}</AgeNum>
      </MainDiv>
      <hr />
      <AgeGrid>
        <TimerLabel>You have lived</TimerLabel>
        <Grid container spacing={4} justifyContent='center'>
          <Grid item sm={4}>
            <p>Seconds :</p> {remainingSec}
          </Grid>
          <Grid item sm={4}>
            <p>Minutes :</p> {remainingMin}
          </Grid>
          <Grid item sm={4}>
            <p>Hours :</p> {remainingHr}
          </Grid>
        </Grid>
      </AgeGrid>
      {/* <div>
        <p>Hours</p> {remainingHr}
      </div>

      <div>
        <p>Minutes</p> {remainingMin}
      </div>

      <div>
        <p>Seconds</p> {remainingSec}
      </div> */}
    </>
  );
}

export default MainComponent;
