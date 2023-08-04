import React from 'react';
import { Button, Text, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const ReviewDetails = ({ navigation, route }: any) => {
	return (
		<View style={globalStyles.card}>
			<Text>{route.params.rating}</Text>
			<Text>{route.params.title}</Text>
			<Text>{route.params.body}</Text>
			<Button
				title='Go back'
				onPress={() => {
					navigation.goBack();
				}}
			/>
		</View>
	);
};

export default ReviewDetails;
