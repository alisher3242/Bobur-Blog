import './App.css';
import { UseAuth } from './hooks/UseAuth';
import { Private } from './Private';
import { Public } from './Public';

function App() {
    const {token} = UseAuth()

    if (token) {
        return <Private/>
    }

    return <Public/>
}

export default App;