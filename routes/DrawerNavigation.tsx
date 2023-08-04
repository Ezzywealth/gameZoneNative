import 'react-native-gesture-handler';
import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';
import About from '../screens/About';

const DrawerContainer = () => {
	const Drawer = createDrawerNavigator();

	return (
		<Drawer.Navigator children>
			<Drawer.Screen name='GameZone' component={StackNavigation} />
			<Drawer.Screen name='About' component={About} />
		</Drawer.Navigator>
	);
};

export default DrawerContainer;
