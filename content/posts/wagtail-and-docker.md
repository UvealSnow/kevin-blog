---
title: Wagtail and Docker. An investigation
date: 2020-02-12
tags: ["Wagtail", "Docker", "Development", "DevOps"]
canonical_url: false
featured: false
published: false
description: "So, this post is mostly to track the ideas and concepts that appear as I begin to delve into the world of Docker and Wagtail."
---

#### New concepts for me
* __PIP__: PIP is _the_ package installer for Python. You can use it to install packages from the Python Package Index and other indexes. This is the tool we'' be using to pull packages such as Wagtail.
* __Docker__: Docker is (as far as I understand it now) a software packaging system. It's built around the idea of _containers_ that pack ip the code and all of it's dependencies in a neat, standard unit. This is to ensure that the software runs the same in any environment it might be set in.
* __Wagtail__: Wagtail is a free, open-source CMS based on __Django__. 

#### Installing Wagtail with Docker and running it

I've already installed Python 3 and PIP using Homebrew. The following commands assume you've them installed.

```
  # first we'll need to install Wagtail
  $ pip install wagtail

  # start a new site
  $ wagtail start <SITE_NAME>
  $ cd <SITE_NAME>

  # build a docker container
  $ docker build -t <SITE_NAME> .

  # run the newly created docker container
  $ docker run -p 8000:8000 <SITE_NAME>
```

Now, we'll need to run some commands to configure stuff in the Wagtail app, but since the app is running in a docker container we'll need to get the container ID so we can access the container bash and run commands in there.

```
  # shows a listing of all the running containers in the pc
  $ docker container ls

  # get the <CONTAINER_ID> and run the following command
  # this should take you to the container bash
  $ docker exec -it <CONTAINER_ID> /bin/bash

  # create a superuser, launches a wizard
  $ ./manage.py createsuperuser

  # type [0.0.0.0|127.0.0.1|localhost]:8000 to see the server.
  # type [cmd|crtl + d] to quit the docker container.
  # if for any reason the server is not working, then run this:
  $ ./manage.py runserver 0.0.0.0:8000
```

#### Benefits of doing all of the above

* Since the code comes in a container, all the devs in the team will now have the same environment.
* The difference between the development and production environment is now minimal.
* Easy upgrades of dependencies by modifying the dependencies file.
* Local dependencies will raise exceptions if they are missing, it seems to be an issue with Python dev tems that sometimes the dependencies will not be added in the requirements.txt file, Docker will tell you about it.
* Ease to experiment and fuck-up, worst case you can always roll back to the latest stable version.

The downside is that Docker images take up lots of space. If you ever need to free up some space do:

```
  $ docker system prune -a
```
