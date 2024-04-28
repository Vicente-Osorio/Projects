import React, { Fragment } from 'react'
import SliderComponents from './common/SliderComponents'

const SliderSelect = ({ data, setData }) => {


  const bankLimit = 10000
  return (
    <>
      <SliderComponents
        label='Home Value'
        min={0}
        max={bankLimit}
        defaultValue={data.homeValue}
        value={data.homeValue}
        step={100}
        onChange={(e, value) => setData({
          ...data,
          downPayment: value * 0.2,
          loanAmount: value * 0.8,
          homeValue: value
        })}
        unit='€'
        amount={data.homeValue}
      />

      <SliderComponents
        label='Down Payment'
        min={0}
        max={data.homeValue}
        defaultValue={data.downPayment}
        value={data.downPayment}
        step={100}
        onChange={(e, value) => setData({
          ...data,
          loanAmount: (data.homeValue - value),
          downPayment: value
        })}
        unit='€'
        amount={data.downPayment}
      />

      <SliderComponents
        label='Loan Amount'
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        step={100}
        onChange={(e, value) => setData({
          ...data,
          downPayment:(data.homeValue - value),
          loanAmount: value
        })}
        unit='€'
        amount={data.loanAmount}
      />

      <SliderComponents
        label='Interest Rate'
        min={2}
        max={18}
        defaultValue={data.interestRate}
        value={data.interestRate}
        step={0.5}
        onChange={(e, value) => setData({
          ...data,
          interestRate: value
        })}
        unit='%'
        amount={data.interestRate}
      />
    </>
  )
}


export default SliderSelect
