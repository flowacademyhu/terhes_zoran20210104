import React, { Children } from 'react'
import { Button } from 'react-bootstrap';


export default ({children})=>{
    return (
        <Button>{children}</Button>
    );
}