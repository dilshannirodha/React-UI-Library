import Navbar from "./components/Navbar"
import { FaUserFriends } from "react-icons/fa";

function App() {

  return (
    <Navbar
      appName="MySite"
      links={['Home', 'Docs', 'Blog', 'Contact','Home', 'Docs', 'Blog', 'Contact']}
      onLinkClick={() => alert('link clicked')}
      iconImage={<FaUserFriends style={{ fontSize: 28, color: '#fff' }} />}
      onClickIcon={() => alert('Profile clicked')}
    />
  );
}

export default App
