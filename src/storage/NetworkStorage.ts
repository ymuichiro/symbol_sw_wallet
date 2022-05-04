import { IndexedDBWrapper, DatabaseTableBase } from "indexeddb_wrapper_far";
import { NetworkStorageTable } from "../type/Storage";


export class NetworkStorage extends IndexedDBWrapper<NetworkStorageTable> {
  static readonly keyPath: string = "database/network";

  constructor(storeName: string, mode: IDBTransactionMode) {
    super(storeName, mode);
  }

  static getInitValue(): DatabaseTableBase<NetworkStorageTable> {
    return {
      keyPath: NetworkStorage.keyPath,
      data: {},
    };
  }
}