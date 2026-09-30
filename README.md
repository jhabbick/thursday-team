# Thursday Consulting Group

Static recreation of [thursdayteam.com](https://www.thursdayteam.com) for free hosting.

## Preview locally

From this folder:

```bash
python3 -m http.server 8080
```

Open [http://127.0.0.1:8080](http://127.0.0.1:8080).

## Contact form

The contact form posts to [Formspree](https://formspree.io). Create a free form, then replace `YOUR_FORM_ID` in `contact/index.html` with that form’s id. Until then, submitting the form on this preview shows the thank-you message without sending email.

## GitHub Pages

1. In the GitHub repo settings, set Pages to deploy from the `main` branch root.
2. When you are ready to leave Squarespace, point DNS for `www.thursdayteam.com` to GitHub Pages (`www` CNAME to `jhabbick.github.io`) and the apex domain to GitHub’s Pages A records.
