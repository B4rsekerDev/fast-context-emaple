import RenderService from "../utilities/Render/Render.service";
import type {ProfileState} from "./Profile.types";

const DEFAULT_STATE: ProfileState = {
  age: 0,
  name: 'Franc Ferdinant',
  address: '',
  email: 'ff@email.cz',
  phone: '605877777',
}

class ProfileService extends RenderService<ProfileState> {
  constructor() {
    super(DEFAULT_STATE);
  }
}

export default ProfileService;
