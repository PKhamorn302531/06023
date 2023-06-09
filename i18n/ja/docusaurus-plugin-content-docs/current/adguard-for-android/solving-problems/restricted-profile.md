---
title: 制限付きプロファイルが原因の問題
sidebar_position: 10
---

**制限付きプロファイル**（アカウント）のあるAndroid 7以降デバイスの一部（特にSamsung Galaxy S10系端末）で起こる問題です。 このようなプロファイルがある場合、**AdGuard**は、VPNを使用する他アプリケーションと同様に、VPNトラフィックの選択的なフィルタリングに対する制限がかかってしまいます。 その結果、AdGuardは**ローカルVPNモード**での保護を起動できなくなります。 Also, one of the reasons for this situation may be using **Dual App/Dual Messenger profile** on your device. 以下に、この問題が発生した場合の対策をまとめました。

## 解決方法

現在対処方法は3つございます（多くの方にとって方法②が一番便利かと思いますが）。

### 方法①: ADB経由でAdGuardに権限を与える

> ※この方法は**AdGuard v3.5 Nightly 6**以降で利用できることに注意してください。 古いバージョンを使用している場合は、[こちら](https://adguard.com/adguard-android/overview.html)からのNightly最新バージョンを入手できます（もしくはAdGuardアプリ内設定で「アップデートチャンネル」を「Nightly」に切り替えてアプリをアップデートできます）。

1. **開発者モード**をアクティブにし、**USBデバッグ**を有効にします（※端末によって下記メニュー項目の名称が多少違ったりする場合がございます）:
- 端末で**設定**アプリを開きます。
- **システム**セクションに移動し（設定メニューの最後の項目）、 サブアイテム「**端末について**」を見つけます。
- 「**ビルド番号**」の行を7回タップします。 その後、「**開発者になりました！**」のような通知が表示されます（必要に応じて、デバイスのロック解除コードを入力してください）。
- 設定→システム→**詳細設定**→**開発者向けオプション**→下にスクロールして「**USBデバッグ**」を開く（もしくはオンにする）→警告を注意深く読んでいただいた後、[**USBデバッグを許可する**]ウィンドウでデバッグが有効になっていることを確認します。

> 上記に関してまだご不明やお困りな点ございましたら、[こちら](https://developer.android.com/studio/debug/dev-options)でさらに詳しい手順をご確認ください。

2. [Install and configure](https://www.xda-developers.com/install-adb-windows-macos-linux/) adb;
> Windowsでは、**Samsung** のユーザーは、[こちらのユーティリティ](https://developer.samsung.com/mobile/android-usb-driver.html)をインストールする必要があるかもしれません。
3. **USBケーブル**を使用して**ADB**をインストールしたコンピューターまたはラップトップにAndroidデバイスを接続します。
4. PCで**コマンドライン**を開きます。
- **Windows**を使用している場合は**Cmd.exe**
- **macOS**を使用している場合は**ターミナル**
5. `adb shell pm grant com.adguard.android android.permission.INTERACT_ACROSS_USERS` というコマンドを入力して**Enter**を押します。これで完了です。

### 方法②: *制限付きアカウント*を削除する

多くの端末の場合: 端末設定→詳細設定→複数ユーザー→制限付きプロファイルを削除する ユーザーアカウント管理については[こちら](https://support.google.com/a/answer/6223444?hl=en)にてさらにご確認いただけます。

> 制限付きユーザーアカウントが他の機能を通じて作成され、直接削除できない場合があることに注意してください。 たとえば、**Samsung**または**LG**デバイスでデュアルメッセンジャーまたはデュアルアプリ機能を使用する場合です。 これらのケースで問題を解決する方法を以下に記載いたしました。

### 方法③: *ローカルHTTPプロキシモード*でAdGuardを使用する（ルート権限が必要になります）

このモードを有効にする手順: **AdGuard設定**→**ネットワーク**→**フィルタリング方法**→ **ローカルHTTPプロキシ**を選択

## LGとSamsungデバイスの場合

**LG**または**Samsung**端末には「デュアルアプリ」または「デュアルメッセンジャー」機能を使用することにより、制限付きプロファイルが作成され、VPN起動の問題が発生する可能性があります。 It can be caused by using **Dual App/Dual Messenger** function (which automatically creates a restricted profile).

### Samsung端末

- 端末**設定**を開く
- **高度な設定**をタップ
- Scroll down and press **Dual messenger**;
- チェックついているアプリをすべて**オフ**にする
- 端末画面オフにして5～10分程度放置する
- 画面のロックを解除し、再度VPNプロファイルの作成を試みてください。

### LG端末

- 端末**設定**を開く
- 「**便利な機能**」を開く（端末によっては「一般」や他のメニュー名称の場合もあります）
- Scroll down and press **Dual app**;
- アプリに対するスイッチをすべてオフにする
- 端末を再起動する