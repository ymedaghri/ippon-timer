"use client"
import SvgIcon from '@/components/IpponLogo';
import Timer from '../components/timer';
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';

const panoramas = ['text-ippon-blue', 'text-ippon-dark-blue',
  'text-white', 'text-ippon-dark-blue', 'text-white', 'text-white',
  'text-white', 'text-ippon-blue', 'text-white', 'text-ippon-dark-blue',
  'text-ippon-dark-blue', 'text-ippon-dark-blue', 'text-ippon-dark-blue',
  'text-white', 'text-white'
]
const HomePage: React.FC = () => {
  const searchParams = useSearchParams()

  const seconds = retrieveDuration(searchParams.get('seconds'))
  const hours = retrieveDuration(searchParams.get('hours'))
  const minutes = retrieveDuration(searchParams.get('minutes'), ((seconds + hours) === 0) ? 10 : 0)
  const timeDuration = (hours * 3600) + (minutes * 60) + seconds

  const [duration, setDuration] = useState<number | null>(null)
  const [bgImage, setBgImage] = useState<string | null>(null)
  const [logoClassName, setLogoClassName] = useState<string>("")

  useEffect(() => {
    let timer: { startDate: string, duration: number, bgImage: string, logoClassName: string }
    const randomImageNumber = Math.round(Math.random() * 14)
    const logoClassName = panoramas[randomImageNumber];

    let ipponTimer = localStorage.getItem("ippon-timer")

    if (ipponTimer == null) {
      ipponTimer = `{ "startDate": "${new Date().toISOString()}", "duration":${timeDuration}, "bgImage":"/panoramas/panorama_${randomImageNumber + 1}.jpg", "logoClassName":"${logoClassName}"}`
      localStorage.setItem("ippon-timer", ipponTimer)
    } else {
      timer = JSON.parse(ipponTimer)
      if (isStartDatePassed(timer.startDate, timer.duration) || (timer.duration !== timeDuration)) {
        ipponTimer = `{ "startDate": "${new Date().toISOString()}", "duration":${timeDuration}, "bgImage":"/panoramas/panorama_${randomImageNumber + 1}.jpg", "logoClassName":"${logoClassName}"}`
        localStorage.setItem("ippon-timer", ipponTimer)
      }
    }

    timer = JSON.parse(ipponTimer)
    setDuration(remaintingTime(timer.startDate, timer.duration))
    setBgImage(timer.bgImage)
    setLogoClassName(timer.logoClassName)
  }, []);


  return (
    <div
      className="bg-black flex items-center justify-center h-screen bg-cover bg-center"
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
    >
      <SvgIcon className={`absolute top-4 left-4 w-16 md:w-32 lg:w-60 h-auto ${logoClassName}`} />    
      {(duration != null) && <Timer initialTime={duration} />}
    </div>
  );
}

function retrieveDuration(durationAsString: string | null, defaultValue: number = 0) {
  const duration = parseInt(durationAsString!)
  return (isNaN(duration) || duration < 0) ? defaultValue : duration
}

function isStartDatePassed(startDateStr: string, durationInSeconds: number): boolean {
  const startDate = new Date(startDateStr);
  const endDate = new Date(startDate.getTime() + durationInSeconds * 1000);
  const currentDate = new Date();
  return currentDate > endDate;
}

function remaintingTime(startDateStr: string, durationInSeconds: number): number {
  const startDate = new Date(startDateStr)
  const endDate = new Date(startDate.getTime() + durationInSeconds * 1000)
  const now = new Date();
  const remainingTimeInMillis = endDate.getTime() - now.getTime();
  const remainingTime = remainingTimeInMillis / 1000;
  return Math.trunc(remainingTime)
}

export default HomePage;
