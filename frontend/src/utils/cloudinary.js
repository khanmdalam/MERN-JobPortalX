/**
 * Resume files use Cloudinary `resource_type: raw`. Adding URL segments like
 * `fl_attachment:filename.pdf` often returns HTTP 400 for raw delivery.
 * Keep the plain `secure_url` from the API and use `<a download="...">`
 * for the suggested save filename.
 */
export const buildCloudinaryDownloadUrl = (fileUrl) => fileUrl || "";

/** Safe filename for the HTML `download` attribute (no path separators). */
export const sanitizeDownloadFileName = (name, fallback = "resume.pdf") => {
    const base = (name || fallback).replace(/[/\\]/g, "_").trim();
    return base || fallback;
};
