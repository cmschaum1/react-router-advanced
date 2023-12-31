import { useParams, Link } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Event Detail Page</h1>
      <p>{params.id}</p>
      <p><Link to=".." relative="path">Back</Link></p>
    </>
  );
}

export default EventDetailPage;
