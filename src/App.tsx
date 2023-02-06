import './App.css'
import ProfileComponent from "./example/Profile/Profile.component";
import ProfileProvider from "./example/Profile/Profile.provider";
import ProfileService from "./example/Profile/Profile.service";
import PetModule from "./example/Pet/Pet.module";

function App() {
  return (
    <ProfileProvider service={new ProfileService()}>
      <PetModule>
        <ProfileComponent />
      </PetModule>
    </ProfileProvider>
  )
}

export default App
