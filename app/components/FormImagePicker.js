import React from 'react';
import { useFormikContext } from 'formic';

import ErrorMessage from './ErrorMessage';
import ImageInputList from './ImageInputList';

export default function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  return (
    <>
      <ImageInputList
        imageUri={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
