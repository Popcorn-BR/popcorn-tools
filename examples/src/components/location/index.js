import React, { useState } from 'react';

import { location } from 'popcorn-tools';

export default function Location() {
    const [street, setStreet] = useState({
        bairro: '',
        localidade: '',
        logradouro: '',
        uf: '',
    })

    const handleCep = async (e) => {
        if (e.target.value.length >= 8) {
            const resp = await location({ cep: e.target.value })
            setStreet(resp)
        }
    }
    return (
        <div>
            <input name="cep" onChange={handleCep} />
            <input name="bairro" value={street.bairro} disabled/>
            <input name="localidade" value={street.localidade} disabled/>
            <input name="logradouro" value={street.logradouro} disabled/>
            <input name="uf" value={street.uf} disabled/>
        </div>
    );
}