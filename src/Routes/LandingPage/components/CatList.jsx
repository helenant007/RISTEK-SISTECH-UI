import React, { useState } from 'react';
import { useQuery } from 'react-query';

import getCats from '../../../Services/fetchApi';
// import getCatsByName from '../../../Services/fetchApi';
// import getCatsByAge from '../../../Services/fetchApi';

import LoadingState from './LoadingState';
import './catList.css';

const View = () => {
  const [selectedCatIdx, setSelectedCatIdx] = useState(null);

  // useQuery here
  const {data: catListData, isLoading: isLoadingCatList} = useQuery('catList', getCats);
  // const {data: catListByName, isLoading: isLoadingCatListByName} = useQuery('catListName', getCatsByName);
  // const {data: catListByAge, isLoading: isLoadingCatListByAge} = useQuery('catListAge', getCatsByAge);

  // Loading state here
  if(isLoadingCatList) {
    return <LoadingState />
  }

  return (
  <div className="padding">Hello Felines!
    <div>
      {
        catListData.map((cat, idx) => (
          <li key={idx} className="list-cat" onClick={() => setSelectedCatIdx(idx)}>
            {cat.name}
          </li>
        ))
      }
    </div>
    {
      selectedCatIdx !== null && (
        <img src={catListData[selectedCatIdx].image.url} alt={catListData[selectedCatIdx].name} width="200px" />
      )
    }
  </div>
  );
};
export default View;
