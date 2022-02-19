import './sport.css'
import 'antd/dist/antd.css';
import sportsData from '../../data/sportsData'
import { Card } from 'antd'
const { Meta } = Card

console.log(sportsData)
export default function Sports(){
  const cardList = sportsData.map(sport => {
    return (
      <Card
        key={sport.id}
        hoverable
        style={{ width: 240 }}
        cover={<img className="sport-img" alt={sport.title} src={sport.imageSrc} />}
      >
      <Meta title={sport.title} description="www.instagram.com" />
      </Card>
    )
  })

  return(
    <div>
      <h1>Welcome to the Sports Section</h1>
      {cardList}
    </div>
  )
}