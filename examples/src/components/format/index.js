
import React, { useState } from 'react';

import { currencyFormat, currency, locale } from 'popcorn-tools';

export default function format() {
    const value = currencyFormat({ value: 100, locale: locale.ja.locale, currency: currency.jp.currency })
    return (
        <span>{value}</span>
    );
}