import { useState, useEffect } from 'react';
import { getRepos, getOrgs } from '../../api/github';

const DetailUser = ({data}) => {

    const [repos, setRepos] = useState([]);
    const [orgs, setOrgs] = useState([]);
    
    useEffect(() => {
        getRepos(data.login).then(res => setRepos(res));
        getOrgs(data.login).then(res => setOrgs(res));
    }, []);

    return (
        <div>
            <h1>{`Detail user: ${data.login}`}</h1>
            <img
                className="img-profile"
                src={data.avatar_url}
                alt={data.login} />
            <p>Repositories</p>
            <ul>
                {repos.map(repo => <li>{repo.name}</li>)}
            </ul>
            <p>Organizations</p>
            <ul>
                {orgs.map(org => <li>{org.login}</li>)}
            </ul>
        </div>
    );
}

export default DetailUser;