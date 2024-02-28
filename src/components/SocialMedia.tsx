import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip'
import { WavyBackground } from './ui/wavy-background'

const socials = [
    {
      id: 1,
      name: 'LinkedIn',
      designation: '',
      image:
        'https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-1024.png',
      link: 'https://www.linkedin.com/in/sourabh-dubey-973646136/',
    },
    {
      id: 2,
      name: 'Instagram',
      designation: '',
      image:
        'https://img.freepik.com/free-vector/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_53876-136728.jpg?size=626&ext=jpg&ga=GA1.1.1565260471.1704550101&semt=ais',
      link: 'https://www.linkedin.com/',
    },
    {
      id: 3,
      name: 'GitHub',
      designation: '',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFnh6yeXxCToGCQi8Q7e3Wk9woCmY28BvgYjYWkauCxE52j0n4XVT1v81_WIO9oElJkuw&usqp=CAU',
      link: 'https://github.com/sourabh0408',
    },
    {
      id: 4,
      name: 'Facebook',
      designation: '',
      image:
        'https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png',
      link: 'https://www.facebook.com/sourabh.dubey.12',
    },
  ];

export default function SocialMedia() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
    <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Connect with me</h2>
        <p className="text-base md:text-lg text-white text-center mb-4">Through any of these social media platforms</p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={socials} />
        </div>
    </WavyBackground>
</div>
  )
}
