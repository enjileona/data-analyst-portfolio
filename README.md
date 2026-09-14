# Data Analyst Portfolio

A simple, creative, responsive portfolio website for Evangelina Angie.

## Files
- `index.html`
- `style.css`
- `script.js`
- `assets/`

## Publish with GitHub Pages
1. Create a new public repository, for example `data-analyst-portfolio`.
2. Upload all files from this folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**.
6. Save.
7. GitHub will show the live site URL after deployment.

## Before publishing
Update these items in `index.html`:
- LinkedIn URL
- GitHub URL
- Email address
- About Me copy
- Project details
- Replace the photo placeholder with your own image if desired

## Add your photo
Place a photo in `assets/profile.jpg`, then replace the `.portrait-placeholder` block in `index.html` with:

```html
<img src="assets/profile.jpg" alt="Evangelina Angie" class="profile-photo">
```

Then add this to `style.css`:

```css
.profile-photo{
  width:100%;
  height:100%;
  object-fit:cover;
  border-radius:160px 160px 16px 16px;
}
```
