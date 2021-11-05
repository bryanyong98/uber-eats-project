
let defaultState = {
    selectedItems : {items: [], restaurantName: ''}
}


let cartReducer = (state = defaultState, action) => {

    let newState = { ...state }; 

    switch (action.type){
        case 'ADD_TO_CART': {

            if (action.payload.checkboxValue) {

                console.log('ADD TO CART'); 
                newState.selectedItems = {
                    items: [...newState.selectedItems.items, action.payload], 
                    restaurantName : action.payload.restaurantName, 
                }; 
            }

            else
            {
                console.log('REMOVE FROM CART'); 

                newState.selectedItems = {
                    items: [...newState.selectedItems.items.filter(
                        (item) => item.title != action.payload.title
                        ), 
                    ], 
                    restaurantName : action.payload.restaurantName, 
                }; 
            }

        }

            console.log(newState, ">"); 
            return newState; 

            default: 
            return state; 
        }

    };

export default cartReducer; 