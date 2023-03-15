

export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
  }

  get HouseCard() {
    return `
    <div class="col-8 col-md-4 p-4 text-dark">
    <div class="card elevation-2">
      <img
        src="${this.imgUrl}"
        alt="House">
      <div class="p-2">
        <h5 class="text-center border-bottom border-dark">${this.year} | ${this.bedrooms} brs, ${this.bathrooms} ba | ${this.levels} lvl</h5>
        <p class>${this.description}</p>
        <p class="text-end"> <span class="text-center border rounded border-dark p-2">$${this.price}</span> </p>
        <button class="btn btn-outline-danger" title="delete car" onclick="app.housesController.deleteHouse('${this.id}')"><i class="mdi mdi-delete" ></i></button>
      </div>
    </div>
  </div>
    `
  }

  static DynamicHouseForm(house = {}){
    return `<form onsubmit="app.housesController.${house.id ? `updateCar(${house.is}')` : 'createHouse()'}" class="row p-4">
    <h3>${house.id ? `Edit your House` : 'List your House!'}</h3>
    <div class="mb-2 col-3">
      <label for="year">Year</label>
      <input type="number" name="year" id="year" class="form-control" value="${house.year || ''}">
    </div>
    <div class="mb-2 col-3">
      <label for="bedrooms">Bedrooms</label>
      <input type="number" name="bedrooms" id="bedrooms" class="form-control" value="${house.bedrooms || ''}">
    </div>
    <div class="mb-2 col-3">
      <label for="bathrooms">Bathrooms</label>
      <input type="number" name="bathrooms" id="bathrooms" class="form-control" value="${house.bathrooms || ''}">
    </div>
    <div class="mb-2 col-3">
      <label for="levels">Levels</label>
      <input type="number" name="levels" id="levels" class="form-control" value="${house.levels || ''}">
    </div>
    <div class="mb-2 col-12">
      <label for="description">Description</label>
      <input type="text" name="description" id="description" class="form-control" value="${house.levels || ''}">
    </div>
    <div class="mb-2 col-6">
      <label for="imgUrl">Image URL</label>
      <input type="url" name="imgUrl" id="imgUrl" class="form-control" value="${house.imgUrl || ''}" >
    </div>
    <div class="mb-2 col-6">
      <label for="price">Price</label>
      <input type="number" name="price" id="price" class="form-control"  min="1" value="${house.price || ''}">
    </div>
    <div class="text-end mt-2">
      <button class="btn" type="reset">cancel</button>
      <button class="btn btn-primary" type="submit">submit</button>
    </div>
  </form>`
  }
}