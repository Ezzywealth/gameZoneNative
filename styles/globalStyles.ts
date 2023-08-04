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
