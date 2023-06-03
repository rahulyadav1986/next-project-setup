import MainContainer from '@/components/MainContainer';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
const Home = ()=>{
  const [bodyparts, setBodyParts] = useState([]);
  const [excersice, setexcersice] = useState([]);
  const [muscle, setmuscle] = useState([]);
  const [tarequipment, settarequipment] = useState([]);
  const [targetPop, setTargetPop] = useState(false)
  const [loading, setLoading] = useState(false)
  const url = 'https://exercisedb.p.rapidapi.com/exercises';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1c400d9656mshdbac65d998c20e3p1a9edejsn60962e48f000',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  const bodyParts = [
    {
      "label": "back",
      "avator" : "/images/bodyparts/gymback.png"
    },
    {
        "label": "cardio",
        "avator": "/images/bodyparts/gymcardio.png"
    },
    {
        "label": "chest",
        "avator": "/images/bodyparts/gymchest.png"
    },
    {
        "label": "lower arms",
        "avator": "/images/bodyparts/gymlowerarm.png"
    },
    {
        "label": "shoulders",
        "avator": "/images/bodyparts/gymshoulder.png"
    },
    {
        "label": "upper arms",
        "avator": "/images/bodyparts/gymupperarms.png"
    },
    {
        "label": "upper legs",
        "avator": "/images/bodyparts/gymlegs.png"
    },
    {
        "label": "waist",
        "avator": "/images/bodyparts/gymwaist.png"
    }
  ];

  const targetMuscle = [
    {
      "label":"abductors",
      "avator": "/images/targetmuscle/gymabductors.png"
    },
    {
      "label":"abs",
      "avator": "/images/targetmuscle/gymabs.png"
    },
    {
      "label": "biceps",
      "avator": "/images/targetmuscle/gymbiceps.png"
    },
    {
      "label": "calves",
      "avator": "/images/targetmuscle/gymcalves.png"
    },
    {
      "label": "cardiovascular system",
      "avator": "/images/targetmuscle/gymcardio.png"
    },
    {
      "label": "delts",
      "avator": "/images/targetmuscle/gymabductors.png"
    },
    {
      "label": "forearms",
      "avator": "/images/targetmuscle/gymabductors.png"
    },
    {
      "label": "glutes",
      "avator": "/images/targetmuscle/gymabductors.png"
    },
    {
      "label": "hamstrings",
      "avator": "/images/targetmuscle/gymabductors.png"
    },
    {
      "label": "lats",
      "avator": "/images/targetmuscle/gymabductors.png"
    },
    {
      "label": "levator scapulae",
      "avator": "/images/targetmuscle/gymabductors.png"
    },
    {
      "label": "pectorals",
      "avator": "/images/targetmuscle/gymabductors.png"
    },
    {
      "label": "quads",
      "avator": "/images/targetmuscle/gymabductors.png"
    },
    {
      "label": "serratus anterior",
      "avator": "/images/targetmuscle/gymabductors.png"
    },
    {
      "label": "spine",
      "avator": "/images/targetmuscle/gymabductors.png"
    },
    {
      "label": "traps",
      "avator": "/images/targetmuscle/gymabductors.png"
    },
    {
      "label": "triceps",
      "avator": "/images/targetmuscle/gymabductors.png"
    },
    {
      "label": "upper back",
      "avator": "/images/targetmuscle/gymabductors.png"
    }
  ];

  const gymEquipments = [
    {"label":"assisted"},
    {"label":"band"},
    {"label":"barbell"},
    {"label":"body weight"},
    {"label":"bosu ball"},
    {"label":"cable"},
    {"label":"dumbbell"},
    {"label":"elliptical machine"},
    {"label":"ez barbell"},
    {"label":"hammer"},
    {"label":"kettlebell"},
    {"label":"leverage machine"},
    {"label":"medicine ball"},
    {"label":"olympic barbell"},
    {"label":"resistance band"},
    {"label":"roller"},
    {"label":"rope"},
    {"label":"skierg machine"},
    {"label":"sled machine"},
    {"label":"smith machine"},
    {"label":"stability ball"},
    {"label":"stationary bike"},
    {"label":"stepmill machine"},
    {"label":"tire"},
    {"label":"trap bar"},
    {"label":"upper body ergometer"},
    {"label":"weighted"},
    {"label":"wheel roller"}
  ]

  useEffect(()=>{
    // fetch("http://localhost:3000/bodyParts")
    // .then(response => response.json())
    // .then(bodyparts => {
    //   setBodyParts(bodyparts)
    //     console.log(bodyparts)
    // })

    // fetch("http://localhost:3000/allExcersice")
    // .then(response => response.json())
    // .then(excersice => {
    //   setexcersice(excersice)
    //     console.log(excersice)
    // })

    // fetch("http://localhost:3000/targetMuscle")
    // .then(response => response.json())
    // .then(muscle => {
    //   setmuscle(muscle)
    //     console.log(muscle)
    // })

    // fetch("http://localhost:3000/targetEquipments")
    // .then(response => response.json())
    // .then(tarequipment => {
    //   settarequipment(tarequipment)
    //     console.log(tarequipment)
    // })
  },[])

const serchQuery = async (e)=>{
  const getDatafromSearch = e.currentTarget.id
  console.log(`${url}/bodyPart/${getDatafromSearch}`)
  console.log(getDatafromSearch)
  setLoading(true)
  await fetch(`${url}/bodyPart/${getDatafromSearch}`,options)
    .then(response => response.json())
    .then(excersice => {
      setexcersice(excersice)
      setLoading(false)
        console.log(excersice)
    })
  setTargetPop(!targetPop)
}
const serchtargetMuscle = async (e)=>{
  const getDatafromSearch = e.currentTarget.id
  console.log(getDatafromSearch)
  console.log(`${url}/target/${getDatafromSearch}`)
  setLoading(true)
  try{
    await fetch(`${url}/target/${getDatafromSearch}`,options)
    .then(response => response.json())
    .then(excersice => {
      setexcersice(excersice)
      setLoading(false)
        console.log(excersice)
    })
    setTargetPop(!targetPop)
  }catch(err){
    console.error(err);
  }
  

}

const searchtargetEquipment = async (e)=>{
  const getDatafromSearch = e.currentTarget.id
  console.log(getDatafromSearch)
  setLoading(true)
  console.log(`${url}/equipment/${getDatafromSearch}`)
  await fetch(`${url}/equipment/${getDatafromSearch}`, options)
    .then(response => response.json())
    .then(excersice => {
      setexcersice(excersice)
      setLoading(false)
        console.log(excersice)
    })
  setTargetPop(!targetPop)

}
  return (
    <>
      <Head>
        <title>Home::Media</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <div className="hero_bg">
        <Image src="/images/hero.jpg" fill="true" alt="hero"  className='hero' />
        <h2>Gym World</h2>
      </div>
      
      <MainContainer>
      <div className="button_section">
        <h2>Gym for body parts</h2>
        <ul className='filter_buttons'>
            {
              bodyParts.map((item,i)=>{
                return(
                  <li key={item.label} id={item.label} onClick={serchQuery}>
                    <Image src={item.avator} fill={true} alt={item.label} /> 
                    {item.label}
                  </li>
                )
              })
            }
        </ul>
      </div>
      
      <div className="button_section">
        <h2>Gym for target muscle</h2>
        <ul className='filter_buttons'>
          {
            targetMuscle.map((item,i)=>{
              return(
                <li key={item.label} id={item.label}  onClick={serchtargetMuscle}>
                  <Image src={item.avator} fill={true} alt={item.label}/> 
                  {item.label}
                </li>
              )
            })
          }
      </ul>
      </div>

      <div className="button_section">
        <h2>Gym by Equipment</h2>
        <ul className='filter_buttons'>
          {
            gymEquipments.map((item,i)=>{
              return(
                <li key={item.label} id={item.label} onClick={searchtargetEquipment}>
                  {item.label}
                </li>
              )
            })
          }
      </ul>
      </div>

      {
        !loading ?
        targetPop && 
        <div className="pop_area">
          <div className="header">
            <Image src="/images/left-arrow.png" fill={true} onClick={()=>setTargetPop(!targetPop)} alt="icon" />
            Total excersice found - {excersice.length}
          </div>
          {
            excersice.map((item,i)=>{
              return(
                <ul key={item.label} className='list_map' id='list_map'>
                  <li>
                    {i+1}. {item.name}
                  </li>
                  <li>
                    {                      
                      <Image src={item.gifUrl} fill={true} alt={item.name} />
                    }
                    
                  </li>
                </ul>
              )
            })
          }
        </div>
        :
        <div className="loading d-flex align-items-center justify-content-center">
            <span className="loader"></span>
        </div>
        
      }
      
      </MainContainer>  
     
      
    </>
  )
}

export default Home;


