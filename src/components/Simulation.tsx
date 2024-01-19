import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UrlLaravel from '../UrlLaravel';
import Menu from './Menu';

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
    
    const fetchChampionshipResults = () => {
      try {
        axios.get(UrlLaravel() + `/api/simulation?championship=${champ}`)
        .then((response) =>{
          setChampionshipResults(response.data.AllResults);
        }).catch((error)=>{
          alert("Não é possivel simular com menos de 8 times");
          setTimeout(() => {
            window.location.href="/inicio";
          }, 1000);
        });
        
      } catch (error) {
        console.error('Erro ao obter resultados do campeonato', error);
      }
    };

    window.onload = () =>{
      fetchChampionshipResults();
    }
    

  const renderTable = (matches: MatchResult[], phase: string) => (
    <div key={phase}>
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
      <Menu />
      <main>
        <a href="/inicio">Voltar</a>
        <div className='flex flex-col items-center'>
          {Object.entries(championshipResults).map(([phase, matches]) => renderTable(matches, phase))}
        </div>
        <ul className='flex w-full justify-center mt-14 ml-24'>
          <li>Os pontos para critério de desempate, são baseados no número de gols.</li>
          <li>Atualizar a pagina irá gerar uma nova simulação para este campeonato.</li>
        </ul>
      </main>
    </>
  );
};

export default Simulation;
