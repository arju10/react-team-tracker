import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './About.css';
import male from '../../Photo/male.png';
import female from '../../Photo/female.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import WcIcon from '@material-ui/icons/Wc';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

const About = () => {
    const { idTeam } = useParams();
    const [teamsDetails, setTeamsDetails] = useState({});
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
            .then(response => response.json())
            .then(data => setTeamsDetails(data.teams[0]))
    }, [idTeam])
    return (
        <div className="team">
            <div className="banner_section">
                <img src={teamsDetails.strStadiumThumb} alt="team_Banner" />
            </div>

            <div className="team_details_box">
                <div className="team_logo">
                    <img src={teamsDetails.strTeamBadge} alt="" />
                </div>
                <div>
                    <h1> {teamsDetails.strTeam}</h1>
                    <GpsFixedIcon className="icon_style"></GpsFixedIcon><span>Country : {teamsDetails.strCountry}</span>
                    <p><QueryBuilderIcon className = "icon_style"></QueryBuilderIcon>Founded : {teamsDetails.intFormedYear}</p>
                    <p><SportsSoccerIcon className="icon_style"></SportsSoccerIcon>Sport Type : {teamsDetails.strSport}</p>
                    <p ><WcIcon className="icon_style"></WcIcon> Gender : {teamsDetails.strGender}</p>
                </div>
                <div>
                    {
                        teamsDetails.strGender && (teamsDetails.strGender?.toLowerCase() === 'male' ? (

                            <img src={male} alt="male-img" className="team_img_size" />
                        ) : (
                            <img src={female} alt="female-img" className="team_img_size" />
                        )
                        )
                    }
                </div>
            </div>
            <div className="team_describe_box">
                <p>{teamsDetails.strDescriptionNO}</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio perferendis impedit aspernatur, amet et accusantium unde fuga ut, dolorum illum delectus modi minima doloremque aperiam dolore temporibus voluptatum beatae consequuntur repellendus incidunt ullam eveniet quibusdam est ipsam. Aliquid id dolore optio, voluptatibus sit corporis unde officiis qui reiciendis quis eius excepturi soluta quas consequatur laborum ad tempora nobis ab. Excepturi, blanditiis! Cum iure voluptates aperiam voluptate corporis optio necessitatibus, recusandae nulla provident, a inventore, voluptatem illum? At sint totam praesentium! Minus sapiente magnam, alias fugit saepe accusantium possimus, quibusdam inventore illum, nesciunt nemo suscipit facere voluptatem ex pariatur ipsa deserunt.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quo id quae iure esse in, facere ratione ducimus, voluptates totam beatae enim. Culpa vel tempore eligendi cumque nemo, dolor iusto neque corporis veritatis explicabo quasi maiores. Pariatur, repellendus cupiditate impedit iusto eveniet ratione dolorum dolore ex enim, explicabo doloribus ad!</p>
            </div>
            <footer>
                <FacebookIcon></FacebookIcon>
                <YouTubeIcon></YouTubeIcon>
                <TwitterIcon></TwitterIcon>
            </footer>
        </div>
    );
};
export default About;