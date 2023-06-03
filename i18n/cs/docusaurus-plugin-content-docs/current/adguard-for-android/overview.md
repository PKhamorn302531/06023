---
title: Přehled funkcí
sidebar_position: 1
---

> Upozornění: AdGuard pro Android nelze zaměňovat s Blokátorem obsahu AdGuard. Blokátor obsahu AdGuard je aplikace dostupná v Google Play, která má omezené funkce, aby splňovala stanovy obchodu. AdGuard pro Android je naopak výkonná aplikace pro blokování reklam, správu aplikací a další funkce, které jsou popsány v tomto článku. AdGuard pro Android můžete stáhnout [webových stránek AdGuardu](https://adguard.com/adguard-android/overview.html).

## Blokování reklam

Hlavním účelem blokátoru reklam je blokování reklam, algoritmy blokování reklam jsou u většiny programů AdGuard stejné. Mechanismus filtrování reklam je popsán [zde](/general/ad-filtering/how-ad-blocking-works).

![Blokování reklam](https://cdn.adtidy.org/public/Adguard/Blog/manifestv3/adblockingworks.png)

Funkce blokování reklam je ve svém pojetí zcela zřejmá, ale některé body si zaslouží samostatnou zmínku. Nejdůležitější je, že AdGuard funguje jako univerzální filtr, který prochází provoz aplikací a rozhoduje, co s tím či oním webovým požadavkem udělat. Celý proces se řídí pomocí filtrů — seznamů speciálních pravidel. Program má výchozí a neustále aktualizovanou sadu filtrů, ale můžete do ní přidat i vlastní pravidla filtrování a filtry.

Tento princip využívá většina blokátorů mobilních reklam pro Android. To, co je v jejich případě v podstatě celá aplikace, je pro AdGuard pouze jednou z mnoha funkcí. Přečtěte si [tento srovnávací článek](https://adguard.com/en/blog/adguard-vs-adaway-dns66.html) a zjistěte, jaké jsou rozdíly mezi AdGuardem a jinými blokátory reklam.

## Filtry

Program používá mnoho různých filtrů, vlastních i cizích, seřazených podle jazyka a účelu. Například filtry v kategorii Obtěžování se velmi liší od jazykově specifických filtrů.

![Filtry *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/filters1.png)

Více informací o všech filtrech dostupných pro produkty AdGuardu získáte přečtením jejich popisu v aplikaci nebo v [tomto obsáhlém článku](/general/ad-filtering/adguard-filters).

## Vlastní filtry

![Vlastní filtry *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/custom-filters.png)

AdGuard umožňuje vytvářet vlastní filtry pomocí stejného typu pravidel, jaká máme v našich filtrech. Pokud si to chcete vyzkoušet, doporučujeme prostudovat článek o [vytváření vlastních filtrůreklam ](/general/ad-filtering/create-own-filters), který podrobně popisuje syntaxi pravidel AdGuardu a uvádí spoustu příkladů.

> Tip: pomocí funkce Import přeneste svá pravidla do jiného zařízení.

## HTTPS filtrování

V dnešní době téměř všechny webové stránky fungují prostřednictvím protokolu HTTPS, kde poslední písmeno S znamená "secure". Stalo se, že tento protokol používá i většina inzerentů, a proto je [Filtrování HTTPS](/general/https-filtering/what-is-https-filtering) pro moderní blokátor reklam opravdu klíčové.

![Co je https](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https.png)

Aby mohl AdGuard filtrovat přenosy HTTPS, musí do uživatelského úložiště vašeho zařízení nainstalovat certifikát. Ve starších verzích operačního systému Android se to provádělo automaticky během procesu přihlašování nebo později prostřednictvím nastavení AdGuardu a vyžadovalo to pouze několik klepnutí. V systému Android 11 a novějším již není k dispozici automatická instalace certifikátu. Certifikát je nutné nainstalovat ručně.

Zde jsou pokyny k instalaci:

1. Přejděte na hlavní obrazovku aplikace a klepněte na *Zapnout* vedle zprávy *Filtrování HTTPS je vypnuto* (pokud certifikát AdGuardu ještě není nainstalován, bude zvýrazněn oranžově).

2. Zobrazí se nová obrazovka, na výzvu ke stažení certifikátu AdGuardu klepněte na *Další*, *Další* a *Uložit nyní*.

3. Po stažení certifikátu se zobrazí nová obrazovka. Klepněte na *Otevřít nastavení zabezpečení*.

4. Zobrazí se nastavení systému. Přejděte dolů na *Pokročilé*, otevřete, poté klepněte na *Šifrování a pověření* (tato nastavení se mohou na různých zařízeních jmenovat různě — hlavní je zvolit pokročilé nastavení zabezpečení).

5. Klepněte na *Instalovat certifikát* a poté na *Certifikát CA*.

6. Zobrazí se varovná zpráva. Přečtěte si ji a klepnutím na *Přesto instalovat* pokračujte.

7. Vyberte nedávno stažený certifikát AdGuardu. Měla by se zobrazit zpráva *CA certifikát nainstalován*.

8. Certifikát AdGuardu byl úspěšně nainstalován a filtrování HTTPS nyní funguje!

> Pokud aktualizujete systém Android 10 na Android 11, je možné, že již nainstalovaný certifikát bude stále akceptován. V opačném případě se na hlavní obrazovce zobrazí oranžově zvýrazněné upozornění *Filtrování HTTPPS je vypnuto*. Proto budete muset stejný proces přeinstalace certifikátu provést ručně.

V případě problémů s instalací certifikátu si přečtěte [tento článek](../solving-problems/manual-certificate) nebo kontaktujte náš tým podpory na adrese support@adguard.com.

> **Chceme zdůraznit, že blokátor reklam AdGuard bude fungovat i bez filtrování HTTPS. Nebude však schopen správně filtrovat reklamy na webech, které používají protokol HTTPS (většina webů tak činí). Pokud tedy chcete využívat všechny funkce aplikace a získat nejlepší kvalitu filtrování reklam a rychlost zpracování, důrazně doporučujeme aktivovat filtrování HTTPS.**

## Režim utajení

Mnoho webových stránek shromažďuje informace o svých návštěvnících, například jejich IP adresy, informace o nainstalovaném prohlížeči a operačním systému, rozlišení obrazovky, a dokonce i o tom, na jakou stránku uživatel přišel nebo z jaké stránky byl přesměrován. Některé webové stránky používají soubory cookies k označení prohlížeče a uložení vašich osobních nastavení, uživatelských preferencí nebo k vašemu "rozpoznání" při příští návštěvě. Režim utajení chrání vaše osobní údaje před takovými systémy sběru dat a statistik.

Práci v Režimu utajení můžete flexibilně nastavit: můžete například zakázat, aby webová stránka obdržela požadavek na vyhledávání, který jste použili k jejímu nalezení na internetu, automaticky vymazat soubory cookies třetích stran i vlastní soubory cookies webové stránky a zakázat sdílení polohy ve vašem prohlížeči, které lze použít ke sledování vaší polohy.

Chcete-li se seznámit se všemi hlavními funkcemi a možnostmi, které můžete spravovat v nastavení Režimu utajení, přečtěte si [tento článek](/general/stealth-mode).

![Režim utajení *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/stealth-mode.png)

## Bezpečné prohlížení

Krádež identity je podvodná online praktika, jejímž cílem je získat od uživatelů internetu citlivé informace, jako jsou uživatelská jména, hesla, údaje o kreditních kartách a podobně. Tato forma podvodu, která se uskutečňuje prostřednictvím podvržených e-mailů a falešných webových stránek vydávajících se za důvěryhodná média, jako jsou banky, sociální služby atd., způsobuje každým rokem velké finanční újmy. Co se týče malwaru (škodlivého softwaru), jak název napovídá, je jakýkoli typ softwaru navržený s cílem poškodit osobní počítač nebo jiné zařízení, do kterého se dostane. To, co kdysi začalo jako žert, je nyní nástrojem ke krádeži důvěrných informací uživatelů a firem.

![Bezpečné prohlížení *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/browsing-security.png)

Modul Bezpečné prohlížení AdGuard vás naštěstí chrání před návštěvou těchto nebezpečných stránek. Upozorní vás také na malware stažený do vašeho zařízení. Pokud se chcete dozvědět více o Bezpečném prohlížení, přečtěte si [tento článek](/general/browsing-security).

> Upozorňujeme však, že AdGuard pro Android není antivirus. Nezastaví ani samotné stahování viru, ani neodstraní již viry existující. Pro kompletní ochranu vašeho zařízení doporučujeme používat AdGuard společně se specializovaným antivirovým nástrojem.

![Upozornění Bezpečného prohlížení *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/browsing_security_warning.png)

Zároveň bychom rádi zdůraznili, že vaše osobní údaje *nejsou* nikam přenášeny a AdGuard *neví*, které webové stránky navštěvujete. Bezpečnostní kontrola se neprovádí na základě otevřené webové adresy (URL), ale prostřednictvím prefixů hash (hash je určitá datová struktura, která jednoznačně určuje každou adresu přidanou do základu). Pokud si to však přejete, můžete nám zasílat informace o vámi navštěvovaných webových stránkách za účelem vylepšení databáze. Přečtěte si více o AdGuard ochraně proti krádeži identity a malwaru.

# Ovládání aplikací

Jedním z hlavních cílů AdGuardu pro Android je vrátit uživatelům plnou kontrolu nad jejich zařízeními. Pomocí AdGuardu můžete zobrazit komplexní informace o všech webových požadavcích, které přicházejí skrze vaše zařízení. Žádná aplikace nebude moci být online bez vašeho vědomí.

## Správa aplikací

V modulu Správa aplikací můžete zvolit, které aplikace mají mít přístup k Wi-Fi nebo mobilním datům, které budou filtrovány AdGuardem a které ne. Můžete také změnit pravidla přístupu k internetu na pozadí pro aplikace, když je obrazovka zamčená. Tato nastavení lze použít pro všechny nainstalované aplikace najednou nebo pro jednotlivé aplikace.

![Správa aplikací *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/apps-management.png)

Další nastavení najdete v pravém horním rohu obrazovky s názvem Správa aplikací. Pomohou vám vyladit AdGuard pro Android podle vašich představ. Můžete například nastavit společná nastavení použitelná pro každou aplikaci nebo vybrat aplikace, které vyžadují podrobnější přístup.

![Chrome *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/chrome.png)

Po klepnutí na ikony se zobrazí obrazovka s informacemi o provozu v jednotlivých aplikacích, které vám pomohou činit informovanější rozhodnutí. AdGuard vám pomůže nejen s filtrováním reklam a ochranou soukromí, ale také pomůže vašemu zařízení lépe fungovat, šetřit baterii a datový provoz.

## Záznam filtrování

V záznamu filtrování můžete přímo sledovat všechny webové požadavky provedené prohlížeči a aplikacemi. Díky této funkci máte plnou kontrolu nad všemi procesy v zařízení.

![Záznam filtrování *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/filtering-log.png)

Každý požadavek můžete jedním klepnutím zablokovat (nebo odblokovat, pokud je již zablokován). K dispozici jsou také podrobné informace o každém požadavku, i když jsou určeny především pokročilým uživatelům, zejména těm, kteří si vytvářejí vlastní pravidla filtrování. Níže se tomu budeme věnovat o něco podrobněji.

## Uživatelská pravidla

Jak bylo uvedeno výše, AdGuard pro Android používá k blokování reklam sadu filtrů. A pak je tu sekce Uživatelská pravidla, která umožňuje vytvářet a upravovat vlastní pravidla filtrování. Nachází se na kartě Nastavení v menu AdGuardu.

![Uživatelská pravidla *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/user-rules.png)

Při první instalaci AdGuardu je sekce Uživatelská pravidla prázdná. Abyste ji mohli vyplnit pravidly, musíte znát základy syntaxe pravidel. Nebojte se, pokud s tím nejste obeznámeni. Zde je dobré místo, kde začít, pokud cítíte potřebu proniknout hlouběji do tvorby vlastních pravidel.

Mimochodem, kdykoli použijete záznam filtrování k zablokování čehokoli, objeví se v uživatelských pravidlech odpovídající pravidlo, takže pokud budete chtít zablokování zrušit, použijte jej. Obecně lze říci, že záznam filtrování a uživatelská pravidla jdou obzvláště dobře dohromady: první z nich můžete použít ke sledování požadavků, abyste mohli sestavit správné pravidlo pro uživatelská pravidla.

## DNS filtrování

Modul DNS filtrování umožňuje konfigurovat nastavení DNS v zařízení uživatele, včetně vybraného serveru DNS, protokolu DNS a filtrů DNS, které blokují reklamy a slídiče.

![AdGuard DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg)

Malé osvěžení teorie: DNS je zkratka pro "Domain name system" (decentralizovaný systém doménových názvů) a jeho účelem je překládat domény do podoby srozumitelné prohlížečům, tj. IP adres. Pokaždé, když přejdete na webovou stránku, odešle váš prohlížeč požadavek DNS na server, který obvykle určuje váš poskytovatel internetových služeb. Tento server buď přesměruje požadavek na jiný (odchozí) server, nebo odpoví IP adresou. Pokud místo výchozího serveru DNS použijete speciální server DNS, může odesílat nebezpečné a potenciálně nebezpečné požadavky do "prázdna". Odpovědi s IP adresami tak nebudou přijímány a "špatné požadavky" budou zlikvidovány hned v zárodku.

DNS filtrování má na domovské obrazovce AdGuardu pro Android vlastní samostatnou kartu. Zde můžete zvolit typ DNS, který chcete používat (může to být běžný DNS nebo vysoce zabezpečený DNS — k tomu se dostaneme později) a také povolit blokování na úrovni DNS.

## DNS blokování

DNS blokování je samostatná funkce, která doplňuje sadu ochrany AdGuardem.

![Mechanismus DNS](https://cdn.adtidy.org/public/Adguard/Blog/android-features/DNS-mechanism.jpg)

Existují dva způsoby DNS blokování:

1. Některé DNS servery mohou blokovat požadavky DNS na potenciálně škodlivé domény.
2. K dispozici je vestavěné DNS filtrování, které funguje přímo v zařízení a může blokovat DNS požadavky kromě těch, které jsou blokovány vybraným serverem DNS.

Jak přesně funguje DNS filtrování? Má speciální DNS filtr, který obsahuje rozsáhlý seznam reklamních a sledovacích domén, který ve spojení s uživatelskými pravidly používá k rozpoznání "špatných" požadavků. Každý požadavek je kontrolován podle tohoto filtru. Pokud je nalezena shoda, je namísto přesměrování na DNS server přesměrován do tzv. "černé díry".

Jednoduchost tohoto přístupu je výhodou i nevýhodou. Hlavní výhodou tohoto přístupu je, že je šetrný k životnosti baterie a šetří datový provoz. Jakmile je doména zablokována, nebude během hodiny znovu vyžádána. Nevýhodou je tzv. "hrubost" této metody: nelze blokovat konkrétní adresy URL, ale pouze celé domény. Někdy je jediným způsobem, jak blokovat reklamy pomocí DNS, přidat pravidlo, které zároveň něco poruší. V tomto případě toto pravidlo prostě nepřidáme a reklama zůstane zobrazena — protože alternativa, kdy webová stránka nefunguje vůbec, je ještě horší.

## DNS servery

"DNS Balíček" AdGuard pro Android tím však nekončí. Jednou z užitečných výhod je možnost vybrat si *naprosto libovolný* DNS server, který chcete používat. K dispozici máte seznam desítek serverů, z nichž si můžete vybrat. Od našich vlastních serverů AdGuard DNS až po další populární poskytovatele, jako je Google DNS, Cloudflare a další. Pokud navíc váš oblíbený server není ve výchozím seznamu, můžete jeho adresu zadat ručně a použít ji i tak. Podívejte se na obsáhlý seznam oblíbených poskytovatelů DNS — najdete v něm mnoho serverů DNS, které můžete do AdGuardu přidat pouhým klepnutím prstu.

Existuje několik důvodů, proč používat vlastní DNS server namísto serveru nabízeného poskytovatelem internetových služeb ve výchozím nastavení. Některé servery jsou rychlejší, některé poskytují řešení pro blokování reklam nebo rodičovskou kontrolu, některé zvyšují vaše soukromí atd.

DNS servery se však neliší pouze funkcí. Kromě toho se mohou lišit také podle podporovaných typů protokolů. DNS servery pracují se třemi hlavními typy protokolů: HTTPS, TLS a QUIC. Podle toho existují DNS-over-HTTPS (DoH), DNS-over-TLS (DoT) a DNS-over-QUIC (DoQ). Zatímco první dva jsou standardní protokoly, třetí (DoQ) je experimentální, ale nejvýznamnější. Popíšeme to později. Výběr DNS serveru od důvěryhodného poskytovatele je pro ochranu provozu DNS zásadní. Pokud je provoz DNS uživatele bezpečný, zvyšuje se jeho soukromí a bezpečnost a je snazší zabránit odposlechu a manipulaci s daty DNS prostřednictvím útoků typu man-in-the-middle (MITM).

### DNS-over-QUIC

DNS skrze QUIC (DoQ) je poměrně nový šifrovací protokol a AdGuard DNS je první veřejný řešitel, který jej podporuje. Na rozdíl od DoH a DoT používá jako transportní protokol QUIC a konečně vrací DNS k jeho kořenům — pracuje přes UDP. Přináší všechny dobré vlastnosti, které nabízí QUIC — výchozí šifrování, zkrácení doby připojení, lepší výkon při ztrátě datových paketů. Kromě toho má být QUIC protokolem na transportní úrovni a nehrozí zde žádné riziko úniku metadat, k němuž by mohlo dojít v případě DoH.

Chcete-li se dozvědět více o DNS-over-QUIC, přečtěte si [tento článek](https://adguard.com/en/blog/dns-over-quic.html), který je tomu věnovaný.

Chcete-li zapnout DoQ v AdGuardu pro Android, proveďte následující kroky:

* Otevřete aplikaci a poté otevřete postranní menu
* Přejděte do *Nastavení > DNS filtrování* a zapněte jej
* Vyberte některý ze serverů AdGuard DNS ze seznamu dostupných serverů
* V části *Typ serveru* vyberte *DNS-over-QUIC*

## Uživatelský filtr DNS

Je velmi podobný běžnému uživatelskému filtru, ale pro požadavky DNS.

![Uživatelský filtr DNS *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/dns-user-filter.png)

Uživatelský filtr DNS najdete v *Nastavení > DNS filtrování > Blokování požadavků DNS*. Uživatelský filtr DNS podporuje dva typy syntaxe: omezenou část syntaxe AdGuardu a syntaxi "hosts". Další informace si můžete přečíst v naší databázi znalostí.

## Vlastní DNS filtry

Můžete přidat libovolný počet [vlastních DNS filtrů](https://filterlists.com/) nebo vlastních seznamů hostitelů. Je to užitečná funkce vzhledem k tomu, jak jsou seznamy hostitelů mezi uživateli internetu oblíbené.

![DNS filtry *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/dns-filters.png)

Tato možnost je k dispozici v sekci *Nastavení > DNS filtrování > Blokování požadavků DNS*.

## Proxy and TOR

A proxy server is basically another computer serving as a hub that processes your internet requests. You can set up AdGuard to route all your device's traffic through any proxy — and you'll be able to configure the whole thing right inside the app. And here is [an instruction on how to set up a proxy](../solving-problems/outbound-proxy).

> Some popular VPN providers offer an alternative way to use their service as a proxy. This can be used to run them alongside AdGuard in local VPN mode.

![Nastavení proxy *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/proxy-settings.png)

Contrary to a popular opinion, using a proxy server is not just about bypassing access restriction to geoblocked resources. It is about security! If you are using a proxy server, intruders won't know what websites you visit. You can also use AdGuard along with the anonymity network TOR (we have already integrated AdGuard with Tor for your convenience!). Here is a [Wiki article](https://en.wikipedia.org/wiki/Tor_(anonymity_network)) where the whole concept of TOR network is nicely explained in case you wish to find out more.

## Extensions support

Userscripts (we also call them extensions) are basically mini-programs written in JavaScript that extend the functionality of one or more websites. Usually, you'd need some special userscript manager to add them, and it's traditionally more of a desktop thing. But with AdGuard everything is possible! Now you can add any userscripts by URL or load them from a file, and AdGuard will serve as a userscript manager and take care of the rest. Go to *Settings > Extensions* to enable some of the pre-installed extensions or to add custom userscripts.

![Rozšíření *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/extensions.png)

By the way, you can tap any added userscript to see more details, and to reinstall or delete it.

## Compatibility with AdGuard VPN

The best kind of compatibility is when you install two apps and they just start working together. Presuming you already have AdGuard Ad Blocker installed, just download AdGuard VPN from Play Store (you can get there right from the ad blocker app, there's an item in General settings).

![Kompatibilita *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/compatibility.png)

Both apps will detect each other and do everything that's needed for smooth joint work. All that will be left for you is to enjoy both ad-free Internet and the benefits of a VPN. It also works the other way around just as well: install AdGuard Ad Blocker on top of an already-running AdGuard VPN and you're good.

If you'd like to disable Compatibility Mode for any reason, it's very simple to do so from AdGuard Ad Blocker settings, just toggle the switch. Additionally, you can add AdGuard Ad Blocker and AdGuard VPN tiles to your device's notification bar and toggle them in one tap at your own will — thanks to Compatibility Mode the configuration will change immediately and silently.

## Licence

While some ot the features in AdGuard for Android are free, others require [purchasing a license](https://adguard.com/en/license.html). There are Personal (up to three devices) and Family (up to 9 devices), Yearly and Lifetime license keys. The premium version offers the following features to its users:
* Režim utajení
* Bezpečné prohlížení
* Rozšíření
* Blokování reklam ve všech aplikacích (nejen v prohlížečích)
* Vlastní filtry

Read [this article](./general/license/activation) to learn how to activate the license key.

## Other features

There are too many features to describe them all in detail, so let us simply list them here:

* When you visit certain screens for the first time, there will appear tooltips that describe the purpose of that screen and its main features
* You can export or import AdGuard settings (for a faster switch between the settings profiles or to transfer your profile between different devices)
* Select an update channel, i.e. the mode in which the application receives its updates (stable release channel, less stable beta channel and raw ["nightly" channel](https://adguard.com/en/blog/nightly-builds/)
* By tapping a little battery icon on the main screen of the app you will get to the "Battery Usage" screen. System battery stats [are often wrong](../solving-problems/battery), so we decided to have our own, one that would reflect the real state of things
* You can change the app's language in the General Settings tab
