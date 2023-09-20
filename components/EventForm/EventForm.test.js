import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom"
import EventForm from './';

test('Renders EventForm correctly', () => {
    const onSubmit = jest.fn();
    const { getByText, getByLabelText } = render(
      <EventForm onSubmit={onSubmit} title="" isEditMode={false} date="" />
    );
  
    const heading = getByText('Was möchtest du festhalten?');
    const titleInput = getByLabelText('Ereignis');
    const dateInput = getByLabelText('Datum');
  
    expect(heading).toBeInTheDocument();
    expect(titleInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
  });
  
  test('Calls onSubmit when form is submitted', () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(
      <EventForm onSubmit={onSubmit} title="" isEditMode={false} date="" />
    );
  
    fireEvent.submit(getByTestId('event-form'));
  
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  