// @flow
export type ImagesType = {
  id: string,
  isPublic: boolean,
};

export type LocationType = {
  latitude?: string,
  districtId?: number,
  localityId?: number,
  subLocalityName?: string,
  subwayIds?: Array<number>,
  countryName?: string,
  districtName?: string,
  longitude?: string,
  postalCode?: number,
  countryId?: number,
  subLocalityId?: number,
  house?: string,
  localityName?: string,
  street?: string,
  regionId?: number,
  regionName?: string,
};

export type DetailsType = {
  accreditors?: Array<number>,
  architect?: string,
  ceilHeight?: {
    from: number,
    to: number,
  },
  commissioningQuarter?: string,
  commissioningYear?: number,
  constructionKind?: string,
  contractorId?: number,
  contractType?: string,
  developer?: string,
  floors?: {
    from: number,
    to: number,
  },
  houseKind?: string,
  infrastructureUnits?: Array<string>,
  keysIssueDate?: string,
  maintenanceCosts?: number,
  parkings?: number,
  propertyKind?: string,
  security?: string,
  startYear?: number,
  startQuarter?: string,
  undergroundGarages?: number,
  withRubbishChute?: boolean,
  withWasteDisposalRoom?: boolean,
};

export type AdjacentTerritoryType = {
  area?: number,
  playgrounds?: number,
  isAccessOpen?: boolean,
  isAllowedCars?: boolean,
  isGreeneryPlanted?: boolean,
};

export type StatisticsType = {
  resalePropertiesCount: number,
  price: {
    from: {
      usd: number,
      eur: number,
      rub: number,
    },
    to: {
      usd: number,
      eur: number,
      rub: number,
    },
  },
  totalResaleArea: {
    from: number,
    to: number,
  },
  resalePrice: {
    from: {
      usd: number,
      eur: number,
      rub: number,
    },
    to: {
      usd: number,
      eur: number,
      rub: number,
    },
  },
  propertiesCount: number,
  totalPrimaryArea: {
    from: number,
    to: number,
  },
  primaryPrice: {
    from: {
      usd: number,
      eur: number,
      rub: number,
    },
    to: {
      usd: number,
      eur: number,
      rub: number,
    },
  },
  primaryPropertiesCount: number,
  totalArea: {
    from: number,
    to: number,
  },
};

export type ComplexType = {
  id: string,
  name: string,
  slug: string,
  state: string,
  images: Array<ImagesType>,
  image?: ImagesType,
  details: DetailsType,
  note?: string,
  adjacentTerritory: AdjacentTerritoryType,
  purchaseTimeConditions?: {
    oralReservation?: number,
    agreementPreparation?: number,
    developerAgreement?: number,
    stateRegistrationPreparation?: number,
    signing?: number,
    stateRegistration?: number,
    documentDelivery?: number,
    payment?: number,
  },
  location: LocationType,
  installment: {
    months?: number,
    initial?: number,
    overpayment?: number,
  },
  statistics?: StatisticsType,
  responsibleUser?: {
    id: number,
    departmentId: number,
  },
  cianId?: number,
  linkedContactIds: Array<number>,
  units: ?number,
  amenities?: Array<string>,
  shortDescription?: string,
  fullDescription?: string,
  createdByUserId: number,
  updatedByUserId?: number,
  createdAt: string,
  updatedAt?: string,
};
