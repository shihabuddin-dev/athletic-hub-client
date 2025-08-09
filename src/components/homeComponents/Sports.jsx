import sport1 from '../../assets/sports/1.jpg'
import sport2 from '../../assets/sports/2.jpg'
import sport3 from '../../assets/sports/3.jpg'
import sport4 from '../../assets/sports/4.jpg'
import sport5 from '../../assets/sports/5.jpg'
import sport6 from '../../assets/sports/6.jpg'
import sport7 from '../../assets/sports/7.jpg'
import sport8 from '../../assets/sports/8.jpg'

import Marquee from 'react-fast-marquee';
const sportImg = [
    sport1, sport2, sport3, sport4, sport5, sport6, sport7, sport8
];

const Sports = () => {
    return (
        <div>
            <Marquee gradient={true} gradientWidth={60} speed={40} pauseOnHover={true} className="py-4 overflow-y-hidden">
                {sportImg.map((img, idx) => (
                    <div key={idx} className="mx-2 flex items-center justify-center rounded">
                        <img src={img} alt={`Sponsored team ${idx + 1}`} className="h-30 md:h-40 rounded w-auto object-contain not-first:shadow-md border border-base-200 bg-white p-2" />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default Sports;