import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'


import InputField from './components/Input'

const FullPage = styled.div`
display: grid;
justify-content:center;
`

const Title = styled.div`
display:flex;
width:80vw;
font-size:15vh;
justify-content:flex-start;
`





function App() {
  return (
    <FullPage>
      <Title>Todo App</Title>
      <InputField></InputField>
      <div>
        <row>
          <col className='col-4'>
          </col>
          <col className='col-4'>
          </col>
        </row>
      </div>
    </FullPage>
  );
}

export default App;
