import { connect } from "react-redux";
import Item from "./item";

const List = (props) => {

    return (
        <ul>
            {props.users.map(user => <Item key={user.id} item={user} />)}
        </ul>
    );
}

const mapStateToProps = (state) => {
	return {
        users: state.users
	};
};

export default connect(mapStateToProps)(List);
