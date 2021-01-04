import React from 'react'
import styled from 'styled-components'

import MyButton from './MyButton'


const DesignForm = styled.form`
width:80vw;
`

export default () => {
    return (
        <DesignForm>
            <input
                type="text"
            />
            <MyButton>Hozzáadás</MyButton>
        </DesignForm>
    );
}