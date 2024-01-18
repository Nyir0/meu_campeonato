import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UrlLaravel from '../UrlLaravel';

interface MatchResult {
  time1: string;
  golsTime1: number;
  time2: string;
  golsTime2: number;
}

interface AllResults {
  [key: string]: MatchResult[];
}

const ChampionshipTable: React.FC<{ results: AllResults }> = ({ results }) => {
  return (
    <div>
      {Object.entries(results).map(([phase, matches]) => (
        <div key={phase}>
          <h2>{phase}</h2>
          <table>
            <thead>
              <tr>
                <th>Time 1</th>
                <th>Gols</th>
                <th>Time 2</th>
                <th>Gols</th>
              </tr>
            </thead>
            <tbody>
              {matches.map((match, index) => (
                <tr key={index}>
                  <td>{match.time1}</td>
                  <td>{match.golsTime1}</td>
                  <td>{match.time2}</td>
                  <td>{match.golsTime2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

const ChampionshipComponent: React.FC = () => {
  const [response, setResponse] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(UrlLaravel() + '/api/history');
        setResponse(result.data);
      } catch (error) {
        console.error('Erro ao obter dados do campeonato', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Campeonato</h1>
      <ChampionshipTable results={response.AllResults || {}} />
    </div>
  );
};

export default ChampionshipComponent;
