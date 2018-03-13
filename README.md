# Last Week Weather Service

## Description

This service provides last week weather information.
The client/service communication is done through HTTP (GET request).
Client needs to send a GET request with the latitude and longitude passed as query parameters.
If the request is successful client receives a JSON response back.

## Example Usage

`curl "http://{ip-address}:{port}?latitude=34.0522&longitude=-118.2437"`

Line above will return an array of elements, where each element describes the
weather for a one day of the last week.
```
[
  ...,
  {
    "time": "Sunday March 04 2018",
    "summary": "Clear throughout the day.",
    "icon": "clear-day",
    "sunriseTime": 1520173133,
    "sunsetTime": 1520214791,
    "moonPhase": 0.6,
    "precipIntensity": 0,
    "precipIntensityMax": 0,
    "precipProbability": 0,
    "temperatureHigh": 60.59,
    "temperatureHighTime": 1520200800,
    "temperatureLow": 44.65,
    "temperatureLowTime": 1520258400,
    "apparentTemperatureHigh": 60.59,
    "apparentTemperatureHighTime": 1520200800,
    "apparentTemperatureLow": 42.06,
    "apparentTemperatureLowTime": 1520258400,
    "dewPoint": 36.77,
    "humidity": 0.59,
    "pressure": 1021.15,
    "windSpeed": 4.68,
    "windGust": 10.3,
    "windGustTime": 1520208000,
    "windBearing": 293,
    "cloudCover": 0.02,
    "uvIndex": 6,
    "uvIndexTime": 1520193600,
    "visibility": 9.99,
    "ozone": 318.27,
    "temperatureMin": 43.63,
    "temperatureMinTime": 1520172000,
    "temperatureMax": 60.59,
    "temperatureMaxTime": 1520200800,
    "apparentTemperatureMin": 41.65,
    "apparentTemperatureMinTime": 1520172000,
    "apparentTemperatureMax": 60.59,
    "apparentTemperatureMaxTime": 1520200800
  },
  ...
]
```
Please refer to dark sky documentation for the explanation
of the data in the response.

## Deployment Instructions (for mac users)

To deploy this service you need to have `docker`, `gcloud`
and `kubectl` installed.

1. Create a new project via Google Cloud Console.

2. Enable Kubernetes API.

3. Create a new Kubernentes cluster.
  `gcloud config set project [PROJECT_ID]`

4. Use a newly created project id to set a default project.
  `gcloud config set project [PROJECT_ID]`

5. Get authentication credentials for the cluster.
  `gcloud container clusters get-credentials [CLUSTER_NAME]`

6. Create a secret with your dark sky API key.
  `kubectl create secret generic darkskykey --from-literal=darkskyKey=[DARK_SKY_API_KEY]`

7. Run `npm run deploy`.

8. Run `kubectl get services` to look up service external IP address and a port number.
