## Overview
SLA Monitor is a network quality monitoring system.
Right now, it only supports monitoring latency.
It may support other monitoring types in the future (like bandwidth).
This system was created because I want to monitor the quality of my connection to the Internet.

### SLA Service
The SLA service is used to monitor the latency between the a computer and other nodes.
It is a .NET Console application that loads it's configuration from Firebase
and logs the latency information to Firebase.

#### Initial Firebase Setup
The latency monitor configuration should be stored in the specified format. To get started quickly,
import this JSON directly into a new Firebase App. This will setup the latency monitors to target
Google's DNS servers and Level 3.

    [
        {
            "configId": 0,
            "displayFrom": "Phoenix, AZ - Cox Communications",
            "displayTo": "Google DNS",
            "host": "8.8.8.8",
            "interval": 4000,
            "timeout": 3000,
            "latestPing": {}
        },
        {
            "configId": 1,
            "displayFrom": "Phoenix, AZ - Cox Communications",
            "displayTo": "Level 3 DNS",
            "host": "4.2.2.1",
            "interval": 4000,
            "timeout": 3000,
            "latestPing": {}
        }
    ]

    
### SLA Web Client
The SLA Web Client is used to view real-time data concerning the SLA Monitor. It is a standalone web app.

#### Setting up the SLA Web Client
Install the npm dependencies:
`npm install`

Install the bower dependencies:
`bower install`

Load the typescript definitions:
`grunt setup`

Build the project:
`grunt build`
