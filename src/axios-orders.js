import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-my-burger-17c06.firebaseio.com/'
})

export default instance
