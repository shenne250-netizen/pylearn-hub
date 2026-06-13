# PyLearn Hub: A Static Python Learning Website

PyLearn Hub is a static educational website for beginner Python learners. It is designed for GitHub Pages and uses HTML5, CSS3, JavaScript, and Bootstrap.

## Pages

- `index.html`: Home page
- `lessons.html`: Lesson pathway and course table
- `practice.html`: Practice tasks and short quiz
- `resources.html`: Study resources
- `contact.html`: Contact form with client-side validation
- `template.html`: Reusable layout template evidence for the assignment

## Folder structure

```text
pylearn-hub/
├── index.html
├── lessons.html
├── practice.html
├── resources.html
├── contact.html
├── template.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── logo.svg
    ├── python-learning.svg
    ├── lessons.svg
    ├── practice.svg
    └── resources.svg
```

## How to publish with GitHub Pages

1. Create a new GitHub repository called `pylearn-hub`.
2. Upload all files and folders from this project.
3. Open the repository settings.
4. Select **Pages** from the left menu.
5. Choose **Deploy from a branch**.
6. Select the `main` branch and the `/root` folder.
7. Save the settings.
8. Wait for GitHub to publish the website.
9. Copy the live GitHub Pages URL into the assignment report.

## Testing checklist

- Open all five website pages.
- Check that all navigation links work.
- Test the contact form with empty fields, invalid email, and valid details.
- Test the quiz on the Practice page.
- Check the website on mobile and desktop screen sizes.
- Run Chrome Lighthouse and record performance, accessibility, best practice, and SEO scores.

## Important note

The contact form is static. It validates entries in the browser, but it does not send or store messages. This is suitable for GitHub Pages. A third-party form service can be added later if real message delivery is required.
