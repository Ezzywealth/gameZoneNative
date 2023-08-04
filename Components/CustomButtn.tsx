import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type CustomButtnProps = {
	text: string;
	onPress: () => void;
};
const CustomButtn = ({ text, onPress }: CustomButtnProps) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.button}>
				<Text style={styles.buttonText}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default CustomButtn;

const styles = StyleSheet.create({
	button: {
		borderRadius: 8,
		paddingVertical: 14,
		paddingHorizontal: 10,
		backgroundColor: '#f01d71',
		width: 150,
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontSize: 16,
		textAlign: 'center',
	},
});
