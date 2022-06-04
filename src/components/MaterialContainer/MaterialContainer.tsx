import React, {useState} from 'react';
import ServantList from '../ServantList/ServantList';
import {ItemData, ServantData} from '../../services/atlasAcademyApi';

export interface DropTableItem {
  chapterName: string;
  nodeName: string;
  apCost: number;
  apPerDrop: number;
  dropRate: number;
}

interface Props {
  itemName: string;
  servantData: ServantData[];
  itemData: ItemData | undefined;
  dropTable: DropTableItem[];
}

const MaterialContainer: React.FC<Props> = (props) => {

  const [showServantList, setShowServantList] = useState<boolean>(false);

  return (
    <div className='material-container'>
      <div className='material-container__header'>
        <img src={props.itemData?.icon} className='item-icon' />
        <span>{props.itemData?.name}</span>
      </div>
      <div className='material-container__content'>
        <table className='material-container__drop-table'>
          {props.dropTable.map(item => (
            <tr key={props.itemName + item.nodeName}>
              <td>{item.chapterName}</td>
              <td>{item.nodeName}</td>
              <td>{item.apCost}<small>AP</small></td>
              <td>{item.apPerDrop}<small>AP/Drop</small></td>
              <td>{item.dropRate}<small>%</small></td>
            </tr>
          ))}
        </table>
        <div className='servant-list-anchor' onClick={() => setShowServantList(!showServantList)}>
          <div>Servants List</div>
        </div>
        <div className={`material-container__servant-list ${showServantList ? 'show' : 'hide'}`}>
          <ServantList itemName={props.itemName} servantData={props.servantData} />
        </div>
      </div>
      <div className='material-container__footer' />
    </div>
  );

};

export default MaterialContainer;
