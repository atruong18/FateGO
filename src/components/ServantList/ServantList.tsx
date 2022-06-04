import React, {useEffect, useState} from 'react';
import {ServantData, ServantMaterials} from '../../services/atlasAcademyApi';

interface Props {
  itemName: string;
  servantData: ServantData[];
}

interface ServantListItem {
  id: number;
  name: string;
  class: string;
  img: string;
  counts: {
    ascension: number
    skill: number
    append: number
  };
}

const ServantList: React.FC<Props> = (props) => {

  const extraClass = 'extra';
  const extraClasses = ['alterEgo', 'avenger', 'foreigner', 'moonCancer', 'pretender', 'ruler'];
  const servantClassOrder = ['saber', 'archer', 'lancer', 'rider', 'caster', 'assassin', 'berserker', 'extra'];

  const [servantMap, setServantMap] = useState<Record<string, ServantListItem[]>>({});

  useEffect(() => {

    setServantMap({});

    if (props.itemName) {

      const cServantList = props.servantData
        .reduce<ServantListItem[]>((acc, servant) => {
          let servantItem: ServantListItem | null = null;
          const ascensionCnt = getItemCount(props.itemName, servant.ascensionMaterials);
          const skillCnt = getItemCount(props.itemName, servant.skillMaterials);
          const appendCnt = getItemCount(props.itemName, servant.appendSkillMaterials);
          if ([ascensionCnt, skillCnt, appendCnt].some(v => v > 0)) {
            servantItem = {
              id: servant.id,
              class: servant.className,
              name: servant.name,
              img: Object.values(servant.extraAssets.faces.ascension)[0],
              counts: {
                ascension: ascensionCnt,
                skill: skillCnt,
                append: appendCnt,
              }
            };
          }
          return servantItem ? [...acc, servantItem] : acc;
        }, []);

      setServantMap(servantsByClass(cServantList));

    }

  }, [props.itemName, props.servantData]);

  const getItemCount = (itemNameLookup: string, materials: ServantMaterials): number => {
    return Object.values(materials).map(mats => mats.items).reduce<number>((cnt, items) =>
        cnt += items.filter(item => item.item.name === itemNameLookup).reduce((itemCnt, item) => item.amount + itemCnt, 0)
      , 0);
  };

  const servantsByClass = (servantsList: ServantListItem[]) => {
    const servantsMap: Record<string, ServantListItem[]> = {};
    servantsList.forEach(servant => {
      let servantClass = servant.class;
      if (extraClasses.includes(servantClass)) {
        servantClass = extraClass;
      }
      const list = servantsMap[servantClass] || [];
      servantsMap[servantClass] = [...list, servant];
    });
    return servantsMap;
  };

  return (
    <div className='servant-list-container'>
      {servantClassOrder.map(sClass => (
        <div className='servant-list-row'>
        {servantMap[sClass] && servantMap[sClass].map(servant => (
          <ServantItem key={servant.img} servant={servant} />
        ))}
        </div>
      ))}
    </div>
  );

};

export default ServantList;

const ServantItem: React.FC<{servant: ServantListItem}> = ({servant}) => {
  return (
    <div className='servant-item-container'>
      <img src={servant.img}/>
      <div className='item-count-breakdown'>{Object.values(servant.counts).join('/')}</div>
      <div className='item-count-total'>Total: {Object.values(servant.counts).reduce((acc, cnt) => acc + cnt, 0)}</div>
    </div>
  );
};
