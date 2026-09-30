# Thursday Consulting Group

Static recreation of [thursdayteam.com](https://www.thursdayteam.com) for free hosting.

## Preview locally

From this folder:

```bash
python3 -m http.server 8080
```

Open [http://127.0.0.1:8080](http://127.0.0.1:8080).

## Contact form

The contact page embeds a [Fillout](https://www.fillout.com) form. Submissions are handled in Fillout.

## GitHub Pages

1. In the GitHub repo settings, set Pages to deploy from the `main` branch root.
2. When you are ready to leave Squarespace, point DNS for `www.thursdayteam.com` to GitHub Pages (`www` CNAME to `jhabbick.github.io`) and the apex domain to GitHub’s Pages A records.
