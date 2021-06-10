//import logo from './logo.svg';
import './App.css';
//import ThemeProvider from './lib/theme/provider';
import { Avatar, Checkbox, Chip, Logo } from '@bevy/bevy-design-system'

function App() {
  return (
    <div>
      <h2>Some Bevy Design System Elements</h2>
      <p>Avatar (base)</p>
      <Avatar src='mock src' alt='mock alt' />
      <p>Avatar (variant)</p>
      <Avatar variant='square' src='mock src' alt='mock alt' />
      <p>Checkbox</p>
      <Checkbox label='Mock Label' value />
      <p>Checkbox (variant)</p>
      <Checkbox label='Mock Label' value={false} /> 
      <p>Chip</p>
      <Chip icon='' color='primary' label='Mock Label' variant='outlined' />     
      <p>Chip (variant)</p>
      <Chip icon='' color='secondary' label='Mock Label' variant='default' />             
      <p>Logo</p>
      <Logo />
    </div>
  );
}

export default App;
