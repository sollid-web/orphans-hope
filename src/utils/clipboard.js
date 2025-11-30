export function copyToClipboard(text, { onSuccess, onError } = {}) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
      .then(() => onSuccess && onSuccess())
      .catch(err => {
        console.error('Clipboard copy failed', err);
        fallbackCopy(text, onSuccess, onError);
      });
  } else {
    fallbackCopy(text, onSuccess, onError);
  }
}

function fallbackCopy(text, onSuccess, onError) {
  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.top = '-1000px';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    onSuccess && onSuccess();
  } catch (e) {
    console.error('Fallback clipboard failed', e);
    onError && onError(e);
  }
}
