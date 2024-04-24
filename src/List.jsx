import { useEffect, useState } from 'react';
import {GridContainer} from './App.jsx';
import { ScrollRotate } from 'react-scroll-rotate';
function List() {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams');
                const data = await response.json();
                const teamsData = data.sports[0].leagues[0].teams.map(team => ({
                    name: team.team.displayName,
                    logo: team.team.logos[0].href,
                    location: team.team.location
                }));
                setTeams(teamsData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData()
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }, []);

    return (
        <div>
            <h2>
                <ScrollRotate method={"perc"} loops={5}>
                    <span>NFL Football Teams!</span>
                </ScrollRotate>
            </h2>
            <GridContainer style={{ display: 'flex', flexDirection: 'column' }}>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    teams.map((team, index) => (
                        <div key={index} className="team-card" style={{ marginBottom: '20px' }}>
                            <ScrollRotate animationDuration={0.5}>
                                <img src={team.logo} alt={team.name} style={{ maxWidth: '100px' }} />
                            </ScrollRotate>

                            <ScrollRotate throttle={0.1}>
                                <h3>{team.name}</h3>
                            </ScrollRotate>

                            <ScrollRotate from={90} to={180}>
                                <p>Location: {team.location}</p>
                            </ScrollRotate>
                        </div>
                    ))
                )}
            </GridContainer>
        </div>
    );
}

export default List;