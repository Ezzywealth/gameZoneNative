import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const StackNavigation = () => {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator children>
			<Stack.Screen
				name='Home'
				component={Home}
				options={{
					header: () => null,
				}}
			/>
			<Stack.Screen
				name='ReviewDetails'
				component={ReviewDetails}
				options={{
					header: () => null,
				}}
			/>
		</Stack.Navigator>
	);
};

export default StackNavigation;
