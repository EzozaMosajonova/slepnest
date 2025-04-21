import React from 'react'
import Hero from '../../components/Home/Hero'
import Sifat1 from '../../components/Home/Sifat1'
import Qish from '../../components/Home/Qish'
import Sifat2 from '../../components/Home/Sifat2'
import Autum from '../../components/Home/Autum'
import Sifat3 from '../../components/Home/Sifat3'
import New from '../../components/Home/New'
import News from '../../components/Home/News'
import Summer from '../../components/Home/Summer'

const HomePages = () => {
  return (
    <div>
      <Hero/>
      <Sifat1/>
      <Qish/>
      <Sifat2/>
      <Autum/>
      <Sifat3/>
      <Summer/>
      <News/>
    </div>
  )
}

export default HomePages