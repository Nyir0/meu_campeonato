import React from 'react';

interface Result {
  time1: string;
  golsTime1: number;
  time2: string;
  golsTime2: number;
}

interface AllResults {
  quartas_de_final: Result[];
  semi_final: Result[];
  terceiro_lugar: Result[];
  final: Result[];
}

interface Championship {
    AllResults: AllResults;
    Champion: string;
    RunnerUp: string;
    championship: string;
    date: String
}

const ChampionshipTable: React.FC<{ data: Championship[] }> = ({ data }) => {
    console.log(data);
  return (
    <>
        {data.map((matchResults, index) => (
        <table className='mb-4'>
            
            <thead>
                <tr className='flex flex-col'>
                    <th>{matchResults.championship}</th>
                    <th>{matchResults.date}</th>
                </tr>
                <tr>
                <th colSpan={4}>Quartas de Final</th>
                </tr>
                <tr>
                <th>Time 1</th>
                <th>Gols Time 1</th>
                <th>Time 2</th>
                <th>Gols Time 2</th>
                </tr>
            </thead>
            <tbody>
            {   
                matchResults.AllResults.quartas_de_final.map((match, index) => (
                <tr>
                    <td>{match.time1}</td>
                    <td className='text-end pr-4'>{match.golsTime1}</td>
                    <td className='pl-4'>{match.golsTime2}</td>
                    <td className='text-end'>{match.time2}</td>
                </tr>
            ))}
            </tbody>
            <thead>
                <tr>
                <th colSpan={4}>Semi Final</th>
                </tr>
                <tr>
                <th>Time 1</th>
                <th>Gols Time 1</th>
                <th>Time 2</th>
                <th>Gols Time 2</th>
                </tr>
            </thead>
            <tbody>
                {matchResults.AllResults.semi_final.map((match, index) => (
                <tr>
                    <td>{match.time1}</td>
                    <td className='text-end pr-4'>{match.golsTime1}</td>
                    <td className='pl-4'>{match.golsTime2}</td>
                    <td className='text-end'>{match.time2}</td>
                </tr>
                ))}
            </tbody>
            <thead>
                <tr>
                <th colSpan={4}>Terceiro Lugar</th>
                </tr>
                <tr>
                <th>Time 1</th>
                <th>Gols Time 1</th>
                <th>Time 2</th>
                <th>Gols Time 2</th>
                </tr>
            </thead>
            <tbody>
                {matchResults.AllResults.terceiro_lugar.map((match, index) => (
                <tr>
                    <td>{match.time1}</td>
                    <td className='text-end pr-4'>{match.golsTime1}</td>
                    <td className='pl-4'>{match.golsTime2}</td>
                    <td className='text-end'>{match.time2}</td>
                </tr>
                ))}
            </tbody>
            <thead>
                <tr>
                <th colSpan={4}>Final</th>
                </tr>
                <tr>
                <th>Time 1</th>
                <th>Gols Time 1</th>
                <th>Time 2</th>
                <th>Gols Time 2</th>
                </tr>
            </thead>
            <tbody>
                {matchResults.AllResults.final.map((match, index) => (
                <tr>
                    <td>{match.time1}</td>
                    <td className='text-end pr-4'>{match.golsTime1}</td>
                    <td className='pl-4'>{match.golsTime2}</td>
                    <td className='text-end'>{match.time2}</td>
                </tr>
                ))}
            </tbody>

            {/* Repita o mesmo padrão para as outras fases do campeonato */}

            <tfoot>
                <tr>
                <th colSpan={4}>Campeão: {matchResults.Champion}</th>
                </tr>
                <tr>
                <th colSpan={4}>Vice-campeão: {matchResults.RunnerUp}</th>
                </tr>
            </tfoot>
        </table>
        ))}
    </>
  );
};

export default ChampionshipTable;
