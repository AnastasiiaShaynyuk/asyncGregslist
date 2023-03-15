import { House } from "../Models/House.js"
import { appState } from "../AppState.js"

const api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api',
  timeout: 10000
})

class HousesService {

  async getAllHouses() {
    const res = await api.get('houses')
    console.log('got all houses', res.data)
    appState.houses = res.data.map(house => new House(house))
    console.log(appState.houses)
  }

  async createHouse(formData) {
    const res = await api.post('houses', formData)
    const newHouse = new House(res.data)
    appState.houses.push(newHouse)
    appState.emit('houses')
  }
}

export const housesService = new HousesService()