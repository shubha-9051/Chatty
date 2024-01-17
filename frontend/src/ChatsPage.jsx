import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={
            "64a82ef9-2289-4cf8-9cb1-f191f552bd32"}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;