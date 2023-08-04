import React from 'react';
import { Text, View, StyleSheet, Button, FlatList, Touchable, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

type Props = {
	item: {
		title: string;
		body: string;
	};
};
const Home = ({ navigation }: any) => {
	const reviews = [
		{ id: 1, title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
		{ id: 2, title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
		{ id: 3, title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
	];
	return (
		<View style={globalStyles.container}>
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
