import Twee from './models/Twee'
import Twees from './collections/Twees'
import Item from './views/Item'

const store = {
	twee: new Twee(),
	twees: new Twees(),
}

export default store;