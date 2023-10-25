import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { AddSqrPlus } from '../../assets/Icons/Components/AddSqrPlus';


export const CreateProduct = () => {
  return (
    <>
            <Button className="col-md-3 mb-4" variant='light'>
                <AddSqrPlus/>
            </Button>
    </>
  )
}
