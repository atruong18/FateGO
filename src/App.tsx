import React, {useEffect, useState} from 'react';
import './App.scss';
import AtlasAcademyApi, {ItemData, ServantData} from './services/atlasAcademyApi';
import MaterialContainer, {DropTableItem} from './components/MaterialContainer/MaterialContainer';
import {DROPS, Item} from './assets/data/drop';

const App: React.FC<any> = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [servantData, setServantData] = useState<ServantData[]>([]);
  const [itemData, setItemData] = useState<ItemData[]>([]);

  const _servantDataService = new AtlasAcademyApi();

  const tempDropTable: DropTableItem[] = [
    {
      chapterName: 'Atlantis',
      nodeName: 'Thanatos Island',
      apCost: 21,
      apPerDrop: 55,
      dropRate: 38.2,
    },
    {
      chapterName: 'Atlantis',
      nodeName: 'Deimos Island',
      apCost: 21,
      apPerDrop: 78.4,
      dropRate: 26.8,
    },
    {
      chapterName: 'Atlantis',
      nodeName: 'Nemesis Island',
      apCost: 21,
      apPerDrop: 82.8,
      dropRate: 25.4,
    },
  ];

  useEffect(() => {
    _servantDataService.getServantData().then(res => {
      console.log('servant', res);
      setServantData(res || []);
    });
    _servantDataService.getItemData().then(res => {
      console.log('item', res);
      setItemData(res.filter(i =>
        !i.name.includes('Gem of') && !i.name.includes('Crystallized Lore')
      ) || []);
    });
  }, []);

  useEffect(() => {
    if (loading && servantData.length > 0 && itemData.length > 0) {
      setLoading(false);
    }
  }, [loading, servantData, itemData]);

  const getDropTableData = (itemId: number): DropTableItem[] => {
    const item = DROPS.find(dropItem => dropItem.id === itemId);
    if (item === undefined) {
      return [];
    }
    return item.drops.map<DropTableItem>(drop => ({
      chapterName: drop.area,
      nodeName: drop.quest,
      apPerDrop: drop.apPerDrop,
      dropRate: drop.dropRate,
      apCost: drop.ap,
    })) || [];
  };

  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div className='container mx-auto'>
          {itemData
            .sort((i1, i2) => i1.priority - i2.priority)
            .map(item => (
            <MaterialContainer
              key={item.id}
              itemName={item.name}
              servantData={servantData}
              itemData={item}
              dropTable={getDropTableData(item.id)}
            />
          ))}

        </div>
      )}
    </div>
  );
};

export default App;
