import * as C from './App.styles'
import { Item } from './types/Item';
import { Category } from './types/Category';
import { items } from './data/items';
import { categories } from './data/categories';
import { useEffect, useState } from 'react';
import { getCurrentMonth } from './helpers/dateFilter'


const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {

  }, [list, currentMonth]);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>
          Sistema Finaneceiro
        </C.HeaderText>
      </C.Header>
      <C.Body>

        {/* Area de informações */}

        {/* Area de inserção */}

        {/* Are de listagem */}
        
      </C.Body>
    </C.Container>
  );
}

export default App;