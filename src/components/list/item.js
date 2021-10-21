import { useHistory } from 'react-router-dom'
import { deleteUsers } from '../../store/actions';
import store from '../../store/state';

const Item = (props) => {    
    const history = useHistory();

    const click = () => {
        history.push("/detail", { user: props.item });
        store.dispatch(deleteUsers())
    }

    return (
        <li onClick={click}>
            <span>
                <img
                    className="img-profile"
                    src={props.item.avatar_url}
                    alt={props.item.login} />
                {props.item.login}
            </span>
        </li> 
    );
}

export default Item;
