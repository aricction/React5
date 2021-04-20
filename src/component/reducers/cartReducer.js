import Uthappizza from '../../images/uthappizza.png'
import Vadonut from '../../images/vadonut.png'
import Zucchipakoda from '../../images/zucchipakoda.png'
import Elaicheesecake from '../../images/elaicheesecake.png'
import Buffet from '../../images/buffet.png'
import Burger from '../../images/1.png'
import { ADD_TO_CART, REMOVE_ITEM,ADD_QUANTITY,SUB_QUANTITY , ADD_SHIPPING} from '../actions/action-types/cart-actions'


const initState = {
  items : [
    {id:1, title: 'starters', desc:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex. ", price:4.99, img:Uthappizza},
    {id:2, title: 'main', desc:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex. ", price:3.40, img:Vadonut},
    {id:3, title: 'starters', desc:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex. ", price:4.99, img:Zucchipakoda},
    {id:4, title: 'main', desc:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex. ", price:3.40, img:Elaicheesecake},
    {id:5, title: 'starters', desc:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex. ", price:4.99, img:Buffet},
    {id:6, title: 'Burger', desc:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex. ", price:3.40, img:Burger}
  ],
  addedItems:[],
  total: 0

}

const cartReducer= (state = initState,action)=>{
  if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
        //check if the action id exists in the addedItems
       let existed_item= state.addedItems.find(item=> action.id === item.id)
       if(existed_item)
       {
          addedItem.quantity += 1
           return{
              ...state,
               total: state.total + addedItem.price
                }
      }
       else{
          addedItem.quantity = 1;
          //calculating the total
          let newTotal = state.total + addedItem.price

          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total : newTotal
          }

      }
  }
  if(action.type === REMOVE_ITEM){
    let itemToRemove = state.addedItems.find(item=>action.id===item.id)
    let new_items = state.addedItems.filter(item=> action.id !== item.id)

    let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
    console.log(itemToRemove)
    return {
      ...state,
      addedItems: new_items,
      total: newTotal
    }
  }

  if(action.type === ADD_QUANTITY){
    let addedItem = state.items.find(item => item.id === action.id)
      addedItem.quantity += 1
      let newTotal = state.total + addedItem.price
      return{
        ...state,
        total: newTotal
      }
  }

  if(action.type === SUB_QUANTITY){
    let addedItem = state.items.find(item=> item.id === action.id)
    if(addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item =>item.id !== action.id )
        let newTotal = state.total - addedItem.price
        return{
          ...state,
          addedItems: new_items,
          total: newTotal
        }
  }

  else {
    addedItem.quantity -= 1
    let newTotal = state.total - addedItem.price
    return{
      ...state,
      total: newTotal
    }

  }

}
  if(action.type=== ADD_SHIPPING){
        return{
            ...state,
            total: state.total + 6
        }
  }

  if(action.type=== 'SUB_SHIPPING'){
      return{
          ...state,
          total: state.total - 6
      }
}
else {
  return state
    }

}

export default cartReducer;
