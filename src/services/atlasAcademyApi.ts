const baseUrl = 'https://api.atlasacademy.io';
const servantDataUrl = 'https://api.atlasacademy.io/export/NA/nice_servant.json';
const itemDataUrl = 'https://api.atlasacademy.io/export/NA/nice_item.json';

class AtlasAcademyApi {

  public getServantData(): Promise<ServantData[]> {
    return fetch(servantDataUrl).then(res => res.json());
  }

  public getItemData(): Promise<ItemData[]> {
    return fetch(
      `${baseUrl}/nice/NA/item/search?use=skill`
    ).then(res => res.json());
  }
}

export default AtlasAcademyApi;

export type ServantMaterials = Record<any, Material>;

export interface ServantData {
  id: number;
  className: string;
  name: string;
  appendSkillMaterials: ServantMaterials;
  ascensionMaterials: ServantMaterials;
  skillMaterials: ServantMaterials;
  costumeMaterials: ServantMaterials;
  extraAssets: {
    faces: {
      ascension: Record<any, string>
    }
  };
}

export interface Material {
  items: Item[];
  qp: number;
}

export interface Item {
  amount: number;
  item: {
    id: number
    icon: string
    name: string
    originalName: string
  };
}

export interface ItemData {
  id: number;
  name: string;
  originalName: string;
  type: string;
  uses: string[];
  detail: string;
  icon: string;
  background: string;
  priority: number;
  dropPriority: number;
}
