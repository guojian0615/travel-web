export default {
  changeCityMutation (state, city) {
    this.state.city = city
    try {
      localStorage.setItem('city', city)
    } catch (e) {

    }
  }
}
