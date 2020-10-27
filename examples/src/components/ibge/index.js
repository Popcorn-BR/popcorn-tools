import React, { useState, useEffect } from 'react';

import { ufs, municipios } from 'popcorn-tools';

export default function Ibge() {
    const [states, setStates] = useState([])
    const [selectedUf, setSelectedUf] = useState([])
    const [cities, setCities] = useState([])

    useEffect(() => {
        const get = async () => {
            const data = await ufs()
            setStates(data)
            console.log(data)
        }
        get()
    }, [])

    useEffect(() => {
        if (!selectedUf) return;
        municipios(selectedUf).then(data => setCities(data))
    }, [selectedUf])

    const handleChange = async (e) => {
        const uf = e.target.value
        setSelectedUf(uf)
    }
    return (
        <>
            <select onChange={handleChange}>
                {
                    states?.map(({ sigla, nome }) =>
                        <option key={sigla} value={sigla}>{nome}</option>
                    )
                }
            </select>

            <select>
                {
                    cities?.map(({ sigla, nome }) =>
                        <option key={sigla}>{nome}</option>
                    )
                }
            </select>
        </>
    );
}