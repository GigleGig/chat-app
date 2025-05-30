import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";
import NoChatSelected from "../components/NoChatSelected";

const HomePage = () => {

  const { selectedUser} = useChatStore();
  
  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 shadow-cl rounded-lg w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex overflow-hidden rounder-lg h-full">
            <Sidebar />

            { !selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  )
};

export default HomePage;