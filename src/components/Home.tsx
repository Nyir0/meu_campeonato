import React, { useEffect, useState, ChangeEvent } from 'react';
import axios, { AxiosResponse } from 'axios';
import Menu from './Menu';
import UrlLaravel from '../UrlLaravel';

const Home: React.FC = () => {
    var [championships, setChampionships] = useState<Championship[]>([]);
    var [teams, setTeams] = useState<Team[]>([]);

    interface Championship {
        id: number;
        name: string;
        // outras propriedades, se houver
    }

    interface Team {
        name: String;
    }

    interface IdChamp {
        id: string;
    }

    const getTeams = (event: ChangeEvent<HTMLSelectElement>) => {
        
        const idChamp: IdChamp = {id: event.target.value};
        axios.get(UrlLaravel()+'/api/teams', {
            params: idChamp
        })
        .then((response) => {
            setTeams(response.data);
        })
    }
    
    useEffect(() => {
        
        axios.get(UrlLaravel()+'/api/championship')
        .then((response)=>{
            setChampionships(response.data);
        })
    }, [])
    

    return (
        <>
            <Menu />
            <main>
                <section className='flex w-auto items-end'>
                    <div className='flex flex-col w-60'>
                        <label htmlFor="championship" className='text-xl mb-2 font-semibold'>Campeonatos</label>
                        <select name="championship" id="championship" onChange={getTeams}>
                            <option key="0" value="">-</option>
                            {championships.map((championship) => (
                                <option key={championship.id} value={championship.id.toString()}>
                                    {championship.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='mx-6'>
                        <button>SIMULAR</button>
                    </div>
                </section>
                <section id="quartas-final" className='flex flex-col w-1/5 my-4'>
                    {teams.map((team, index) => (
                        <div key={index} className='flex justify-center items-center h-12 mb-2 border-2 border-[var(--blue)] '>
                            <span>{team.name}</span>
                        </div>
                    ))}
                </section>
            </main>
        </>
    );
}

export default Home;