import React from 'react'
import s0 from ".././assets/imgs/s0.jpg"
import s1 from ".././assets/imgs/s1.jpg"
import s2 from ".././assets/imgs/s2.jpg"
import s3 from ".././assets/imgs/s3.jpg"
import s4 from ".././assets/imgs/s4.jpg"
import s5 from ".././assets/imgs/s5.jpg"
import s6 from ".././assets/imgs/s6.jpg"

function Hangman() {
  const images = [s0,s1,s2,s3,s4,s5,s6]
  return (
     <img src={images[0]}/>
  )
}

export default Hangman