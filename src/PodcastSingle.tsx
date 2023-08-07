import { useParams } from "react-router-dom";

function PodCastSingle(match: any) {
  const { name } = useParams();

  return (
    <div>
      <h1>Podcast {name} </h1>
    </div>
  );
}
export default PodCastSingle;
