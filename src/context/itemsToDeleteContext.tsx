import { createContext } from 'react';

type ItemsToDeleteContextType = {
    itemsToDelete: string[];
    setItemsToDelete: (value: string[]) => void;
  }

const ItemsToDeleteContext = createContext<ItemsToDeleteContextType>({
    itemsToDelete: [],
    setItemsToDelete: () => {}
  });

export default ItemsToDeleteContext