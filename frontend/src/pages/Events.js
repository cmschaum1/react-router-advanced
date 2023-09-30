import { useLoaderData, json } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  return <EventsList events={events} />;
}

export default EventsPage;

export async function eventsLoader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //throw new Response(
    //  JSON.stringify({ message: "An error occurred!", status: 500 })
    //);
    return json({ message: "An error occurred!" }, { status: 500 });
  } else {
    return response;
  }
}
