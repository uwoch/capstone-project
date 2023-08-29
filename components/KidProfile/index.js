import Image from "next/image";
import { StyledKidCard, StyledBackLink, StyledEditButton, StyledEventList } from "./KidProfile.styled";
import { formatDate } from "../../resources/dateUtils";
import EventForm from "../EventForm";
import Event from "../Event";

export default function KidProfile({
  kidData, 
  onSubmit,
  mutate }) 
  {

  return (
      <StyledKidCard>
        <Image
          width={150}
          height={150}
          src={kidData.image}
          alt="Kid Photo"
        />
        <h2>{kidData.name} </h2>
        <h3>* {formatDate(kidData.birthDate)}</h3>  
      <StyledEventList>
        {kidData?.events?.map((event) => (
          <Event
          key={event._id} 
          kidData={kidData} 
          mutate={mutate}
          event={event}
         />
          ))}
      </StyledEventList>
      <EventForm onSubmit={onSubmit}/>  
      </StyledKidCard>
  );
}