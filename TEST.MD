# TODO
SymbolSDKをSWに組み込んでクライアントサイドよりPINGPONG可能にする
その為の適切なWEBPACK構成も考える

index.html側にSWのインストールスクリプトは記載する想定


# QA

### Credentials Management APIを使ってセキュアに保存可能であるか
Chromeのみで発生する認証情報取得時のバグにより断念
TwitterのChrome側からの返信を期待するか、今後Bugが修正されたと思われるころに利用を開始する
それまでは indexedDBの利用とする

### indexedDBを必ずインスタンス化するには
要検証
都度OpenCloseでも良い？

### SW間で PINGPONGさせるには？
要検証。これができればWEBで組み込む必要すらない

### DIDの実現方法
SW的ものをドメイン単位で立てる場合 ... QRを読み込んで新しいサイトの認証はさせる方式？
ドメイン共通とする場合 ... やっぱりアプリが必要？ Credentials M API で実は出来る？

### ToDo
まずはDBの自分用ライブラリをしっかり作る