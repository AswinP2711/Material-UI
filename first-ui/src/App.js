import { Fragment } from 'react';
import './App.css';
import ComboBox from './components/countrySelect';
import RadioButtonsGroup from './components/gender';
import ButtonPractice from './components/practice';
import BasicSpeedDial from './components/speedDial';
import BasicSwitches from './components/switch';

function App() {
  return (
    <Fragment>
      <ButtonPractice/> <br/><br/>
      <ComboBox/><br/><br/>
      <RadioButtonsGroup/><br/><br/>
      <BasicSwitches /><br/><br/>
      <BasicSpeedDial />
    </Fragment>
  );
}

export default App;
