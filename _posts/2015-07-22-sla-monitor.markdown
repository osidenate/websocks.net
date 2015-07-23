---
title: "sla-monitor"
layout: project
permalink: project/sla-monitor

brief: "This .NET Console application records the latency between my home server and other servers across the internet."
tags: .NET C# Firebase Multi-threading

gitHubUrl: https://github.com/osidenate/sla-monitor
screenshotBundle:
    - /img/sla-monitor-screenshot.png
---

This project started as a way for me to measure the quality of my home internet connection. Specifically, I wanted to monitor the real-time status of my home server. 

There are three components to this system:

- **sla-monitor**: A .NET console application that measures & records latencies. This runs on my home server.
- **sla-web**: An AngularJS application that can display the latencies recorded by sla-monitor in real-time.
- **firebase**: Stores the configuration for sla-monitor and records the latest latencies.

![SLA Monitor Diagram](http://websocks.net/img/sla-monitor-diagram.png)

For more information about this project, check out it's [GitHub page](https://github.com/osidenate/sla-monitor).
