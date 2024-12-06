```markdown
# IoT Gateway for Climate Change API

This API serves as a gateway for IoT sensor data used in climate change analysis. It collects and provides sensor data such as air quality, solar water pump monitoring, and other climate-related metrics. The API allows you to retrieve data from various sensors, including **CCS811**, **DHT21**, **Flowrate**, **Irradiance**, and **Pzem017**.

## Table of Contents

- [Base URL](#base-url)
- [Endpoints](#endpoints)
  - [GET /ccs811/secretkey/{date}](#get-ccs811secretkeydate)
  - [GET /dht21/secretkey/{date}](#get-dht21secretkeydate)
  - [GET /flowrate/secretkey/{date}](#get-flowratesecretkeydate)
  - [GET /irradiance/secretkey/{date}](#get-irradiancesecretkeydate)
  - [GET /pzem017/secretkey/{date}](#get-pzem017secretkeydate)
- [Authentication](#authentication)
- [Error Responses](#error-responses)

## Base URL

All API requests are made to the following base URL:
```

https://iot.generasienergi.my.id

```

### Authentication
To access the data, a **secret key** is required for each endpoint. You must provide the correct secret key as part of the request URL.

### Endpoints

#### 1. GET /ccs811/secretkey/{date}
Retrieve air quality data from the **CCS811** sensor for a specific date.

- **URL**: `/ccs811/secretkey/{date}`
- **Method**: `GET`
- **URL Params**:
  - `secretkey` (required): The secret key to authenticate the request.
  - `date` (required): Date in the format `YYYY-MM-DD` to filter data based on the `updated_at` field.

##### Example Request:
```

GET https://iot.generasienergi.my.id/ccs811/Your_Secret_Key/2024-07-12

````

##### Example Response:
```json
{
  "code": 200,
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
````

#### 2. GET /dht21/secretkey/{date}

Retrieve data from the **DHT21** sensor, including temperature and humidity.

- **URL**: `/dht21/secretkey/{date}`
- **Method**: `GET`
- **URL Params**:
  - `secretkey` (required): The secret key for authentication.
  - `date` (required): Date in the format `YYYY-MM-DD` to filter data.

##### Example Request:

```
GET https://iot.generasienergi.my.id/dht21/Your_Secret_Key/2024-07-12
```

##### Example Response:

```json
{
  "code": 200,
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

#### 3. GET /flowrate/secretkey/{date}

Retrieve flow rate and total volume data from the **Flowrate** sensor.

- **URL**: `/flowrate/secretkey/{date}`
- **Method**: `GET`
- **URL Params**:
  - `secretkey` (required): The secret key for authentication.
  - `date` (required): Date in the format `YYYY-MM-DD` to filter data.

##### Example Request:

```
GET https://iot.generasienergi.my.id/flowrate/Your_Secret_Key/2024-07-12
```

##### Example Response:

```json
{
  "code": 200,
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

#### 4. GET /irradiance/secretkey/{date}

Retrieve irradiance and power data from the **Irradiance** sensor.

- **URL**: `/irradiance/secretkey/{date}`
- **Method**: `GET`
- **URL Params**:
  - `secretkey` (required): The secret key for authentication.
  - `date` (required): Date in the format `YYYY-MM-DD` to filter data.

##### Example Request:

```
GET https://iot.generasienergi.my.id/irradiance/Your_Secret_Key/2024-07-12
```

##### Example Response:

```json
{
  "code": 200,
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

#### 5. GET /pzem017/secretkey/{date}

Retrieve data from the **Pzem017** sensor, including voltage, current, power, and energy.

- **URL**: `/pzem017/secretkey/{date}`
- **Method**: `GET`
- **URL Params**:
  - `secretkey` (required): The secret key for authentication.
  - `date` (required): Date in the format `YYYY-MM-DD` to filter data.

##### Example Request:

```
GET https://iot.generasienergi.my.id/pzem017/Your_Secret_Key/2024-07-12
```

##### Example Response:

```json
{
  "code": 200,
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

#### 6. GET /tds/secretkey/{date}

Retrieve data from the **TDS** sensor, including suhu, v_tds, TDS and EC.

- **URL**: `/tds/secretkey/{date}`
- **Method**: `GET`
- **URL Params**:
  - `secretkey` (required): The secret key for authentication.
  - `date` (required): Date in the format `YYYY-MM-DD` to filter data.
  - `TDS (Total Dissolved Solids)`: Ppm or mg/L
  - `EC (Electrical Conductivity)`: µS/cm (mikrosiemens per sentimeter)

##### Example Request:

```
GET https://iot.generasienergi.my.id/tds/Your_Secret_Key/2024-07-12
```

##### Example Response:

```json
{
  "code": 200,
  "data": [
    {
      "id": 29,
      "suhu": "27.44",
      "v_tds": "3.66",
      "tds": "317",
      "ec": "158.5",
      "updated_at": "2024-11-29 00:05:00"
    }
  ]
}
```

#### 7. GET /ph/secretkey/{date}

Retrieve data from the **PH** sensor, including v_ph and PH.

- **URL**: `/ph/secretkey/{date}`
- **Method**: `GET`
- **URL Params**:
  - `secretkey` (required): The secret key for authentication.
  - `date` (required): Date in the format `YYYY-MM-DD` to filter data.

##### Example Request:

```
GET https://iot.generasienergi.my.id/ph/Your_Secret_Key/2024-07-12
```

##### Example Response:

```json
{
  "code": 200,
  "data": [
    {
      "id": 30,
      "v_ph": "3.26",
      "ph": "7.75",
      "updated_at": "2024-11-29 00:05:00"
    }
  ]
}
```

## Authentication

Each request requires a valid **secret key** to access the data. The secret key must be passed as a part of the URL in the following format: `/secretkey/{date}`. The key ensures that unauthorized users cannot access sensitive sensor data.

To get the secret key, please contact your system administrator.

## Error Responses

The API will return standard HTTP status codes for errors, along with a message explaining the issue.

- **200 OK**: The request was successful.
- **400 Bad Request**: Missing or incorrect parameters.
- **401 Unauthorized**: Invalid or missing secret key.
- **404 Not Found**: The requested resource was not found.
- **500 Internal Server Error**: An error occurred on the server.

### Example Error Response:

```json
{
  "code": 400,
  "message": "Invalid secret key"
}
```

## Conclusion

This API provides real-time sensor data for IoT applications related to climate change, such as air quality monitoring, temperature and humidity, flow rate measurement, and solar irradiance. Use the provided endpoints to retrieve data from various sensors by specifying the correct date and secret key.

```

### Penjelasan:

- **Base URL**: Tempat Anda mengakses semua endpoint API.
- **Endpoints**: Menyediakan penjelasan tentang cara mengakses data dari masing-masing sensor, termasuk format URL dan contoh response.
- **Authentication**: Menjelaskan bahwa API ini memerlukan `secretkey` untuk otentikasi.
- **Error Responses**: Memberikan panduan mengenai berbagai kode status HTTP yang bisa diterima dan contoh error response.

### Clone dari github
npm install

### Start Server
sudo npm install pm2@latest -g (sekali saja)


### Start API DATA
pm2 start server.js --name "iot-gateway"

pm2 startup
pm2 save

### Cek status
sudo systemctl start pm2-engine
sudo systemctl status pm2-engine

### memastikan PM2 sudah autostart
sudo pm2 startup systemd -u engine --hp /home/engine

```
