import './App.css'
import ProfileComponent from "./Profile/Profile.component";
import ProfileProvider from "./Profile/Profile.provider";
import ProfileService from "./Profile/Profile.service";

function App() {
  return (
    <ProfileProvider service={new ProfileService()}>
      <ProfileComponent />
    </ProfileProvider>
  )
}

export default App
