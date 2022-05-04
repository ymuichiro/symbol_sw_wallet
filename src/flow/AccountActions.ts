import { AccountScripts } from "symbol_sdk_min/dist/Account";

/** Abstract account operations */
export class AccountActions {

  /** import wallet by mnemonic */
  static importWalletByMnemonic(mnemonic: string) {
    AccountScripts;
  }

  /** create new wallet */
  static createWallet() {
    AccountScripts.createFromMnemonic();
  }

  /** get balance for spacific address */
  static getBalanceByAddress(address: string) {
    // ネットワーク接続確認
    // アカウント有効確認
    // 残高取得
    // Mosaics情報を絶対値に変換
    // 返却
  }
}