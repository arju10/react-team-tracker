import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';
import './Team.css';

const Team = (props) => {
    const { strTeam, strSport, strTeamBadge, idTeam } = props.team;

    return (
        <>
            <div className="cards">
                <div className="card">
                    <img src={strTeamBadge} alt="team_img" className="card_img" />
                    <div className="card_info">
                        <span className="card_category">Team Name : {strTeam}</span>
                        <h3 className="card_title">Sports Type : {strSport}</h3>
                        <Link to={`/teamDetails/${idTeam}`}>
                            <button >Explore<ArrowForwardIcon></ArrowForwardIcon></button>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
}
export default Team;