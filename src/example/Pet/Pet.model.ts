import RenderService from "../../context/Render/Render.service";
import type {PetState} from "./Pet.types";
import ListenerModel from "../../context/Observer/Listener.model";
import type {ProfileState} from "../Profile/Profile.types";
import type EventModel from "../../context/Observer/Event.model";

class PetModel extends RenderService<PetState> {
  changeOwnerNameListener() {
    const changeMethod = (event: EventModel<ProfileState>) => {
      this.change({
        ownerNameSnapshot: event.getCurrent().name
      })
    }

    return new ListenerModel<ProfileState>(changeMethod)
  }
}

export default PetModel;
