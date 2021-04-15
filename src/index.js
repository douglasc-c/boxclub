import 'react-native-gesture-handler';
import React from 'react'
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

import Routes from './routes/Routes';

const App = () => {

    return (
        <Routes />
    )
}
export default App;