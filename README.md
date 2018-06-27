# Bernerjs-demo

The Ionic and Capacitor demo app displayed at the [BärnerJS Talks #5](https://www.meetup.com/r/site/comment/201022135/notification/https://www.meetup.com/fr-FR/Barner-JS-Talks/events/250767516)

## Getting Started

The goal of this demo was to show how simple is it to access to camera in the browser or in an iOS app using [Capacitor](https://capacitor.ionicframework.com) within an [Ionic](https://ionicframework.com) project

The coding find place during my talk about my journey using Ionic to build my mobile application [Fluster](https://fluster.io)

The slides of the talk are available in following [repo](https://github.com/peterpeterparker/ionic-bernerjs)

### Installing

    git clone https://github.com/peterpeterparker/bernerjs-demo
    cd bernerjs-demo
    npm install
    
### Testing the camera in the browser

    ionic serve
    
that's it
    
### Testing the camera in an iOS app

You may have to init the platform since I didn't added it to Git (`npx cap init` and `npx cap add ios`)

    ionic build --prod
    npx cap copy
    
and then open the platform in XCode, run, enjoy
