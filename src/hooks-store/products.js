import { initStore } from './store';


const configureProductsStore = () => {
    const actions = {
        TOGGLE_FAV: (curState, productIndex) => {
            const prodIndex = curState.products.findIndex(
                p => p.id === productIndex
              );
              const newFavStatus = !curState.products[prodIndex].isFavorite;
              const updatedProducts = [...curState.products];
              updatedProducts[prodIndex] = {
                ...curState.products[prodIndex],
                isFavorite: newFavStatus
              };

            console.log({products: updatedProducts})
            return { products: updatedProducts }
        }
    }

    initStore(actions, {
        products: [
            {
              id: 'p1',
              title: 'Red Scarf',
              description: 'A pretty red scarf.',
              isFavorite: false
            },
            {
              id: 'p2',
              title: 'Blue T-Shirt',
              description: 'A pretty blue t-shirt.',
              isFavorite: false
            },
            {
              id: 'p3',
              title: 'Green Trousers',
              description: 'A pair of lightly green trousers.',
              isFavorite: false
            },
            {
              id: 'p4',
              title: 'Orange Hat',
              description: 'Street style! An orange hat.',
              isFavorite: false
            }
          ]
    })
}

export default configureProductsStore;