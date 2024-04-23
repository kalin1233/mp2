import './App.css';
import List from "./List.jsx";
import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Example: Create 3 equal columns */
  grid-gap: 20px; /* Example: Add gap between grid items */
`;
function App() {


    return (
        <GridContainer>
            <nav className='navbar sticky-top navbar-light bg-dark'>
                <h1 className='navbar-brand text-light'>:D</h1>
            </nav>

            <List/>
        </GridContainer>
    )
}


export default App
