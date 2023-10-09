import './App.css'
import UserListBox from './components/Boxes/UserListBox';
import ContactDetailsBox from './components/Boxes/ContactDetailsBox';
import { useState } from 'react';
import MainLayout from './layouts/MainLayout';
function App() {


  const [userId, setUserId] = useState(0);
  const [selectedUser, setSelectedUser] = useState<object>({})
  return (
    <MainLayout>
      <UserListBox userId={userId} setUserId={setUserId} setSelectedUser={setSelectedUser} />
      <ContactDetailsBox selectedUser={selectedUser} userId={userId}/>
    </MainLayout>
  ) 
}

export default App
