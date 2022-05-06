# Symbol Service worker wallet
このWalletはブラウザの　Service worker 上にて動作する Web Wallet です。
資産の安全性を保つ為にメインウォレットとすることは避け、プリペイドなウォレット、他システム認証用途への利用を推奨します。

# Setup
本モジュールをhtml側より以下の通り操作を行い読み込みを行います

```
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/", { scope: "/" });
}
```

# 注意
- SDK --> 秘密鍵を内容している為、誤ってAccountクラスが値として返らないようにすること

# TODO - Primary
- Symbol操作箇所の作成
- htmlよりswへの呼び出し箇所開発
- 実際に組み込んだWEBウォレットの開発

# TODO
- Flow内で抽象化を進める
- ワンタッチハーベストの実装
- マルチシグへの対応
- 一括TX送信へ対応（loopでOK？）
- アグリゲートTXへの対応

### Credentials Management APIの検証
- Chromeのみで発生する認証情報取得時の不具合を発見 --> Chromeへissue上げておく
- 対象ブラウザをSafariとEdge、モバイルOS群として開発を進める
- 秘密鍵以外の情報はindexedDB上とする

### DIDの実現方法
- 認証フローを検討する
1. 認証画面でQRを読み込み or リダイレクト
2. CredentialsAPI呼び出し
3. サーバーから送信されたチャレンジを秘密鍵で解凍（秘密鍵そのものはSW内の処理で完結）
4. サーバーへ返却
5. サーバーサイドで合致確認
6. 該当セッションへJWT送信
