import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UrlLaravel from '../UrlLaravel';
import HistoryTable from './HistoryTable'; // Importe o componente
import Menu from './Menu';

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
  date: String;
}



const History: React.FC = () => {
  const [championshipData, setChampionshipData] = useState<Championship[] | null>(null);

  useEffect(() => {
    // Função para buscar os dados da API
    const fetchData = async () => {
      try {
        await axios.get(UrlLaravel()+`/api/history`)
        .then((response) => {
          console.log(response.data);
          setChampionshipData(response.data);
        });
      } catch (error) {
        console.error('Erro ao buscar os dados do campeonato:', error);
      }
    };

    // Chama a função de busca ao montar o componente
    fetchData();
  }, []); // O segundo argumento [] indica que o useEffect será chamado apenas uma vez (equivalente a componentDidMount)

  if (!championshipData) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Menu />
      <main>
        <HistoryTable data={championshipData} />
      </main>
    </>
  );
};

export default History;
