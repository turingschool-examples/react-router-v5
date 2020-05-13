import React from 'react';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('App', () => {
  describe('Unit Tests', () => {
    it('Should render the heading', () => {
//      const { getByRole } = render(<App />);
//      const heading = getByRole('heading', { name: 'Puppies or Sharks?'})
//    
//      expect(heading).toBeInTheDocument();
    });

    it('Should render a nav', () =>{
//      const { getByRole } = render(<App /> );
//      const navigation = getByRole('navigation');
//
//      expect(navigation).toBeInTheDocument();
    
    });
    
  });

  describe('Integration Tests', () => {
    it('Should render 9 puppies on click', () => {
//      const { getByRole, getAllByRole } = render(<App />);
//      const puppiesLink = getByRole('link', { name: 'Puppies'});
//      const welcomeMessage = getByRole('heading', {name: 'Welcome! Click on the links above to see a variety of creatures'});
//      
//      expect(welcomeMessage).toBeInTheDocument();
//
//      fireEvent.click(puppiesLink);
//
//      expect(welcomeMessage).not.toBeInTheDocument();
//
//      const images = getAllByRole('img');
//
//      expect(images).toHaveLength(9);
    
    });

    it('Should render 9 sharks on click', () => {
//      const { getByRole, getAllByRole } = render(<App />);
//      const sharksLink = getByRole('link', { name: 'Sharks'});
//      const welcomeMessage = getByRole('heading', {name: 'Welcome! Click on the links above to see a variety of creatures'});
//      
//      expect(welcomeMessage).toBeInTheDocument();
//
//      fireEvent.click(sharksLink);
//
//      expect(welcomeMessage).not.toBeInTheDocument();
//
//      const images = getAllByRole('img');
//
//      expect(images).toHaveLength(9);
    
    });
  
  });
});
