import styles from './styles.module.css'
import Cottage from "../../components/cottage";

export default function Cottages() {
    return (
        <div className={`${styles.wrapper} l-container l-container--thin l-section`}>
            <Cottage
                highlight="Easy Living"
                persons={['man', 'man']}
                pets={['dog', 'dog']}
                name="The Stables"
                review={{
                    quote: "Superbly equipped cottage in a peaceful, stunning location.",
                    name: "Matthew Wyatt"
                }}
                images={[
                    '/stables/bedroom.jpg',
                    '/stables/exterior.jpg',
                    '/stables/kitchen.jpg',
                    '/stables/lounge.jpg',
                ]}
                perks={[
                    { icon: 'icon here', text: "Free WiFi" },
                    { icon: 'icon here', text: "Electric Stove" },
                    { icon: 'icon here', text: "Fridge" },
                    { icon: 'icon here', text: "King-sized Bed" },
                    { icon: 'icon here', text: "Microwave" },
                    { icon: 'icon here', text: "Private" },
                    { icon: 'icon here', text: "TV" },
                    { icon: 'icon here', text: "Kettle" },
                ]}
                description="This cottage is the old stables/cowshed and is open to the high rafters with the original A-frames exposed. It consists of a very large completely open-plan bedroom/lounge/diner and an open plan kitchen on a separate level, with a shower room."
            />

            <Cottage
                highlight="Two Floors"
                persons={['man', 'man']}
                pets={['dog', 'dog']}
                name="The Hayloft"
                review={{
                    quote: "Perfect location if looking for a quiet country break.",
                    name: "Gabriella Wyatt"
                }}
                images={[
                    '/hayloft/ariel.jpg',
                    '/hayloft/bedroom.jpg',
                    '/hayloft/exterior.jpg',
                    '/hayloft/kitchen.jpg',
                    '/hayloft/lounge.jpg',
                    '/hayloft/patio.jpg',
                ]}
                perks={[
                    { icon: 'icon here', text: "Free WiFi" },
                    { icon: 'icon here', text: "Electric Stove" },
                    { icon: 'icon here', text: "Fridge" },
                    { icon: 'icon here', text: "King-sized Bed" },
                    { icon: 'icon here', text: "Microwave" },
                    { icon: 'icon here', text: "Private" },
                    { icon: 'icon here', text: "TV" },
                    { icon: 'icon here', text: "Kettle" },
                ]}
                description="This cottage has a large lounge/diner with an open-plan kitchen and a shower-room on the ground floor, and a large bedroom with a king-sized bed upstairs on a mezzanine floor – in the old hayloft. Lie in bed and watch the view of sheep grazing on the hill just outside."
            />
        </div>
    )
  }