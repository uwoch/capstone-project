import {
  StyledKidCard,
  StyledEventList,
  StyledName,
  StyledBirthDate,
  StyledImage,
  StyledKidDetails,
} from "./KidProfile.styled";
import { formatDate } from "../../resources/dateUtils";
import EventForm from "../EventForm";
import Event from "../EditEvent";
import EditKid from "../EditKid";

export default function KidProfile({ kidData, onSubmit, mutate }) {
  return (
    <StyledKidCard>
      <EditKid key={kidData._id} kidData={kidData} mutate={mutate} />
      {kidData.imageId && (
        <StyledImage
          src={
            kidData.imageId === "/avatar.png"
              ? "/avatar.png"
              : `https://res.cloudinary.com/dyb6xyd09/image/upload/v1690882027/${kidData.imageId}.png`
          }
          alt={kidData.name}
          width="250"
          height="250"
        />
      )}
      <StyledKidDetails>
        <StyledName>{kidData.name}</StyledName>
        <StyledBirthDate>🎂 {formatDate(kidData.birthDate)}</StyledBirthDate>
      </StyledKidDetails>
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
      <EventForm onSubmit={onSubmit} />
    </StyledKidCard>
  );
}
