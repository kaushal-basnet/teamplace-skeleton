import React from 'react'
import { CoworkationCard } from '../../components'

const Coworkation = () => {
  return (
    <div className='pt-[75px] pb-20 px-24'>
        <div>
        <h2 className='pb-[10px] text-[#1B1B1B] leading-[140%] text-[30px] text-bold'>企業の合宿・研修・ワーケーション手配に関するお悩みを解決できます！</h2>
        <p className='text-[#2E2E2E] leading-[34px] text-[18px] text-medium'>コワーケーション.comは、企業の合宿やオフサイトミーティング時に最適な滞在施設、研修・体験コンテンツ、そして必要な機材準備まで一括で手配するコンシェルジュ型サービスです。コワーケーションの準備をすべてお任せください。</p>
        </div>
      <div className='mt-[50px]'>
       <CoworkationCard/> 
      </div>
        </div>
  )
}

export default Coworkation