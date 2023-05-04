# Link Shortener 🔗

This is a simple link shortener that I made for my own use. It's not very fancy, but it works.

## Technologies

-   [Node.js](https://nodejs.org/en/)
-   [Express](https://expressjs.com/)
-   [MongoDB](https://www.mongodb.com/)
-   [Mongoose](https://mongoosejs.com/)

## 🚀 Installation 

1.  Clone the repository

```bash
git clone https://github.com/mattiacapelli/link-shortener.git
```

2.  Install dependencies

```bash
npm install
```

3.  Create a `.env` file in the root directory and add the following environment variables:

```bash
ATLAS_URI = "your_mongodb_uri"
PORT = "your_port" 
```

4.  Run the server

```bash
npm run start
```

## 🏗 Usage

To shorten a link, open the website on the port you specified in the `.env` file and you will see a form where you can enter the link you want to shorten. The shortened link will be displayed on the page.

To access the original link, just open the shortened link in your browser.

## Technical Details

### Routes

#### GET | `/`

-   Renders the home page

#### GET | `/:shortid`

| Parameter | Type   | Description |
| :-------- | :----- | :---------- |
| `shortid` | string | The shortened link |

#### Returns

-   `200` - If the link is found and it redirects to the original link

#### POST | `/short`

#### Body Parameters

| Parameter | Type   | Description |
| :-------- | :----- | :---------- |
| `link`    | string | The original link |

#### Returns

-   `200` - If the link is successfully shortened and the shortened link
-   `400` - If the link is not valid

### Models

-   `Link` - Stores the original link and the shortened link


## 📜 License

[MIT](https://choosealicense.com/licenses/mit/)

## 🫶 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## 🔰 Authors

-   [Mattia Capelli](https://mattiacapelli.it)
