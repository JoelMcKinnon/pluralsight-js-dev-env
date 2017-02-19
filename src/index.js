import './index.css'
import numeral from 'numeral'

const courseValue = numeral(1000).format('$0,0.00')

let msg = `I would pay ${courseValue} for this awesome course!`

console.log(msg)  // eslint-disable-line no-console

