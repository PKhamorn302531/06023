---
title: Что такое HTTPS-фильтрация
sidebar_position: 1
---

### Что такое HTTPS?

HTTPS (аббр. от англ. HyperText Transfer Protocol Secure) — расширение HTTP-протокола, поддерживающее шифрование для повышения безопасности. Этот протокол используется для защищённой передачи важной информации, такой как персональные данные, реквизиты банковских карт и т. д.

Использование HTTPS — сугубо положительная вещь, ведь зашифрованный трафик защищён от прослушивания третьей стороной, и мы это только приветствуем. Рост HTTPS сильно ускорился в последние годы в связи с тем, что это [поощряется Google](https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html), а также с появлением бесплатного центра сертификации [Let’s Encrypt](https://ru.wikipedia.org/wiki/Let’s_Encrypt).

На диаграмме ниже мы описали разницу между простым HTTP-протоколом и защищённым HTTPS-протоколом.

![Что такое HTTPS](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https.png)

### Что такое сертификат безопасности

Проще говоря, HTTPS означает шифрование данных. Но остаётся ещё одна проблема: как быть уверенным, что вы установили зашифрованное соединение именно с тем сайтом, с которым планировали? Тут в игру и вступают сертификаты безопасности. Сертификат — это удостоверение, что сайт представляет собой именно тот ресурс, за который себя выдаёт. Если такого сертификата у сайта нет или в нём содержится неправильная информация, браузер не позволит вам установить защищённое соединение. При этом важно, чтобы сертификат, используемый сайтом, был выдан центром сертификации, которому доверяет ваш браузер. Такие центры сертификации гарантируют, что сертификат выдан именно владельцу сайта.

### Зачем AdGuard нужно уметь фильтровать HTTPS?

Большинство сайтов теперь используют HTTPS, то же самое относится и к рекламным сетям. Вот примеры популярных сайтов, рекламу на которых невозможно убрать без HTTPS-фильтрации: youtube.com, facebook.com, twitter.com.

### Как работает HTTPS-фильтрация

Если бы это было просто, HTTPS не был бы безопасным. При попытке браузера соединиться с сервером, AdGuard устанавливает два защищённых соединения: одно с браузером (или с другим приложением), а другое с сервером. Важно, чтобы при этом браузер доверял AdGuard и созданному им соединению. Для этого AdGuard генерирует специальный (и уникальный) корневой сертификат и устанавливает его в систему и, при необходимости, в некоторые браузеры (например, Firefox). Таким образом, AdGuard может видеть, что происходит внутри защищённого соединения, и выполнять свою работу — блокировать рекламу и трекеры.

Для лучшего понимания мы изобразили этот процесс на картинке:

![Как работает HTTPS-фильтрация](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https_filtering.png)

### Остаётся ли мой трафик зашифрованным и безопасным?

Конечно! Ваше соединение с удалённым сервером остаётся зашифрованным и защищённым. AdGuard, как и браузер, проверяет сертификат сервера, прежде чем решить, фильтровать ли его.

Однако HTTPS-фильтрация имеет свои недостатки. Самым важным из них является то, что она скрывает от браузера свойства реального сертификата, используемого сайтом. Вместо этого браузер видит сертификат, сгенерированный AdGuard.

В связи с этим мы приняли дополнительные меры для повышения безопасности соединения.

### Финансовые сайты и сайты с конфиденциальными личными данными

По умолчанию AdGuard не фильтрует информацию на сайтах банков, платёжных систем или сайтах с ценными личными данными. Мы поддерживаем список из более чем [1300 таких сайтов-исключений](https://github.com/AdguardTeam/HttpsExclusions).

Если вы считаете, что какой-то сайт должен быть добавлен в этот список, пожалуйста, [напишите нам об этом](https://github.com/AdguardTeam/HttpsExclusions/issues/new).

### Сертификаты высокой надёжности (EV)

AdGuard предоставляет возможность исключить из фильтрации все сайты, которые используют сертификаты высокой надёжности (extended validation или EV).

Сертификат высокой надёжности обеспечивает более высокий уровень надёжности и гарантий безопасности чем стандартные сертификаты, доказывая тем самым, что сайт не является мошенническим или поддельным.

### Известные проблемы, связанные с HTTPS-фильтрацией

[Исследование 2017 года](https://cdn.adtidy.org/public/Adguard/Blog/https/interception-ndss17.pdf) показало, что 5–10% HTTPS-соединений устаналиваются приложениями с HTTPS-фильтрацией. Обычно это делают разнообразные антивирусы. Плохая новость заключается в том, что 24 из 26 протестированных антивирусов тем или иным способом снижали уровень безопасности соединения, а две трети создавали соединения, подверженные взлому.

Исследователи пришли к простому выводу: сообщество интернет-безопасности должно обратить пристальное внимание на приложения, фильтрующие защищённые соединения. И разработчики такого ПО должны уделять серьёзное внимание качеству фильтрации.

Мы хотели бы отметить, что AdGuard не тестировался в вышеуказанном исследовании. По нашим прикидкам, судя по набору проверок, на момент тестирования мы бы получили максимальную оценку A*. Однако этот показатель не идеален. Есть целый набор проблем, которые были обозначены исследователями, но которые не учитывались в итоговой оценке.

Мы в AdGuard совершенно согласны с выводами, сделанными исследователями. Более того, мы хотим быть открытыми с пользователями и рассказать о том, какие проблемы у нас сейчас есть и какие шаги мы предпринимаем для улучшения качества и защищённости механизмов фильтрации. Список этих проблем отсортирован по приоритету.

Большая часть проблем, найденных в исследовании выше, связаны с механизмами валидации сертификатов. На этом мы хотим сконцентрироваться в первую очередь. Мы работаем над отдельной библиотекой проверки сертификатов. Более того, мы хотим выложить её код в открытый доступ. В [отдельной статье](../known-issues) мы перечислили все известные недостатки HTTPS-фильтрации в AdGuard и планируемые сроки их устранения.

#### Проблемы HTTPS-фильтрации на Android 7+

[Начиная с Android 7](https://blog.adguard.com/en/android-nougat-release-and-what-does-it-mean-for-adguard-users/), разработчики должны явно указывать, что их приложения доверяют пользовательским сертификатам. Не все из них делают это — кто-то не хочет, кто-то просто не утруждается. Что это значит для пользователей AdGuard? AdGuard устанавливает свой сертификат в пользовательское хранилище, чтобы иметь возможность фильтровать HTTPS-трафик. Если приложение не доверяет этому сертификату, его HTTPS-трафик останется неотфильтрованным. Что делать?

Первое, о чём стоит упомянуть, это то, что многие приложения (даже современные) по-прежнему доверяют пользовательским сертификатам. В их отношении ничего не меняется. Почти все браузеры также доверяют таким сертификатам. Возможно, существуют некоторые экзотические браузеры, которые этого не делают, но они — редкое исключение из общей практики.

Наконец, если у вас есть root-доступ к устройству, вы можете переместить сертификат AdGuard в системное хранилище. Тогда вам не придётся волноваться о том, доверяет то или иное приложение пользовательским сертификатам — HTTPS-трафик будет фильтроваться одинаково хорошо в любых приложениях. Обратите внимание, что перенос сертификата в системные влечёт за собой дополнительные ограничения безопасности: HPKP и `Certificate Transparency`.

### Как самостоятельно проверить качество HTTPS

Существует несколько сайтов, созданных специально для проверки качества HTTPS-соединений. Эти сайты проверяют, подвержен ли браузер (или, в нашем случае, ваш браузер плюс AdGuard) распространённым уязвимостям. Если вы собираетесь использовать программу, фильтрующую HTTPS (не обязательно AdGuard, это может быть антивирус), мы советуем проверить качество соединения на этих сайтах.

* [https://www.ssllabs.com/ssltest/viewMyClient.html](https://www.ssllabs.com/ssltest/viewMyClient.html)
* [https://www.howsmyssl.com/](https://www.howsmyssl.com/)
* [https://badssl.com/](https://badssl.com/)