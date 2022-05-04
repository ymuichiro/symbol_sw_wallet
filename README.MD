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
SDK --> クライアントサイドへ Account オブジェクトが渡らないようにすること
※ PrivateKey等を保有している為

# Todo
flow内（抽象化）の作成

返り値にのみOpenAPIを利用する。これにより出力結果の最小化も図ること
使いたいAPIだけを取捨選択する