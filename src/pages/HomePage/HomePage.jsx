import { Outlet, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const handleClick = async () => {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      first: 'Ada',
      middle: 'Mathison',
      last: 'Turing',
      born: 1815,
    });
    console.log('Document written with ID: ', docRef);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
      <button type="button" onClick={handleClick}>
        +
      </button>
    </>
  );
};
