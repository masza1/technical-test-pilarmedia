"use client"

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { CategoryScale, Chart } from 'chart.js/auto'; // Import Chart.js

Chart.register( CategoryScale ); // Register CategoryScale

const SalesChart = ( { endpoint, title } ) => {
    const [ chartData, setChartData ] = useState( null );
    const [ loading, setLoading ] = useState( true );
    const [ error, setError ] = useState( null );

    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await axios.get( endpoint );
                const data = response.data;

                const labels = data.map( item => item.Month ? `${ item.Year }-${ item.Month }` : ( item.Year ? item.Year : item.SalesPersonName ) );
                const sales = data.map( item => item.TotalSales );

                setChartData( {
                    labels: labels,
                    datasets: [
                        {
                            label: title,
                            data: sales,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                        },
                    ],
                } );
                setLoading( false );
            } catch ( error ) {
                setError( error );
                setLoading( false );
            }
        };

        fetchData();
    }, [ endpoint ] );

    if ( loading ) return <p>Loading...</p>;
    if ( error ) return <p>Error loading data: { error.message }</p>;
    if ( !chartData ) return <p>No data available</p>;

    return <Line data={ chartData } />;
};

export default SalesChart;
