# Scrapie News Web Application

Scrapie News is a web application that provides real-time news results to its users. With an intuitive user interface and seamless navigation, users can stay updated with the latest news from various categories. The application fetches news data using the NewsAPI.org API, allowing users to access a wide range of news articles.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Screenshot](#screenshot)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Scrapie News web application aims to deliver a convenient platform for users to access real-time news articles on various topics. It provides an easy-to-use interface, enabling users to explore different categories and read more about the news articles they find interesting.

## Features

- Real-time news updates.
- News articles categorized for easy navigation.
- Detailed news cards displaying images, descriptions, headings, sources, authors, and published timestamps.
- "Read More" button for accessing the full article.
- Loading bar to indicate ongoing data retrieval.
- Infinite scroll for automatic fetching of new news articles as the user scrolls down.

## Screenshot

![Scrapie News Screenshot](https://github.com/Akanshu-stark/Scrapie-News/assets/69504019/349894a0-7561-4e42-ad35-5a9a0f081d6c)

## Demo

[![Watch the video](https://img.youtube.com/vi/Nqy60s7pSyA/hqdefault.jpg)](https://www.youtube.com/embed/Nqy60s7pSyA)


## Installation

To run the Scrapie News web application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Akanshu-stark/Scrapie-News.git
   cd scrapie-news
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Obtain an API key from NewsAPI.org by signing up on their website.

4. Create a `.env` file in the root directory of the project and add the following:

   ```dotenv
   REACT_APP_NEWS_API_KEY=your_news_api_key_here
   ```

5. Start the development server:

   ```bash
   npm start
   ```

6. The application will be accessible at `http://localhost:3000`.

## Usage

1. Upon accessing the Scrapie News web application, users will be presented with real-time news articles.

2. To view news articles from a specific category, click on the corresponding category in the navigation bar.

3. Each news article is displayed as a card containing the headline, image, description, source, author, and published timestamp.

4. To read the full article, click on the "Read More" button on any news card.

5. As users scroll down the page, the application will automatically fetch new news articles using infinite scroll.

## Technologies Used

- React.js
- Bootstrap
- NewsAPI.org API
- HTML5
- CSS3
- JavaScript
- JSX

## Contributing

Contributions to Scrapie News are always welcome! If you have any bug fixes, enhancements, or new features in mind, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

Thank you for using Scrapie News! If you have any questions or feedback, please feel free to get in touch with us. Happy reading!
