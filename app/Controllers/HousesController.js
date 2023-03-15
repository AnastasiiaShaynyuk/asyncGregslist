import { housesService } from "../Services/HousesService.js";
import { Pop } from "../Utils/Pop.js";
import { House } from "../Models/House.js";
import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";
import { getFormData } from "../Utils/FormHandler.js";

function _drawHouses() {
  console.log('drawing houses')
  const houses = appState.houses
  let template = ''
  houses.forEach(h => template += h.HouseCard)
  setHTML('listings', template)
}

// function _hideBody() {

// }


export class HousesController {
  constructor() {
    console.log('houses');
    // this.viewHouses()
    appState.on('houses', _drawHouses)
  }

  viewHouses() {
    this.getAllHouses()
    setHTML('form', House.DynamicHouseForm())
  }

  async getAllHouses() {
    try {
      await housesService.getAllHouses()
    } catch (error){
      console.error(error)
      Pop.error(error)
    }
  }

  async createHouse() {
    try {
      event.preventDefault()
      const form = event.target
      const formData = getFormData(form)
      await housesService.createHouse(formData)

    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }


}