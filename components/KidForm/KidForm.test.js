import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom"
import KidForm from './';

test('Renders KidForm correctly', () => {
    const onSubmit = jest.fn();
    const { getByText, getByLabelText } = render(
      <KidForm onSubmit={onSubmit} name="" isEditMode={false} birthDate="" />
    );
  
    const heading = getByText('Infos deines Kindes');
    const nameInput = getByLabelText('Name');
    const birthDateInput = getByLabelText('Geburtsdatum');
  
    expect(heading).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(birthDateInput).toBeInTheDocument();
  });
  
  test('Calls onSubmit when form is submitted', () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(
      <KidForm onSubmit={onSubmit} name="" isEditMode={false} birthDate="" />
    );
  
    fireEvent.submit(getByTestId('kid-form'));
  
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  