import React from 'react';
import { Text, View, StyleSheet, Touchable, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/globalStyles';

const CustomHeader = ({ title, navigation }: any) => {
	const handleDrawer = () => {
		navigation.openDrawer();
	};

	return (
		<ImageBackground source={require('../assets/images/game_bg.png')}>
			<View style={styles.header}>
				<TouchableOpacity style={styles.icon} onPress={() => handleDrawer()}>
					<MaterialIcons name='menu' size={30} />
				</TouchableOpacity>
				<Image source={require('../assets/images/heart_logo.png')} style={styles.logo} />
				<Text style={styles.title}>{title}</Text>
			</View>
		</ImageBackground>
	);
};

export default CustomHeader;

const styles = StyleSheet.create({
	header: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
		height: 70,
		marginVertical: 20,
		gap: 5,
	},
	icon: {
		position: 'absolute',
		left: 16,
	},
	logo: {
		width: 22,
		height: 22,
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold',
	},
});
