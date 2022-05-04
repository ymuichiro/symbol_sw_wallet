import { IndexedDBWrapper, DatabaseTableBase } from "indexeddb_wrapper_far";
import { AccountStorageTable } from "../type/Storage";


export class AccountStorage extends IndexedDBWrapper<AccountStorageTable> {
  static readonly keyPath: string = "database/account";

  constructor(storeName: string, mode: IDBTransactionMode) {
    super(storeName, mode);
  }

  static getInitValue(): DatabaseTableBase<AccountStorageTable> {
    return {
      keyPath: AccountStorage.keyPath,
      data: {},
    };
  }
}