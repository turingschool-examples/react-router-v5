import React from 'react';
import App from './App';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('App', () => {
  describe('Unit Tests', () => {
    it('Should render the heading', () => {
//      render(<App />);
//      const heading = screen.getByRole('heading', { name: 'Puppies or Sharks?'})
//    
//      expect(heading).toBeInTheDocument();
    });

    it('Should render a nav', () =>{
//      render(<App /> );
//      const navigation = screen.getByRole('navigation');
//
//      expect(navigation).toBeInTheDocument();
    
    });
    
  });

  describe('Integration Tests', () => {
    it('Should render 9 puppies on click', () => {
//      render(<App />);
//      const puppiesLink = screen.getByRole('link', { name: 'Puppies'});
//      const welcomeMessage = screen.getByRole('heading', {name: 'Welcome! Click on the links above to see a variety of creatures'});
//      
//      expect(welcomeMessage).toBeInTheDocument();
//
//      fireEvent.click(puppiesLink);
//
//      expect(welcomeMessage).not.toBeInTheDocument();
//
//      const images = screen.getAllByRole('img');
//
//      expect(images).toHaveLength(9);
    
    });

    it('Should render 9 sharks on click', () => {
//      render(<App />);
//      const sharksLink = screen.getByRole('link', { name: 'Sharks'});
//      const welcomeMessage = screen.getByRole('heading', {name: 'Welcome! Click on the links above to see a variety of creatures'});
//      
//      expect(welcomeMessage).toBeInTheDocument();
//
//      fireEvent.click(sharksLink);
//
//      expect(welcomeMessage).not.toBeInTheDocument();
//
//      const images = screen.getAllByRole('img');
//
//      expect(images).toHaveLength(9);
    
    });
  
  });
});
