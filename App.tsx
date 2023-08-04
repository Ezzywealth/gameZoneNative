import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { globalStyles } from './styles/globalStyles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerContainer from './routes/DrawerNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
	const [fontsLoading, setFontsLoading] = useState(true);

	const [fontsLoaded] = useFonts({
		'jost-regular': require('./assets/fonts/Jost-Regular.ttf'),
		'jost-bold': require('./assets/fonts/Jost-Bold.ttf'),
	});

	if (fontsLoading && !fontsLoaded) {
		return (
			<View style={globalStyles.container}>
				<Text>Loading...</Text>
			</View>
		);
	} else {
		return (
			<NavigationContainer children>
				<DrawerContainer />
			</NavigationContainer>
		);
	}
}
