# Marvel Explorer

This project was created as part of a interview screening code challenge.

Project Scaffolded with Create React App.

## Get the code running

1. Go to developer.marvel.com and create an account and get API keys
2. Copy the `.env.tempalte` file to `.env.local` and enter the keys there.
3. `yarn`
4. `yarn start`
5. Visit: https://cors-anywhere.herokuapp.com/corsdemo and press the button\*
6. Reload page.

\*Yes this seems complicated. See the Authorization section below.

## General Structure and Features

This project can be used as a template for setting up your own SPA.

### Types And Service Functions

The types in types describe the shape of the data that is coming from the API.

The service function retrieves the data and coerces the type.

- nb. A good thing to add is type validation functions. I've used this package and Iit works quite well. https://www.npmjs.com/package/ts-interface-checker

The service functions are provided to the application via React context. This allows for easy mocking of the service functions in tests.

### Theme

Ordinarily I would use a framework like Material-UI, and in the absence of that, refer to all theming in a single file.

### State

These days I'm tending toward just using Context for state management, which is what I've done here.

All state providers should be in the `Providers` folder.

### Storybook

Storybook is easy enough to set up, so you might as well use it.

Note that I haven't gone out of my way to create stories for every component I created. I just created stories that were useful for me at the time.

### Environment variables

See the `.env.template` file to see what environment variables you need.

### Frontend Only

I have't got this deployed anywhere, have set this up such that it runs on my own machine.

Other than having to get Marvel API keys, anyone using this code shouldn't need to set up any other accounts etc.

### Tests

I've written two component tests (Home and CharacterListing).

These demonstrate the use of RTL + UserEvent to:

- Mock service functions
- Respond to user events.

## Authorization and CORS

The authorization and CORS set up is actually a bit tricky, particularly in regard to local development.

It's actually quite an interesting topic - and I feel like there's a better solution than I've what I've done here.

In this section I'll talk a bit about how I've come to set the code up this way.

### Marvel's Authorization

Marvel has two ways of authorizing a request.

1. You can use an MD5 digest of public key + private key + timestamp, and also provide the public key. This is suitable for server side requests.
2. For any clientside request, providing the public key only suffices, however the request must referred by a domain that you have whitelisted in your Marvel account.

This second problem poses a problem for local development - Marvel's API will refuse to authorize a request that referred by 'localhost:3000'.

This article provides a good summary of options for dealing with CORS issues generally: https://medium.com/swlh/avoiding-cors-errors-on-localhost-in-2020-5a656ed8cefa

### Solution 1 - How it would work in production

So the ordinary solution to this, and what will work in a production deployment, is that so long as your SPA is served up by remote server (which of course is always going to be the case) then a referer header will be there, and no problems, just add that referrer to the whitelist and provide the public key.

However, for development, this isn't really practical - you usually want a live reload on your own machine.

### Solution 2 - Route requests via proxy.

An alternative, is that you proxy all your requests via a simple remote server, than passes the requests to the Marvel API.

This isn't the clientside solution though - you will still need to provide the public + private hash.

#### Use of cors-anywhere service.

I've used https://cors-anywhere.herokuapp.com/ as a proxy.

In the 'real world' we could implement our own simple proxy - however for easy of 'just get it running on your own machine' I've opted to use a proxy that exists publicly.

**nb. This service shouldn't be used for any serious data! They can read all of it!**

### Hiding your private key

So how do you use the private key in your frontend application, without exposing it?

Basically _you can't refer to the private key as an environment variable directly_ the ts+private+public key needs to be hashed _before_ the code is bundled, and that's the environment variable you can safely pass in.

Luckly create-react-app has some safety around environment variables - only env vars prefixed with REACT_APP will be exposed.

## Design

I've demonstrate a few more advanced CSS things:

- Box shadow animation when you hover a card
- Cropped corners about the place.

I could always do more, but TBH that stuff is pretty time consuming.

Also, especially with the animation - I certainly would be reaching for a framework do it.

### Theming

I've got the colors from Marvels website.

At the time of writing I haven't touched the fonts.

### Responsive Design

Have gone for a mobile first css structure (rules apply to mobile and everywhere, and then do exceptions for desktop)

The main difference is the behaviour of the side panel. On mobile when you select an item it replaces the whole screen.

### CSS Philosophy

My use of classNames is very much inspired by Material-UI:

- Each component has a root level class which I prefix with `dj-marvel` - This allows the component to be targetted by CSS elsewhere.
- Each component also has an optional `className` prop which is added to that root class. This allow specific targetting, for example to add things like 'is-selected' from a parent.

### Misc

I've just set SKIP_PREFLIGHT_CHECK=true because of this open issue:

https://github.com/storybookjs/storybook/issues/5183

## Stuff I didn't do

- No search/filtering
- No loading spinner.
- Skip preflight check needs to be sorted out.
- I'm not really a fan of the layout. Probably better to have a fixed layout + grid (ie. stop the side panel from scrolling away).
- Certainly there's a lot more polish that can be done. But as it is, I've spent a day on this and I think it demonstrates the breadth of ability and thought that you're looking for.
