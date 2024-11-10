"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
// import Select from "react-select";
const Select = dynamic( () => import( 'react-select' ), { ssr: false } )

const DependentDropdown = () => {
    const [ provinsi, setProvinsi ] = useState( [] );
    const [ kota, setKota ] = useState( [] );
    const [ kecamatan, setKecamatan ] = useState( [] );
    const [ desa, setDesa ] = useState( [] );

    const [ selectedProvinsi, setSelectedProvinsi ] = useState( null );
    const [ selectedKota, setSelectedKota ] = useState( null );
    const [ selectedKecamatan, setSelectedKecamatan ] = useState( null );


    // Fetch Provinsi data
    useEffect( () => {
        const fetchProvinsi = async () => {
            try {
                const response = await axios.get( "/api/provinces" );

                const formattedData = response.data.map( ( item ) => ( {
                    value: item.id,
                    label: item.name,
                } ) );

                setProvinsi( formattedData );
            } catch ( error ) {
                console.error( "Failed to fetch Provinsi data", error );
            }
        };
        fetchProvinsi();
    }, [] );

    // Fetch Kota/Kab data based on selected Provinsi
    useEffect( () => {
        if ( selectedProvinsi ) {
            const fetchKota = async () => {
                try {
                    const response = await axios.get( `/api/regencies?provinceId=${ selectedProvinsi.value }` );
                    const formattedData = response.data.map( ( item ) => ( {
                        value: item.id,
                        label: item.name,
                    } ) );
                    setKota( formattedData );
                } catch ( error ) {
                    console.error( "Failed to fetch Kota/Kab data", error );
                }
            };
            fetchKota();
        } else {
            setKota( [] );
        }
    }, [ selectedProvinsi ] );

    // Fetch Kecamatan data based on selected Kota
    useEffect( () => {
        if ( selectedKota ) {
            const fetchKecamatan = async () => {
                try {
                    const response = await axios.get( `/api/districts?regencyId=${ selectedKota.value }` );
                    const formattedData = response.data.map( ( item ) => ( {
                        value: item.id,
                        label: item.name,
                    } ) );
                    setKecamatan( formattedData );
                } catch ( error ) {
                    console.error( "Failed to fetch Kecamatan data", error );
                }
            };
            fetchKecamatan();
        } else {
            setKecamatan( [] );
        }
    }, [ selectedKota ] );

    // Fetch Desa data based on selected Kecamatan
    useEffect( () => {
        if ( selectedKecamatan ) {
            const fetchDesa = async () => {
                try {
                    const response = await axios.get( `/api/villages?districtId=${ selectedKecamatan.value }` );
                    const formattedData = response.data.map( ( item ) => ( {
                        value: item.id,
                        label: item.name,
                    } ) );
                    setDesa( formattedData );
                } catch ( error ) {
                    console.error( "Failed to fetch Desa data", error );
                }
            };
            fetchDesa();
        } else {
            setDesa( [] );
        }
    }, [ selectedKecamatan ] );

    return (
        <>
            <div className="max-w-3xl mx-auto p-6">
                <h1 className="text-3xl font-bold text-center mb-6">Dependent Dropdowns with Search Functionality</h1>
                <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                    <li>Setup State dan Fetch Data:</li>
                    <ul className="list-disc list-inside">
                        <li>Gunakan useState untuk menyimpan nilai yang dipilih dan opsi dropdown.</li>
                        <li>Gunakan useEffect untuk fetch data dari API setiap kali nilai dropdown berubah.</li>
                    </ul>
                    <li>Komponen Dropdown:</li>
                    <ul className="list-disc list-inside">
                        <li>Buat komponen Dropdown yang menerima props options, onChange, dan value untuk membuat dropdown dinamis.</li>
                    </ul>
                </ul>
                <div className="space-y-6">
                    {/* Provinsi Dropdown */ }
                    <div>
                        <label id="provinsi-label" className="block text-lg font-semibold">Provinsi</label>
                        <Select
                            id="provinces"
                            options={ provinsi }
                            value={ selectedProvinsi }
                            onChange={ setSelectedProvinsi }
                            placeholder="Select Provinsi"
                            aria-labelledby="provinsi-label"
                        />
                    </div>

                    {/* Kota/Kab Dropdown */ }
                    <div>
                        <label id="kota-label" className="block text-lg font-semibold">Kota/Kab</label>
                        <Select
                            options={ kota }
                            value={ selectedKota }
                            onChange={ setSelectedKota }
                            placeholder="Select Kota/Kab"
                            isDisabled={ !selectedProvinsi }
                            aria-labelledby="kota-label"
                        />
                    </div>

                    {/* Kecamatan Dropdown */ }
                    <div>
                        <label id="kecamatan-label" className="block text-lg font-semibold">Kecamatan</label>
                        <Select
                            options={ kecamatan }
                            value={ selectedKecamatan }
                            onChange={ setSelectedKecamatan }
                            placeholder="Select Kecamatan"
                            isDisabled={ !selectedKota }
                            aria-labelledby="kecamatan-label"
                        />
                    </div>

                    {/* Desa Dropdown */ }
                    <div>
                        <label id="desa-label" className="block text-lg font-semibold">Desa</label>
                        <Select
                            options={ desa }
                            value={ selectedKecamatan }
                            onChange={ setSelectedKecamatan }
                            placeholder="Select Desa"
                            isDisabled={ !selectedKecamatan }
                            aria-labelledby="desa-label"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default DependentDropdown;
