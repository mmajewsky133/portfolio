'use client'

import React from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { clearTimeout } from 'timers';

export default function TextTransitionAnimation({list}: {list: String[]}) {
    
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        setInterval(() => setIndex((index) => index + 1),
            2500, //3.5 Segundos
        )
    }, [])
  
    return (
        <TextTransition springConfig={presets.slow}>{list[index % list.length]}</TextTransition>
    )
}
