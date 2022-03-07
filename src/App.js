import './App.css';
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './Components/ChatFeed'
import LoginForm from './Components/LoginForm';

const projectID = 'faa76973-a19e-4dd4-a490-8f422ce90bb2';

function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
