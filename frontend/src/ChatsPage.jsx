import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('14138448-3190-488d-8509-3f031adf7c08', props.user.username, props.user.secret);
  return (
    <div style={{ height: '100vh' }}>
    <MultiChatSocket {...chatProps} />
    <MultiChatWindow {...chatProps} style={{ height:'100%' }}/>
    </div>
    )
};

export default ChatsPage;