import { useParams } from "react-router-dom";

function PodCastSingle() {
  const { name } = useParams();

  return (
    <div>
      <h1>Podcast {name} </h1>
    </div>
  );
}
export default PodCastSingle;
