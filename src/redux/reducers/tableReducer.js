import { v4 as uuidv4 } from 'uuid'

const initialState = {
  loading: false,
  orders: [
    {
      id: uuidv4(),
      orderNumber: 1,
      fromLat: '59.84660399',
      fromLng: '30.84660399',
      toLat: '49.84660399',
      toLng: '30.84660399'
    },
    {
      id: uuidv4(),
      orderNumber: 2,
      fromLat: '29.84660399',
      fromLng: '36.84660399',
      toLat: '27.84660399',
      toLng: '33.84660399'
    },
    {
      id: uuidv4(),
      orderNumber: 3,
      fromLat: '33.84660399',
      fromLng: '49.84660399',
      toLat: '46.84660399',
      toLng: '44.84660399'
    },
    {
      id: uuidv4(),
      orderNumber: 4,
      fromLat: '39.84660399',
      fromLng: '23.84660399',
      toLat: '20.84660399',
      toLng: '15.84660399'
    },
    {
      id: uuidv4(),
      orderNumber: 5,
      fromLat: '55.84660399',
      fromLng: '37.84660399',
      toLat: '54.84660399',
      toLng: '44.84660399'
    }
  ]
}

export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
