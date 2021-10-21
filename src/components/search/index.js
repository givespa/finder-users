import store from '../../store/state';
import { addUser } from '../../store/actions';
import { getUser } from '../../api/github';

const Search = () => {

    const keyDownSearch = (value) => {
        getUser(value).then(res => store.dispatch(addUser(res.items)));
    }

    return (
        <div>
            <input
                type="text"
                placeholder="search"
                onChange={e => keyDownSearch(e.target.value)}/>
        </div>
    );
}

export default Search;
