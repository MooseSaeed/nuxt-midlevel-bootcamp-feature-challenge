---
difficulty: 1
tags: codechallenge, Exercise Challenge, Nuxt 3
openFiles: pages/index.vue
---

# Tasty Meals

# Challenge Description

This challenge focuses on building a robust food recipes Nuxt app with dynamic routing, layout management, and error handling. You'll ensure smooth navigation, proper layout rendering, and state management while incorporating some SEO and user experience features.

## Requirements

1. Create a `/meals` route to render all meals:

   - Get the meals data from the `/api/meals` endpoint.
   - In the template, use the `<MealList />` component and pass the meals to the `meals` prop.

2. Create a `/meals/:id` route to render an indvidual meal:

   - Get the slug from the route.
   - Get the meal data from the `/api/meals` endpoint.
   - The endpoint expects a slug query string with the value of the slug. Pass the slug to get the meal data.
   - In case an error returend, handle the error by creating and throwing a Nuxt error with the error status code and message.
   - Use the `<MealContent />` component to render the meal info and pass the meal data to the `meal` prop.

3. Create an error page:

   - Use the `<ErrorPage />` component in the template and pass to it the error prop.
   - The `<ErrorPage />` component is emitting the `button-clicked` event. Clear the error and navigate the user to the homepage when this event is triggered.
   - The error page should use the default layout.

4. Prevent navigation to the `/forbidden` route:

   - Create a middleware that navigates the user to the homepage if they tried to visit `/forbidden`.

![meal-meals-compressed](https://github.com/user-attachments/assets/e8b9676b-f73a-44c8-aaae-2c6ea8c2d7b0)

5. Activate the `admin-layout` only for the `/dashboard` page.

6. Enable users to delete meals from the `/dashboard` page:

   - Fetch all meals from the `/api/meals` endpoint.
   - Use the `<MealTable />` component in the template and pass the meals to the `meals` prop.
   - The `<MealTable />` component emits a `meal-clicked` event when the delete button is clicked on a meal. This event carries the meal's `id` as its payload. Create a `deleteMeal` function that sends a `POST` request to the `/api/meals/delete` endpoint with the `{mealId: id}` in the request body.

7. Set the following default `<title>` and `<meta name="description" content="" >` for the whole site:

   - Title: `"Tasty Meals"`
   - Description: `"A collection of the best food in the world"`

8. Apply page transitions:
   - Define a page transition named `blur` and it should have the mode `out-in`.

> 💡 HINT: The blur effect CSS styles are already in place.

![dashboard-compressed](https://github.com/user-attachments/assets/f9f90fb5-4b0d-4ecd-999e-e6758b030b70)

## Other Considerations

- If you see the `data-test` attribute in the boilerplate don't remove it. If you remove it, your code may be invalid for the certificate.
- Do not delete or modify the `/server/plugins/doNotChange.ts` file.

- TailwindCSS is preinstalled and with default config. It might be helpful for you if you want to have some styles. Or if you'd like to see a pretty result as you develop.

- It is NOT necessary to have the exact same styles as in the GIF above, or even any styles at all.

- If you're a TypeScript beginner and encounter some issues with it in the challenge, you can skip it by using `// @ts-expect-error` comment on the line above the error.
