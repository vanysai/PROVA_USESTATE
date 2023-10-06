import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import { Home } from '../screens/ScreenA';
import { Cadastro } from '../screens/ScreenB';
import { Agendamento } from '../screens/ScreenC';

export function StackRoutes(){
    return(
        <Navigator>

        <Screen 
        name='Home' 
        component={Home}
        options={{
          headerShown: true,
        }}
      />
      <Screen 
        name='Cadastro' 
        component={Cadastro}
        options={{
          headerShown: true,
        }}
      />
      <Screen
        name='screenC'
        component={Agendamento}
        options={{
          headerShown:true,
        }}
      />
        </Navigator>
)
}