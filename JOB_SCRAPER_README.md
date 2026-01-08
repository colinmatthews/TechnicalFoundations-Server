# Job Scraper - RocketJobs.pl Marketing Positions

Aplikacja do automatycznego scrapowania ofert pracy z serwisu [rocketjobs.pl](https://rocketjobs.pl/) i wysyłania alertów emailowych z dzienną częstotliwością.

## 📋 Funkcjonalności

- ✅ Automatyczne wyszukiwanie ofert pracy dla stanowisk:
  - Marketing Specialist
  - Marketing Manager
  - Brand Specialist
  - Brand Manager
- ✅ Wysyłanie dziennych emaili z nowymi ofertami pracy
- ✅ Śledzenie historii ofert (unikanie duplikatów)
- ✅ Konfigurowalny harmonogram scrapowania (domyślnie codziennie o 9:00)
- ✅ API endpointy do ręcznego uruchamiania i zarządzania

## 🚀 Instalacja

### 1. Instalacja zależności

Zależności zostały już zainstalowane. Jeśli potrzebujesz je zainstalować ponownie:

```bash
npm install
```

### 2. Konfiguracja środowiska

Skopiuj plik `.env.example` do `.env`:

```bash
cp .env.example .env
```

Edytuj plik `.env` i skonfiguruj następujące parametry:

```bash
# Email Provider: gmail, smtp, or sendgrid
EMAIL_PROVIDER=gmail

# Adres email, na który będą wysyłane oferty pracy
EMAIL_TO=twoj-email@example.com

# Konfiguracja Gmail (jeśli używasz Gmail)
EMAIL_USER=twoj-email@gmail.com
EMAIL_PASSWORD=twoje-haslo-aplikacji
EMAIL_FROM=twoj-email@gmail.com

# Harmonogram (cron)
CRON_SCHEDULE=0 9 * * *

# Włącz/wyłącz scheduler
SCHEDULER_ENABLED=true
```

### 3. Konfiguracja Gmail

Jeśli używasz Gmail do wysyłania emaili:

1. Przejdź do [Google Account Security](https://myaccount.google.com/security)
2. Włącz "2-Step Verification"
3. Wygeneruj "App Password" dla aplikacji
4. Użyj wygenerowanego hasła jako `EMAIL_PASSWORD` w pliku `.env`

**Alternatywnie**, możesz użyć:
- **Custom SMTP** - dowolny serwer SMTP
- **SendGrid** - popularna usługa email

## 📖 Użycie

### Uruchomienie serwera

```bash
npm start
```

Serwer uruchomi się na porcie 3000 (lub innym określonym w zmiennej `PORT`).

### API Endpoints

#### 1. Sprawdzenie statusu schedulera

```bash
GET http://localhost:3000/jobs/status
```

Zwraca informacje o statusie schedulera, ostatnim uruchomieniu i następnym zaplanowanym wykonaniu.

**Przykładowa odpowiedź:**
```json
{
  "running": true,
  "isExecuting": false,
  "cronSchedule": "0 9 * * *",
  "lastRun": {
    "timestamp": "2026-01-08T09:00:00.000Z",
    "duration": "5.2s",
    "totalJobs": 15,
    "newJobs": 3,
    "emailSent": true,
    "success": true
  },
  "nextRun": "9.01.2026, 09:00:00"
}
```

#### 2. Ręczne uruchomienie scrapowania

```bash
POST http://localhost:3000/jobs/scrape
```

Uruchamia scrapowanie ofert pracy i wysyła email z nowymi ofertami (jeśli są dostępne).

**Przykładowa odpowiedź:**
```json
{
  "success": true,
  "totalJobs": 15,
  "newJobs": 3,
  "emailSent": true,
  "jobs": [
    {
      "title": "Marketing Manager",
      "company": "Example Corp",
      "location": "Warszawa",
      "salary": "10000-15000 PLN",
      "link": "https://rocketjobs.pl/oferta/...",
      "scrapedAt": "2026-01-08T10:00:00.000Z"
    }
  ]
}
```

#### 3. Uruchomienie schedulera

```bash
POST http://localhost:3000/jobs/scheduler/start
```

Uruchamia automatyczny scheduler (jeśli został zatrzymany).

#### 4. Zatrzymanie schedulera

```bash
POST http://localhost:3000/jobs/scheduler/stop
```

Zatrzymuje automatyczny scheduler.

## ⚙️ Konfiguracja harmonogramu (Cron)

Domyślnie, aplikacja uruchamia się codziennie o 9:00. Możesz zmienić harmonogram w pliku `.env`:

```bash
CRON_SCHEDULE=0 9 * * *
```

Format: `minuta godzina dzień miesiąc dzień_tygodnia`

**Przykłady:**
- `0 9 * * *` - Codziennie o 9:00
- `0 */6 * * *` - Co 6 godzin
- `0 9 * * 1-5` - Od poniedziałku do piątku o 9:00
- `30 8 * * *` - Codziennie o 8:30

## 📂 Struktura projektu

```
TechnicalFoundations-Server/
├── services/
│   ├── rocketJobsScraper.js   # Scraper dla rocketjobs.pl
│   ├── emailService.js         # Serwis wysyłania emaili
│   └── jobScheduler.js         # Scheduler i orkiestracja
├── data/
│   └── job-history.json        # Historia wysłanych ofert (auto-generated)
├── index.js                    # Główny serwer Express
├── .env                        # Konfiguracja środowiska (nie commitowana)
├── .env.example                # Przykładowa konfiguracja
└── JOB_SCRAPER_README.md       # Ta dokumentacja
```

## 🔧 Technologie

- **Node.js** - Runtime
- **Express.js** - Serwer HTTP
- **Axios** - HTTP Client do pobierania stron
- **Cheerio** - Parser HTML do scrapowania
- **Nodemailer** - Wysyłanie emaili
- **node-cron** - Harmonogram zadań
- **dotenv** - Zarządzanie zmiennymi środowiskowymi

## 📧 Format emaila

Każdy email zawiera:
- Liczbę znalezionych ofert
- Dla każdej oferty:
  - Tytuł stanowiska (link)
  - Nazwa firmy
  - Lokalizacja
  - Wynagrodzenie (jeśli dostępne)
  - Przycisk "Zobacz ofertę"

Email jest formatowany w HTML z responsywnym designem.

## 🛠️ Rozwiązywanie problemów

### Email się nie wysyła

1. Sprawdź, czy `EMAIL_TO` jest ustawione w `.env`
2. Dla Gmail, upewnij się, że używasz **App Password**, nie zwykłego hasła
3. Sprawdź logi w konsoli serwera
4. Uruchom weryfikację konfiguracji email (automatycznie przy starcie)

### Nie znajduje ofert pracy

1. Sprawdź, czy rocketjobs.pl jest dostępne
2. Struktura strony mogła się zmienić - może wymagać aktualizacji selektorów w `rocketJobsScraper.js`
3. Sprawdź logi w konsoli - pokazują one, jak przebiega scraping

### Scheduler się nie uruchamia

1. Sprawdź, czy `SCHEDULER_ENABLED=true` w `.env`
2. Sprawdź poprawność formatu `CRON_SCHEDULE`
3. Sprawdź logi przy starcie serwera

## 📝 Testowanie

### Test ręczny

Możesz przetestować scrapowanie bez czekania na zaplanowane wykonanie:

```bash
curl -X POST http://localhost:3000/jobs/scrape
```

### Test konfiguracji email

Email service automatycznie weryfikuje konfigurację przy starcie. Sprawdź logi serwera.

## 🔐 Bezpieczeństwo

- **NIE commituj pliku `.env`** do repozytorium (plik jest w `.gitignore`)
- Używaj App Passwords dla Gmail zamiast głównego hasła
- Przechowuj wrażliwe dane (hasła, API keys) tylko w pliku `.env`
- Regularnie aktualizuj zależności: `npm update`

## 📈 Przyszłe ulepszenia

Możliwe rozszerzenia:
- [ ] Wsparcie dla wielu źródeł ofert pracy
- [ ] Dashboard webowy do zarządzania
- [ ] Personalizowane filtry (poziom doświadczenia, wynagrodzenie)
- [ ] Powiadomienia Slack/Discord zamiast email
- [ ] Baza danych do przechowywania ofert
- [ ] Analityka i statystyki

## 📄 Licencja

ISC

## 👤 Autor

Created for automated job scraping from RocketJobs.pl

---

Powodzenia w poszukiwaniu pracy! 🚀
