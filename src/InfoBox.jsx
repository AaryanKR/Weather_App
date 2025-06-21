import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import "./InfoBox.css";

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1697518725445-037f24d787b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    const HOT_URL = "https://images.unsplash.com/photo-1561473880-3b8b12de0a71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1736847303615-051864095c9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbGR3ZWF0aGVyfGVufDB8fDB8fHww";
    const RAIN_URL = "https://media.istockphoto.com/id/1322717990/photo/thick-dark-black-heavy-storm-clouds-covered-summer-sunset-sky-horizon-gale-speed-wind-blowing.webp?a=1&b=1&s=612x612&w=0&k=20&c=W2-dXNrzqf1Lgo-xL5UYWsvM3q9EzqqpOCWhgC_cklk=";
    
    return(
    <div className="InfoBox">
        
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city}{
                        info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <SunnyIcon /> : <AcUnitIcon />
                    }
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <p>Temperature = {info.temp}&deg;C</p>
                    <p>Humidity = {info.humidity}&deg;C</p>
                    <p>Min Temp = {info.tempMin}&deg;C</p>
                    <p>Max Temp = {info.tempMax}&deg;C</p>
                    <p>
                        The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
                    </p>
                </Typography>
            </CardContent>  
        </Card>
        </div>
    </div>)
};