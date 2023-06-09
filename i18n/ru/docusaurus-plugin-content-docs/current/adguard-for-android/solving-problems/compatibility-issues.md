---
title: Известные проблемы совместимости с приложениями для Android
sidebar_position: 15
---

## VPN-приложения

Другие VPN-приложения несовместимы с AdGuard, работающим в режиме фильтрации «Локальный VPN», поскольку у вас не может быть двух активных VPN одновременно. Для решения этой проблемы мы предлагаем:

* использовать [AdGuard VPN](https://adguard-vpn.com/welcome.html) — в нём есть Интегрированный режим, который позволяет двум приложениям работать без проблем
* использовать AdGuard в режиме локального HTTP-прокси. *Обратите внимание, что «ручной» режим прокси-сервера HTTP не поддерживается на устройствах, начиная с Android 10*
* если вы используете стороннее VPN-приложение, выясните, поддерживает ли оно режим SOCKS4/SOCKS5. Если это так, вы можете настроить VPN-приложение как исходящий прокси-сервер и выбрать локальный исходящий прокси-сервер с параметрами из стороннего приложения. Например, AdGuard можно автоматически настроить с помощью «Orbot: Прокси с Tor»

## Приватный DNS

Функция приватного DNS была представлена в Android Pie. До версии Q приватный DNS не нарушал логику фильтрации AdGuard DNS, и переадресация DNS через AdGuard работала нормально. Но, начиная с версии Q, наличие Private DNS вынуждает приложения перенаправлять трафик через системный резолвер вместо AdGuard. Более подробную информацию можно найти [в блоге разработчиков Android](https://android-developers.googleblog.com/2018/04/dns-over-tls-support-in-android-p.html).

> Некоторые производители устройств скрывают настройки приватного DNS и устанавливают автоматический режим по умолчанию. Таким образом, отключить приватный DNS невозможно, но можно заставить систему думать, что upstream недействителен, заблокировав его с помощью правила `$network`. Например, если система использует Google DNS по умолчанию, мы можем добавить правила `|8.8.4.4^$network` и `|8.8.8.8^$network`, чтобы заблокировать Google DNS.

## Неподдерживаемые браузеры

### UC браузеры: UC Browser, UC Browser для x86, UC Mini, UC Browser HD

Чтобы фильтровать HTTPS-трафик, AdGuard потребует у пользователя добавить сертификат в доверенные. К сожалению, браузеры семейства UC не доверяют пользовательским сертификатам, поэтому AdGuard не может выполнять в них HTTPS-фильтрацию.

**Решение**

*Требуется root-доступ*. Чтобы решить эту проблему, переместите сертификат в системное хранилище сертификатов.

### Opera mini: Opera mini, Opera mini с Яндексом

Opera mini по умолчанию пропускает трафик через прокси-сервер сжатия, а AdGuard не может распаковывать и фильтровать его одновременно.

**Решение**

На данный момент решения нет.

### Браузер Dolphin: Браузер Dolphin, Экспресс-браузер Dolphin

AdGuard не может фильтровать трафик при работе в режиме **Ручной прокси**, потому что этот браузер игнорирует системные настройки прокси.

**Решение**

Используйте режим фильтрации *Локальный VPN*.

### Браузер Puffin: Браузер Puffin, Браузер Puffin Pro

Браузер Puffin по умолчанию пропускает трафик через прокси-сервер сжатия, а AdGuard не может распаковывать и фильтровать его одновременно.

**Решение**

На данный момент решения нет.
