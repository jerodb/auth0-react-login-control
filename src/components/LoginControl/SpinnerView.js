import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

function SpinnerView() {
  return (
    <div style={styles.spinnerContainer}>
      <CircularProgress style={styles.spinner}/>
    </div>
  )
} 

export default SpinnerView

const styles = {
  spinner: {
    color: '#4498c8',
    width: 30,
    height: 30,
  },
  spinnerContainer: {
    display: 'flex',
    width: 42,
    height: 42,
    padding: 6,
  },
}
