import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 40,
	},
	titleText: {
		fontFamily: 'jost-bold',
		fontSize: 18,
		color: '#333',
	},
	card: {
		borderRadius: 6,
		elevation: 3,
		backgroundColor: '#fff',
		shadowOffset: { width: 1, height: 1 },
		shadowColor: '#333',
		shadowOpacity: 0.3,
		shadowRadius: 2,
		marginHorizontal: 4,
		marginVertical: 6,
		padding: 20,
	},
	cardEle: {
		fontSize: 19,
		fontFamily: 'jost-regular',
		marginBottom: 5,
	},
	form: {
		marginTop: 40,
		width: '100%',
		paddingHorizontal: 20,
		flexDirection: 'column',
		gap: 10,
		alignItems: 'center',
	},
	input: {
		width: '100%',
		borderWidth: 1,
		borderColor: '#ddd',
		padding: 10,
		borderStyle: 'solid',
	},
	formTitle: {
		fontFamily: 'jost-bold',
		fontSize: 22,
		textAlign: 'center',
		color: '#333',
	},
});

export const navStyles = StyleSheet.create({
	navContainer: {
		// flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingTop: 20,
		height: 90,
		borderStyle: 'solid',
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
	},
	navText: {
		fontFamily: 'jost-bold',
		fontSize: 18,
		color: '#333',
	},
});

export const images = {
	ratings: {
		'1': require('../assets/images/rating-1.png'),
		'2': require('../assets/images/rating-2.png'),
		'3': require('../assets/images/rating-3.png'),
		'4': require('../assets/images/rating-4.png'),
		'5': require('../assets/images/rating-5.png'),
	},
	imageContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
	},
};
