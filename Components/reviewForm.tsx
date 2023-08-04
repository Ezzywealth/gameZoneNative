import { Formik } from 'formik';
import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import * as yup from 'yup';
import CustomButtn from './CustomButtn';

type Props = {
	handleReview: (values: any) => void;
};

const ReviewForm = ({ handleReview }: Props) => {
	const reviewSchema = yup.object({
		title: yup.string().required().min(4),
		body: yup.string().required().min(8),
		rating: yup
			.string()
			.required()
			.test('is-num-1-5', 'Rating must be a number 1-5', (val) => {
				return parseInt(val) < 6 && parseInt(val) > 0;
			}),
	});
	return (
		<View>
			<Text style={globalStyles.formTitle}>Add a new Game Review</Text>

			<Formik
				initialValues={{ title: '', body: '', rating: '' }}
				validationSchema={reviewSchema}
				onSubmit={(values, actions) => {
					handleReview(values);

					actions.resetForm();
				}}>
				{({ handleChange, handleSubmit, values, handleBlur, errors, touched }) => (
					<View style={globalStyles.form}>
						<TextInput style={globalStyles.input} onBlur={handleBlur('name')} onChangeText={handleChange('title')} placeholder='Enter name of review' value={values.title} />
						<Text style={globalStyles.errorText}>{touched.title && errors.title}</Text>
						<TextInput multiline style={globalStyles.input} onBlur={handleBlur('body')} onChangeText={handleChange('body')} placeholder='Enter body of review' value={values.body} />
						<Text style={globalStyles.errorText}>{touched.body && errors.body}</Text>
						<TextInput keyboardType='numeric' style={globalStyles.input} onBlur={handleBlur('rating')} onChangeText={handleChange('rating')} placeholder='Rating 1-5' value={values.rating} />
						<Text style={globalStyles.errorText}>{touched.rating && errors.rating}</Text>
						<CustomButtn text='Submit' onPress={handleSubmit} />
						{/* <Button onPress={handleSubmit} title='Submit' /> */}
					</View>
				)}
			</Formik>
		</View>
	);
};

export default ReviewForm;
