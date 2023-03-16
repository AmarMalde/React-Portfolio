import axios from 'axios'
// import data from './cities.json'



export default function Flights() {

    
    console.log('123') 
    
    let depart_from = 'LON';
    let destination = 'NYC'

    const url = `https://api.travelpayouts.com/v1/prices/calendar?depart_date=2023-04&origin=${depart_from}&currency=GBP&destination=${destination}&calendar_type=departure_date&token=92714c44bc93e99aa8b55392f2978110`
    console.log(url)
    const options = {
        method: 'GET',
        url: url,
        headers: {
            "access-control-allow-origin": "*",
          },
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

    return (
        <div>test</div>
    )
}

