# Foreign Exchange Rates Project

This project fetches and displays today's foreign exchange rates using the Nepal Rastra Bank (NRB) Forex API. It dynamically populates a table with currency rates, including the country flag, currency name, unit, buy rate, and sell rate.

## Features
- **Real-Time Exchange Rates:** Fetches the latest exchange rates for the current date.
- **Country Flags:** Displays the flag of each country alongside its currency.
- **Dynamic Table:** Automatically populates the table with data from the API.
- **Responsive Design:** Built with Tailwind CSS for a clean and responsive layout.

## Technologies Used
- **HTML:** Structure of the web page.
- **Tailwind CSS:** Styling and responsive design.
- **JavaScript:** Fetching data from the API and dynamically updating the table.
- **FlagsAPI:** Displaying country flags using [flagsapi](https://flagsapi.com/)

## How It Works

### Fetching Data
The JavaScript code fetches exchange rate data from the NRB Forex API for the current date.

### Populating the Table
The table is dynamically populated with the fetched data, including:
- Country flag (using flagsapi.com)
- Currency name
- Unit
- Buy rate
- Sell rate

### Displaying Flags
The `currencyToCountryCode` object maps currency codes (e.g., USD, INR) to country codes (e.g., US, IN), which are used to fetch the corresponding flag image.

## Code Structure
- **`index.html`:** Contains the HTML structure of the project, including the table.
- **`script.js`:** Contains the JavaScript logic for fetching data and populating the table.
- **Tailwind CSS:** Used for styling the table and other elements.

## Example Output
The table will display exchange rates like this:

| Currency         | Unit | Buy  | Sell |
|------------------|------|------|------|
| 🇺🇸 United States | 1    | 120  | 121  |
| 🇮🇳 India         | 100  | 160  | 161  |
| 🇪🇺 European Union| 1    | 130  | 131  |
| 🇬🇧 United Kingdom| 1    | 140  | 141  |
| 🇦🇺 Australia     | 1    | 90   | 91   |
| 🇨🇦 Canada        | 1    | 95   | 96   |
| 🇨🇭 Switzerland   | 1    | 110  | 111  |
| 🇨🇳 China         | 1    | 15   | 16   |
| 🇯🇵 Japan         | 100  | 80   | 81   |
| 🇳🇵 Nepal         | 1    | 1    | 1    |

## Customization

### Change API
Replace the `BASE_URL` in `script.js` with a different API endpoint if needed.

### Styling
Modify the Tailwind CSS classes in `index.html` to customize the appearance of the table.

## License
This project is open-source

## Acknowledgments
- **Nepal Rastra Bank (NRB)** for providing the Forex API.
- **FlagsAPI** for providing country flags.

Enjoy using the Foreign Exchange Rates project! If you have any questions or feedback, feel free to open an issue or contact the maintainers.

