import { Formik } from 'formik';
import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

type Props = {
	handleReview: (values: any) => void;
};

const ReviewForm = ({ handleReview }: Props) => {
	return (
		<View>
			<Text style={globalStyles.formTitle}>Add a new Game Review</Text>

			<Formik
				initialValues={{ title: '', body: '', rating: '' }}
				onSubmit={(values, actions) => {
					handleReview(values);
					actions.resetForm();
				}}>
				{({ handleChange, handleSubmit, values }) => (
					<View style={globalStyles.form}>
						<TextInput style={globalStyles.input} onChangeText={handleChange('title')} placeholder='Enter name of review' value={values.title} />
						<TextInput multiline style={globalStyles.input} onChangeText={handleChange('body')} placeholder='Enter body of review' value={values.body} />
						<TextInput keyboardType='numeric' style={globalStyles.input} onChangeText={handleChange('rating')} placeholder='Rating 1-5' value={values.rating} />
						<Button onPress={handleSubmit} title='Submit' />
					</View>
				)}
			</Formik>
		</View>
	);
};

export default ReviewForm;
