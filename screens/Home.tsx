import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, FlatList, Touchable, TouchableOpacity, Modal, Keyboard } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from '../Components/reviewForm';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
type Props = {
	item: {
		title: string;
		body: string;
	};
};

type ReviewProp = {
	title: string;
	rating: string;
	body: string;
	key: string;
};
const reviewss = [
	{ title: 'Zelda, Breath of Fresh Air', rating: '5', body: 'lorem ipsum', key: '1' },
	{ title: 'Gotta Catch Them All (again)', rating: '4', body: 'lorem ipsum', key: '2' },
	{ title: 'Not So "Final" Fantasy', rating: '3', body: 'lorem ipsum', key: '3' },
];
const Home = ({ navigation }: any) => {
	const [showModal, setShowModal] = useState(false);
	const [reviews, setReviews] = useState(reviewss);

	const handleReview = (review: ReviewProp) => {
		review.key = (reviews.length + 1).toString();
		setReviews((prev) => [...prev, review]);
		setShowModal(false);
	};

	return (
		<View style={globalStyles.container}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View>
					<Modal visible={showModal}>
						<MaterialIcons name='close' size={30} onPress={() => setShowModal(false)} style={{ ...styles.modalToggle, ...styles.modalClose }} />
						<View style={styles.modalContent}>
							<ReviewForm handleReview={handleReview} />
						</View>
					</Modal>
				</View>
			</TouchableWithoutFeedback>

			<MaterialIcons name='add' size={30} onPress={() => setShowModal(true)} style={styles.modalToggle} />

			<FlatList
				data={reviews}
				renderItem={({ item }: Props) => (
					<View style={globalStyles.card}>
						<TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
							<Text style={globalStyles.titleText}>{item.title}</Text>
						</TouchableOpacity>
					</View>
				)}
			/>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	modalContent: {
		flex: 1,
	},
	modalToggle: {
		marginBottom: 10,
		borderWidth: 1,
		borderColor: '#f2f2f2',
		padding: 10,
		borderRadius: 10,
		alignSelf: 'center',
	},
	modalClose: {
		marginTop: 20,
		marginBottom: 0,
	},
});
