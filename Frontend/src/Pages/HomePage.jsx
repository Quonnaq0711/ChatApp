import { useChatStore } from "../store/useChatStore"
import Sidebar from "../Components/Sidebar";
import NoSelectedChat from "../Components/NoSelectedChat";
import ChatContainer from "../Components/ChatContainer";


const HomePage = () => {
  const { selectedUser } = useChatStore();
  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-lg w-full max-w-6xl h-[cal(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />

            {!selectedUser ? <NoSelectedChat /> : <ChatContainer />}
          </div>
        </div>
      </div>

    </div>
  )
};
export default HomePage;