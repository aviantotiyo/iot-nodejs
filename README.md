````markdown
# IoT Gateway for Climate Change API

This is a Node.js-based API designed to serve as a gateway for IoT sensors related to climate change monitoring. The API collects data from various sensors, such as air quality sensors (ccs811), humidity and temperature sensors (dht21), water flow sensors (flowrate), solar irradiance sensors (irradiance), and power consumption sensors (pzem017). This data can be used for analyzing air quality, water usage, and energy production, especially for Solar Water Pumps and climate change studies.

## Features

- Collects data from various IoT sensors (ccs811, dht21, flowrate, irradiance, pzem017,etc)
- Provides secure access to data through an API with secret key validation
- Supports filtering data by date for each sensor

## Prerequisites

Before you begin, ensure that you have the following installed on your machine:

- **Node.js** (version 16 or above)
- **MySQL Database** with the required tables (`ccs811`, `dht21`, `flowrate`, `irradiance`, `pzem017`)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/iot-gateway-climate-change.git
   cd iot-gateway-climate-change
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file to configure your environment variables:

   ```bash
   touch .env
   ```

   Inside `.env`, add your database configuration and secret key:

   ```env
   DB_HOST=localhost
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=your_db_name
   SECRET_KEY=your-secret-key-here
   ```

4. Start the server:

   ```bash
   npm start
   ```

   The API will be accessible at `http://localhost:3000`.

## API Endpoints

### 1. **CCS811 - Air Quality Sensor**

- **Endpoint**: `/ccs811/:secretkey/:date`
- **Method**: `GET`
- **Description**: Retrieve air quality data from the `ccs811` sensor for a specific date. The date format should be `YYYY-MM-DD`.
- **Example Request**:

  ```bash
  GET http://localhost:3000/ccs811/your-secret-key-here/2024-07-13
  ```

- **Response**:

  ```json
  {
    "code": 200,
    "message": "Success",
    "data": [
      {
        "id": 178,
        "eco2": "524",
        "tvoc": "18",
        "updated_at": "2024-07-13 00:00:00"
      },
      {
        "id": 179,
        "eco2": "491",
        "tvoc": "13",
        "updated_at": "2024-07-13 00:05:00"
      }
    ]
  }
  ```

- **Error Codes**:
  - `400`: Invalid date format.
  - `403`: Forbidden (invalid secret key).
  - `404`: No data found for the specified date.

### 2. **DHT21 - Temperature and Humidity Sensor**

- **Endpoint**: `/dht21/:secretkey/:date`
- **Method**: `GET`
- **Description**: Retrieve temperature and humidity data from the `dht21` sensor for a specific date.
- **Example Request**:

  ```bash
  GET http://localhost:3000/dht21/your-secret-key-here/2024-07-13
  ```

- **Response**:

  ```json
  {
    "code": 200,
    "message": "Success",
    "data": [
      {
        "id": 593,
        "hum": "65.1",
        "temp": "30.5",
        "updated_at": "2024-07-13 00:10:00"
      }
    ]
  }
  ```

- **Error Codes**:
  - `400`: Invalid date format.
  - `403`: Forbidden (invalid secret key).
  - `404`: No data found for the specified date.

### 3. **Flowrate - Water Flow Sensor**

- **Endpoint**: `/flowrate/:secretkey/:date`
- **Method**: `GET`
- **Description**: Retrieve water flow and total volume data from the `flowrate` sensor for a specific date.
- **Example Request**:

  ```bash
  GET http://localhost:3000/flowrate/your-secret-key-here/2024-07-13
  ```

- **Response**:

  ```json
  {
    "code": 200,
    "message": "Success",
    "data": [
      {
        "id": 179,
        "flowRate": "15.73333",
        "totalVolume": "78.45556",
        "updated_at": "2024-07-13 00:05:00"
      }
    ]
  }
  ```

- **Error Codes**:
  - `400`: Invalid date format.
  - `403`: Forbidden (invalid secret key).
  - `404`: No data found for the specified date.

### 4. **Irradiance - Solar Irradiance Sensor**

- **Endpoint**: `/irradiance/:secretkey/:date`
- **Method**: `GET`
- **Description**: Retrieve solar irradiance and power data from the `irradiance` sensor for a specific date.
- **Example Request**:

  ```bash
  GET http://localhost:3000/irradiance/your-secret-key-here/2024-07-24
  ```

- **Response**:

  ```json
  {
    "code": 200,
    "message": "Success",
    "data": [
      {
        "id": 2,
        "irradiance": "1255.438",
        "power_irr": "114.2448",
        "updated_at": "2024-07-24 11:45:00"
      }
    ]
  }
  ```

- **Error Codes**:
  - `400`: Invalid date format.
  - `403`: Forbidden (invalid secret key).
  - `404`: No data found for the specified date.

### 5. **PZEM017 - Power Meter Sensor**

- **Endpoint**: `/pzem017/:secretkey/:date`
- **Method**: `GET`
- **Description**: Retrieve power, voltage, current, and energy data from the `pzem017` sensor for a specific date.
- **Example Request**:

  ```bash
  GET http://localhost:3000/pzem017/your-secret-key-here/2024-11-29
  ```

- **Response**:

  ```json
  {
    "code": 200,
    "message": "Success",
    "data": [
      {
        "id": 18509,
        "voltage": "9.85",
        "current": "0.279",
        "power": "27.4",
        "energy": "16546",
        "updated_at": "2024-11-29 00:05:00"
      }
    ]
  }
  ```

- **Error Codes**:
  - `400`: Invalid date format.
  - `403`: Forbidden (invalid secret key).
  - `404`: No data found for the specified date.

## Error Handling

The API returns standardized JSON responses for all errors, including:

- `400` (Bad Request): Invalid input, such as incorrect date format.
- `403` (Forbidden): Invalid or missing secret key.
- `404` (Not Found): No data available for the requested date.
- `500` (Internal Server Error): Unexpected errors on the server side.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the developers of [Express.js](https://expressjs.com/) and [MySQL2](https://www.npmjs.com/package/mysql2) for providing the tools used in this API.
````

### Penjelasan `README.md`:

1. **Deskripsi Proyek**:

   - Menyediakan gambaran umum tentang proyek API yang digunakan sebagai IoT Gateway untuk pemantauan perubahan iklim, dengan berbagai sensor untuk kualitas udara, suhu dan kelembaban, aliran air, dan pengukuran daya.

2. **Instruksi Instalasi**:

   - Menyediakan langkah-langkah untuk menginstal dan menjalankan API, termasuk pengaturan file `.env` dan instruksi untuk menjalankan server.

3. **Dokumentasi API**:

   - Setiap endpoint dijelaskan dengan jelas, termasuk contoh request, response, dan kode kesalahan yang mungkin terjadi.

4. **Error Handling**:
   - Menyertakan penjelasan tentang
