import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { StyledResultWrapper } from '../Components/SearchComponents'

export default function ResultTitle({title}) {
    const [unseen, setUnseen] = useState('unseen');
    const [val, setVal] = useState(title);

    useEffect(() => {
        setUnseen('unseen');
        setTimeout(() => {
          setVal(title);
        },300);
        setTimeout(() => {
          setUnseen('');
        }, 600);
    }, [title])
  return (
    <StyledResultWrapper>
        <hr/>
        <span className={unseen}>
            {val}
        </span>
        <hr/>
    </StyledResultWrapper>
  )
}
