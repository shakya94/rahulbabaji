import React from 'react'
import babaji from './Images/babaji.jpeg';
import maam from './Images/maam.jpeg';
export default function Article() {
   
    const articleContent=
    [{imgSrc:babaji, name:"Dr. Anshu (Rahul Babaji)",type:"Astro Homeopathy",title:"BHMS Agra",description:"Step into the world of holistic healing guided by Dr. Rahul, a seasoned homeopathic physician and adept astrologer. With a deep-rooted passion for natural remedies and celestial insights, Dr. Rahul brings a unique blend of ancient wisdom and modern expertise to his practice. Specializing in personalized homeopathic treatments tailored to individual constitutions, he addresses a myriad of health concerns with precision and care. Moreover, his profound understanding of astrology offers invaluable insights into the cosmic influences shaping one's health and well-being. By harmonizing the principles of homeopathy and astrology, Dr. Rahul empowers his patients to embark on a transformative journey towards holistic wellness, unlocking their full potential and embracing a life of vitality and balance."},
    {imgSrc:maam, name:"Dr. Menka",title:"BHMS Agra",type:"Classical Homeopathy",description:"Step into the realm of holistic healing guided by Dr. Menka, a dedicated female homeopathic physician. With a nurturing touch and a deep understanding of natural remedies, Dr. Menka offers personalized care that addresses the root causes of illness and promotes overall well-being. Her expertise in homeopathy is complemented by her intuitive insights, allowing her to empower her patients to embrace their innate healing abilities and embark on a journey towards optimal health and vitality. With compassion and wisdom, she creates a nurturing environment where patients can experience profound healing and transformation."}];

    const renderCard=(content,index)=>
    {
        return(
        <div key={index} className="card article border-0 col-6">
            <img className="docimage pt-3" src={content.imgSrc} alt="doc pic" height="300px" width="300px" />
            <h3 className="pt-3">{content.name}</h3>
            <h5 className="">{content.type}</h5>
            <h6 className="">{content.title}</h6>
            <p className="p-xl-x-2 px-4 text-center">{content.description}</p>
        </div>);
    }

  return (
    <div id="doc" className='heading py-20'>
        <div className="headers pb-4">Our Team</div>
       <div className="articleHead row mx-2"> 
          {articleContent.map((content,index)=>(renderCard(content,index)))}
        </div>
    </div>
  );

  }

