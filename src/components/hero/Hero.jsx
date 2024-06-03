import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// useDispatch - output
import { increment, dec } from '../../context/slice/counterSlice'
import { changeText } from '../../context/slice/textSlice'
const Hero = () => {
  const dispatch = useDispatch()
  const count = useSelector(s => s.counter.value)
  return (
    <div>
        <h2>Hero</h2>
        <button onClick={()=> dispatch(increment(1))}>increment 1</button>
        <button onClick={()=> dispatch(increment(10))}>increment 10</button>
        <button onClick={()=> dispatch(increment(100))}>increment 100</button>
        <button disabled={count <= 0} onClick={()=> dispatch(dec(1))}>decrement 1</button>
        <button disabled={count < 10} onClick={()=> dispatch(dec(10))}>decrement 10</button>
        <button disabled={count < 100} onClick={()=> dispatch(dec(100))}>decrement 100</button>
        <br />
        <button onClick={()=> dispatch(changeText("salom dunyoga"))}>Change text</button>
        <button onClick={()=> dispatch(changeText("hello world"))}>Change text</button>
    </div>
  )
}

export default Hero