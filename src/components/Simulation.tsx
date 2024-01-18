import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UrlLaravel from '../UrlLaravel';

interface MatchResult {
  time1: string;
  golsTime1: number;
  time2: string;
  golsTime2: number;
}

interface ChampionshipResults {
  [key: string]: MatchResult[]; // Assume que cada chave é o nome de uma fase
}

const urlSearchParams = new URLSearchParams(window.location.search);
const champ = urlSearchParams.get('championship');

const Simulation: React.FC = () => {
  const [championshipResults, setChampionshipResults] = useState<ChampionshipResults>({});

  useEffect(() => {
    const fetchChampionshipResults = async () => {
      try {
        const response = await axios.get(UrlLaravel() + `/api/simulation?championship=${champ}`);
        console.log(response.data.AllResults);
        setChampionshipResults(response.data.AllResults);
      } catch (error) {
        console.error('Erro ao obter resultados do campeonato', error);
      }
    };

    fetchChampionshipResults();
  }, [champ]);

  const renderTable = (matches: MatchResult[], phase: string) => (
    <div className='border-2 flex flex-col w-1/2 items-center mb-3' key={phase}>
      <h2 className='w-full text-center'>{phase}</h2>
      <table>
        <tbody>
          {matches.map((match, index) => (
            <tr key={index}>
              <td>{match.time1}</td>
              <td className='text-end pr-4'>{match.golsTime1}</td>
              <td className='pl-4'>{match.golsTime2}</td>
              <td className='text-end'>{match.time2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <>
        <a href="/inicio">Voltar</a>
        <div className='flex flex-col items-center'>
        {Object.entries(championshipResults).map(([phase, matches]) => renderTable(matches, phase))}
        </div>
    </>
  );
};

export default Simulation;
