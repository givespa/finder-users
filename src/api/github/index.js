import axios from 'axios';

export const getUser = async (string) => {
    let res = await axios.get(`https://api.github.com/search/users?q=${string}&sort=created&order=asc`);
    return res.data;
}

export const getRepos = async (string) => {
    let res = await axios.get(`https://api.github.com/users/${string}/repos`);
    return res.data;
}

export const getOrgs = async (string) => {
    let res = await axios.get(`https://api.github.com/users/${string}/orgs`);
    return res.data;
}