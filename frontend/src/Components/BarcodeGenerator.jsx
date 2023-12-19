import Barcode from 'react-barcode';

import React from 'react'

const BarcodeGenerator = ({data}) => {
  return (
    <Barcode value={data._id}
    width={1}
    />
  )
}

export default BarcodeGenerator
