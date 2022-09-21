import React from 'react'
import Courss from './Courss';
import M1 from '../images/m1.png'
import M2 from '../images/m2.jpeg'
import M3 from '../images/m3.png'
import M4 from '../images/m4.png'
import M5 from '../images/m5.png'
import saudiImg from "../images/tuwaiq-location.svg"
import dots from "../images/dots.svg"
import part from "../images/partition.svg"

export default function Home() {
  return (
    <>
    <img src={part} className="partition" />
      <section>
        <img src={saudiImg} />
        <h1>على مستوى المملكة</h1>
        <img src={dots} className="dots" />
      </section>
      
      <img src={part} className="partition" />

      <div className="container">
        <Courss img={M2} txt={`جديد #منصة_سطر من أكاديمية طويق يمكنك التعرف على كيفية طباعة نمط محدد في Command-line بتطبيق المشروع عبر الرابط التالي: https://satr.codes/courses/kghNmAzKPj/how-to-view…`} />
        <Courss img={M2} txt={`جديد #منصة_سطر من أكاديمية طويق
يمكنك التعرف على كيفية طباعة نمط محدد في Command-line بتطبيق المشروع عبر الرابط التالي:
https://satr.codes/courses/kghNmAzKPj/how-to-view…
`} />
      <Courss img={M2} txt={`نقدم دورة "مقدمة في عالم البرمجة"، كنقطة البداية المثالية لك للبدء بتعلم البرمجة، وذلك في #أكاديمية_طويق.`}/>
      <Courss img={M3} txt={`نقدم دورة "مقدمة في عالم البرمجة"، كنقطة البداية المثالية لك للبدء بتعلم البرمجة، وذلك في #أكاديمية_طويق.`}/>
      <Courss img={M1} txt={`نقدم دورة "مقدمة في عالم البرمجة"، كنقطة البداية المثالية لك للبدء بتعلم البرمجة، وذلك في #أكاديمية_طويق.`}/>

      </div>
    </>
  )
}
