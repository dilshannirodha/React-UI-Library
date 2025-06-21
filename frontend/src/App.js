import {Button, Navbar} from 'dilshan-react-lib'
import { FaUserFriends } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
     <Navbar
      appName="MySite"
      links={['Home', 'Docs', 'Blog', 'Contact','link1', 'link 3 ']}
      onLinkClick={() => alert('link clicked')}
      iconImage={<FaUserFriends style={{ fontSize: 28, color: '#fff' }} />}
      onClickIcon={() => alert('Profile clicked')}
    />
    <Button>;sldkjfl</Button>
    </div>
  );
}

export default App;
