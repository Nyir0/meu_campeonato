import React, { useEffect, useState, ChangeEvent } from 'react';
import axios from 'axios';
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
        axios.get(UrlLaravel() + '/api/championship')
            .then((response) => {
                setChampionships(response.data);
            });
    
        const form = document.getElementById('sendTeamForm') as HTMLFormElement || null;
        const submitHandler = (event: Event) => {
            var formData = new FormData(form);
            var selectChamp = document.getElementById("championship") as HTMLSelectElement;
    
            event.preventDefault();
    
            axios.get(UrlLaravel() + '/sanctum/csrf-cookie')
            .then(() => {
                const csrfToken = document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*=\s*([^;]*).*$)|^.*$/, "$1");

                // Obtenha o valor de 'selectChamp' antes de realizar a solicitação
                var selectChamp = document.getElementById("championship") as HTMLSelectElement;
                const selectedChampValue = selectChamp.value;

                axios.post(UrlLaravel() + '/api/championship/send_team', {
                'name': formData.get('nameTeam') as string,
                'championship': selectedChampValue,
                }, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-XSRF-TOKEN': decodeURIComponent(csrfToken)
                },
                withCredentials: true,
                }).then((response) => {
                // Agora você pode usar 'selectedChampValue' sem erros
                axios.get(UrlLaravel() + '/api/teams', {
                    params: { id: selectedChampValue }
                }).then((request) => {
                    setTeams(request.data);
                }).catch((error) => {
                    console.error("Erro ao obter equipes:", error);
                });

                }).catch((error) => {
                alert(error.response.data);
                });
            });

        };
    
        if (form) {
            form.addEventListener('submit', submitHandler);
        }
    
        // Remover o ouvinte de evento ao desmontar o componente
        return () => {
            if (form) {
                form.removeEventListener('submit', submitHandler);
            }
        };
    }, []);
    

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
                    <div className='flex items-end mx-6 justify-between'>
                        <button className='h-10 mr-14'>SIMULAR</button>
                        <form id="sendTeamForm" className='flex items-end' method="post">
                            <div className='flex flex-col justify-end my-0'>
                                <label htmlFor='nameTeam'>Nome do time</label>
                                <input className='border-2 border-[var(--blue)] mr-4' type="text" id="nameTeam" name='nameTeam' required />
                            </div>
                            <button className='py-2' type='submit'>Cadastrar time !</button>
                        </form>
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