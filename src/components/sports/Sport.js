import { useOutletContext, useParams } from "react-router-dom";
import { Card } from "antd";
const { Meta } = Card;

export default function Sport() {
  const [selectedSport, setSelectedSport] = useOutletContext();
  // const { id } = useParams()
  // console.log('url id:', id)

  const sport = selectedSport;
  console.log(sport)
  const display = selectedSport ? (
      <Card
        key={sport.id}
        hoverable
        style={{ width: 240 }}
        cover={
          <img className="sport-img" alt={sport.title} src={sport.imageSrc} />
        }
      >
        <Meta title={sport.title} />
      </Card>
    ) : null

    return display
}

// in a real app, I would useParams (the id in the url)
// to fetch the data from an API
// Reason: when you refresh the /sports/id page, you will get data