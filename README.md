# RebuyMarketplace

This project was generated using [Angular CLI] version 21.0.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Running unit tests

To execute unit tests with the [Karma] test runner, use the following command:

```bash
ng test
```

# Why I built it this way

## Routing & lazy loading
Routes are lazy-loaded to keep the initial load small and improve performance.

## Signals & change detection
Angular Signals are used for the offers list, while `ChangeDetectionStrategy.OnPush` is applied to other components to avoid unnecessary re-renders.

## Like / Dislike logic
Like and dislike behavior is handled through a shared service and kept intentionally simple, without persistence.

## External purchase flow
No real payments are handled. Clicking **“Buy Now”** redirects the user to the original Rebuy product page.

## UI & responsiveness
The UI is responsive and works well on both desktop and mobile.

## Unit testing
Basic unit tests cover the most important logic to ensure core functionality works as expected.

