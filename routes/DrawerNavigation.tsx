import 'react-native-gesture-handler';
import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';
import About from '../screens/About';
import CustomHeader from '../Components/CustomHeader';
import { getHeaderTitle } from '@react-navigation/elements';

const DrawerContainer = () => {
	const Drawer = createDrawerNavigator();

	return (
		<Drawer.Navigator
			children
			screenOptions={{
				header: ({ navigation, route, options }) => {
					const title = getHeaderTitle(options, route.name);
					return <CustomHeader title={title} navigation={navigation} />;
				},
			}}>
			<Drawer.Screen name='GameZone' component={StackNavigation} />
			<Drawer.Screen name='About' component={About} />
		</Drawer.Navigator>
	);
};

export default DrawerContainer;
