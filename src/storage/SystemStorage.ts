import { IndexedDBWrapper, DatabaseTableBase } from "indexeddb_wrapper_far";
import { SystemStorageTable } from "../type/Storage";


export class SystemStorage extends IndexedDBWrapper<SystemStorageTable> {
  static readonly keyPath: string = "database/system";

  constructor(storeName: string, mode: IDBTransactionMode) {
    super(storeName, mode);
  }

  static getInitValue(): DatabaseTableBase<SystemStorageTable> {
    return {
      keyPath: SystemStorage.keyPath,
      data: {
        lang: "ja"
      },
    };
  }
}