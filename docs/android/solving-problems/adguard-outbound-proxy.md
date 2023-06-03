---
title: How to setup the outbound proxy
sidebar_position: 8
---

This article explains how to set up some of the most popular proxys to work with AdGuard.

### How to use AdGuard with Tor

1. Open AdGuard and go to **Settings -> Network -> Proxy settings**. Download "Orbot: Proxy with Tor" by tapping on **Intagrate with Tor** button or directly from [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android&noprocess). 

2. Open Orbot and press the **Start** button on the application's main screen.

2. Go back to the **Proxy Settings** screen of AdGuard.

3. Tap on the **Intagrate with Tor** button. 

4. All the required fields will be pre-filled:

Field      |  Value
-------    | --------- 
Proxy type | *SOCKS4* or *SOCKS5* 
Proxy host | *127.0.0.1*
Proxy port | *9050*
   
Or you can tap on **Add proxy** and enter these values manually, then set the Orbot proxy as a default one.
   
5. Enable AdGuard protection.

> Please note, AdGuard will now forward all traffic through Orbot proxy, if you disable Orbot proxy, then Internet connection will be unavailable until you disable outbound proxy settings in AdGuard

### How to use AdGuard with PIA (Private Internet Access)

*here we presume that you are already a PIA VPN client and have it installed on your device*

1. Open AdGuard and go to **Settings -> Network -> Proxy settings**.

2. Tap on the **Add proxy server** button and enter the following data:
    
Field      |  Value
-------    | --------- 
Proxy type | *SOCKS5* 
Proxy host | *proxy-nl.privateinternetaccess.com*
Proxy port | *1080*
	
3. You also need to fill out the **Username/Password** fields. To do so, log in to the [Client Control Panel](https://www.privateinternetaccess.com/pages/client-sign-in) on the PIA website. Click the **Generate Password** button under the **Generate PPTP/L2TP/SOCKS Password** section. A Username starting with "x" and a random Password will be shown. Use them to fill out the **Username** and **Password** fields in AdGuard.

4. Set this proxy as a default one by toggling the switch, then click *Save*.

5. Enable AdGuard protection.

### How to use AdGuard with TorGuard

*here we presume that you are already a TorGuard client and have it installed on your device*

1. Open AdGuard and go to **Settings -> Network -> Proxy settings**.

2. Tap on the **Add proxy server** button and enter the following data:

Field      |  Value
-------    | --------- 
Proxy type | *SOCKS5* 
Proxy host | *proxy.torguard.org* or *proxy.torguard.io*
Proxy port | *1080* or *1085* or *1090*
	
3. For *Username* and *Password* fields, enter your proxy username and proxy password you have chosen at TorGuard signup.

4. Set this proxy as a default one by toggling the switch, then click *Save*.

5. Enable AdGuard protection.

### How to use AdGuard with NordVPN

1. Open AdGuard and go to **Settings -> Network -> Proxy settings**.

2. Tap on the **Add proxy server** button and enter the following data:

Field      |  Value
-------    | --------- 
Proxy type | *SOCKS5* 
Proxy host | *any server save for "Obfuscated" from [this list](https://nordvpn.com/servers/)*
Proxy port | *1080*
	
3. For *Username* and *Password* fields, enter your NordVPN Username and Password.

4. Set this proxy as a default one by toggling the switch, then click *Save*.

5. Enable AdGuard protection.

### How to use AdGuard with Shadowsocks

*here we presume that you have already configured a Shadowsocks server and a client on your device*

**NOTE: You should remove Shadowsocks application from filtering before setting up the process (AdGuard - Apps management - Shadowsocks - Disable AdGuard protection) to avoid infinite loops and drops**

1. Open AdGuard and go to  **Settings -> Network -> Proxy settings**.

2. Tap on the **Add proxy server** and fill the fields:

Field      |  Value
-------    | ---------
Proxy type | *SOCKS5*
Proxy host | *127.0.0.1*
Proxy port | *1080*

3. Tap on **Save and select**

### Limitations

There is a factor that can prevent certain traffic from being routed through the outgoing proxy. AdGuard will only re-route traffic that goes through it. Basically, it means apps that have **Ad blocking** flag enabled in the **Apps Management** tab. 
