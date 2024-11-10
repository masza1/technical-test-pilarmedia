// __tests__/Sidebar.test.js
import { render, screen } from '@testing-library/react';
import Sidebar from '../components/Sidebar'; // Adjust the path as needed
import '@testing-library/jest-dom';

describe( 'Sidebar', () => {
    it( 'renders without crashing', () => {
        render( <Sidebar /> );
        expect( screen.getByText( 'Technical Test Pilarmedia' ) ).toBeInTheDocument();
    } );

    it( 'contains the correct links', () => {
        render( <Sidebar /> );

        const oopLink = screen.getByText( 'OOP' );
        const dependentDropdownLink = screen.getByText( 'Dependent Dropdown' );
        const queryOptimizationLink = screen.getByText( 'Query Optimization' );
        const unitTestingLink = screen.getByText( 'Unit Testing' );

        expect( oopLink.closest( 'a' ) ).toHaveAttribute( 'href', '/' );
        expect( dependentDropdownLink.closest( 'a' ) ).toHaveAttribute( 'href', '/dependent-dropdown' );
        expect( queryOptimizationLink.closest( 'a' ) ).toHaveAttribute( 'href', '/query-optimization' );
        expect( unitTestingLink.closest( 'a' ) ).toHaveAttribute( 'href', '/unit-testing' );
    } );

    it( 'renders the footer text', () => {
        render( <Sidebar /> );
        expect( screen.getByText( '© 2024 Technical Test Pilarmedia' ) ).toBeInTheDocument();
    } );
} );
