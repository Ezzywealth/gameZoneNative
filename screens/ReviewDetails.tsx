import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { globalStyles, images } from '../styles/globalStyles';

const ReviewDetails = ({ navigation, route }: any) => {
	const rating = route.params.rating;
	return (
		<View style={globalStyles.container}>
			<Button
				title='Go back'
				onPress={() => {
					navigation.goBack();
				}}
			/>

			<View style={globalStyles.card}>
				<Text style={globalStyles.cardEle}>{route.params.title}</Text>
				<Text style={globalStyles.cardEle}>{route.params.body}</Text>
				<View style={images.imageContainer}>
					<Image source={images.ratings[rating]} />
				</View>
			</View>
		</View>
	);
};

export default ReviewDetails;
