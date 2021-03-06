import React from 'react'

const CardInstructions = ({ areaName }) => {
  return (
  <>
    <p>Click on a card above to add it to the {areaName} area. To add one to a different area, select it using the buttons below.</p>
    <p></p>
    <p>To remove a card from an area, simply click on it!</p>
  </>
  )
}

export default CardInstructions