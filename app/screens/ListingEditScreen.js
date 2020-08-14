import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(3).label('Title'),
  price: Yup.number().required().min(3).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});

const categories = [
  { label: 'Label 1', value: 1 },
  { label: 'Label 2', value: 2 },
  { label: 'Label 3', value: 3 },
];

export default function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={(value) => console.log(values)}
        validationSchema={validationSchema}
      />
      <AppFormField maxLength={255} name="title" placeholder="Title" />
      <AppFormField
        keyboardType="numeric"
        maxLength={8}
        name="Price"
        placeholder="Price"
      />
      <AppFormPicker
        items={categories}
        name="categories"
        placeholder="Category"
      />
      <AppFormField
        maxLength={255}
        multiline
        name="Description"
        numberOfLines={3}
        placeholder="Description"
      />
      <SubmitButton />
    </Screen>
  );
}

const styles = StyleSheet.create({});
