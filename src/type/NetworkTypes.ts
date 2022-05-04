import { NodeInfoDTO } from "symbol_sdk_min/dist/open_api/NodeInfoDTO";

/** network information */
export interface NetworkBase extends NodeInfoDTO {
  nodeUrl: string;
}

/** Network information maintained during operation */
export interface NetworkStore {
  main: NetworkBase | null;
  alternative: NetworkBase[];
}