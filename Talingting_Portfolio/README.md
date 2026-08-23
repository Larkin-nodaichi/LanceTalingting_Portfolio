# IT Portfolio — GitHub Pages

A responsive personal IT portfolio made with plain HTML, CSS, and JavaScript.

## Folder structure

```text
github-portfolio/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── photos/
    │   ├── project-1.jpg
    │   ├── internship-1.jpg
    │   ├── certificate-day.jpg
    │   └── placeholder.svg
    ├── videos/
    │   └── demo.mp4
    └── certificates/
        ├── certificate-1.jpg
        ├── certificate-2.jpg
        └── certificate-3.pdf
```

## Before publishing

1. Replace the sample personal information in `index.html`.
2. Put your own photos inside `assets/photos/`.
3. Put your demo videos inside `assets/videos/`.
4. Put certificate images/PDFs inside `assets/certificates/`.
5. Update the project cards and contact links.

## Publish with GitHub Pages

1. Create a new GitHub repository, for example `portfolio`.
2. Upload all files and folders from this project.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. GitHub will provide your public portfolio URL.

For a cleaner URL, you can name the repository `<yourusername>.github.io`.

## Adding another certificate

Copy an existing certificate card in `index.html` and change:
- certificate title
- organization/date
- `data-src`
- image or PDF file

The certificate viewer automatically opens the image or PDF in a modal.
