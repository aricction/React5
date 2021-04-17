import Uthappizza from '../../images/uthappizza.png'
import Vadonut from '../../images/vadonut.png'
import Zucchipakoda from '../../images/zucchipakoda.png'
import Elaicheesecake from '../../images/elaicheesecake.png'
import Buffet from '../../images/buffet.png'
import Alberto from '../../images/alberto.png'
import { ADD_TO_CART } from '../actions/action-types/cart-actions';


const initState = {
  items : [
    {id:1, title: 'starters', desc:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex. ", price:4.99, img:Uthappizza},
    {id:2, title: 'main', desc:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex. ", price:3.40, img:Vadonut},
    {id:3, title: 'starters', desc:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex. ", price:4.99, img:Zucchipakoda},
    {id:4, title: 'main', desc:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex. ", price:3.40, img:Elaicheesecake},
    {id:5, title: 'starters', desc:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex. ", price:4.99, img:Buffet},
    {id:6, title: 'main', desc:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex. ", price:3.40, img:Alberto}
  ],
  addedItems:[],
  total: 0

}

const cartReducer= (state= initState,action)=>{
  if(action.type === ADD_TO_CART){
    let addedItem = state.items.find(item => item.id === action.id)
       let existed_item= state.addedItems.find(item=> action.id === item.id)
       if(existed_item)
       {
         addedItem.quantity += 1
         return{
           ...state,
           total: state.total + addedItem.price
         }
       }
       else {
         addedItem.quantity = 1;
         let newTotal = state.total + addedItem.price

         return{
           ...state,
           addedItems: [...state.addedItem, addedItem],
           total: newTotal
         }
       }
  }
  else {
  return state;
}
}

export default cartReducer;
