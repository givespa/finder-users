import DetailUser from "../../components/detail";

const Detail = (props) => {
  return (
    <DetailUser data={props.location.state.user} />
  );
}

export default Detail;
